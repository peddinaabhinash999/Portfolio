import * as React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type RevealProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Delay in milliseconds before the reveal transition starts. */
  delay?: number
  /** Direction the element animates in from. */
  from?: "up" | "down" | "left" | "right" | "none"
  as?: React.ElementType
}

/**
 * Wraps content and animates it into view on scroll. Composes with any
 * className and forwards remaining props to the rendered element.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as: Component = "div",
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Component
      ref={ref}
      data-reveal=""
      data-from={from}
      data-visible={isVisible ? "true" : "false"}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
