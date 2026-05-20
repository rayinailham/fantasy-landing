import Lenis from 'lenis'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

/**
 * Boot Lenis. RAF is driven externally (gsap.ticker in App.vue) so
 * we never double-step. Tuned for cinematic but responsive feel:
 * - lerp 0.085 → silky without floaty lag
 * - smoothWheel true, syncTouch false → mobile keeps native scroll
 * - prevent on [data-lenis-prevent] subtrees (horizontal scrollers, modals)
 */
export function createLenis() {
  if (lenisInstance) return lenisInstance

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  lenisInstance = new Lenis({
    lerp: reduceMotion ? 1 : 0.085,
    smoothWheel: !reduceMotion,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    syncTouch: false,
    infinite: false,
    autoRaf: false,
    prevent: (node) =>
      node.hasAttribute && node.hasAttribute('data-lenis-prevent')
  })

  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}
