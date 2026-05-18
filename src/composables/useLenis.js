import Lenis from 'lenis'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function createLenis() {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    infinite: false
  })

  function raf(time) {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}
