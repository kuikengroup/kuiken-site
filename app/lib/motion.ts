export const MOTION = {
  staggerMs: 70,
  maxStaggerSteps: 6,
} as const;

export function staggerDelay(step = 0) {
  return Math.min(Math.max(step, 0), MOTION.maxStaggerSteps) * MOTION.staggerMs;
}
