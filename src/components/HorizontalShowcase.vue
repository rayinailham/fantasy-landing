<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HORIZONTAL_PANELS, STUDIO } from '../data/studio'
import { PANEL_IMAGES, PANEL_OBJECT_POSITIONS, PANEL_TRANSFORMS, PANEL_OBJECT_FITS } from '../data/images'

const pinRef = ref(null)
const trackRef = ref(null)
const isMobile = ref(false)
let mm = null
let mql = null
function syncIsMobile(e) {
  isMobile.value = e.matches
}

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

  // Track viewport class so data-lenis-prevent only applies on mobile (where
  // the track is a native horizontal scroller). On desktop the track is
  // GSAP-driven, so Lenis must keep handling vertical wheel through it.
  mql = window.matchMedia('(max-width: 900px)')
  isMobile.value = mql.matches
  if (mql.addEventListener) mql.addEventListener('change', syncIsMobile)
  else mql.addListener(syncIsMobile)

  mm = gsap.matchMedia()

  mm.add('(min-width: 901px)', () => {
    const track = trackRef.value
    const totalScroll = () => track.scrollWidth - window.innerWidth

    const tween = gsap.to(track, {
      x: () => -totalScroll(),
      ease: 'none',
      force3D: true
    })

    const st = ScrollTrigger.create({
      trigger: pinRef.value,
      start: 'top top',
      end: () => '+=' + totalScroll(),
      pin: true,
      scrub: true,
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
  if (mql) {
    if (mql.removeEventListener) mql.removeEventListener('change', syncIsMobile)
    else mql.removeListener(syncIsMobile)
  }
})
</script>

<template>
  <section id="layanan" class="relative bg-cream-100 overflow-hidden">
    <!-- Header — scrolls naturally, NOT inside pinned area -->
    <div class="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-20">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">
        <div>
          <div class="reveal eyebrow">
            <span class="dot"></span>
            <span>Apa yang kami garap</span>
          </div>
          <h2 class="reveal h-display mt-4 sm:mt-5 text-[clamp(2.25rem,9vw,3.75rem)] lg:text-6xl">
            Banyak cerita,<br />
            <span class="h-editorial italic text-clay-600">satu studio kecil</span>
          </h2>
        </div>
        <div class="reveal hidden md:flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] uppercase text-clay-700/70 pb-2">
          <span>Scroll</span>
          <span class="w-10 h-px bg-clay-700/30"></span>
          <span>Geser samping</span>
        </div>
        <!-- Mobile hint -->
        <div class="reveal md:hidden flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] uppercase text-clay-700/70 mt-2">
          <span class="w-6 h-px bg-clay-700/30"></span>
          <span>Geser horizontal</span>
        </div>
      </div>
    </div>

    <!-- Desktop: pinned horizontal track. Mobile: native horizontal scroll-snap -->
    <div
      ref="pinRef"
      class="relative lg:h-[100dvh] lg:flex lg:items-center"
    >
      <div
        ref="trackRef"
        :data-lenis-prevent="isMobile ? '' : null"
        class="
          flex items-stretch lg:items-center
          gap-4 sm:gap-5 md:gap-10
          px-5 sm:px-6 md:px-12
          overflow-x-auto lg:overflow-visible
          snap-x snap-mandatory lg:snap-none
          no-scrollbar
          scroll-px-5 sm:scroll-px-6
          pb-6 lg:pb-0
        "
      >
        <!-- Spacer to push first panel from left (desktop only) -->
        <div class="hidden lg:block w-[8vw] shrink-0"></div>

        <article
          v-for="(p, i) in HORIZONTAL_PANELS"
          :key="p.kicker"
          class="
            shrink-0 snap-center lg:snap-none
            w-[86vw] sm:w-[68vw] md:w-[58vw] lg:w-[44vw] xl:w-[40vw]
            h-[68vh] sm:h-[72vh] md:h-[78vh]
            max-h-[640px] lg:max-h-none
          "
        >
          <div class="shell h-full">
            <div
              class="core relative h-full overflow-hidden"
              :style="{ background: tonePalette(p.tone).bg }"
            >
              <!-- BG image -->
              <img
                :src="PANEL_IMAGES[i]"
                :alt="p.title.replace('\n', ' ')"
                class="absolute inset-0 w-full h-full opacity-90"
                :style="{
                  objectFit: PANEL_OBJECT_FITS[i] || 'cover',
                  objectPosition: PANEL_OBJECT_POSITIONS[i] || 'center top',
                  transform: PANEL_TRANSFORMS[i] || undefined
                }"
                loading="lazy"
                decoding="async"
              />
              <!-- warm overlay -->
              <div class="absolute inset-0"
                style="background: linear-gradient(180deg, rgba(42,31,24,0.05) 30%, rgba(42,31,24,0.55) 100%);"></div>

              <!-- Content -->
              <div class="relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-10 text-cream-50">
                <div class="flex items-start justify-between gap-3">
                  <span class="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase">
                    {{ p.kicker }}
                  </span>
                  <span class="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase shrink-0">
                    0{{ i + 1 }} / {{ HORIZONTAL_PANELS.length }}
                  </span>
                </div>

                <div class="max-w-[28ch]">
                  <h3 class="h-display text-[clamp(2rem,8.5vw,3rem)] md:text-[4.6vw] lg:text-[3.4vw] xl:text-[3vw] leading-[0.95] whitespace-pre-line">{{ p.title }}</h3>
                  <p class="mt-4 sm:mt-5 text-cream-100/85 text-[13.5px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-[34ch]">
                    {{ p.body }}
                  </p>

                  <a
                    :href="STUDIO.whatsapp.primary.href"
                    target="_blank"
                    rel="noopener"
                    class="mt-5 sm:mt-7 inline-flex items-center gap-2 px-1 py-1 pr-1 pl-4 rounded-full bg-cream-50/15 border border-cream-50/25 backdrop-blur text-[12.5px] sm:text-[13px] hover:bg-cream-50/25 transition-colors duration-500"
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
        <div class="w-[5vw] lg:w-[10vw] shrink-0"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
</style>
