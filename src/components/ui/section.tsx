import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("py-16 lg:py-24", className)}
    {...props}
  />
))
Section.displayName = "Section"

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center mb-14 pb-10 border-b-4 border-double border-primary", className)}
    {...props}
  />
))
SectionHeader.displayName = "SectionHeader"

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-serif text-4xl lg:text-6xl text-primary mb-5",
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = "SectionTitle"

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-serif italic text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed",
      className
    )}
    {...props}
  />
))
SectionDescription.displayName = "SectionDescription"

export { Section, SectionHeader, SectionTitle, SectionDescription }