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