// utils/animations.ts
import { Transition, Variants } from "framer-motion";

/**
 * ============================================================================
 * SECTION 1: PARENT WRAPPERS & CORE SYSTEM ENGINE
 * ============================================================================
 */

export const staggerContainer = (staggerTime = 0.12, delayTime = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: delayTime,
    },
  },
});

export const getScrollProps = (
  onceSetting = false,
  viewportMargin = "-100px",
) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: onceSetting, margin: viewportMargin },
});

/**
 * ============================================================================
 * SECTION 2: HERO PRESETS (Ultra-Premium Reveals)
 * ============================================================================
 */

/**
 * Hero 3D Perspective Reveal
 * Rotates and flips items up along the X-axis like a premium folding dashboard.
 */
export const heroPerspectiveReveal: Variants = {
  hidden: { opacity: 0, y: 70, rotateX: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Custom Apple-style easeOutExposition curve
    },
  },
};

/**
 * Smooth Clip-Path Curtain Mask
 * Reveals large text blocks or imagery by sweeping open an invisible sliding window.
 * Requires layout container with Tailwind class 'overflow-hidden'.
 */
// utils/animations.ts

export const scrollClipPathReveal = (delay = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  // ADD THIS LINE: Tells Framer Motion to go back to "hidden" when it leaves the screen
  whileExit: "hidden",
  viewport: {
    once: false,
    margin: "-100px",
    // ADD THIS LINE: Ensures exit animations are tracked properly by the viewport wrapper
    amount: "some" as const,
  },
  variants: {
    hidden: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      y: 40,
      opacity: 0, // Added opacity fallback to guarantee it completely vanishes when off-screen
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1],
        delay,
      },
    },
  },
});

export const splitTextMask = (delay = 0): Variants => ({
  hidden: { y: "110%", opacity: 0 },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  },
});

/**
 * ============================================================================
 * SECTION 3: CARDS & GRIDS (Interactive Tactile Feedback)
 * ============================================================================
 */

export const scaleUpEntrance = (duration = 0.5): Variants => ({
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
});

/**
 * Premium Card 3D Tilt & Lift (Hover Profile Only)
 * Elevates cards dramatically on hover with subtle lighting/shadow tracking projections.
 * Tip: Use alongside a Tailwind transition utility for background borders!
 */
export const premiumCardHover: Variants = {
  initial: { y: 0, scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: "0px 20px 40px rgba(0, 127, 255, 0.08)", // Matches your brand blue
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
    },
  },
};

export const ambientGlowPulse = (minOpacity = 0.3, duration = 3): Variants => ({
  animate: {
    opacity: [minOpacity, 0.8, minOpacity],
    scale: [1, 1.015, 1],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

/**
 * ============================================================================
 * SECTION 4: BUTTON MICRO-INTERACTIONS
 * ============================================================================
 */

export const premiumButtonInteraction = (
  hoverScale = 1.02,
  tapScale = 0.96,
): Variants => ({
  initial: { scale: 1 },
  hover: {
    scale: hoverScale,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
      mass: 0.8,
    },
  },
  tap: {
    scale: tapScale,
    transition: { type: "spring" as const, stiffness: 500, damping: 15 },
  },
});

export const iconSlideRight = (distance = 6): Variants => ({
  initial: { x: 0 },
  hover: {
    x: distance,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
});

/**
 * Button Magnetic Text/Icon Swell
 * Forces text content to scale slightly and glow when wrapped inside active actions.
 */
export const buttonTextSwell: Variants = {
  initial: { letterSpacing: "0em", filter: "blur(0px)" },
  hover: {
    letterSpacing: "0.03em",
    transition: { type: "spring" as const, stiffness: 200, damping: 18 },
  },
};

/**
 * ============================================================================
 * SECTION 5: FOOTER (Clean, Grounded Text Reveals)
 * ============================================================================
 */

/**
 * Creative Split-Link Roll (Creative Agency Style)
 * Slides text upward on hover and brings back an identical character copy from below.
 * Layout tip: Requires a nested duplicate span structure.
 */
export const footerLinkRoll: Variants = {
  initial: { y: 0 },
  hover: {
    y: "-100%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Footer Legal Bottom Fade-In
 * Softly expands the spacing of copyright notices and links when scrolled into view.
 */
export const footerReveal: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

/**
 * ============================================================================
 * SECTION 6: BACKWARDS COMPATIBILITY FALLBACKS
 * ============================================================================
 */

export const fadeInUp = (
  yDistance = 15,
  duration = 0.5,
  ease: Transition ["ease"] = "easeOut" as const,
): Variants => ({
  hidden: { opacity: 0, y: yDistance },
  visible: { opacity: 1, y: 0, transition: { duration, ease } },
});

export const slideInDirection = (
  isReversed: boolean,
  distance = 40,
  duration = 0.7,
  delay = 0.2,
): Variants => ({
  hidden: { opacity: 0, x: isReversed ? -distance : distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeOut" as const, delay },
  },
});

export const floatingY = (yDistance = 6, durationTime = 4): Variants => ({
  animate: {
    y: [-yDistance, yDistance, -yDistance],
    transition: { duration: durationTime, repeat: Infinity, ease: "easeInOut" as const },
  },
});
