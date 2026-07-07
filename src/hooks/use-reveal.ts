import * as React from "react"

/**
 * Reveals an element when it scrolls into view. Returns a ref to attach and a
 * boolean indicating whether the element has entered the viewport. Respects the
 * user's reduced-motion preference by revealing immediately.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = React.useRef<T | null>(null)
  // Reveal immediately when motion is reduced or IntersectionObserver is
  // unavailable, so content is never stuck hidden.
  const [isVisible, setIsVisible] = React.useState(() => {
    if (typeof window === "undefined") {
      return true
    }

    if (typeof IntersectionObserver === "undefined") {
      return true
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  React.useEffect(() => {
    const node = ref.current
    if (!node || isVisible) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [options, isVisible])

  return { ref, isVisible }
}
