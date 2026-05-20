<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { createLenis, destroyLenis } from './composables/useLenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SiteNav from './components/SiteNav.vue'
import IntroScreen from './components/IntroScreen.vue'
import HeroSection from './components/HeroSection.vue'
import StorySection from './components/StorySection.vue'
import HorizontalShowcase from './components/HorizontalShowcase.vue'
import PackagesSection from './components/PackagesSection.vue'
import PrintSection from './components/PrintSection.vue'
import VisitSection from './components/VisitSection.vue'
import InfiniteGallery from './components/InfiniteGallery.vue'
import SiteFooter from './components/SiteFooter.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'
import ScrollProgress from './components/ScrollProgress.vue'

gsap.registerPlugin(ScrollTrigger)

const ready = ref(false)
const introDone = ref(false)
let lenisInstance = null
let observer = null
let rafCallback = null

function startSiteAnimations() {
  if (introDone.value) return
  introDone.value = true

  // Lenis smooth scroll boots only after intro.
  // Single RAF source: gsap.ticker drives Lenis (autoRaf disabled in createLenis).
  lenisInstance = createLenis()
  lenisInstance.on('scroll', ScrollTrigger.update)
  rafCallback = (time) => {
    lenisInstance.raf(time * 1000)
  }
  gsap.ticker.add(rafCallback)
  // Tolerate small frame hitches without snapping animations forward.
  gsap.ticker.lagSmoothing(500, 33)

  // Layout settled — make sure ScrollTrigger picks up real positions.
  requestAnimationFrame(() => ScrollTrigger.refresh())

  // Reveal observer — attach AFTER intro so hero reveals fire fresh
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  ready.value = true
}

onMounted(() => {
  // Lock scroll while intro plays — no Lenis yet
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
})

function onIntroDone() {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  startSiteAnimations()
}

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  ScrollTrigger.getAll().forEach((t) => t.kill())
  if (rafCallback) gsap.ticker.remove(rafCallback)
  if (lenisInstance) destroyLenis()
})
</script>

<template>
  <div class="grain min-h-[100dvh] bg-cream-50 text-ink-900">
    <IntroScreen v-if="!introDone" @done="onIntroDone" />
    <ScrollProgress />
    <SiteNav />
    <main>
      <HeroSection />
      <StorySection />
      <HorizontalShowcase />
      <PackagesSection />
      <PrintSection />
      <VisitSection />
      <InfiniteGallery />
    </main>
    <SiteFooter />
    <FloatingWhatsApp />
  </div>
</template>
