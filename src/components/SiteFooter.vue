<script setup>
import { STUDIO } from '../data/studio'

const year = new Date().getFullYear()
const links = [
  { label: 'Cerita', target: '#cerita' },
  { label: 'Layanan', target: '#layanan' },
  { label: 'Paket', target: '#paket' },
  { label: 'Cetak', target: '#cetak' },
  { label: 'Lokasi', target: '#lokasi' },
  { label: 'Galeri', target: '#galeri' }
]
</script>

<template>
  <footer class="relative bg-ink-950 text-cream-100 pt-24 md:pt-32 pb-10 md:pb-14 overflow-hidden">
    <div class="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl"
      style="background: radial-gradient(closest-side, #C8623E55, transparent 70%);"></div>

    <div class="max-w-[1400px] mx-auto px-6 md:px-10 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10">
        <!-- big call to action -->
        <div class="lg:col-span-7">
          <div class="eyebrow !bg-cream-50/5 !border-cream-50/15 !text-cream-100/70">
            <span class="dot"></span>
            <span>Sampai jumpa di studio</span>
          </div>
          <h3 class="h-display mt-6 text-5xl md:text-6xl lg:text-[88px] leading-[0.95]">
            Bawa
            <span class="h-editorial italic text-clay-300">orang yang kalian sayang</span>,<br />
            biar kami bingkaiin.
          </h3>
          <div class="mt-9 flex flex-wrap gap-3">
            <a :href="STUDIO.whatsapp.primary.href" target="_blank" rel="noopener" class="btn-warm !bg-cream-50 !text-ink-900">
              <span>WhatsApp utama</span>
              <span class="pip !bg-ink-900/10">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>
            <a :href="STUDIO.instagram.href" target="_blank" rel="noopener" class="btn-soft !bg-cream-50/5 !text-cream-100 !border-cream-50/15">
              <span>{{ STUDIO.instagram.handle }}</span>
              <span class="pip !bg-cream-50/10">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-12">
          <div>
            <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-cream-100/40">
              Sitemap
            </div>
            <ul class="mt-4 space-y-2.5">
              <li v-for="l in links" :key="l.target">
                <a :href="l.target" class="text-[14.5px] text-cream-100/85 hover:text-cream-50 transition-colors">
                  {{ l.label }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-cream-100/40">
              Hubungi
            </div>
            <ul class="mt-4 space-y-2.5">
              <li>
                <a :href="STUDIO.whatsapp.primary.href" target="_blank" rel="noopener"
                   class="text-[14.5px] text-cream-100/85 hover:text-cream-50 transition-colors">
                  {{ STUDIO.whatsapp.primary.label }}
                </a>
              </li>
              <li>
                <a :href="STUDIO.whatsapp.alt.href" target="_blank" rel="noopener"
                   class="text-[14.5px] text-cream-100/85 hover:text-cream-50 transition-colors">
                  {{ STUDIO.whatsapp.alt.label }}
                </a>
              </li>
              <li>
                <a :href="STUDIO.instagram.href" target="_blank" rel="noopener"
                   class="text-[14.5px] text-cream-100/85 hover:text-cream-50 transition-colors">
                  {{ STUDIO.instagram.handle }}
                </a>
              </li>
              <li>
                <a :href="STUDIO.maps" target="_blank" rel="noopener"
                   class="text-[14.5px] text-cream-100/85 hover:text-cream-50 transition-colors">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] tracking-[0.18em] uppercase text-cream-100/45">
        <span>© {{ year }} {{ STUDIO.name }}. Semua kenangan dijaga di sini.</span>
        <span class="text-cream-100/40">Pelabuhanratu · Sukabumi · Jawa Barat</span>
      </div>
    </div>
  </footer>
</template>
