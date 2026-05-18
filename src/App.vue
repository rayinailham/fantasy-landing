<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { createLenis, destroyLenis } from './composables/useLenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SiteNav from './components/SiteNav.vue'
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

onMounted(() => {
  const lenis = createLenis()

  // Bridge Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Reveal observer
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

  ready.value = true

  onBeforeUnmount(() => {
    io.disconnect()
    ScrollTrigger.getAll().forEach((t) => t.kill())
    destroyLenis()
  })
})
</script>

<template>
  <div class="grain min-h-[100dvh] bg-cream-50 text-ink-900">
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
