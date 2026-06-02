// utils/animations.ts

/**
 * 1. The Global Entry Parent Wrapper (Handles Staggering)
 * Use on a parent container to make child elements animate one after the other.
 */

export const staggerContainer = (
  staggerTime = 0.12,
  delayTime = 0.1
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: delayTime,
    },
  },
});

/**
 * 2. Cascading Text/Item Fade Up (Now Dynamic!)
 * Pass custom y-distance or durations whenever you need a unique look.
 */
export const fadeInUp = (
  yDistance = 15,
  duration = 0.5,
  ease: "easeOut" | "linear" | "easeIn" | "easeInOut" = "easeOut"
) => ({
  hidden: { opacity: 0, y: yDistance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease,
    },
  },
});

/**
 * 3. Dynamic Directional Slide
 * Perfect for alternating rows. Slides from left or right depending on row position.
 */
export const slideInDirection = (
  isReversed: boolean,
  distance = 40,
  duration = 0.7,
  delay = 0.2
) => ({
  hidden: {
    opacity: 0,
    x: isReversed ? -distance : distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut" as const,
      delay,
    },
  },
});

/**
 * 4. Infinite Floating Interaction
 * Great for adding life to Hero dashboards, graphics, or small decorative icons.
 */
export const floatingY = (yDistance = 6, durationTime = 4) => ({
  animate: {
    y: [-yDistance, yDistance, -yDistance],
    transition: {
      duration: durationTime,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

/**
 * 5. Global Viewport Settings Generator
 * Generates initial, whileInView, and viewport settings dynamically.
 * Change once parameter to 'true' if a specific section should only animate once.
 */

export const getScrollProps = (
  onceSetting = false,
  viewportMargin = "-100px"
) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: onceSetting, margin: viewportMargin },
});

/**
 * 6. Premium Magnetic Hover & Snappy Tap (Spring Micro-interaction)
 * Perfect for your action buttons ("Partner with us", "Join our Team").
 * Instead of rigid transitions, this mimics high-end tactile hardware.
 */
// utils/animations.ts

export const premiumButtonInteraction = (hoverScale = 1.02, tapScale = 0.96) => ({
  initial: { scale: 1 },
  hover: { 
    scale: hoverScale,
    transition: { type: "spring" as const, stiffness: 400, damping: 10, mass: 0.8 } 
  },
  tap: { 
    scale: tapScale,
    transition: { type: "spring" as const, stiffness: 500, damping: 15 } 
  }
});

/**
 * 7. Modern Split-Text Reveal (Letter Stacking)
 * Perfect for large hero titles or h2 subheaders. 
 * Masks the words and slides them up from behind an invisible curtain.
 */
export const splitTextMask = (delay = 0) => ({
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth cubic bezier curve
      delay
    }
  }
});

/**
 * 8. Staggered Grid Item Entrance (Scale + Fade)
 * Beautiful for service grids, benefit grids, or feature cards.
 * Combines a subtle slide up with an expanding physical scale.
 */
export const scaleUpEntrance = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      ease: [0.215, 0.610, 0.355, 1.000] // Out-cubic bezier for snappy arrivals
    }
  }
});

/**
 * 9. Magnetic Icon Push / Slide-Out Arrow
 * Animate secondary inline components inside wrappers on hover.
 * Put this on an arrow SVG inside a button to make it jump forward when hovered.
 */
export const iconSlideRight = (distance = 6) => ({
  initial: { x: 0 },
  hover: {
    x: distance,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
});

/**
 * 10. Border Pulse / Highlight Flare Loop
 * Adds an ambient glowing pulse loop effect to a specific card or item
 * without creating layout reflow shifting.
 */
export const ambientGlowPulse = (minOpacity = 0.3, duration = 3) => ({
  animate: {
    opacity: [minOpacity, 0.8, minOpacity],
    scale: [1, 1.015, 1],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}); 