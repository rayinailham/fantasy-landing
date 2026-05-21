<script setup>
import { STUDIO } from '../data/studio'
</script>

<template>
  <section id="lokasi" class="section-pad relative">
    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 sm:gap-y-10 lg:gap-x-10">
        <!-- LEFT: address + hours -->
        <div class="lg:col-span-5">
          <div class="reveal eyebrow"><span class="dot"></span><span>Mampir ke studio</span></div>
          <h2 class="reveal h-display mt-5 sm:mt-6 text-[clamp(2.25rem,9vw,3.75rem)] md:text-6xl">
            Datang kapan aja.<br />
            <span class="h-editorial italic text-clay-600">Ngobrol</span> dulu juga boleh.
          </h2>
          <p class="reveal mt-6 sm:mt-7 text-[14.5px] sm:text-[15px] md:text-[16px] text-clay-700/85 leading-relaxed max-w-[44ch]">
            Studio kami ada di Pelabuhanratu &mdash; daerah Batu Sapi. Kalau bingung paketnya, mampir aja sambil ngeliat-liat hasil cetakan dan contoh frame.
          </p>

          <div class="reveal mt-8 sm:mt-10 shell">
            <div class="core p-6 sm:p-7 md:p-8">
              <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">
                Alamat
              </div>
              <p class="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink-900 max-w-[40ch]">
                {{ STUDIO.address }}
              </p>
              <a
                :href="STUDIO.maps"
                target="_blank"
                rel="noopener"
                class="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-ember-500 hover:text-ember-600 transition-colors"
              >
                <span>Buka di Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Hours -->
          <div class="reveal mt-5 sm:mt-6 shell">
            <div class="core p-6 sm:p-7 md:p-8">
              <div class="flex items-center justify-between gap-3">
                <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">
                  Jam buka
                </div>
                <span class="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-sage-500">
                  <span class="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse"></span>
                  Buka sekarang
                </span>
              </div>
              <ul class="mt-5 divide-y divide-clay-700/10">
                <li
                  v-for="h in STUDIO.hours"
                  :key="h.day"
                  class="flex items-center justify-between gap-3 py-3 sm:py-3.5"
                >
                  <span class="text-[14px] sm:text-[14.5px] text-ink-900">{{ h.day }}</span>
                  <span class="font-mono tabular-nums text-[13px] sm:text-[13.5px] text-clay-700/85 text-right">{{ h.time }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact pills -->
          <div class="reveal mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              :href="STUDIO.whatsapp.primary.href"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-3 sm:gap-4 p-4 pl-4 sm:pl-5 rounded-2xl bg-cream-100/70 border border-clay-700/10 hover:bg-cream-50 transition-all duration-500"
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink-900 text-cream-50 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 3.5A11.7 11.7 0 0 0 3.6 19.7L2 22l2.4-1.6a11.7 11.7 0 0 0 16.1-16.9ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3a8 8 0 1 1 6.2 3.1Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4l1.3.5c.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/>
                </svg>
              </span>
              <div class="flex-1 min-w-0">
                <div class="font-mono text-[10px] tracking-[0.24em] uppercase text-clay-600/70">WhatsApp 1</div>
                <div class="text-[14px] sm:text-[14.5px] font-medium text-ink-900 mt-0.5 truncate">{{ STUDIO.whatsapp.primary.label }}</div>
              </div>
              <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-clay-700/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>
            <a
              :href="STUDIO.whatsapp.alt.href"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-3 sm:gap-4 p-4 pl-4 sm:pl-5 rounded-2xl bg-cream-100/70 border border-clay-700/10 hover:bg-cream-50 transition-all duration-500"
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink-900 text-cream-50 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 3.5A11.7 11.7 0 0 0 3.6 19.7L2 22l2.4-1.6a11.7 11.7 0 0 0 16.1-16.9ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3a8 8 0 1 1 6.2 3.1Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4l1.3.5c.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/>
                </svg>
              </span>
              <div class="flex-1 min-w-0">
                <div class="font-mono text-[10px] tracking-[0.24em] uppercase text-clay-600/70">WhatsApp 2</div>
                <div class="text-[14px] sm:text-[14.5px] font-medium text-ink-900 mt-0.5 truncate">{{ STUDIO.whatsapp.alt.label }}</div>
              </div>
              <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-clay-700/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <!-- RIGHT: map / studio image -->
        <div class="lg:col-span-7">
          <div class="reveal shell h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]">
            <div class="core relative h-full overflow-hidden">
              <!-- styled "map-like" background using gradient + lines -->
              <div class="absolute inset-0 bg-cream-50">
                <div class="absolute inset-0 opacity-[0.18]"
                  style="background-image: linear-gradient(0deg, rgba(78,47,26,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(78,47,26,0.4) 1px, transparent 1px); background-size: 56px 56px;">
                </div>
                <div class="absolute -top-1/3 -left-1/3 w-[80%] h-[80%] rounded-full opacity-50 blur-3xl"
                  style="background: radial-gradient(closest-side, #EFE4D0, transparent 70%);"></div>
                <div class="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full opacity-50 blur-3xl"
                  style="background: radial-gradient(closest-side, #C8623E33, transparent 70%);"></div>

                <!-- A diagonal "road" line -->
                <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M-5 70 Q 30 60 50 50 T 105 25"
                    stroke="rgba(78,47,26,0.25)" stroke-width="0.4" fill="none" stroke-dasharray="0.6 0.8" />
                  <path d="M-5 90 Q 40 80 60 65 T 105 50"
                    stroke="rgba(78,47,26,0.15)" stroke-width="0.3" fill="none" />
                </svg>

                <!-- pin -->
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div class="relative">
                    <span class="absolute inset-0 rounded-full bg-ember-500/30 blur-md scale-150 animate-pulse"></span>
                    <span class="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-ink-900 text-cream-50 ring-4 ring-cream-50/80">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s7-7.58 7-13a7 7 0 0 0-14 0c0 5.42 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    </span>
                  </div>
                  <div class="mt-3 px-3 py-1.5 rounded-full bg-cream-50/95 border border-clay-700/10 backdrop-blur font-mono text-[10px] tracking-[0.24em] uppercase text-ink-900">
                    Fantasy Studio
                  </div>
                </div>
              </div>

              <!-- Floating info card -->
              <div class="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 md:left-7 md:right-auto md:bottom-7 shell !p-1 md:max-w-md">
                <div class="core p-4 sm:p-5 md:p-6">
                  <div class="font-mono text-[10px] tracking-[0.28em] uppercase text-clay-600/70">Petunjuk arah</div>
                  <p class="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-ink-900 max-w-[42ch]">
                    Sebelah ruko parkir Tamansari, di area Batu Sapi. Patokan: jalan masuk dari arah pelabuhan, ada papan nama berwarna hangat.
                  </p>
                  <a :href="STUDIO.maps" target="_blank" rel="noopener" class="mt-3 sm:mt-4 inline-flex items-center gap-2 text-[13px] font-medium">
                    <span>Petunjuk lengkap</span>
                    <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-clay-700/10">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
