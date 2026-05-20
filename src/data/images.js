// Curated image picks for hero + horizontal panels (high-res, optimized via vite-imagetools)
// Low-res webp glob for the bottom infinite gallery.

// HERO — 2 warm portraits, optimized to webp ~1400w
import heroBackUrl from '../assets/high-res-gallery/3-saudari.JPG?w=1400&format=webp&quality=78'
import heroFrontUrl from '../assets/high-res-gallery/Keluarga-berlima.JPG?w=1400&format=webp&quality=78'

// HORIZONTAL PANELS — aligned 1:1 with HORIZONTAL_PANELS in studio.js
// 01 Family · 02 Wisuda · 03 Maternity · 04 Prewedding · 05 Wedding · 06 Solo · 07 Duo · 08 Trio · 09 Bersama
import panelFamily from '../assets/high-res-gallery/keluarga-bertiga.JPG?w=1600&format=webp&quality=78'
import panelWisuda from '../assets/high-res-gallery/kelulusan-happy.JPG?w=1600&format=webp&quality=78'
import panelMaternity from '../assets/high-res-gallery/maternity-happy.JPG?w=1600&format=webp&quality=78'
import panelPrewedding from '../assets/high-res-gallery/hot-couple.JPG?w=1600&format=webp&quality=78'
import panelWedding from '../assets/high-res-gallery/couple-adat.JPG?w=1600&format=webp&quality=78'
import panelSolo from '../assets/high-res-gallery/solo-cutie.JPG?w=1600&format=webp&quality=78'
import panelDuo from '../assets/high-res-gallery/duo-bestie.JPG?w=1600&format=webp&quality=78'
import panelTrio from '../assets/high-res-gallery/Trio-bestie.JPG?w=1600&format=webp&quality=78'
import panelBersama from '../assets/low-res-gallery/18-orang.webp'

export const HERO_IMAGES = {
  back: heroBackUrl,
  front: heroFrontUrl
}

// Index matches HORIZONTAL_PANELS array order
export const PANEL_IMAGES = [
  panelFamily,
  panelWisuda,
  panelMaternity,
  panelPrewedding,
  panelWedding,
  panelSolo,
  panelDuo,
  panelTrio,
  panelBersama
]

// Per-panel object-position. Tweak per slot to keep faces / heads in frame.
// Format: 'X% Y%' — Y%: 0% = focus on top of image, 100% = focus on bottom.
// Using percentages (NOT px) so crop window shifts within image without leaving
// any empty gap inside container. Increase Y% to move focus DOWN the image.
export const PANEL_OBJECT_POSITIONS = [
  '0% 25%',      // 01 Family — X mentok kiri
  '0% 30%',      // 02 Wisuda — X mentok kiri
  '0% 20%',      // 03 Maternity — X mentok kiri
  '0% 25%',      // 04 Prewedding — X mentok kiri
  '0% 75%',      // 05 Wedding — X mentok kiri
  '0% 45%',      // 06 Solo — X mentok kiri
  '0% 33%',      // 07 Duo — X mentok kiri
  '0% 30%',      // 08 Trio — X mentok kiri
  '50% 0%'       // 09 Bersama — center horizontal
]

// Per-panel CSS transform. Use to shift the whole image (translateY etc).
// Empty string = no transform. NOTE: scale() does NOT reveal more of the image —
// it only shrinks the already-cropped result. To actually zoom out, set
// PANEL_OBJECT_FITS[i] = 'contain' instead.
export const PANEL_TRANSFORMS = [
  '',                  // 01 Family
  '',                  // 02 Wisuda
  '',                  // 03 Maternity
  '',                  // 04 Prewedding
  '',                  // 05 Wedding
  '',                  // 06 Solo
  '',                  // 07 Duo
  '',                  // 08 Trio — no transform (use objectPosition Y% instead)
  ''                   // 09 Bersama
]

// Per-panel object-fit. 'cover' = fill container, crop excess (default, premium).
// 'contain' = show entire image inside container, gaps fill with warm-bg gradient.
// Use 'contain' when you want to "zoom out" and reveal MORE of the original image.
export const PANEL_OBJECT_FITS = [
  'cover',     // 01 Family
  'cover',     // 02 Wisuda
  'cover',     // 03 Maternity
  'cover',     // 04 Prewedding
  'cover',     // 05 Wedding
  'cover',     // 06 Solo
  'cover',     // 07 Duo
  'cover',     // 08 Trio — cover, fokus geser bawah dikit
  'cover'      // 09 Bersama
]

// LOW-RES infinite gallery — glob all webp, already pre-optimized
const lowResModules = import.meta.glob('../assets/low-res-gallery/*.webp', {
  eager: true,
  import: 'default'
})

export const GALLERY_IMAGES = Object.entries(lowResModules)
  .map(([path, url]) => ({
    url,
    name: path.split('/').pop().replace(/\.webp$/i, '')
  }))
  // stable shuffle via name hash so two rows get distinct ordering without RNG
  .sort((a, b) => a.name.localeCompare(b.name))
