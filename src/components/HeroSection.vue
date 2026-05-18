<script setup>
import { STUDIO } from '../data/studio'
</script>

<template>
  <section id="top" class="relative min-h-[100dvh] overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
    <!-- Background warm gradient & noise -->
    <div class="absolute inset-0 -z-10 bg-cream-50">
      <div class="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full opacity-60 blur-3xl"
        style="background: radial-gradient(closest-side, #EFE4D0, transparent 70%);"></div>
      <div class="absolute -bottom-32 right-[-10vw] w-[55vw] h-[55vw] rounded-full opacity-50 blur-3xl"
        style="background: radial-gradient(closest-side, #C8623E33, transparent 70%);"></div>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 items-end">
        <!-- LEFT: editorial type block -->
        <div class="lg:col-span-7 xl:col-span-7">
          <div class="reveal eyebrow mb-7">
            <span class="dot"></span>
            <span>Pelabuhanratu, Sukabumi · Sejak Keluarga</span>
          </div>

          <h1 class="reveal h-display text-[14vw] sm:text-[12vw] lg:text-[8.4vw] xl:text-[7.4vw] leading-[0.88]">
            <span class="block">Studio foto</span>
            <span class="block">
              yang dijaga
              <span class="h-editorial align-baseline text-clay-600 italic">keluarga</span>.
            </span>
          </h1>

          <p class="reveal mt-8 max-w-[52ch] text-[15px] md:text-[17px] text-clay-700/85 leading-relaxed">
            Fantasy Studio Foto bukan rantai franchise. Kami keluarga kecil di Pelabuhanratu yang ngerawat satu studio &mdash; dari arahan pose, lighting hangat, sampai bingkai yang kalian bawa pulang. Setiap sesi diperlakukan kayak nemenin keluarga sendiri foto bareng.
          </p>

          <div class="reveal mt-9 flex flex-wrap items-center gap-3">
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
          <div class="reveal mt-14 grid grid-cols-3 max-w-md divide-x divide-clay-700/10">
            <div class="pr-5">
              <div class="font-mono text-[11px] tracking-[0.28em] text-clay-600/70 uppercase">Sejak</div>
              <div class="font-display text-3xl mt-1.5">2014</div>
            </div>
            <div class="px-5">
              <div class="font-mono text-[11px] tracking-[0.28em] text-clay-600/70 uppercase">Keluarga</div>
              <div class="font-display text-3xl mt-1.5">3.2k+</div>
            </div>
            <div class="pl-5">
              <div class="font-mono text-[11px] tracking-[0.28em] text-clay-600/70 uppercase">Genre</div>
              <div class="font-display text-3xl mt-1.5">10</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: cascade of warm portrait cards -->
        <div class="lg:col-span-5 xl:col-span-5">
          <div class="relative h-[460px] sm:h-[520px] lg:h-[640px]">
            <!-- back card -->
            <div class="reveal absolute top-0 right-0 w-[68%] h-[78%] shell rotate-[3deg]">
              <div class="core warm-image h-full"
                :style="{ backgroundImage: `url('https://picsum.photos/seed/fantasy-warm-fam-1/1100/1400')`, backgroundSize: 'cover', backgroundPosition: 'center' }">
              </div>
            </div>
            <!-- front card -->
            <div class="reveal absolute bottom-0 left-0 w-[68%] h-[78%] shell -rotate-[2.5deg]">
              <div class="core warm-image h-full"
                :style="{ backgroundImage: `url('https://picsum.photos/seed/fantasy-prewed-warm-7/1100/1400')`, backgroundSize: 'cover', backgroundPosition: 'center' }">
              </div>
            </div>
            <!-- floating tag -->
            <div class="reveal absolute bottom-8 right-2 sm:right-6 shell !p-1 !rounded-full bg-cream-50/90 backdrop-blur">
              <div class="core !rounded-full px-4 py-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse"></span>
                <span class="font-mono text-[11px] tracking-[0.26em] text-clay-700/80 uppercase">Open today</span>
              </div>
            </div>

            <!-- floating mini-card top right -->
            <div class="reveal hidden sm:block absolute top-[40%] -right-2 lg:-right-6 shell">
              <div class="core p-4 max-w-[200px]">
                <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">Last booking</div>
                <div class="mt-2 text-[13px] leading-snug text-ink-900">
                  Keluarga <span class="font-medium">Hartanto</span> — sesi family 9 orang, frame 12R.
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
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 md:mt-24 flex items-center justify-between text-clay-700/70 font-mono text-[11px] tracking-[0.28em] uppercase">
      <span>· {{ STUDIO.address.split(',')[2]?.trim() || 'Pelabuhanratu' }}</span>
      <span>{{ new Date().getFullYear() }}</span>
    </div>
  </section>
</template>
