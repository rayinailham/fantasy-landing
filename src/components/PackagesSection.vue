<script setup>
import { ref } from 'vue'
import { PACKAGE_GROUPS, STUDIO, rupiah } from '../data/studio'

const active = ref(PACKAGE_GROUPS[0].id)
function setActive(id) {
  active.value = id
}
function group(id) {
  return PACKAGE_GROUPS.find((g) => g.id === id)
}
</script>

<template>
  <section id="paket" class="section-pad relative">
    <div class="max-w-[1400px] mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-end">
        <div class="lg:col-span-7">
          <div class="reveal eyebrow"><span class="dot"></span><span>Daftar paket</span></div>
          <h2 class="reveal h-display mt-6 text-5xl md:text-6xl lg:text-7xl">
            Pilih yang paling
            <span class="h-editorial italic text-clay-600">pas</span>
            buat momen kalian.
          </h2>
        </div>
        <div class="lg:col-span-5">
          <p class="reveal text-[15px] md:text-[16px] text-clay-700/85 leading-relaxed max-w-[42ch]">
            Tabel di bawah persis seperti yang dipajang di studio. Penambahan file Rp 3.000/file untuk paket yang menyertakan file edit. Ada yang ngeganjel? Tanya langsung lewat WhatsApp.
          </p>
        </div>
      </div>

      <!-- Tabs -->
      <div class="reveal mt-14 -mx-6 md:mx-0 overflow-x-auto no-scrollbar">
        <div class="flex md:flex-wrap gap-2 px-6 md:px-0">
          <button
            v-for="g in PACKAGE_GROUPS"
            :key="g.id"
            @click="setActive(g.id)"
            class="shrink-0 group inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            :class="active === g.id
              ? 'bg-ink-900 text-cream-50 border-ink-900'
              : 'bg-cream-50/70 text-ink-900 border-clay-700/15 hover:border-clay-700/40'"
          >
            <span class="text-[13px] font-medium tracking-tight">{{ g.title }}</span>
            <span
              class="inline-flex items-center justify-center w-6 h-6 rounded-full"
              :class="active === g.id ? 'bg-cream-50/15' : 'bg-clay-700/10'"
            >
              <span class="font-mono text-[10px]">{{ g.items.length }}</span>
            </span>
          </button>
        </div>
      </div>

      <!-- Active group content -->
      <div :key="active" class="reveal is-visible mt-12">
        <div class="flex items-baseline justify-between gap-4 mb-8">
          <div>
            <div class="font-mono text-[11px] tracking-[0.28em] uppercase text-clay-600/70">
              {{ group(active).id.replace('-', ' / ') }}
            </div>
            <h3 class="h-display text-3xl md:text-4xl mt-2">{{ group(active).title }}</h3>
            <p class="mt-2 text-[14.5px] text-clay-700/80 max-w-[60ch]">{{ group(active).summary }}</p>
          </div>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          <article
            v-for="(it, idx) in group(active).items"
            :key="it.name"
            class="shell h-full group"
          >
            <div class="core h-full p-6 md:p-7 flex flex-col">
              <div class="flex items-start justify-between">
                <div>
                  <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">
                    Paket
                  </div>
                  <h4 class="font-display font-semibold text-2xl tracking-tight mt-1.5">
                    {{ it.name }}
                  </h4>
                </div>
                <span class="font-mono text-[11px] tabular-nums text-clay-600/60">
                  · 0{{ idx + 1 }}
                </span>
              </div>

              <div class="mt-5 flex items-baseline gap-1.5">
                <span class="h-display text-3xl md:text-[34px] tracking-tightest">
                  {{ rupiah(it.price) }}
                </span>
              </div>

              <ul class="mt-6 space-y-2.5 text-[13.5px] text-clay-700/85">
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 w-1 h-1 rounded-full bg-ember-500/80 shrink-0"></span>
                  <span><span class="text-clay-600/70 font-mono text-[11px] uppercase tracking-[0.18em] mr-1">Durasi</span>{{ it.duration }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 w-1 h-1 rounded-full bg-ember-500/80 shrink-0"></span>
                  <span><span class="text-clay-600/70 font-mono text-[11px] uppercase tracking-[0.18em] mr-1">File</span>{{ it.files }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 w-1 h-1 rounded-full bg-ember-500/80 shrink-0"></span>
                  <span><span class="text-clay-600/70 font-mono text-[11px] uppercase tracking-[0.18em] mr-1">Cetak</span>{{ it.prints }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 w-1 h-1 rounded-full bg-ember-500/80 shrink-0"></span>
                  <span><span class="text-clay-600/70 font-mono text-[11px] uppercase tracking-[0.18em] mr-1">Kapasitas</span>{{ it.people }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 w-1 h-1 rounded-full bg-ember-500/80 shrink-0"></span>
                  <span><span class="text-clay-600/70 font-mono text-[11px] uppercase tracking-[0.18em] mr-1">Baju</span>{{ it.outfit }}</span>
                </li>
              </ul>

              <div class="mt-auto pt-7">
                <a
                  :href="STUDIO.whatsapp.primary.href + '?text=' + encodeURIComponent('Halo Fantasy, mau booking ' + group(active).title + ' — ' + it.name)"
                  target="_blank"
                  rel="noopener"
                  class="btn-soft w-full justify-between !pl-5"
                >
                  <span class="text-[13.5px]">Booking paket ini</span>
                  <span class="pip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { scrollbar-width: none; }
</style>
