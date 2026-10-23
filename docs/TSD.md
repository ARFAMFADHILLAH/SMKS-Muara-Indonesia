# Technical Specification Document (TSD)
## Website Landing Page & Company Profile — SMKS Muara Indonesia Jakarta

---

## 1. Informasi Dokumen

| Atribut | Nilai |
| --- | --- |
| Judul | Technical Specification Document — SMKS Muara Indonesia Jakarta |
| Versi | 1.0 |
| Tanggal | 22 Oktober 2026 |
| Penulis | Arfa Muhammad Fadhillah |
| Repository | `https://github.com/ARFAMFADHILLAH/SMKS-Muara-Indonesia.git` |
| Branch | `main` |
| Status | Aktif |
| Dokumen Terkait | `PRD.md` (Kebutuhan Bisnis), `README.md` (Panduan Developer) |

---

## 2. Ringkasan Proyek & Scope

### 2.1 Ringkasan

Situs profil institusi satu halaman untuk **SMKS Muara Indonesia Jakarta** — sekolah menengah kejuruan swasta terakreditasi A di Jatinegara, Jakarta Timur. Tujuannya membangun kredibilitas dan memfasilitasi calon peserta didik serta orang tua untuk mengambil keputusan pendaftaran secara online.

### 2.2 Tujuan Teknis

1. Menyajikan profil sekolah yang profesional, kredibel, dan ringan diakses.
2. Menyediakan titik kontak langsung (telepon, email, peta, PPDB).
3. Menjaga performa tinggi: LCP < 2,5 detik pada koneksi 3G simulasi.
4. Tetap utuh di perangkat mobile dengan navigasi yang jelas.

### 2.3 Target Pengguna

| Segmen | Kebutuhan Utama |
| --- | --- |
| Calon siswa SMP/MTS | Informasi kurikulum, fasilitas, variasi karier, lokasi |
| Orang tua/wali | Kredibilitas, akreditasi, lingkungan, testimoni |
| Dinas Pendidikan & stakeholder | Data resmi sekolah, NPSN, akreditasi, kontak |

### 2.4 Scope

**Termasuk (In Scope)**

- Landing page satu halaman (9 section) dengan navigasi anchor
- Sistem design token (warna, tipografi, spacing, motion)
- Komponen interaktif: carousel galeri, animasi count-up, scroll reveal
- Integrasi peta lokasi interaktif (Google Maps Embed, tanpa API key)
- Tampilan testimoni dengan rating agregat
- Optimasi gambar otomatis (`next/image` + Sharp + AVIF/WebP)
- Dokumentasi teknis & panduan deployment cPanel

**Tidak Termasuk (Out of Scope)**

- Sistem manajemen konten (CMS) dan panel admin
- Formulir pendaftaran PPDB dengan backend & basis data
- Sistem autentikasi pengguna, blog, dan multi-halaman
- Multi-bahasa (saat ini hanya `id-ID`)
- Native app / PWA

---

## 3. Tech Stack

### 3.1 Ringkasan Layer

| Layer | Teknologi | Versi | Peran |
| --- | --- | --- | --- |
| Runtime | Node.js | ≥ 18.17.0 (lokal: v24.21.0) | Runtime server & build |
| Package Manager | npm | 11.19.0 | Manajemen dependensi |
| Framework | Next.js | 14.2.5 | App Router, routing, SSR/SSG, optimasi aset |
| UI Library | React | 18.3.1 | Komponen & state |
| UI Library | React DOM | 18.3.1 | Renderer DOM |
| Language | TypeScript | 5.9.3 | Type safety |
| Styling | Tailwind CSS | 3.4.19 | Utility-first CSS |
| CSS Processor | PostCSS | 8.5.31 | Pipeline CSS |
| Prefix | Autoprefixer | 10.6.1 | Kompatibilitas cross-browser |
| Carousel | Embla Carousel (React) | 8.6.0 | Galeri foto |
| Carousel | Embla Carousel (Autoplay) | 8.6.0 | Auto-slide 4 detik |
| Ikon | Lucide React | 0.400.0 | Set ikon SVG |
| Font | Plus Jakarta Sans (Google Fonts) | via `next/font` | Tipografi |
| Image Processing | Sharp | 0.35.5 | Optimasi gambar produksi |

### 3.2 Alasan Pemilihan

| Keputusan | Alasan |
| --- | --- |
| **Next.js App Router** | Mendukung SSG sehingga halaman dilayani tanpa server render per-request. Menyediakan `next/image` (optimasi + lazy loading + placeholder), `next/font` (self-hosting font, nol request ke Google), dan route handler bawaan untuk endpoint gambar. |
| **TypeScript** | Mendeteksi mismatch tipe props pada saat kompilasi. Menggantikan error runtime yang mahal dicari pada landing page yang banyak diedit. |
| **Tailwind CSS 3** | Token desain terpusat di `tailwind.config.ts` sehingga konsistensi visual dijaga lewat konfigurasi, bukan ingatan. `aspect-*` arbitrary value memungkinkan rasio gambar presisi tanpa CSS tambahan. |
| **Embla Carousel** | Ringan (~5 kB), tanpa dependensi DOM besar, API imperatif yang mudah dikontrol (autoplay, dots, manual scroll). Lebih ringan dibanding SwiperJS. |
| **Lucide React** | Ikon berbasis stroke, konsisten dengan gaya garis tipis corporate-minimal. Tree-shakeable. |
| **Sharp** | Diperlukan untuk optimasi gambar produksi di `next start`. Tanpa itu, Next.js jatuh ke fallback Squoosh (WASM) yang lambat dan sudah deprecated. |
| **`next/font/google`** | Font di-build/self-host saat build — nol request ke pihak ketiga, nol CLS karena `font-display: swap` + ukuran font terukur. |
| **Tanpa CMS / database** | Kebutuhan konten stabil dan jarang berubah. Menambah CMS akan menambah biaya pemeliharaan, titik kegagalan, dan kompleksitas deployment di shared hosting tanpa nilai nyata. |

### 3.3 Batasan & Ketidakterdependence

- `strict: false` pada `tsconfig.json` —gowong disetel longgar agar migrasi dari JavaScript lebih mulus. **Rekomendasi**:uric ke `strict: true` pada fase berikutnya.
- `next@14.2.5` memiliki advisory keamanan CVE. **Rekomendasi**: upgrade ke rilis 14.2.x terbaru yang sudah dipatch atau major terbaru sebelum produksi.
- `npm audit` melaporkan beberapa advisory transitif pada ecosystem React 18. Evaluasi dilakukan pada roadmap.

---

## 4. Arsitektur Aplikasi

### 4.1 Model Rendering

Aplikasi memakai **Static Generation (SSG)** sepenuhnya.

```
Route (app)                              Size     First Load JS
┌ ○ /                                    15.1 kB         102 kB
└ ○ /_not-found                          871 B          87.9 kB
+ First Load JS shared by all            87.1 kB
```

Seluruh route ditandai `○ (Static)` — HTML diprerender saat build. Konsekuensi:

- Respons server ±10 ms (hanya pembacaan file statis dari disk).
- Beban CPU server mendekati nol → shared hosting biasa sudah cukup.
- Cache CDN menjadi mudah dikonfigurasi.

### 4.2 Batas Client / Server Component

| Tipe | File | Alasan |
| --- | --- | --- |
| Server Component | `src/app/page.tsx` | Halaman utama, seluruh section statis. Nol JS yang dikirim untuk markup. |
| Server Component | `src/app/layout.tsx` | Metadata, `<html lang>`, pemuatan font. |
| Server Component | `src/components/Testimonials.tsx` | Data statis, tanpa hooks. Nol JS tambahan. |
| Server Component | `src/components/SectionLabel.tsx` | Label section, dipakai lintas section. |
| Server Component | `src/components/PrincipalSection.tsx` | Data statis dari `siteData.ts`. |
| Server Component | `src/components/ExtracurricularSection.tsx` | Data statis dari `siteData.ts`. |
| Server Component | `src/components/NewsSection.tsx` | Data statis dari `siteData.ts`. |
| Client Component | `src/components/SiteNav.tsx` | Butuh state dropdown, drawer mobile, dan scroll-spy. |
| Client Component | `src/components/SchoolGallery.tsx` | Butuh `useState`, `useEffect`, `useCallback`, dan instance Embla. |
| Client Component | `src/components/ScrollReveal.tsx` | Butuh `useEffect` + `IntersectionObserver`. |
| Client Component | `src/components/CountUp.tsx` | Butuh `useState`, `useRef`, `requestAnimationFrame`. |

Aturan yang dipegang: **setiap markup stateless harus tetap Server Component** agar tidak membengkakkan bundel.

### 4.3 Struktur Direktori

```
company-profile-smks-muara-indonesia/
├── docs/
│   └── TSD.md                        # dokumen ini
├── public/
│   ├── favicon.png                   # favicon browser
│   ├── icon.png                      # ikon aplikasi
│   ├── logo/
│   │   ├── logo-smks-muara-indonesia.jpeg
│   │   └── logo-smks-muara-indonesia-removebg-preview.png
│   └── gallery/
│       ├── 20103774-4.jpg
│       ├── 20103774-5.jpg
│       └── 20103774-6.jpg
├── src/
│   ├── app/
│   │   ├── globals.css               # token, utility class, keyframe
│   │   ├── layout.tsx                # root layout + metadata + font
│   │   └── page.tsx                  # landing page (12 section)
│   ├── components/
│   │   ├── CountUp.tsx               # animasi angka 0 → N
│   │   ├── ExtracurricularSection.tsx # section ekstrakurikuler
│   │   ├── NewsSection.tsx           # section berita + informasi PPDB
│   │   ├── PrincipalSection.tsx      # section kepala sekolah
│   │   ├── SchoolGallery.tsx         # carousel galeri (Embla)
│   │   ├── ScrollReveal.tsx          # animasi on-scroll
│   │   ├── SectionLabel.tsx          # label judul section
│   │   ├── SiteNav.tsx               # navbar dropdown + drawer mobile
│   │   └── Testimonials.tsx          # kartu ulasan + rating
│   └── lib/
│       └── siteData.ts               # data navigasi, kepala sekolah, ekstrakurikuler, berita
├── .gitignore
├── next.config.js                    # konfigurasi Next.js
├── postcss.config.js                 # plugin PostCSS
├── package.json
├── package-lock.json
├── PRD.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### 4.4 Aliran Data Konten

```
Data sekolah (inline, src/app/page.tsx)
        │
        ├──► SectionLabel / Card / CountUp / SchoolGallery / Testimonials
        │
Galeri  ──► galleryImages[] (src/components/SchoolGallery.tsx)
Testimoni ──► testimonials[] (src/components/Testimonials.tsx)
        │
        ▼
  Render statis saat build ──► HTML statis di .next/server/app
```

Tidak ada fetch, tidak ada API route, tidak ada state server. Konsekuensi: **mengubah konten = edit source + rebuild**, bukan edit CMS.

### 4.5 Konfigurasi Next.js

`next.config.js`:

```js
const nextConfig = {
  reactStrictMode: true,        // deteksi efek samping ganda di development
  poweredByHeader: false,       // hilangkan header X-Powered-By
  images: {
    formats: ["image/avif", "image/webp"],  // negosiasi format modern
  },
};
```

---

## 5. Design System

### 5.1 Palet Warna

Token didefinisikan di `tailwind.config.ts` dengan awalan nama warna eksis (`slate`, `emerald`, `amber`) agar gradient & opacity modifier tetap bekerja (`bg-slate-900/50`).

| Token | Hex | Uso |
| --- | --- | --- |
| `slate.900` | `#0F172A` | Teks utama, section gelap, tombol `btn-dark` |
| `emerald.600` | `#059669` | Aksen sekunder, border dekoratif, hover tautan |
| `amber.500` | `#F59E0B` | Garis aksen `SectionLabel`, rating bintang, dot aktif |
| `amber.300` | `#FCD34D` | Latar tombol utama `btn-gold` (Tailwind default, belum di-override) |
| `amber.600` | `#D97706` | State hover `btn-gold` |
| `light` | `#F8FAFC` | Latar halaman |
| — | `#FFFFFF` | Latar card, navbar, tombol |

Warna turunan: `slate-200/70` (border card), `slate-400` (label terang), `slate-500` (label gelap), `slate-600/700` (body text), `slate-300` (ikon bintang kosong).

### 5.2 Tipografi

| Properti | Nilai |
| --- | --- |
| Font utama | Plus Jakarta Sans (400/500/600/700) |
| Pemuatan | `next/font/google`, subset `latin`, self-host saat build |
| Fluid scale | `text-4xl md:text-5xl` (Hero), `text-3xl` (judul section), `text-sm` (body kecil), `text-xs` (caption/label) |
| Label section | `text-sm uppercase tracking-[0.2em]` + garis aksen 24 px |
| Line height | `leading-relaxed` global, `leading-relaxed` pada kutipan testimoni |
| Render | `antialiased` untuk hasil tepi lebih tajam |

### 5.3 Spacing & Layout

| Token | Nilai | Definisi |
| --- | --- | --- |
| `.container` | `max-w-6xl mx-auto px-6` | 1152 px + padding 24 px |
| `.section` | `py-14 md:py-20` | Ritme vertikal antar section |
| `.nav-inner` | `max-w-6xl mx-auto px-6 flex h-16` | Navbar 64 px |
| `.card` | `bg-white border border-slate-200/70 rounded-2xl` | Radius 16 px |
| `scroll-padding-top` | `88px` | Offset scroll agar judul section tidak tertutup navbar |

### 5.4 Motion Tokens

| Token | Nilai | Uso |
| --- | --- | --- |
| Durasi | `700ms` | Fade-up & scroll reveal |
| Durasi | `300ms` | Hover card testimoni |
| Durasi | `700ms` | Zoom gambar galeri (`hover:scale-[1.03]`) |
| Easing | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Semua transisi utama |
| Offset | `translateY(12px)` | Titik awal animasi masuk |
| Stagger | `100ms` (delay 1–4) | Hero berurutan |
| Reveal threshold | `0.12` | 12% elemen terlihat → memicu animasi reveal |
| CountUp threshold | `0.4` | 40% elemen terlihat → memicu animasi angka |

---

## 6. Spesifikasi Komponen

### 6.1 `SectionLabel` (Server, internal `page.tsx`)

Label konsisten untuk semua judul section.

```ts
function SectionLabel({ children, light = false }: {
  children: React.ReactNode;
  light?: boolean;
})
```

| Prop | Tipe | Default | Keterangan |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | Teks label (mis. "Profil") |
| `light` | `boolean` | `false` | `true` untuk section gelap → teks `slate-400` |

Render: garis horizontal 24 px `bg-amber-500` + teks uppercase tracking lebar.

### 6.2 `CountUp` (Client)

```ts
type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};
```

| Prop | Tipe | Default | Keterangan |
| --- | --- | --- | --- |
| `end` | `number` | — | Nilai akhir |
| `duration` | `number` | `1500` | Durasi animasi (ms) |
| `suffix` | `string` | `""` | Teks setelah angka (mis. `" m²"`) |
| `prefix` | `string` | `""` | Teks sebelum angka (mis. `"Rp"`) |
| `decimals` | `number` | `0` | Digit desimal |
| `className` | `string` | `""` | Class tambahan |

Perilaku: `IntersectionObserver` (threshold `0.4`) mendeteksi elemen masuk viewport, lalu `requestAnimationFrame` menghitung nilai `0 → end` dengan easing easeOutCubic (`1 - (1 - progress)³`). State `started` mencegah animasi berulang. Bila `prefers-reduced-motion` aktif, nilai akhir langsung ditampilkan tanpa animasi.

Format angka memakai `toLocaleString("id-ID")` sehingga ribuan memakai titik (mis. `6.000`).

### 6.3 `ScrollReveal` (Client)

```ts
export default function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
})
```

Perilaku: membungkus children dalam `<div data-reveal>`. `IntersectionObserver` dengan `threshold: 0.12` menambahkan `data-reveal="visible"` saat elemen 12% terlihat, lalu `unobserve` (animasi sekali saja). Observer di-`disconnect` saat unmount. Bila `prefers-reduced-motion: reduce`, atribut langsung di-set ke `visible` tanpa animasi.

### 6.4 `SchoolGallery` (Client)

```ts
export default function SchoolGallery()
```

| Aspek | Nilai |
| --- | --- |
| Library | Embla Carousel + plugin Autoplay |
| Opsi | `{ loop: true }` |
| Autoplay | `{ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }` |
| Slide basis | `flex-[0_0_88%] sm:flex-[0_0_58%] md:flex-[0_0_45%] lg:flex-[0_0_32%]` |
| Rasio gambar | `aspect-[3/4]` (sebanding dengan sumber 600×800 — tanpa crop) |
| Navigasi | Tombol panah (`aria-label`: "Gambar sebelumnya"/"Gambar berikutnya") + dots (`aria-label`: "Tampilkan slide N") |
| State | `emblaApi`, `selectedIndex`, `slideCount` |

Perilaku: `sizes` Dynamic — `(max-width: 639px) 88vw, (max-width: 767px) 58vw, (max-width: 1023px) 45vw, 32vw`. Slide pertama memakai `priority` (LCP), sisanya lazy-load.

### 6.5 `Testimonials` (Server)

```ts
export default function Testimonials()
```

| Aspek | Nilai |
| --- | --- |
| Sumber data | Array `testimonials` (module-level) |
| Grid | `grid gap-6 md:grid-cols-3` |
| Rating | Bintang 5, terisi sesuai `t.rating` (`fill-amber-500` / `text-slate-300`) |
| Rating agregat | `4,7` dari `31 ulasan Google` (statis) |
| Tautan | `MAPS_URL` → Google Maps search, `target="_blank"`, `rel="noopener noreferrer"` |

**Catatan**: array `testimonials` berisi data contoh. Struktur tiap entri:

```ts
{
  name: string;   // nama pengulas
  role: string;   //-afiliasi (alumni / wali murid / siswa)
  rating: number; // 1–5
  quote: string;  // kutipan ulasan
}
```

### 6.6 `page.tsx` — Peta Section

| # | Section | `id` anchor | Komponen utama |
| --- | --- | --- | --- |
| 0 | Navbar | — | `SiteNav` (dropdown desktop + drawer mobile) |
| 1 | Hero | `beranda` | Split teks + foto (`aspect-[4/5]`), 2 CTA, badge akreditasi |
| 2 | Profil | `profil` | 4 stat (CountUp), ringkasan, Data Sekolah |
| 3 | Kepala Sekolah | `kepala-sekolah` | `PrincipalSection` |
| 4 | Keunggulan | — | Section navy, 4 poin |
| 5 | Kurikulum | `kurikulum` | Kurikulum Merdeka, kompetensi, prospek karier |
| 6 | Fasilitas | `fasilitas` | 3 angka (CountUp) + daftar |
| 7 | Ekstrakurikuler | `ekstrakurikuler` | `ExtracurricularSection` |
| 8 | Galeri | `galeri` | `SchoolGallery` |
| 9 | Berita & Informasi | `berita` | `NewsSection` (artikel unggulan + strip PPDB) |
| 10 | Testimoni | `testimoni` | `Testimonials` |
| 11 | Kontak | `kontak` | Alamat, telepon, email, CTA, iframe Maps |
| 12 | Footer | — | Identitas, Instagram, Facebook, copyright |

### 6.7 `SiteNav` (Client)

Navbar dengan dropdown desktop dan drawer mobile. Sumber data tunggal: `navEntries` di `src/lib/siteData.ts`.

| Aspek | Nilai |
| --- | --- |
| Struktur | 5 entri: 3 tautan langsung (Beranda, Testimoni, Kontak) + 2 grup dropdown (Profil Sekolah, Kesiswaan) |
| Dropdown desktop | Buka saat hover (delay tutup 140 ms) **dan** klik; `aria-haspopup="true"`, `aria-expanded` |
| Penutupan dropdown | Escape, klik di luar nav, atau memilih item |
| Drawer mobile | Tombol hamburger, panel `position: fixed` di bawah navbar, body scroll dikunci saat terbuka |
| Grup di mobile | Berubah menjadi accordion (button toggle + chevron rotate) |
| Scroll-spy | `IntersectionObserver` (`rootMargin: "-88px 0px -55% 0px"`) menandai item aktif |
| Identitas visual | Nama sekolah disingkat di bawah `xl` agar navbar tidak penuh pada 1024 px |

Atribut `id` pada setiap section wajib sama dengan `href` di `navEntries` agar anchor dan scroll-spy sinkron.

---

## 7. Animasi & Interaksi

### 7.1 Hero — Fade-up Bertahap

Empat elemen pada Hero memakai `.fade-up` dengan kelas delay (`fade-up-delay-1` … `-4`), durasi 700 ms, easing `cubic-bezier(0.25, 0.8, 0.25, 1)`, `both` fill mode. Animasi terpicu langsung saat render (tidak bergantung scroll).

### 7.2 Scroll Reveal

Elemen yang dibungkus `ScrollReveal` mulai pada `opacity: 0; translateY(12px)` dan transisi ke kondisi final ketika masuk viewport. Properti `will-change: opacity, transform` di-set untuk lapisan komposisi.

### 7.3 Count-up

Angka statistik menghitung naik saat elemen terlihat. Angka diformat dengan `toLocaleString("id-ID", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })` sehingga ribuan memakai titik (mis. `6.000`).

### 7.4 Interaksi Hover

| Elemen | Efek |
| --- | --- |
| Card testimoni | `hover:-translate-y-1 hover:shadow-sm` (300 ms) |
| Gambar galeri | `hover:scale-[1.03]` (700 ms) |
| Tombol | Perubahan warna latar (150–200 ms) |
| Tautan nav | `hover:text-slate-900` |
| Dot carousel | `bg-amber-500` (aktif) ↔ `bg-slate-300` (non-aktif) |

### 7.5 Reduced Motion

Blok `@media (prefers-reduced-motion: reduce)` menonaktifkan seluruh `animation` dan `transition`, memaksa `opacity: 1` dan `transform: none`. `ScrollReveal` dan `CountUp` juga membaca preferensi ini di sisi klien.

---

## 8. Model Data Konten

### 8.1 Data Sekolah (inline di `page.tsx`)

| Field | Nilai |
| --- | --- |
| NPSN | `20103774` |
| Akreditasi | A |
| Status | Swasta — Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara |
| Kurikulum | SMK Merdeka Manajemen Perkantoran (K) |
| Penyelenggaraan | Sehari penuh / 5 hari |
| Alamat | Jl. Cipinang Muara 3 Kav PLN, Kec. Jatinegara, Kota Adm. Jakarta Timur, D.K.I. Jakarta |
| Koordinat | `-6.2213, 106.8929` |
| Telepon | `021-8500965` |
| Email | `muaraindonesia965@yahoo.co.id` |
| Luas tanah | 6.000 m² |
| Daya listrik | 41.500 VA |

### 8.2 Statistik (CountUp)

| Label | Nilai | Suffix |
| --- | --- | --- |
| Siswa | 318 | — |
| Guru | 16 | — |
| Luas lahan | 6.000 | `" m²"` |
| Akreditasi | A | (statis, bukan CountUp) |

### 8.3 Fasilitas (CountUp)

| Label | Nilai | Suffix |
| --- | --- | --- |
| Ruang kelas | 21 | — |
| Laboratorium | 2 | — |
| Perpustakaan | 1 | — |

### 8.4 `galleryImages[]`

```ts
const galleryImages = [
  { src: "/gallery/20103774-4.jpg", alt: "Suasana kegiatan SMKS Muara Indonesia Jakarta", caption: "Kegiatan Belajar" },
  { src: "/gallery/20103774-5.jpg", alt: "Aktivitas siswa SMKS Muara Indonesia Jakarta", caption: "Aktivitas Siswa" },
  { src: "/gallery/20103774-6.jpg", alt: "Lingkungan sekolah SMKS Muara Indonesia Jakarta", caption: "Lingkungan Sekolah" },
];
```

Aset saat ini: 3 berkas JPEG **600×800 px** (potrait 3:4). Rasio frame galeri `aspect-[3/4]` dipilih agar pas tanpa crop.

### 8.5 `testimonials[]`

Lihat §6.5. Saat ini berisi **data contoh** yang akan diganti dengan ulasan asli.

### 8.6 `siteData.ts` — Sumber Data Terpusat

Seluruh konten yang mudah berubah dipusatkan di `src/lib/siteData.ts` agar tidak tersebar di banyak file.

| Ekspor | Tipe | Isi |
| --- | --- | --- |
| `navEntries` | `NavEntry[]` | 5 entri navigasi: 3 tautan langsung + 2 grup dropdown (Profil Sekolah, Kesiswaan) |
| `allNavAnchors` | `string[]` | Turunan `navEntries` — dipakai `SiteNav` untuk scroll-spy |
| `principal` | `Principal` | Nama, jabatan, sapaan, tanda tangan, facts, dan `photo` (null = placeholder) |
| `extracurriculars` | `Extracurricular[]` | 8 kegiatan + deskripsi + jadwal + ikon Lucide |
| `news` | `NewsItem[]` | 4 artikel dengan kategori (PPDB, Kegiatan, Prestasi, Informasi), tanggal, excerpt, gambar |
| `ppdbInfo` | `InfoItem[]` | Gelombang pendaftaran, syarat dokumen, kontak panitia |

> Seluruh nilai di atas masih **data contoh / placeholder** dan wajib diganti dengan data asli sebelum produksi.

### 8.7 Konfigurasi Peta & Media Sosial

| Aset | Nilai |
| --- | --- |
| Embed Maps | `https://www.google.com/maps?q=SMKS+Muara+Indonesia+Jakarta&ll=-6.2213,106.8929&z=16&output=embed` |
| Tautan Maps | `https://share.google/jXQBVI5LRo38bhCym` |
| Tautan ulasan | `https://www.google.com/maps/search/?api=1&query=SMKS+Muara+Indonesia+Jakarta+Jl.+Cipinang+Muara+III+Kav.+PLN` |
| Instagram | `https://www.instagram.com/smks_mi_jkt/` |
| Facebook | `https://www.facebook.com/smkmuaraindonesia` |

---

## 9. SEO & Metadata

### 9.1 Metadata Aktual (`src/app/layout.tsx`)

```ts
export const metadata: Metadata = {
  title: "SMKS Muara Indonesia Jakarta",
  description: "SMK Swasta Unggulan di Jakarta Timur",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
};
```

### 9.2 Praktik Baik yang Sudah Diterapkan

| Aspek | Implementasi |
| --- | --- |
| Semantic HTML | `<header>`, `<nav>`, `<main>`-equivalent, `<section>`, `<footer>` |
| `lang` | `<html lang="id">` |
| Heading hierarchy | Satu `<h1>` di Hero, `<h2>` per section |
| Gambar | `alt` deskriptif pada seluruh aset, `priority` pada LCP image |
| Kanonikal | Belum ada — lihat §15 |
| Sitemap | Belum ada — lihat §15 |
| Open Graph / Twitter Card | Belum ada — lihat §15 |

---

## 10. Performance Budget

### 10.1 Bundle

| Metrik | Nilai | Target |
| --- | --- | --- |
| Ukuran route `/` | 15.1 kB | ≤ 30 kB |
| First Load JS | 102 kB | ≤ 150 kB |
| Shared JS | 87.1 kB | — |
| Client components | 3 (Gallery, ScrollReveal, CountUp) | — |

### 10.2 Strategi Optimasi

| Teknik | Implementasi |
| --- | --- |
| Server Component default | Mayoritas markup dit-Free dari JS bundle |
| Lazy loading | `next/image` otomatis lazy untuk gambar non-priority |
| Format modern | AVIF → WebP → JPEG (fallback) via `images.formats` |
| Image processor | Sharp 0.35.5 untuk resize & kompresi produksi |
| Font | Self-hosted, nol request pihak ketiga |
| Third-party JS | **Nol** — tidak ada analytics, tracker, atau CDN eksternal |
| Carousel | Embla (~5 kB) — jauh lebih ringan dari SwiperJS (~40 kB) |
| Animasi | CSS & Web Animations API — nol dependensi library |

### 10.3 Beban Aset

| Aset | Ukuran | Catatan |
| --- | --- | --- |
| `20103774-4.jpg` | 66 KB | 600×800 |
| `20103774-5.jpg` | 59 KB | 600×800 |
| `20103774-6.jpg` | 82 KB | 600×800 |
| `logo-...-removebg-preview.png` | 317 KB | Terlalu berat untuk logo navbar 32×32 — lihat §15 |
| `logo-...-jpeg` | 42 KB | Background putih, kurang ideal di navbar |

Total aset gambar saat ini: **≈ 566 KB** (sebelum optimasi runtime Sharp).

---

## 11. Accessibility (a11y)

### 11.1 Status Saat Ini

| Aspek | Status | Catatan |
| --- | --- | --- |
| `lang` dokumen | ✅ | `id` |
| Heading hierarchy | ✅ | `h1` tunggal + `h2` per section |
| `alt` gambar | ✅ | Deskriptif, bukan sekadar nama file |
| `aria-label` kontrol | ✅ | Tombol panah carousel & dots |
| Link eksternal aman | ✅ | `rel="noopener noreferrer"` |
| Reduced motion | ✅ | CSS media query + logika klien |
| Kontras teks | ✅ | `slate-900` di `#F8FAFC` (≈ 17:1), `slate-700` di putih (≈ 10:1) |
| Fokus keyboard | ⚠️ | Styling `:focus-visible` bawaan browser, belum di-custom |
| Navigasi mobile | ❌ | Tautan nav `hidden lg:flex` — **belum ada menu hamburger** |
| Skip link | ❌ | Belum ada |
| Landmark `main` | ⚠️ | Section utama belum dibungkus `<main>` |

### 11.2 Rekomendasi Prioritas

1. **Menu mobile** — tautan navigasi tidak dapat diakses di layar < 1024 px. Ini gap fungsional, bukan sekadar estetika.
2. Bungkus konten utama dalam `<main>` untuk landmark yang benar.
3. Tambahkan skip link "Lompat ke konten utama".
4. Definisikan `:focus-visible` yang konsisten dengan palet.

---

## 12. Dukungan Browser & Breakpoint

### 12.1 Browser

| Browser | Versi Minimum | Catatan |
| --- | --- | --- |
| Chrome / Edge | 90+ | Baseline penuh |
| Firefox | 90+ | Baseline penuh |
| Safari | 14.1+ | Butuh untuk `aspect-ratio` & AVIF |
| Chrome Android | 90+ | Baseline penuh |
| Safari iOS | 14.1+ | Baseline penuh |

Fitur yang membatasi: `aspect-ratio` (Safari 15+ penuh, 14.1 parsial), AVIF (Safari 16.4+, otomatis fallback WebP), `IntersectionObserver` (semua browser modern), `next/font` (fallback aman bila font gagal dimuat).

### 12.2 Breakpoint Tailwind

| Prefix | Min Width | Perubahan Layout |
| --- | --- | --- |
| (base) | 0 px | Single column, tombol full-ish, slide galeri 88% |
| `sm` | 640 px | Slide galeri 58% |
| `md` | 768 px | Grid 2–3 kolom, section padding `py-20`, slide galeri 45% |
| `lg` | 1024 px | Navigasi desktop tampil, slide galeri 32% |
| `xl` | 1280 px | Container maksimum tercapai (1152 px) |

---

## 13. Environment & Scripts

### 13.1 Kebutuhan

| Komponen | Minimum | Rekomendasi |
| --- | --- | --- |
| Node.js | 18.17.0 | 20.x LTS |
| npm | 9+ | 11.x |

> Node.js lokal saat dokumen ini dibuat: v24.21.0, npm 11.19.0.

### 13.2 Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm install` | Pasang dependensi (termasuk Sharp) |
| `npm run dev` | Server pengembangan di `http://localhost:3000` |
| `npm run build` | Build produksi → `.next/` |
| `npm run start` | Jalankan hasil build (node server) |
| `npx tsc --noEmit` | Pemeriksaan tipe tanpa emit |

### 13.3 Environment Variables

**Tidak ada environment variable yang wajib.** Konfigurasi saat ini seluruhnya hardcoded di source. Variabel berikut relevan di lingkungan produksi:

| Variabel | Nilai | Sumber |
| --- | --- | --- |
| `NODE_ENV` | `production` | Ditetapkan otomatis oleh `next build`/`next start` |
| `PORT` | (otomatis) | Diinject oleh cPanel/Passenger |

### 13.4 `.gitignore`

`node_modules`, `.next/`, `out/`, `.env*`, `*.tsbuildinfo`, `next-env.d.ts`, `.DS_Store`, `npm-debug.log*`.

---

## 14. Deployment — cPanel (Node.js Server)

Model deployment: **Next.js production server** (`next start`) di atas Passenger dari cPanel, bukan static export. Alasan: optimasi gambar runtime (`next/image` + Sharp) tetap aktif, dan struktur proyek tidak perlu diubah untuk mode export.

### 14.1 Syarat Hosting

| Syarat | Detail |
| --- | --- |
| cPanel | Versi 92+ atau hosting dengan **Setup Node.js App** (Application Manager) |
| Node.js | 18.17.0+ — **disarankan 20.x LTS** |
| Shared hosting | Umumnya tersedia pada paket shared hosting; pastikan Application Manager aktif |
| Akses | cPanel + SSH/Terminal untuk menjalankan `npm install` & `npm run build` |

> ⚠️ **Bila hosting tidak mendukung Node.js**, gunakan cPanel **"Setup Node.js App"** minimal atau pilih VPS. Jangan gunakan shared hosting murni Apache tanpa Node — situs tidak akan berfungsi.

### 14.2 Langkah Deployment

**Tahap 1 — Unggah Kode**

```bash
# di terminal cPanel
cd /home/USER
git clone https://github.com/ARFAMFADHILLAH/SMKS-Muara-Indonesia.git smks-muara
cd smks-muara
```

Alternatif: unggah ZIP repository melalui File Manager, lalu ekstrak.

**Tahap 2 — Setup Node.js App (cPanel)**

| Field | Nilai |
| --- | --- |
| Node.js version | 20.x (atau versi yang tersedia ≥ 18.17) |
| Application mode | Production |
| Application root | `smks-muara` (relatif terhadap home) |
| Application URL | domain / subdomain yang diinginkan |
| Application startup file | `server.js` (lihat §14.3) |

**Tahap 3 — Install & Build (Terminal)**

```bash
cd /home/USER/smks-muara
npm install
npm run build
```

> ⚠️ **Jangan unggah `node_modules` dan `.next` dari komputer lokal.** Binary Sharp dan SWC bersifat platform-specific. Folder `node_modules` harus di-install di server Linux, dan `.next` harus di-build di server.

**Tahap 4 — Restart**

Kembali ke cPanel → Setup Node.js App → klik **Restart** pada aplikasi.

**Tahap 5 — Verifikasi**

```bash
curl -I https://domain-anda.sch.id
#Harus: HTTP/2 200

# endpoint optimasi gambar (memverifikasi Sharp aktif)
curl -I "https://domain-anda.sch.id/_next/image?url=%2Fgallery%2F20103774-4.jpg&w=640&q=75"
# harus: HTTP/2 200, Content-Type: image/*
```

### 14.3 `server.js` — Startup File untuk Passenger

Passenger memerlukan file JavaScript sebagai startup. Buat `server.js` di root proyek:

```js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res, parse(req.url, true))).listen(port, () => {
    console.log(`> SMKS Muara Indonesia siap di port ${port}`);
  });
});
```

Tambahkan script pada `package.json` bila diperlukan:

```json
"start": "node server.js"
```

> Alternatif: set startup file ke `node_modules/next/dist/bin/next` dengan argumen `start`. Pendekatan `server.js` lebih andal di Passenger.

### 14.4 Environment Variable di cPanel

Pada halaman Setup Node.js App, tambahkan:

| Variabel | Nilai |
| --- | --- |
| `NODE_ENV` | `production` |

`PORT` diinject otomatis oleh Passenger.

### 14.5 Troubleshooting

| Gejala | Penyebab | Solusi |
| --- | --- | --- |
| `503 Service Unavailable` | Passenger gagal start | Lihat error log di cPanel → **Errors**; pastikan `server.js` ada |
| `Cannot find module 'next'` | `npm install` belum dijalankan di app root | `cd /home/USER/smks-muara && npm install` |
| `Cannot find module './225.js'` | Cache build rusak | `rm -rf .next && npm run build` |
| Gambar tidak teroptimasi / error 500 di `/_next/image` | Sharp gagal ter-install (biner salah platform) | `npm rebuild sharp` atau `rm -rf node_modules && npm install` di server |
| Halaman kosong | `.next` tidak dibangun di server | Jalankan `npm run build` di server |
| Halaman lama masih tampil | App belum direstart | cPanel → **Restart** |
| `EADDRINUSE` | Port dipakai proses lain | `Restart` aplikasi; pastikan tidak ada proses manual berjalan |
| Out of memory saat build | Batas memory shared hosting | `NODE_OPTIONS=--max-old-space-size=1024 npm run build` |
| 404 pada sub-path | Passenger document root salah | Pastikan Application root & URL sudah sesuai |
| `.htaccess` rewrite bentrok | Aturan Apache lama | Nonaktifkan rewrite pada domain yang memakai aplikasi Node |

### 14.6 Alternatif: Standalone Output (VPS)

Untuk VPS atau hosting dengan kontrol penuh, `output: "standalone"` menghasilkan server mandiri (~fewer MB `node_modules`):

```js
// next.config.js
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
};
```

Setelah build, wajib menyalin dua folder secara manual:

```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
node .next/standalone/server.js
```

### 14.7 Checklist Pra-Deploy

- [ ] `npm run build` sukses tanpa error
- [ ] `npx tsc --noEmit` bersih
- [ ] Testimoni sudah diganti dengan ulasan asli
- [ ] Logo dioptimasi (format WebP/PNG-8, < 50 KB)
- [ ] Metadata SEO lengkap (OG image, canonical, sitemap)
- [ ] Favicon & `icon.png` sesuai
- [ ] Uji di domain staging sebelum produksi
- [ ] Backup file `.env`/konfigurasi cPanel
- [ ] SSL aktif (HTTPS)

---

## 15. Gap & Roadmap

### 15.1 Gap Teridentifikasi

| # | Gap | Dampak | Prioritas |
| --- | --- | --- | --- |
| 1 | Testimoni masih data contoh | Mergah dengan ulasan asli | **Tinggi** |
| 2 | Tombol PPDB mengarah ke `#kontak`, belum ke form/url PPDB | Jalur konversi utama belum lengkap | **Tinggi** |
| 3 | Data kepala sekolah, ekstrakurikuler, berita & jadwal PPDB masih placeholder | Konten belum kredibel sampai diganti data asli | **Tinggi** |
| 4 | Logo PNG 317 KB untuk slot 32×32 | Page weight naik ~317 KB | Sedang |
| 5 | Tanpa Open Graph / Twitter Card | Pratinjau berbagi media sosial kosong | Sedang |
| 6 | Tanpa `sitemap.xml` & `robots.txt` | Indexasi engine pencari terbatas | Sedang |
| 7 | Tanpa structured data (JSON-LD `School`) | Rich result Google tidak tersedia | Sedang |
| 8 | Tanpa skip link | Aksesibilitas keyboard | Sedang |
| 9 | `next@14.2.5` punya advisory CVE | Risiko keamanan | **Tinggi** (pra-produksi) |
| 10 | `tsconfig` `strict: false` | Type safety longgar | Rendah |
| 11 | Tanpa pengujian otomatis | Regresi tidak terdeteksi | Sedang |
| 12 | Section Fasilitas hanya 3 angka | Terasa sepi | Rendah |

> Gap #1 "menu navigasi mobile" dan sebagian Gap #8 (`<main>` landmark + `:focus-visible`) sudah tertutup pada revisi navbar ini.

### 15.2 Roadmap

**Fase 1 — Before Production**
1. Ganti `testimonials[]` dengan ulasan asli dari Google Maps.
2. Ganti placeholder di `src/lib/siteData.ts` (kepala sekolah, ekstrakurikuler, berita, jadwal PPDB) dengan data asli.
3. Tentukan URL/form PPDB dan arahkan CTA ke sana.
4. Upgrade Next.js ke rilis yang sudah dipatch.
5. Optimasi logo (WebP/PNG-8) dan kurangi ukuran aset gambar.


**Fase 2 — Visibility**
6. Tambahkan `opengraph-image` + metadata Open Graph/Twitter.
7. Buat `sitemap.xml` & `robots.txt` (atau `app/sitemap.ts` & `app/robots.ts`).
8. Tambahkan JSON-LD `schema.org/School` (NPSN, alamat, koordinat, jam operasional).
9. Tambah halaman `/kontak` terpisah dengan form.

**Fase 3 — Quality**
10. Lighthouse CI untuk memblokir regresi performa.
11. Uji end-to-end dengan Playwright (navigasi, carousel, form).
12. Ubah `tsconfig` ke `strict: true`.
13. Setup CI/CD (GitHub Actions → deploy ke cPanel via FTP/SSH).
14. Galeri fasilitas-fasilitas (lab, perpustakaan, ruang kelas).

---

## 16. Referensi

| Sumber | Tautan |
| --- | --- |
| Next.js Documentation | https://nextjs.org/docs |
| Next.js Image Optimization | https://nextjs.org/docs/app/building-your-application/optimizing/images |
| Next.js Self-hosting | https://nextjs.org/docs/app/building-your-application/deploying/self-hosting |
| React Documentation | https://react.dev |
| TypeScript Handbook | https://www.typescriptlang.org/docs/handbook/ |
| Tailwind CSS Documentation | https://tailwindcss.com/docs |
| Embla Carousel | https://www.embla-carousel.com/get-started |
| Lucide Icons | https://lucide.dev |
| Sharp | https://sharp.pixelplumbing.com |
| cPanel Node.js Documentation | https://docs.cpanel.net/cpanel/software/application-manager/ |
| Google Maps Embed | https://developers.google.com/maps/documentation/embed |
| Web Vitals | https://web.dev/articles/vitals |

---

## Lampiran A — Ringkasan Perintah

```bash
# Development
npm install
npm run dev

# Verifikasi
npx tsc --noEmit
npm run build

# Produksi
npm run start

# Deployment cPanel
cd /home/USER/smks-muara
npm install
npm run build
# lalu: cPanel → Setup Node.js App → Restart
```

## Lampiran B — Peta Section ke Anchor

| Anchor | Section |
| --- | --- |
| `#beranda` | Hero |
| `#profil` | Profil & Statistik |
| `#kepala-sekolah` | Kepala Sekolah |
| `#kurikulum` | Kurikulum & Prospek Karier |
| `#fasilitas` | Fasilitas |
| `#ekstrakurikuler` | Ekstrakurikuler |
| `#galeri` | Galeri |
| `#berita` | Berita & Informasi (+ strip Informasi PPDB) |
| `#testimoni` | Testimoni |
| `#kontak` | Kontak & Peta |

Grup dropdown pada navbar:

| Grup | Isi |
| --- | --- |
| Profil Sekolah | `#profil`, `#kepala-sekolah`, `#kurikulum`, `#fasilitas` |
| Kesiswaan | `#ekstrakurikuler`, `#galeri`, `#berita` |

---

*Dokumen ini-living: perbarui setiap kali ada perubahan arsitektur, token desain, atau prosedur deployment.*
