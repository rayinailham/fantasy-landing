<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { STUDIO } from '../data/studio'

const visible = ref(false)
const expanded = ref(false)

function onScroll() {
  visible.value = window.scrollY > 300
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
  <div
    v-show="visible"
    class="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3"
  >
    <transition
      enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      leave-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-95"
      leave-to-class="opacity-0 translate-y-3 scale-95"
    >
      <div
        v-if="expanded"
        class="shell !p-1 !rounded-3xl bg-cream-50/95 backdrop-blur-xl"
      >
        <div class="core p-2.5 w-[min(86vw,260px)]">
          <div class="px-2 pt-1 pb-2 font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">
            Pilih nomor
          </div>
          <a
            :href="STUDIO.whatsapp.primary.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-cream-100/80 transition-colors"
          >
            <span class="w-8 h-8 rounded-full bg-ink-900 text-cream-50 flex items-center justify-center text-[11px] font-display">F1</span>
            <div class="flex-1">
              <div class="text-[10px] font-mono uppercase tracking-[0.22em] text-clay-600/70">WhatsApp 1</div>
              <div class="text-[13px] font-medium text-ink-900 mt-0.5">{{ STUDIO.whatsapp.primary.label }}</div>
            </div>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" /><path d="M8 7h9v9" />
            </svg>
          </a>
          <a
            :href="STUDIO.whatsapp.alt.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-cream-100/80 transition-colors"
          >
            <span class="w-8 h-8 rounded-full bg-ink-900 text-cream-50 flex items-center justify-center text-[11px] font-display">F2</span>
            <div class="flex-1">
              <div class="text-[10px] font-mono uppercase tracking-[0.22em] text-clay-600/70">WhatsApp 2</div>
              <div class="text-[13px] font-medium text-ink-900 mt-0.5">{{ STUDIO.whatsapp.alt.label }}</div>
            </div>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" /><path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </transition>

    <button
      @click="expanded = !expanded"
      :aria-label="expanded ? 'Tutup menu kontak' : 'Buka menu kontak WhatsApp'"
      class="group relative inline-flex items-center justify-center"
    >
      <span class="absolute inset-0 rounded-full bg-ember-500/30 blur-md scale-125 opacity-70 transition-opacity duration-500 group-hover:opacity-100"></span>
      <span
        class="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink-900 text-cream-50 shadow-soft-lift active:scale-[0.96] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        <transition
          enter-active-class="transition-transform duration-500"
          leave-active-class="transition-transform duration-300"
          mode="out-in"
        >
          <svg
            v-if="!expanded"
            key="wa"
            width="22" height="22" viewBox="0 0 24 24" fill="currentColor"
          >
            <path d="M20.5 3.5A11.7 11.7 0 0 0 3.6 19.7L2 22l2.4-1.6a11.7 11.7 0 0 0 16.1-16.9ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3a8 8 0 1 1 6.2 3.1Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4l1.3.5c.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/>
          </svg>
          <svg
            v-else
            key="x"
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"
          >
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </transition>
      </span>
      <span class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-sage-400 ring-2 ring-cream-50">
        <span class="absolute inset-0 rounded-full bg-sage-400 animate-ping opacity-60"></span>
      </span>
    </button>
  </div>
</template>
