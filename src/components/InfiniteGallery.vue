<script setup>
import { computed } from 'vue'
import { GALLERY_SEEDS } from '../data/studio'

const rowA = computed(() => [...GALLERY_SEEDS, ...GALLERY_SEEDS])
const rowB = computed(() => [...GALLERY_SEEDS.slice().reverse(), ...GALLERY_SEEDS.slice().reverse()])

function dims(orient) {
  if (orient === 'portrait') return { w: 320, h: 420 }
  if (orient === 'square') return { w: 360, h: 360 }
  return { w: 480, h: 320 }
}
</script>

<template>
  <section id="galeri" class="relative pt-24 md:pt-32 pb-24 md:pb-36 overflow-hidden bg-cream-100">
    <div class="max-w-[1400px] mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-end mb-14 md:mb-20">
        <div class="lg:col-span-7">
          <div class="reveal eyebrow"><span class="dot"></span><span>Arsip kecil</span></div>
          <h2 class="reveal h-display mt-6 text-5xl md:text-6xl lg:text-7xl">
            Sedikit cuplikan dari<br />
            <span class="h-editorial italic text-clay-600">ratusan keluarga</span>
            yang pernah mampir.
          </h2>
        </div>
        <div class="lg:col-span-4 lg:col-start-9">
          <p class="reveal text-[15px] text-clay-700/85 leading-relaxed max-w-[40ch]">
            Galeri ini bergulir terus &mdash; tinggalkan dia berjalan sebentar, mungkin kalian nemu vibe yang pas buat sesi kalian sendiri.
          </p>
        </div>
      </div>
    </div>

    <!-- Row A — left to right -->
    <div class="relative">
      <div class="marquee-track" style="--dur: 80s">
        <figure
          v-for="(g, i) in rowA"
          :key="'a-' + i + '-' + g.seed"
          class="shrink-0 mr-5 md:mr-7"
        >
          <div class="shell !p-1.5 !rounded-3xl">
            <div
              class="core !rounded-[calc(1.5rem-0.4rem)] warm-image"
              :style="{
                width: dims(g.orient).w + 'px',
                height: dims(g.orient).h + 'px',
                backgroundImage: `url('https://picsum.photos/seed/${g.seed}/900/1100')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }"
            ></div>
          </div>
        </figure>
      </div>

      <!-- Edge fades -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48"
        style="background: linear-gradient(90deg, #F8F2E7 0%, transparent 100%);"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48"
        style="background: linear-gradient(-90deg, #F8F2E7 0%, transparent 100%);"></div>
    </div>

    <!-- Row B — right to left, smaller, slower -->
    <div class="relative mt-6 md:mt-8">
      <div class="marquee-track reverse" style="--dur: 110s">
        <figure
          v-for="(g, i) in rowB"
          :key="'b-' + i + '-' + g.seed"
          class="shrink-0 mr-5 md:mr-7"
        >
          <div class="shell !p-1.5 !rounded-3xl">
            <div
              class="core !rounded-[calc(1.5rem-0.4rem)] warm-image"
              :style="{
                width: (dims(g.orient).w * 0.85) + 'px',
                height: (dims(g.orient).h * 0.85) + 'px',
                backgroundImage: `url('https://picsum.photos/seed/${g.seed}-b/900/1100')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }"
            ></div>
          </div>
        </figure>
      </div>

      <div class="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48"
        style="background: linear-gradient(90deg, #F8F2E7 0%, transparent 100%);"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48"
        style="background: linear-gradient(-90deg, #F8F2E7 0%, transparent 100%);"></div>
    </div>
  </section>
</template>
