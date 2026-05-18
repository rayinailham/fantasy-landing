<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getLenis } from '../composables/useLenis'

const progress = ref(0)
const visible = ref(false)
const dragging = ref(false)
let railEl = null
const railRef = ref(null)
let raf = 0

function update() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  if (max <= 0) {
    progress.value = 0
    visible.value = false
    return
  }
  visible.value = true
  progress.value = Math.min(1, Math.max(0, window.scrollY / max))
}

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(update)
}

function onDown(e) {
  dragging.value = true
  jumpTo(e)
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}
function onMove(e) {
  if (!dragging.value) return
  jumpTo(e)
}
function onUp() {
  dragging.value = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', onUp)
}
function jumpTo(e) {
  if (!railEl) return
  const rect = railEl.getBoundingClientRect()
  const ratio = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
  const max = document.documentElement.scrollHeight - window.innerHeight
  const target = ratio * max
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(target, { immediate: true })
  } else {
    window.scrollTo(0, target)
  }
}

onMounted(() => {
  railEl = railRef.value
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', update)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    v-show="visible"
    class="progress-rail fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 select-none"
  >
    <span class="text-[10px] font-mono tracking-[0.32em] text-clay-600/70 uppercase rotate-180" style="writing-mode: vertical-rl">
      Scroll
    </span>
    <div
      ref="railRef"
      @mousedown="onDown"
      class="relative w-[3px] h-[40vh] rounded-full bg-clay-700/10 cursor-pointer"
    >
      <div
        class="absolute left-1/2 -translate-x-1/2 w-[7px] rounded-full bg-ink-800 transition-[height] duration-200 ease-out"
        :style="{
          top: `calc(${progress * 100}% - 14px)`,
          height: '28px',
          transform: 'translateX(-50%)'
        }"
      ></div>
    </div>
    <div class="font-mono text-[10px] tabular-nums text-clay-700/70">
      {{ Math.round(progress * 100).toString().padStart(2, '0') }}
    </div>
  </div>
</template>
