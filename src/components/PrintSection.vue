<script setup>
import { PRINT_SIZES, rupiah, STUDIO } from '../data/studio'
</script>

<template>
  <section id="cetak" class="section-pad relative bg-cream-100 border-y border-clay-700/10">
    <div class="max-w-[1400px] mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-end">
        <div class="lg:col-span-6">
          <div class="reveal eyebrow"><span class="dot"></span><span>Cetak & bingkai</span></div>
          <h2 class="reveal h-display mt-6 text-5xl md:text-6xl">
            Cetak dari 2R<br />
            sampai
            <span class="h-editorial italic text-clay-600">60×90</span>.
          </h2>
        </div>
        <div class="lg:col-span-5 lg:col-start-8">
          <p class="reveal text-[15px] md:text-[16px] text-clay-700/85 leading-relaxed max-w-[42ch]">
            Cetak satuan, plus bingkai single atau double. Bawa file kalian, atau pakai hasil dari sesi paket. Bingkai kayu hangat, ditingkatkan tahun ke tahun bareng tukang langganan kami.
          </p>
        </div>
      </div>

      <!-- Table -->
      <div class="reveal mt-14 shell">
        <div class="core overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="text-[11px] font-mono uppercase tracking-[0.24em] text-clay-600/70 border-b border-clay-700/10">
                  <th class="py-4 px-5 md:px-7 font-medium">Ukuran</th>
                  <th class="py-4 px-5 md:px-7 font-medium">Cetak</th>
                  <th class="py-4 px-5 md:px-7 font-medium">+ Frame Single</th>
                  <th class="py-4 px-5 md:px-7 font-medium">+ Frame Double</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(s, i) in PRINT_SIZES"
                  :key="s.size"
                  class="border-b border-clay-700/5 hover:bg-cream-50 transition-colors duration-300"
                  :class="i === PRINT_SIZES.length - 1 ? '!border-b-0' : ''"
                >
                  <td class="py-5 px-5 md:px-7">
                    <div class="flex items-center gap-3">
                      <span class="font-mono text-[10px] text-clay-600/60 tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
                      <span class="font-display font-semibold text-[17px] tracking-tight">{{ s.size }}</span>
                    </div>
                  </td>
                  <td class="py-5 px-5 md:px-7 tabular-nums text-[14px] text-ink-900">{{ rupiah(s.print) }}</td>
                  <td class="py-5 px-5 md:px-7 tabular-nums text-[14px] text-clay-700/85">{{ s.single ? rupiah(s.single) : '—' }}</td>
                  <td class="py-5 px-5 md:px-7 tabular-nums text-[14px] text-clay-700/85">{{ s.double ? rupiah(s.double) : '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="reveal mt-8 flex flex-wrap gap-3 items-center justify-between">
        <p class="font-mono text-[12px] tracking-[0.16em] uppercase text-clay-600/70">
          · Penambahan file Rp 3.000 / file untuk paket dengan file edit
        </p>
        <a :href="STUDIO.whatsapp.primary.href" target="_blank" rel="noopener" class="btn-warm">
          <span>Konsultasi cetak besar</span>
          <span class="pip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" /><path d="M8 7h9v9" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
