import { useEffect, useRef } from "react"

import "./AnimatedBackground.css"

/**
 * Constellation-style particle network: soft glowing nodes drift across a
 * black canvas, linked by faint lines, and connect to the cursor as it moves.
 * Tuned to feel calm and professional rather than busy.
 */
const config = {
  count: 110,
  // Mostly warm amber with a few cyan accents to match the theme.
  colors: ["#ff6a00", "#ff6a00", "#ff8c2a", "#ffa94d", "#22d3ee"],
  size: { min: 0.8, max: 2.4 },
  speed: 0.35,
  linkDistance: 132,
  linkColor: "#ff7a1a",
  linkOpacity: 0.16,
  cursorDistance: 170,
  cursorOpacity: 0.5,
  maxParticles: 320,
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
}

const rand = (min: number, max: number) => Math.random() * (max - min) + min

function hexToRgb(hex: string) {
  const int = parseInt(hex.replace("#", ""), 16)
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 }
}

/** Cached radial-gradient glow sprite so we don't build gradients per dot. */
function makeGlowSprite(color: string) {
  const size = 48
  const sprite = document.createElement("canvas")
  sprite.width = size
  sprite.height = size
  const g = sprite.getContext("2d")
  if (!g) {
    return sprite
  }
  const { r, g: gr, b } = hexToRgb(color)
  const grad = g.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  )
  grad.addColorStop(0, `rgba(${r}, ${gr}, ${b}, 1)`)
  grad.addColorStop(0.35, `rgba(${r}, ${gr}, ${b}, 0.5)`)
  grad.addColorStop(1, `rgba(${r}, ${gr}, ${b}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return sprite
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const link = hexToRgb(config.linkColor)
    const sprites = new Map(
      config.colors.map((c) => [c, makeGlowSprite(c)] as const)
    )

    let width = 0
    let height = 0
    let frame = 0
    let particles: Particle[] = []
    const mouse = { x: 0, y: 0, active: false }

    const makeParticle = (x?: number, y?: number): Particle => {
      const angle = Math.random() * Math.PI * 2
      const speed = config.speed * rand(0.5, 1.4)
      return {
        x: x ?? Math.random() * width,
        y: y ?? Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: rand(config.size.min, config.size.max),
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
      }
    }

    const targetCount = () =>
      Math.max(
        30,
        Math.min(config.count, Math.round((width * height) / 15000))
      )

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth || window.innerWidth
      height = canvas.clientHeight || window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const build = () => {
      particles = Array.from({ length: targetCount() }, () => makeParticle())
    }

    const step = () => {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x <= p.r || p.x >= width - p.r) {
          p.vx *= -1
          p.x = Math.max(p.r, Math.min(width - p.r, p.x))
        }
        if (p.y <= p.r || p.y >= height - p.r) {
          p.vy *= -1
          p.y = Math.max(p.r, Math.min(height - p.r, p.y))
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = "lighter"

      // Links between nearby particles.
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < config.linkDistance) {
            const alpha = config.linkOpacity * (1 - dist / config.linkDistance)
            ctx.strokeStyle = `rgba(${link.r}, ${link.g}, ${link.b}, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Links from the cursor to nearby particles.
      if (mouse.active) {
        for (const p of particles) {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y)
          if (dist < config.cursorDistance) {
            const alpha =
              config.cursorOpacity * (1 - dist / config.cursorDistance)
            ctx.strokeStyle = `rgba(${link.r}, ${link.g}, ${link.b}, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      // Glowing nodes.
      for (const p of particles) {
        const sprite = sprites.get(p.color)
        if (sprite) {
          const s = p.r * 4
          ctx.globalAlpha = 0.9
          ctx.drawImage(sprite, p.x - s, p.y - s, s * 2, s * 2)
        }
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = "source-over"
    }

    const loop = () => {
      step()
      draw()
      frame = requestAnimationFrame(loop)
    }

    resize()
    build()
    if (reduceMotion) {
      draw()
    } else {
      loop()
    }

    const handleResize = () => {
      resize()
      const target = targetCount()
      while (particles.length < target) {
        particles.push(makeParticle())
      }
      particles.length = Math.min(particles.length, target)
      if (reduceMotion) {
        draw()
      }
    }
    const handleMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      mouse.active = true
    }
    const handleLeave = () => {
      mouse.active = false
    }
    const handleClick = (event: MouseEvent) => {
      for (let i = 0; i < 4; i++) {
        if (particles.length >= config.maxParticles) {
          break
        }
        particles.push(makeParticle(event.clientX, event.clientY))
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseout", handleLeave)
    window.addEventListener("click", handleClick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseout", handleLeave)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-bg" aria-hidden="true" />
}
