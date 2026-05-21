<script setup>
import { STUDIO } from '../data/studio'

const points = [
  { k: '01', t: 'Diarahin pelan-pelan', d: 'Gak buru-buru. Kami arahin pose, lighting, sampai posisi anak yang paling kecil.' },
  { k: '02', t: 'Cetak di tempat', d: 'Hasil bisa dilihat dan dicetak hari itu juga. Bingkai langsung jadi.' },
  { k: '03', t: 'Harga apa adanya', d: 'Tanpa biaya tersembunyi. Penambahan file Rp 3.000/file, jelas di muka.' },
  { k: '04', t: 'Bisa anak-anak ramai', d: 'Tim kami terbiasa nge-handle keluarga besar dan anak-anak yang aktif.' }
]
</script>

<template>
  <section id="cerita" class="section-pad relative">
    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10">
      <!-- Eyebrow + title -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 sm:gap-y-10 lg:gap-x-10">
        <div class="lg:col-span-5">
          <div class="reveal eyebrow">
            <span class="dot"></span>
            <span>Tentang kami</span>
          </div>
          <h2 class="reveal h-display mt-5 sm:mt-6 text-[clamp(2rem,7.5vw,3.25rem)] md:text-5xl lg:text-6xl">
            Mereka bilang cuma foto. Tapi tiap kali
            <span class="h-editorial text-clay-600 italic">lewat ruang tamu</span>,
            mereka berhenti sebentar.
          </h2>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 lg:pt-12">
          <p class="reveal text-[14.5px] sm:text-[15px] md:text-[17px] text-clay-700/85 leading-relaxed max-w-[55ch]">
            Gak buru-buru. Kami arahin satu-satu, bisa cetak hari itu juga, bingkai langsung jadi. Yang kalian bawa pulang bukan cuma file &mdash; tapi kenangan yang bisa dipajang.
          </p>
        </div>
      </div>

      <!-- 4 points grid asymmetric -->
      <div class="reveal mt-14 sm:mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-clay-700/10 border-y border-clay-700/10">
        <div
          v-for="p in points"
          :key="p.k"
          class="py-7 sm:py-8 md:py-10 sm:px-6 md:px-7 first:sm:pl-0 last:sm:pr-0 group"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[11px] tracking-[0.28em] text-clay-600/70 uppercase">{{ p.k }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-ember-500/80 transition-transform duration-700 group-hover:scale-150"></span>
          </div>
          <h3 class="font-display font-semibold text-xl sm:text-2xl md:text-[26px] tracking-tight mt-4 sm:mt-5 leading-tight">
            {{ p.t }}
          </h3>
          <p class="mt-2.5 sm:mt-3 text-[14px] sm:text-[14.5px] text-clay-700/80 leading-relaxed max-w-[34ch]">{{ p.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
