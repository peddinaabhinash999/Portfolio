import * as React from "react"

import { cn } from "@/lib/utils"

type TiltProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Maximum tilt in degrees on each axis. */
  max?: number
}

/**
 * Wraps content and tilts it in 3D toward the cursor, resetting on leave.
 * Honors the user's reduced-motion preference by staying flat.
 */
export function Tilt({ className, children, max = 9, ...props }: TiltProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reducedRef = React.useRef(false)

  React.useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  }, [])

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || reducedRef.current) {
      return
    }
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`)
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) {
      return
    }
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("tilt-3d", className)}
      {...props}
    >
      {children}
    </div>
  )
}
