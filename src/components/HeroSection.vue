<script setup>
import { STUDIO } from '../data/studio'
import { HERO_IMAGES } from '../data/images'
</script>

<template>
  <section id="top" class="relative min-h-[100dvh] overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
    <!-- Background warm gradient & noise -->
    <div class="absolute inset-0 -z-10 bg-cream-50">
      <div class="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full opacity-60 blur-3xl"
        style="background: radial-gradient(closest-side, #EFE4D0, transparent 70%);"></div>
      <div class="absolute -bottom-32 right-[-10vw] w-[55vw] h-[55vw] rounded-full opacity-50 blur-3xl"
        style="background: radial-gradient(closest-side, #C8623E33, transparent 70%);"></div>
    </div>

    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-y-12 lg:gap-x-10 items-end">
        <!-- LEFT: editorial type block -->
        <div class="lg:col-span-7 xl:col-span-7">
          <div class="reveal eyebrow mb-5 sm:mb-7">
            <span class="dot"></span>
            <span>Pelabuhanratu, Sukabumi · Sejak 2014</span>
          </div>

          <h1 class="reveal h-display text-[clamp(2.5rem,11vw,4.5rem)] sm:text-[10vw] lg:text-[7vw] xl:text-[6.2vw] leading-[0.9] sm:leading-[0.88]">
            <span class="block">Momen cepat berlalu.</span>
            <span class="block">
              Foto
              <span class="h-editorial align-baseline text-clay-600 italic">enggak</span>.
            </span>
          </h1>

          <p class="reveal mt-6 sm:mt-8 max-w-[52ch] text-[14.5px] sm:text-[15px] md:text-[17px] text-clay-700/85 leading-relaxed">
            Di sini momen kalian dijaga. Diarahin pelan-pelan, dicetak hari itu juga, dibingkai buat dipajang bertahun-tahun.
          </p>

          <div class="reveal mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
            <a :href="STUDIO.whatsapp.primary.href" target="_blank" rel="noopener" class="btn-warm">
              <span>Booking via WhatsApp</span>
              <span class="pip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>
            <a href="#paket" class="btn-soft">
              <span>Lihat paket</span>
              <span class="pip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14" /><path d="m5 12 7 7 7-7" />
                </svg>
              </span>
            </a>
          </div>

          <!-- Mini-stats row -->
          <div class="reveal mt-10 sm:mt-14 grid grid-cols-3 max-w-md divide-x divide-clay-700/10">
            <div class="pr-3 sm:pr-5">
              <div class="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] text-clay-600/70 uppercase">Sejak</div>
              <div class="font-display text-2xl sm:text-3xl mt-1.5">2014</div>
            </div>
            <div class="px-3 sm:px-5">
              <div class="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] text-clay-600/70 uppercase">Keluarga</div>
              <div class="font-display text-2xl sm:text-3xl mt-1.5">3.2k+</div>
            </div>
            <div class="pl-3 sm:pl-5">
              <div class="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] text-clay-600/70 uppercase">Genre</div>
              <div class="font-display text-2xl sm:text-3xl mt-1.5">10</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: editorial stack — front landscape dominan, back portrait offset kanan-atas
             back  = 3-saudari.JPG       3648x5472 → aspect 2/3
             front = Keluarga-berlima.JPG 5472x3648 → aspect 3/2 -->
        <div class="lg:col-span-5 xl:col-span-5">
          <div class="relative h-[520px] sm:h-[720px] lg:h-[780px]">
            <!-- back card (portrait) — kanan-atas, lebih besar, rotasi halus -->
            <div class="reveal absolute top-0 right-[-3%] sm:right-[-4%] w-[64%] sm:w-[60%] lg:w-[58%] aspect-[2/3] shell rotate-[1.5deg] z-10">
              <div class="core warm-image h-full overflow-hidden">
                <img
                  :src="HERO_IMAGES.back"
                  alt="Sesi foto bestie tone hangat di Fantasy Studio Foto Pelabuhanratu"
                  class="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </div>
            </div>
            <!-- front card (landscape) — dominan, tengah-bawah, overlap ringan -->
            <div class="reveal absolute left-0 right-0 bottom-[80px] sm:bottom-[110px] lg:bottom-[130px] w-full aspect-[3/2] shell -rotate-[1.5deg] z-20">
              <div class="core warm-image h-full overflow-hidden">
                <img
                  :src="HERO_IMAGES.front"
                  alt="Foto keluarga lima orang di studio foto Pelabuhanratu, Sukabumi"
                  class="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </div>
            </div>
            <!-- floating tag — di pojok kanan-bawah front card -->
            <div class="reveal absolute bottom-[60px] sm:bottom-[88px] lg:bottom-[108px] right-3 sm:right-5 shell !p-1 !rounded-full bg-cream-50/90 backdrop-blur z-30">
              <div class="core !rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse"></span>
                <span class="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.26em] text-clay-700/80 uppercase">Open today</span>
              </div>
            </div>

            <!-- floating mini-card di zona overlap antara back & front (sm+ only) — geser jauh ke kiri biar tidak nutupi muka -->
            <div class="reveal hidden sm:block absolute top-[27%] left-[8%] lg:left-[2%] shell z-30">
              <div class="core p-4 max-w-[200px]">
                <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">Last booking</div>
                <div class="mt-2 text-[13px] leading-snug text-ink-900">
                  Sesi <span class="font-medium">keluarga bahagia</span> &mdash; family 5 orang, frame 12R.
                </div>
                <div class="mt-3 flex -space-x-1.5">
                  <span v-for="(_, i) in 4" :key="i" class="w-6 h-6 rounded-full ring-2 ring-white"
                    :style="{ background: `linear-gradient(135deg, hsl(${20 + i * 10} 40% ${65 - i * 5}%), hsl(${30 + i * 10} 50% ${50 - i * 5}%))` }">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom marker -->
    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-24 flex items-center justify-between text-clay-700/70 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.28em] uppercase">
      <span>· {{ STUDIO.address.split(',')[2]?.trim() || 'Pelabuhanratu' }}</span>
      <span>{{ new Date().getFullYear() }}</span>
    </div>
  </section>
</template>
