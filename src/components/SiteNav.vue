<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { STUDIO } from '../data/studio'
import { getLenis } from '../composables/useLenis'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'Cerita', target: '#cerita' },
  { label: 'Layanan', target: '#layanan' },
  { label: 'Paket', target: '#paket' },
  { label: 'Cetak', target: '#cetak' },
  { label: 'Lokasi', target: '#lokasi' }
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}
function go(target) {
  open.value = false
  const el = document.querySelector(target)
  if (!el) return
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(el, { offset: -40 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
    <div
      class="pointer-events-auto flex items-center gap-1 sm:gap-2 px-2 py-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
      :class="[
        scrolled
          ? 'bg-cream-50/75 backdrop-blur-xl border border-clay-700/10 shadow-soft-lift'
          : 'bg-cream-50/40 backdrop-blur-md border border-clay-700/5'
      ]"
    >
      <a href="#top" class="flex items-center gap-2 pl-3 pr-2">
        <span class="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink-900 text-cream-50 font-display text-[12px] tracking-tight">
          F
          <span class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-ember-500 ring-2 ring-cream-50"></span>
        </span>
        <span class="hidden sm:flex flex-col leading-none">
          <span class="font-display font-semibold text-[13px] tracking-tight">Fantasy</span>
          <span class="font-mono text-[9px] tracking-[0.24em] uppercase text-clay-600/70 mt-0.5">Studio Foto</span>
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-0.5 mx-1">
        <button
          v-for="l in links"
          :key="l.target"
          @click="go(l.target)"
          class="relative px-3 py-2 text-[13px] font-medium text-ink-900/80 hover:text-ink-900 transition-colors group"
        >
          <span>{{ l.label }}</span>
          <span class="absolute left-3 right-3 -bottom-0.5 h-px bg-ink-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"></span>
        </button>
      </nav>

      <a
        :href="STUDIO.whatsapp.primary.href"
        target="_blank"
        rel="noopener"
        class="btn-warm !py-2 !pl-4"
      >
        <span class="text-[13px]">Booking</span>
        <span class="pip">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17 17 7" /><path d="M8 7h9v9" />
          </svg>
        </span>
      </a>

      <button
        @click="open = !open"
        class="md:hidden relative w-10 h-10 rounded-full bg-cream-100/80 border border-clay-700/10 flex items-center justify-center"
        aria-label="Menu"
      >
        <span class="absolute left-1/2 -translate-x-1/2 w-4 h-px bg-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          :class="open ? 'rotate-45 translate-y-0' : '-translate-y-1'"></span>
        <span class="absolute left-1/2 -translate-x-1/2 w-4 h-px bg-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          :class="open ? '-rotate-45 translate-y-0' : 'translate-y-1'"></span>
      </button>
    </div>

    <!-- Mobile menu overlay -->
    <transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-40 bg-cream-50/90 backdrop-blur-2xl flex flex-col justify-center px-6 pointer-events-auto md:hidden"
      >
        <ul class="space-y-4">
          <li v-for="(l, i) in links" :key="l.target" :style="{ transitionDelay: `${i * 60}ms` }" class="reveal is-visible">
            <button
              @click="go(l.target)"
              class="text-left block w-full py-2 font-display font-semibold text-4xl tracking-tightest"
            >
              {{ l.label }}
              <span class="font-mono text-xs tracking-[0.32em] text-clay-600/70 ml-3 align-middle">0{{ i + 1 }}</span>
            </button>
          </li>
        </ul>
        <a :href="STUDIO.whatsapp.primary.href" target="_blank" rel="noopener" class="btn-warm mt-10 w-fit">
          <span>Hubungi via WhatsApp</span>
          <span class="pip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" /><path d="M8 7h9v9" />
            </svg>
          </span>
        </a>
      </div>
    </transition>
  </header>
</template>
