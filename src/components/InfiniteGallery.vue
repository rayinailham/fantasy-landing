<script setup>
import { computed } from 'vue'
import { GALLERY_IMAGES } from '../data/images'

// Split full set into 3 staggered slices so each row shows different images
const all = GALLERY_IMAGES
const third = Math.ceil(all.length / 3)

const tilesA = computed(() => all.slice(0, third))
const tilesB = computed(() => all.slice(third, third * 2).reverse())
const tilesC = computed(() => all.slice(third * 2))

const rowA = computed(() => [...tilesA.value, ...tilesA.value])
const rowB = computed(() => [...tilesB.value, ...tilesB.value])
const rowC = computed(() => [...tilesC.value, ...tilesC.value])
</script>

<template>
  <section id="galeri" class="relative pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-36 overflow-hidden bg-cream-100">
    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-7 sm:gap-y-8 lg:gap-x-10 items-end mb-10 sm:mb-14 md:mb-20">
        <div class="lg:col-span-7">
          <div class="reveal eyebrow"><span class="dot"></span><span>Arsip kecil</span></div>
          <h2 class="reveal h-display mt-5 sm:mt-6 text-[clamp(2.25rem,9vw,3.75rem)] md:text-6xl lg:text-7xl">
            <span class="h-editorial italic text-clay-600">Ratusan keluarga</span>
            udah bagi momennya bareng kami.
          </h2>
        </div>
        <div class="lg:col-span-4 lg:col-start-9">
          <p class="reveal text-[14.5px] sm:text-[15px] text-clay-700/85 leading-relaxed max-w-[40ch]">
            Galerinya jalan terus &mdash; dibiarin aja sebentar. Mungkin nemu tone atau gestur yang pas buat sesi kalian nanti.
          </p>
        </div>
      </div>
    </div>

    <!-- Row A — left to right -->
    <div class="relative">
      <div class="marquee-track" style="--dur: 140s">
        <figure
          v-for="(g, i) in rowA"
          :key="'a-' + i + '-' + g.name"
          class="shrink-0 mr-4 sm:mr-5 md:mr-7"
        >
          <div class="shell !p-1 sm:!p-1.5 !rounded-3xl">
            <div
              class="core !rounded-[calc(1.5rem-0.4rem)] warm-image gallery-tile relative overflow-hidden"
            >
              <img
                :src="g.url"
                :alt="g.name"
                class="absolute inset-0 w-full h-full object-cover gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </figure>
      </div>

      <!-- Edge fades -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(90deg, #F8F2E7 0%, transparent 100%);"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(-90deg, #F8F2E7 0%, transparent 100%);"></div>
    </div>

    <!-- Row B — right to left -->
    <div class="relative mt-5 sm:mt-6 md:mt-8">
      <div class="marquee-track reverse" style="--dur: 170s">
        <figure
          v-for="(g, i) in rowB"
          :key="'b-' + i + '-' + g.name"
          class="shrink-0 mr-4 sm:mr-5 md:mr-7"
        >
          <div class="shell !p-1 sm:!p-1.5 !rounded-3xl">
            <div
              class="core !rounded-[calc(1.5rem-0.4rem)] warm-image gallery-tile relative overflow-hidden"
            >
              <img
                :src="g.url"
                :alt="g.name"
                class="absolute inset-0 w-full h-full object-cover gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </figure>
      </div>

      <div class="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(90deg, #F8F2E7 0%, transparent 100%);"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(-90deg, #F8F2E7 0%, transparent 100%);"></div>
    </div>

    <!-- Row C — left to right, slowest -->
    <div class="relative mt-5 sm:mt-6 md:mt-8">
      <div class="marquee-track" style="--dur: 200s">
        <figure
          v-for="(g, i) in rowC"
          :key="'c-' + i + '-' + g.name"
          class="shrink-0 mr-4 sm:mr-5 md:mr-7"
        >
          <div class="shell !p-1 sm:!p-1.5 !rounded-3xl">
            <div
              class="core !rounded-[calc(1.5rem-0.4rem)] warm-image gallery-tile relative overflow-hidden"
            >
              <img
                :src="g.url"
                :alt="g.name"
                class="absolute inset-0 w-full h-full object-cover gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </figure>
      </div>

      <div class="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(90deg, #F8F2E7 0%, transparent 100%);"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 md:w-48"
        style="background: linear-gradient(-90deg, #F8F2E7 0%, transparent 100%);"></div>
    </div>
  </section>
</template>

<style scoped>
/* Uniform portrait tiles across both rows. Container fixed; image fills via object-cover. */
.gallery-tile {
  width: 200px;
  height: 280px;
}
@media (min-width: 640px) {
  .gallery-tile {
    width: 260px;
    height: 360px;
  }
}
@media (min-width: 1024px) {
  .gallery-tile {
    width: 320px;
    height: 440px;
  }
}

/* Crop bias upward — heads safe, feet may clip */
.gallery-img {
  object-position: center 30%;
}
</style>
