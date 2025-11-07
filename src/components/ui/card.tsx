
import * as React from "react"
import { cn } from "@/lib/utils"

// Base Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// Card Header
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// Card Title
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// Card Description
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// ✅ New: Card Image
const CardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("w-full h-48 object-cover", className)} // default style
    {...props}
  />
))
CardImage.displayName = "CardImage"

// Card Content
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// Card Footer
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }

// import React from 'react';

// // The main Card container.
// // `flex flex-col` establishes a flex context for child elements.
// // `h-full` ensures that in a grid, all cards in a row stretch to the height of the tallest card.
// const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div
//       ref={ref}
//       className={`relative flex flex-col h-full rounded-lg border border-gray-700 bg-gray-800 text-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50 ${className}`}
//       {...props}
//     />
//   )
// );
// Card.displayName = 'Card';

// // The CardHeader component.
// const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
//   )
// );
// CardHeader.displayName = 'CardHeader';

// // The CardTitle component.
// const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
//   ({ className, ...props }, ref) => (
//     <h3
//       ref={ref}
//       className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
//       {...props}
//     />
//   )
// );
// CardTitle.displayName = 'CardTitle';

// // The CardDescription component.
// const CardDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p ref={ref} className={`text-sm text-black-100 ${className}`} {...props} />
// ));
// CardDescription.displayName = 'CardDescription';

// // The CardContent component.
// // `flex flex-col` creates a new flex context for its children.
// // `flex-grow` is the key property that makes this component expand to fill the available vertical space left by the CardHeader.
// const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={`p-6 pt-0 flex flex-col flex-grow ${className}`} {...props} />
//   )
// );
// CardContent.displayName = 'CardContent';

// export { Card, CardHeader, CardContent, CardTitle, CardDescription };