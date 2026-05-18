<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HORIZONTAL_PANELS, STUDIO } from '../data/studio'

const pinRef = ref(null)
const trackRef = ref(null)
let mm = null

function tonePalette(tone) {
  switch (tone) {
    case 'clay':
      return { bg: 'linear-gradient(135deg, #EFE4D0, #C9A179)', accent: '#6E4528' }
    case 'sage':
      return { bg: 'linear-gradient(135deg, #DDE3D5, #8FA08A)', accent: '#3F4F3A' }
    case 'ember':
      return { bg: 'linear-gradient(135deg, #F1D2C0, #C8623E)', accent: '#83361B' }
    default:
      return { bg: 'linear-gradient(135deg, #FDFBF7, #EFE4D0)', accent: '#4F2F1A' }
  }
}

onMounted(() => {
  if (!pinRef.value || !trackRef.value) return
  mm = gsap.matchMedia()

  mm.add('(min-width: 901px)', () => {
    const track = trackRef.value
    const totalScroll = () => track.scrollWidth - window.innerWidth

    const tween = gsap.to(track, {
      x: () => -totalScroll(),
      ease: 'none'
    })

    const st = ScrollTrigger.create({
      trigger: pinRef.value,
      start: 'top top',
      end: () => '+=' + totalScroll(),
      pin: true,
      scrub: 0.6,
      animation: tween,
      anticipatePin: 1,
      invalidateOnRefresh: true
    })

    return () => {
      st.kill()
      tween.kill()
    }
  })
})

onBeforeUnmount(() => {
  if (mm) mm.revert()
})
</script>

<template>
  <section id="layanan" class="relative bg-cream-100 overflow-hidden">
    <!-- Header — scrolls naturally, NOT inside pinned area -->
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12 md:pb-20">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="reveal eyebrow">
            <span class="dot"></span>
            <span>Apa yang kami garap</span>
          </div>
          <h2 class="reveal h-display mt-5 text-4xl md:text-5xl lg:text-6xl">
            Lima cerita,<br />
            <span class="h-editorial italic text-clay-600">satu studio kecil</span>.
          </h2>
        </div>
        <div class="reveal hidden md:flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] uppercase text-clay-700/70 pb-2">
          <span>Scroll</span>
          <span class="w-10 h-px bg-clay-700/30"></span>
          <span>Geser samping</span>
        </div>
      </div>
    </div>

    <!-- The pinned horizontal track — only this section gets pinned -->
    <div ref="pinRef" class="relative h-[100dvh] flex items-center">
      <div
        ref="trackRef"
        class="flex items-center gap-6 md:gap-10 px-6 md:px-12"
      >
        <!-- Spacer to push first panel from left -->
        <div class="hidden lg:block w-[8vw] shrink-0"></div>

        <article
          v-for="(p, i) in HORIZONTAL_PANELS"
          :key="p.kicker"
          class="shrink-0 w-[88vw] sm:w-[68vw] md:w-[58vw] lg:w-[44vw] xl:w-[40vw] h-[72vh] md:h-[78vh]"
        >
          <div class="shell h-full">
            <div
              class="core relative h-full overflow-hidden"
              :style="{ background: tonePalette(p.tone).bg }"
            >
              <!-- BG image -->
              <div
                class="absolute inset-0 opacity-90"
                :style="{
                  backgroundImage: `url('https://picsum.photos/seed/${p.seed}/1400/1700')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }"
              ></div>
              <!-- warm overlay -->
              <div class="absolute inset-0"
                style="background: linear-gradient(180deg, rgba(42,31,24,0.05) 30%, rgba(42,31,24,0.55) 100%);"></div>

              <!-- Content -->
              <div class="relative h-full flex flex-col justify-between p-7 md:p-10 text-cream-50">
                <div class="flex items-start justify-between">
                  <span class="font-mono text-[11px] tracking-[0.28em] uppercase">
                    {{ p.kicker }}
                  </span>
                  <span class="font-mono text-[11px] tracking-[0.28em] uppercase">
                    0{{ i + 1 }} / {{ HORIZONTAL_PANELS.length }}
                  </span>
                </div>

                <div class="max-w-[28ch]">
                  <h3 class="h-display text-[10vw] sm:text-[6vw] md:text-[4.6vw] lg:text-[3.4vw] xl:text-[3vw] leading-[0.95] whitespace-pre-line">{{ p.title }}</h3>
                  <p class="mt-5 text-cream-100/85 text-[14px] md:text-[15px] leading-relaxed max-w-[34ch]">
                    {{ p.body }}
                  </p>

                  <a
                    :href="STUDIO.whatsapp.primary.href"
                    target="_blank"
                    rel="noopener"
                    class="mt-7 inline-flex items-center gap-2 px-1 py-1 pr-1 pl-4 rounded-full bg-cream-50/15 border border-cream-50/25 backdrop-blur text-[13px] hover:bg-cream-50/25 transition-colors duration-500"
                  >
                    <span>Tanya paket {{ p.kicker.split('—')[1].trim().toLowerCase() }}</span>
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cream-50 text-ink-900">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- End spacer -->
        <div class="w-[10vw] shrink-0"></div>
      </div>
    </div>
  </section>
</template>
