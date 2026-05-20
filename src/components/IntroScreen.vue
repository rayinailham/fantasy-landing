<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done'])

const root = ref(null)
const curtainTop = ref(null)
const curtainBottom = ref(null)
const camera = ref(null)
const cameraInner = ref(null)
const standLeft = ref(null)
const standRight = ref(null)
const softLeft = ref(null)
const softRight = ref(null)
const flashCore = ref(null)
const flashRing = ref(null)
const flashShard = ref(null)
const cekrekLabel = ref(null)

let ctx = null

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (reduce) {
    if (root.value) root.value.style.display = 'none'
    emit('done')
    return
  }

  ctx = gsap.context(() => {
    // initial state — set before first paint
    gsap.set(camera.value, {
      yPercent: -200,
      rotation: -16,
      scale: 0.82,
      autoAlpha: 0,
      transformOrigin: '50% 50%',
    })
    gsap.set(cameraInner.value, {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: '50% 92%',
    })
    gsap.set([standLeft.value, standRight.value], {
      yPercent: 110,
      autoAlpha: 0,
      transformOrigin: '50% 100%',
    })
    gsap.set([softLeft.value, softRight.value], { opacity: 0.35 })
    gsap.set(flashCore.value, { autoAlpha: 0, scale: 0.2 })
    gsap.set(flashRing.value, { autoAlpha: 0, scale: 0.4 })
    gsap.set(flashShard.value, { autoAlpha: 0, scale: 0.7, rotation: -6 })
    gsap.set(cekrekLabel.value, { autoAlpha: 0, y: 14, scale: 0.9 })
    gsap.set(curtainTop.value, { yPercent: 0 })
    gsap.set(curtainBottom.value, { yPercent: 0 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        if (root.value) root.value.style.pointerEvents = 'none'
        emit('done')
      },
    })

    // ---- DROP — single accelerating fall, no premature rotation ----
    tl.addLabel('drop', 0)
      .to(camera.value, { autoAlpha: 1, duration: 0.18, ease: 'none' }, 'drop+=0.1')
      .to(
        camera.value,
        {
          yPercent: 0,
          rotation: 8,
          scale: 1,
          duration: 0.78,
          ease: 'power2.in', // gravity accel into impact
        },
        'drop+=0.12'
      )

    // ---- IMPACT — squash + tilt LEFT ----
    tl.addLabel('impact1')
      .to(
        cameraInner.value,
        { scaleY: 0.86, scaleX: 1.1, duration: 0.08, ease: 'power3.out' },
        'impact1'
      )
      .to(
        camera.value,
        { rotation: -10, duration: 0.18, ease: 'power2.out' },
        'impact1'
      )
      // recoil up
      .to(
        cameraInner.value,
        { scaleY: 1.06, scaleX: 0.95, duration: 0.22, ease: 'sine.out' },
        'impact1+=0.08'
      )
      .to(
        camera.value,
        { yPercent: -38, duration: 0.46, ease: 'sine.out' },
        'impact1+=0.08'
      )

    // ---- BOUNCE 2 — fall, impact, tilt RIGHT ----
    tl.addLabel('impact2', '>')
      .to(
        camera.value,
        { yPercent: 0, duration: 0.42, ease: 'power2.in' },
        'impact2-=0.42'
      )
      .to(
        cameraInner.value,
        { scaleY: 0.92, scaleX: 1.06, duration: 0.07, ease: 'power3.out' },
        'impact2'
      )
      .to(
        camera.value,
        { rotation: 7, duration: 0.16, ease: 'power2.out' },
        'impact2'
      )
      .to(
        cameraInner.value,
        { scaleY: 1.03, scaleX: 0.98, duration: 0.18, ease: 'sine.out' },
        'impact2+=0.07'
      )
      .to(
        camera.value,
        { yPercent: -20, duration: 0.36, ease: 'sine.out' },
        'impact2+=0.07'
      )

    // ---- BOUNCE 3 — final settle, straight ----
    tl.addLabel('settle', '>')
      .to(
        camera.value,
        { yPercent: 0, duration: 0.32, ease: 'power2.in' },
        'settle-=0.32'
      )
      .to(
        cameraInner.value,
        { scaleY: 0.96, scaleX: 1.03, duration: 0.06, ease: 'power3.out' },
        'settle'
      )
      .to(
        cameraInner.value,
        { scaleY: 1, scaleX: 1, duration: 0.45, ease: 'elastic.out(1, 0.5)' },
        'settle+=0.06'
      )
      .to(
        camera.value,
        { rotation: 0, duration: 0.55, ease: 'back.out(1.4)' },
        'settle'
      )

    // ---- STANDS — rise from below behind camera ----
    tl.to(
      standLeft.value,
      { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'back.out(1.2)' },
      'settle+=0.1'
    ).to(
      standRight.value,
      { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'back.out(1.2)' },
      '<+0.1'
    )

    // ---- ANTICIPATION — crouch before cekrek ----
    tl.to(
      cameraInner.value,
      { scale: 0.94, duration: 0.12, ease: 'power2.in' },
      '>+0.05'
    )

    // ---- CEKREK — flash spike (warm yellow, contained around lens) ----
    tl.add('cekrek')
      .to(
        cameraInner.value,
        { scale: 1.04, duration: 0.05, ease: 'power4.out' },
        'cekrek'
      )
      .to(
        flashCore.value,
        { autoAlpha: 1, scale: 1, duration: 0.06, ease: 'power4.out' },
        'cekrek'
      )
      .to(
        flashRing.value,
        { autoAlpha: 0.85, scale: 1, duration: 0.18, ease: 'power3.out' },
        'cekrek'
      )
      .to(
        flashShard.value,
        { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.14, ease: 'power3.out' },
        'cekrek'
      )
      .to(
        cekrekLabel.value,
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.18, ease: 'back.out(2)' },
        'cekrek+=0.02'
      )
      // tiny camera kickback
      .to(
        camera.value,
        { y: -10, rotation: -1.5, duration: 0.1, ease: 'power3.out' },
        'cekrek'
      )
      .to(
        camera.value,
        { y: 0, rotation: 0, duration: 0.32, ease: 'elastic.out(1, 0.6)' },
        'cekrek+=0.1'
      )

    // ---- FLASH DECAY ----
    tl.to(
      flashCore.value,
      { autoAlpha: 0, scale: 1.6, duration: 0.42, ease: 'power2.out' },
      'cekrek+=0.08'
    )
      .to(
        flashRing.value,
        { autoAlpha: 0, scale: 1.8, duration: 0.55, ease: 'power2.out' },
        'cekrek+=0.1'
      )
      .to(
        flashShard.value,
        { autoAlpha: 0, duration: 0.4, ease: 'power2.out' },
        'cekrek+=0.18'
      )
      .to(
        cekrekLabel.value,
        { autoAlpha: 0, y: -10, duration: 0.4, ease: 'power2.in' },
        'cekrek+=0.32'
      )

    // ---- CURTAINS — part wave (lembaran membuka) ----
    tl.add('open', 'cekrek+=0.18')
      .to(
        curtainTop.value,
        { yPercent: -100, duration: 1.05, ease: 'power3.inOut' },
        'open'
      )
      .to(
        curtainBottom.value,
        { yPercent: 100, duration: 1.05, ease: 'power3.inOut' },
        'open+=0.05'
      )
      // camera rides bottom curtain down + fades
      .to(
        camera.value,
        {
          yPercent: 60,
          scale: 0.86,
          autoAlpha: 0,
          duration: 0.85,
          ease: 'power2.in',
        },
        'open+=0.05'
      )
      // stands sink with bottom curtain
      .to(
        [standLeft.value, standRight.value],
        {
          yPercent: 80,
          autoAlpha: 0,
          duration: 0.85,
          ease: 'power2.in',
          stagger: 0.04,
        },
        'open+=0.02'
      )
  }, root.value)
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <div
    ref="root"
    class="intro-root"
    aria-hidden="true"
  >
    <!-- top curtain -->
    <div ref="curtainTop" class="curtain curtain-top"></div>
    <!-- bottom curtain -->
    <div ref="curtainBottom" class="curtain curtain-bottom"></div>

    <!-- flash stands (behind camera) -->
    <div ref="standLeft" class="stand stand-left">
      <svg viewBox="0 0 80 220" width="100%" height="100%" aria-hidden="true">
        <!-- softbox -->
        <rect x="6" y="4" width="68" height="48" rx="4" fill="#FDFBF7" stroke="#4F2F1A" stroke-width="1.4" />
        <rect x="10" y="8" width="60" height="40" rx="2" fill="#F8F2E7" />
        <line x1="40" y1="8" x2="40" y2="48" stroke="#D4B892" stroke-width="0.8" opacity="0.5" />
        <line x1="10" y1="28" x2="70" y2="28" stroke="#D4B892" stroke-width="0.8" opacity="0.5" />
        <!-- soft glow plate -->
        <ellipse ref="softLeft" cx="40" cy="28" rx="22" ry="14" fill="#FFE07A" opacity="0.35" />
        <!-- swivel head -->
        <rect x="34" y="50" width="12" height="10" rx="2" fill="#2A1F18" />
        <!-- pole -->
        <rect x="38" y="58" width="4" height="120" fill="#2A1F18" />
        <!-- tripod legs -->
        <line x1="40" y1="178" x2="14" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <line x1="40" y1="178" x2="40" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <line x1="40" y1="178" x2="66" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <!-- hub -->
        <circle cx="40" cy="178" r="4" fill="#1A1310" />
      </svg>
    </div>

    <div ref="standRight" class="stand stand-right">
      <svg viewBox="0 0 80 220" width="100%" height="100%" aria-hidden="true">
        <rect x="6" y="4" width="68" height="48" rx="4" fill="#FDFBF7" stroke="#4F2F1A" stroke-width="1.4" />
        <rect x="10" y="8" width="60" height="40" rx="2" fill="#F8F2E7" />
        <line x1="40" y1="8" x2="40" y2="48" stroke="#D4B892" stroke-width="0.8" opacity="0.5" />
        <line x1="10" y1="28" x2="70" y2="28" stroke="#D4B892" stroke-width="0.8" opacity="0.5" />
        <ellipse ref="softRight" cx="40" cy="28" rx="22" ry="14" fill="#FFE07A" opacity="0.35" />
        <rect x="34" y="50" width="12" height="10" rx="2" fill="#2A1F18" />
        <rect x="38" y="58" width="4" height="120" fill="#2A1F18" />
        <line x1="40" y1="178" x2="14" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <line x1="40" y1="178" x2="40" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <line x1="40" y1="178" x2="66" y2="216" stroke="#2A1F18" stroke-width="3" stroke-linecap="round" />
        <circle cx="40" cy="178" r="4" fill="#1A1310" />
      </svg>
    </div>

    <!-- camera -->
    <div ref="camera" class="camera">
      <div ref="cameraInner" class="camera-inner">
        <svg
          viewBox="0 0 220 150"
          width="100%"
          height="100%"
          fill="none"
          stroke="#2A1F18"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <!-- flash bulb -->
          <rect x="62" y="6" width="58" height="14" rx="2" fill="#FDFBF7" />
          <rect x="74" y="10" width="34" height="6" rx="1" fill="#F8F2E7" stroke="none" />
          <!-- viewfinder hump -->
          <path d="M132 20 H170 V32 H132 Z" fill="#FDFBF7" />
          <!-- body -->
          <rect x="14" y="32" width="192" height="104" rx="10" fill="#FDFBF7" />
          <!-- grip -->
          <rect x="14" y="32" width="38" height="104" rx="10" fill="#F0E3CD" stroke="none" />
          <line x1="22" y1="50" x2="44" y2="50" stroke="#6E4528" stroke-width="1.2" />
          <line x1="22" y1="60" x2="44" y2="60" stroke="#6E4528" stroke-width="1.2" />
          <line x1="22" y1="70" x2="44" y2="70" stroke="#6E4528" stroke-width="1.2" />
          <!-- lens outer -->
          <circle cx="118" cy="84" r="40" fill="#F8F2E7" />
          <circle cx="118" cy="84" r="32" fill="#2A1F18" />
          <circle cx="118" cy="84" r="24" fill="#0F0A07" />
          <circle cx="118" cy="84" r="14" fill="#1A1310" stroke="#3a2a20" />
          <!-- lens highlight -->
          <ellipse cx="108" cy="74" rx="6" ry="4" fill="#FDFBF7" opacity="0.55" />
          <!-- shutter -->
          <circle cx="186" cy="42" r="5" fill="#A84A2A" stroke="#83361B" />
          <!-- nameplate -->
          <rect
            x="60"
            y="44"
            width="48"
            height="6"
            rx="1.5"
            fill="#6E4528"
            stroke="none"
          />
          <!-- strap loops -->
          <circle cx="14" cy="40" r="3" fill="#FDFBF7" />
          <circle cx="206" cy="40" r="3" fill="#FDFBF7" />
        </svg>

        <!-- flash layers — anchored to lens center -->
        <div ref="flashRing" class="flash-ring"></div>
        <div ref="flashCore" class="flash-core"></div>
        <div ref="flashShard" class="flash-shard">
          <span class="shard shard-a"></span>
          <span class="shard shard-b"></span>
          <span class="shard shard-c"></span>
          <span class="shard shard-d"></span>
        </div>
      </div>

      <!-- cekrek tag -->
      <div ref="cekrekLabel" class="cekrek-label">
        <span class="dot"></span>
        <span>cekrek</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-root {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: auto;
  overflow: hidden;
}

.curtain {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  background: #fdfbf7;
  will-change: transform;
}
.curtain-top {
  top: 0;
  background: linear-gradient(180deg, #fdfbf7 0%, #f8f2e7 100%);
}
.curtain-bottom {
  bottom: 0;
  background: linear-gradient(0deg, #fdfbf7 0%, #f8f2e7 100%);
}
.curtain-edge {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(78, 47, 26, 0.12);
}
.curtain-edge-bottom {
  bottom: 0;
}
.curtain-edge-top {
  top: 0;
}

.stand {
  position: absolute;
  bottom: 0;
  width: clamp(70px, 11vw, 130px);
  aspect-ratio: 80 / 220;
  z-index: 1;
  will-change: transform, opacity;
  filter: drop-shadow(0 18px 28px rgba(42, 31, 24, 0.18));
  transform-origin: 50% 100%;
}
.stand-left {
  left: clamp(2vw, 6vw, 9vw);
  transform: rotate(-3deg);
}
.stand-right {
  right: clamp(2vw, 6vw, 9vw);
  transform: rotate(3deg);
}

.camera {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(180px, 28vw, 360px);
  aspect-ratio: 220 / 150;
  margin-left: calc(clamp(180px, 28vw, 360px) / -2);
  margin-top: calc(clamp(180px, 28vw, 360px) * (-150 / 220) / 2);
  z-index: 2;
  will-change: transform, opacity;
  filter: drop-shadow(0 30px 50px rgba(78, 47, 26, 0.18));
}
.camera-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: 50% 56%;
}

/* flash anchored to lens center (lens at ~54% x, 56% y inside svg viewbox) */
.flash-core,
.flash-ring,
.flash-shard {
  position: absolute;
  left: 54%;
  top: 56%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  will-change: transform, opacity;
}

.flash-core {
  width: 220%;
  height: 220%;
  background: radial-gradient(
    circle,
    rgba(255, 236, 153, 0.95) 0%,
    rgba(252, 211, 77, 0.6) 22%,
    rgba(245, 158, 11, 0.18) 50%,
    rgba(245, 158, 11, 0) 70%
  );
  mix-blend-mode: screen;
  filter: blur(2px);
}

.flash-ring {
  width: 280%;
  height: 280%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    transparent 38%,
    rgba(252, 211, 77, 0.35) 44%,
    rgba(252, 211, 77, 0) 58%
  );
  mix-blend-mode: screen;
}

.flash-shard {
  width: 360%;
  height: 360%;
}
.shard {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 22%;
  background: linear-gradient(
    180deg,
    rgba(252, 211, 77, 0) 0%,
    rgba(255, 224, 122, 0.85) 50%,
    rgba(252, 211, 77, 0) 100%
  );
  transform-origin: 50% 100%;
  border-radius: 999px;
  mix-blend-mode: screen;
  filter: blur(0.4px);
}
.shard-a {
  transform: translate(-50%, -100%) rotate(0deg);
}
.shard-b {
  transform: translate(-50%, -100%) rotate(72deg);
}
.shard-c {
  transform: translate(-50%, -100%) rotate(144deg);
}
.shard-d {
  transform: translate(-50%, -100%) rotate(-72deg);
}

.cekrek-label {
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.32rem 0.78rem;
  border-radius: 999px;
  background: rgba(255, 236, 153, 0.92);
  border: 1px solid rgba(168, 74, 42, 0.25);
  color: #4f2f1a;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 0 6px 18px -8px rgba(168, 74, 42, 0.4);
  white-space: nowrap;
  will-change: transform, opacity;
}
.cekrek-label .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a84a2a;
}

@media (max-width: 640px) {
  .camera {
    width: clamp(180px, 56vw, 280px);
    margin-left: calc(clamp(180px, 56vw, 280px) / -2);
    margin-top: calc(clamp(180px, 56vw, 280px) * (-150 / 220) / 2);
  }
  .cekrek-label {
    top: -32px;
    font-size: 9px;
    letter-spacing: 0.24em;
  }
}
</style>
