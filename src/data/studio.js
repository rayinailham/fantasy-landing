// Centralized package data — derived from studio-brief.md
export const STUDIO = {
  name: 'Fantasy Studio Foto',
  tagline: 'Sharing your moment with us — studio foto keluarga di Pelabuhanratu',
  address:
    'Ruko Tamansari Blok M7 No. 36/37, Batu Sapi, Pelabuhanratu, Kab. Sukabumi, Jawa Barat',
  maps: 'https://share.google/duDYiqpejGD3JA1bp',
  hours: [
    { day: 'Senin – Sabtu', time: '09.00 – 19.00' },
    { day: 'Minggu', time: '09.00 – 17.00' }
  ],
  whatsapp: {
    primary: { label: '+62 857-2315-2483', href: 'https://wa.me/6285723152483' },
    alt: { label: '+62 815-6356-0412', href: 'https://wa.me/6281563560412' }
  },
  instagram: {
    handle: '@fantasystudio_foto',
    href: 'https://www.instagram.com/fantasystudio_foto/'
  }
}

export const HORIZONTAL_PANELS = [
  {
    kicker: '01 — Family',
    title: 'Satu rumah,\nsatu bingkai',
    body: 'Dari kakek sampai cucu paling kecil, semua dapet tempatnya. Kami jaga biar tatapan kalian semua arahnya sama.',
    seed: 'family-warm-2',
    tone: 'cream'
  },
  {
    kicker: '02 — Wisuda',
    title: 'Hari kelulusan,\ndisimpan rapi',
    body: 'Toga masih anget, ijazah baru selesai dipegang. Kami abadikan sebelum harinya berlalu jadi cerita lama.',
    seed: 'graduation-soft-3',
    tone: 'clay'
  },
  {
    kicker: '03 — Maternity',
    title: 'Sebelum dia\ndatang ke dunia',
    body: 'Cahaya dipelanin. Suara dikecilin. Sesi yang tenang buat momen sembilan bulan yang gak akan datang dua kali.',
    seed: 'maternity-warm-9',
    tone: 'sage'
  },
  {
    kicker: '04 — Prewedding',
    title: 'Cerita berdua,\nsebelum harinya tiba',
    body: 'Di studio atau di tempat yang berarti buat kalian. Paket fleksibel — dari sesi singkat sampai sehari penuh.',
    seed: 'prewed-romantic-1',
    tone: 'ember'
  },
  {
    kicker: '05 — Wedding',
    title: 'Janji yang diucap\ncuma sekali',
    body: 'Album jumbo seratus foto, video cinematic, dokumentasi sembilan jam. Biar tahun-tahun nanti, kalian masih bisa lihat lagi.',
    seed: 'wedding-celebration-7',
    tone: 'cream'
  },
  {
    kicker: '06 — Solo',
    title: 'Foto sendiri,\ntanpa buru-buru',
    body: 'Buat portofolio, hadiah ke diri sendiri, atau cuma karena ngerasa pengen. Sesi sendirian, dengan tempo kalian.',
    seed: 'solo-warm-portrait',
    tone: 'clay'
  },
  {
    kicker: '07 — Duo',
    title: 'Berdua,\norang paling dekat',
    body: 'Sahabat lama, kakak adik, atau pasangan diam-diam. Dua orang, satu frame, satu cerita yang kalian bawa pulang.',
    seed: 'duo-bestie-warm',
    tone: 'sage'
  },
  {
    kicker: '08 — Trio',
    title: 'Tiga orang,\nsatu cerita',
    body: 'Tiga sahabat, tiga saudara, tiga generasi. Komposisi yang seimbang, gak ada yang ke-pinggir.',
    seed: 'trio-warm-tone',
    tone: 'ember'
  },
  {
    kicker: '09 — Bersama',
    title: 'Rame-rame,\nsemua kebagian',
    body: 'Reuni, tim kantor, keluarga besar. Pernah delapan belas orang lebih — semua kelihatan, semua dapet ruangnya.',
    seed: 'bersama-group-warm',
    tone: 'cream'
  }
]

export const PACKAGE_GROUPS = [
  {
    id: 'family',
    title: 'Foto Family',
    summary: 'Buat keluarga 4 sampai 15+ orang. Semua kebagian frame, semua bawa pulang cetakan.',
    items: [
      {
        name: 'Paket 1',
        price: 250000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 foto + frame 8R',
        people: 'maks. 4 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 2',
        price: 450000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '1 foto + frame 12R, 1 foto + frame 8R',
        people: 'maks. 9 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 3',
        price: 700000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 16R, 2 foto + frame 8R',
        people: 'maks. 15 orang',
        outfit: '2 baju'
      },
      {
        name: 'Paket 4',
        price: 1000000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 24Rs, 3 foto + frame 8R',
        people: 'tanpa batas',
        outfit: '2 baju'
      }
    ]
  },
  {
    id: 'group',
    title: 'Foto Group / Bersama',
    summary: 'Buat tim, organisasi, atau rombongan keluarga besar. Sampai 30+ orang masih cukup.',
    items: [
      {
        name: 'Paket 1',
        price: 250000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 foto 8R',
        people: 'maks. 10 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 2',
        price: 350000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 foto 8R',
        people: 'maks. 20 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 3',
        price: 450000,
        duration: '30 menit',
        files: '15 file edit',
        prints: '1 foto + frame 12R',
        people: 'maks. 30 orang',
        outfit: '2 baju'
      },
      {
        name: 'Paket 4',
        price: 700000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 16R, 1 foto + frame 8R',
        people: 'tanpa batas',
        outfit: '2 baju'
      }
    ]
  },
  {
    id: 'maternity',
    title: 'Maternity',
    summary: 'Sesi tenang sebelum hari kelahiran. Cahaya pelan, tempo pelan, gak ada yang diburu.',
    items: [
      {
        name: 'Paket 1',
        price: 250000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 foto + frame 8R',
        people: '—',
        outfit: '1 baju'
      },
      {
        name: 'Paket 2',
        price: 450000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 12R, 1 foto + frame 8R',
        people: '—',
        outfit: '2 baju'
      },
      {
        name: 'Paket 3',
        price: 700000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 16R, 1 foto + frame 8R',
        people: '—',
        outfit: '2 baju'
      }
    ]
  },
  {
    id: 'wisuda',
    title: 'Wisuda',
    summary: 'Toga, ijazah, dan keluarga yang bangga. Sebelum harinya pergi.',
    items: [
      {
        name: 'Paket 1',
        price: 250000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 foto + frame 8R',
        people: 'maks. 4 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 2',
        price: 450000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '1 foto + frame 12R, 1 foto + frame 8R',
        people: 'maks. 8 orang',
        outfit: '1 baju'
      },
      {
        name: 'Paket 3',
        price: 700000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 16R, 3 foto + frame 8R',
        people: 'tanpa batas',
        outfit: '2 baju'
      }
    ]
  },
  {
    id: 'prewedding-studio',
    title: 'Prewedding Studio',
    summary: 'Sesi berdua di dalam studio. Tenang, tertutup, gak ada yang ngeliatin dari pinggir jalan.',
    items: [
      {
        name: 'Paket 1',
        price: 300000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '1 foto + frame 8R',
        people: '—',
        outfit: '1 baju'
      },
      {
        name: 'Paket 2',
        price: 500000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '1 foto + frame 12R, 1 foto + frame 8R',
        people: '—',
        outfit: '1 baju'
      },
      {
        name: 'Paket 3A',
        price: 800000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '1 foto + frame 16R, 2 foto + frame 8R, 2 foto + frame 4R',
        people: '—',
        outfit: '2 baju'
      },
      {
        name: 'Paket 3B',
        price: 1000000,
        duration: '30 menit',
        files: '20 file edit',
        prints: '2 foto + frame 16R, 2 foto + frame 8R, 2 foto + frame 4R',
        people: '—',
        outfit: '2 baju'
      }
    ]
  },
  {
    id: 'prewedding-premium',
    title: 'Prewedding Lokasi (Premium)',
    summary: 'Outdoor atau lokasi pilihan kalian. Crew lengkap, soft file, sampai video cinematic.',
    items: [
      {
        name: 'Paket 1',
        price: 1000000,
        duration: '1 jam',
        files: 'CD',
        prints: '1 foto + frame 12R, 1 foto + frame 8R, 1 foto + frame 4R',
        people: '1 crew',
        outfit: '—'
      },
      {
        name: 'Paket 2',
        price: 1500000,
        duration: '3 jam',
        files: 'Flash Disk',
        prints: '1 foto + frame 16R, 2 foto + frame 8R, 3 foto + frame 4R',
        people: '1 crew',
        outfit: '—'
      },
      {
        name: 'Paket 3',
        price: 2500000,
        duration: '6 jam',
        files: 'Flash Disk',
        prints:
          '1 foto + frame 16R, 2 foto + frame 8R, 2 foto + frame 6R, 4 foto + frame 4R + Video Cinematic',
        people: '2 crew',
        outfit: '—'
      }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding',
    summary: 'Liputan hari sakral. Album jumbo, video cinematic, crew yang gak ketinggalan satu momen pun.',
    items: [
      {
        name: 'Paket 1',
        price: 800000,
        duration: '6 jam',
        files: 'CD',
        prints: '1 album 40 foto, 1 foto + frame 8R',
        people: '1 crew',
        outfit: '—'
      },
      {
        name: 'Paket 2',
        price: 1500000,
        duration: '9 jam',
        files: 'CD',
        prints: '1 album jumbo 100 foto + 1 sheet opening 8Rs, 1 foto + frame 12R',
        people: '1 crew',
        outfit: '—'
      },
      {
        name: 'Paket 3',
        price: 2500000,
        duration: '9 jam',
        files: 'Flash Disk',
        prints: '1 album jumbo 100 foto, 1 foto + frame 16R, Video Cinematic',
        people: '2 crew',
        outfit: '—'
      },
      {
        name: 'Paket 4',
        price: 3000000,
        duration: '9 jam',
        files: 'Flash Disk',
        prints: '1 album jumbo 100 foto, 1 foto + frame 16R, Video Cinematic + 30 menit + Full Video',
        people: '2 crew',
        outfit: '—'
      }
    ]
  },
  {
    id: 'mini',
    title: '1–2 Orang & Selfie',
    summary: 'Buat sesi solo, pasangan, atau selfie rame-rame.',
    items: [
      {
        name: '1 Orang',
        price: 100000,
        duration: '10 menit',
        files: '10 file edit',
        prints: '1 cetak 6R',
        people: '1 orang',
        outfit: '1 baju'
      },
      {
        name: '2 Orang',
        price: 150000,
        duration: '15 menit',
        files: '10 file edit',
        prints: '2 cetak 6R',
        people: '2 orang',
        outfit: '1 baju'
      },
      {
        name: 'Selfie 1',
        price: 100000,
        duration: '10 menit',
        files: '15 file edit',
        prints: '—',
        people: 'maks. 5 orang',
        outfit: '1 baju'
      },
      {
        name: 'Selfie 2',
        price: 150000,
        duration: '15 menit',
        files: '15 file edit',
        prints: '2 cetak 6R',
        people: 'maks. 7 orang',
        outfit: '1 baju'
      }
    ]
  }
]

export const PRINT_SIZES = [
  { size: '2R', print: 5000, single: null, double: null },
  { size: '4R', print: 10000, single: 20000, double: null },
  { size: '6R', print: 15000, single: 35000, double: null },
  { size: '8R', print: 25000, single: 55000, double: null },
  { size: '8Rs (A4)', print: 30000, single: 65000, double: null },
  { size: '12R (A3)', print: 100000, single: 160000, double: 200000 },
  { size: '16R', print: 125000, single: 250000, double: 300000 },
  { size: '16Rs (A2)', print: 150000, single: 300000, double: 350000 },
  { size: '50×60', print: 200000, single: null, double: 500000 },
  { size: '50×70', print: 250000, single: null, double: 600000 },
  { size: '60×90 (A1)', print: 300000, single: null, double: 800000 }
]

export const GALLERY_SEEDS = [
  { seed: 'fantasy-family-01', orient: 'portrait' },
  { seed: 'fantasy-wisuda-12', orient: 'landscape' },
  { seed: 'fantasy-mater-04', orient: 'portrait' },
  { seed: 'fantasy-prewed-08', orient: 'square' },
  { seed: 'fantasy-wedd-21', orient: 'landscape' },
  { seed: 'fantasy-group-15', orient: 'portrait' },
  { seed: 'fantasy-warm-bw-33', orient: 'square' },
  { seed: 'fantasy-mater-22', orient: 'portrait' },
  { seed: 'fantasy-family-77', orient: 'landscape' },
  { seed: 'fantasy-wisuda-44', orient: 'square' },
  { seed: 'fantasy-prewed-66', orient: 'portrait' },
  { seed: 'fantasy-wedd-89', orient: 'landscape' },
  { seed: 'fantasy-warm-tone-91', orient: 'portrait' },
  { seed: 'fantasy-couple-58', orient: 'landscape' },
  { seed: 'fantasy-bts-19', orient: 'square' },
  { seed: 'fantasy-album-37', orient: 'portrait' }
]

export function rupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID')
}
