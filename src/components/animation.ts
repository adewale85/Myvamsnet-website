// utils/animations.ts

// 1. The Global Entry Parent Wrapper (Handles Staggering)
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

// 2. Standard Cascading Text/Item Fade Up
export const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// 3. Dynamic Directional Slide (Perfect for your alternating rows!)
export const slideInDirection = (isReversed: boolean) => ({
  hidden: { opacity: 0, x: isReversed ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
});

// 4. Infinite Floating Interaction (For Hero Dashboards or Icons)
export const floatingY = (yDistance = 6, durationTime = 4) => ({
  animate: {
    y: [-yDistance, yDistance, -yDistance],
    transition: {
      duration: durationTime,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

// 5. Global Viewport Settings (So you don't have to retype it everywhere)
export const infiniteScrollProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-100px" },
};