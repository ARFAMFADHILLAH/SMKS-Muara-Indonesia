# SMKS Muara Indonesia Jakarta — Company Profile

Website profil dan landing page **SMKS Muara Indonesia Jakarta**, sekolah menengah kejuruan swasta terakreditasi A di Jatinegara, Jakarta Timur. Situs ini menyajikan profil sekolah, program keahlian, fasilitas, galeri kegiatan, testimoni, serta informasi kontak dan lokasi dalam satu halaman yang bersih dan responsif.

Dibangun dengan **Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS 3**, dengan animasi ringan (fade-up & count-up), carousel galeri, dan peta lokasi interaktif.

## Informasi Sekolah

| Data | Keterangan |
| --- | --- |
| Nama | SMKS MUARA INDONESIA JAKARTA |
| NPSN | 20103774 |
| Akreditasi | A |
| Status | Swasta (Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara) |
| Kurikulum | SMK Merdeka Manajemen Perkantoran (K) |
| Penyelenggaraan | Sehari Penuh / 5 Hari |
| Alamat | JL. Cipinang Muara 3 Kav PLN, Kec. Jatinegara, Kota Adm. Jakarta Timur, D.K.I. Jakarta |
| Koordinat | -6.2213, 106.8929 |
| Telepon | 021-8500965 |
| Email | muaraindonesia965@yahoo.co.id |

## Fitur Utama

**Header**
- Navbar tetap (fixed) dengan logo sekolah dan menu Beranda, Profil, Kurikulum, Fasilitas, Galeri, Testimoni, Kontak
- Tombol CTA "Daftar Sekarang (PPDB)" berwarna Amber Gold

**Hero**
- Layout split: teks utama di kiri, foto sekolah di kanan
- Badge akreditasi dan dua tombol CTA
- Animasi staggered fade-up saat halaman pertama dibuka

**Profil**
- Statistik sekolah dengan animasi count-up (318 siswa, 16 guru, 6.000 m², akreditasi A)
- Ringkasan profil dan kartu data sekolah (kurikulum, rombel, ruang kelas, lab, perpustakaan, daya listrik)

**Keunggulan**
- Section berlatar navy dengan 4 alasan memilih sekolah (Terakreditasi A, Kurikulum SMK Merdeka, Praktik Kerja Industri, Lingkungan Islami)

**Kurikulum**
- Penjelasan program keahlian Manajemen Perkantoran dan daftar kompetensi
- Daftar prospek karier lulusan

**Fasilitas**
- Angka fasilitas dengan animasi count-up (21 ruang kelas, 2 laboratorium, 1 perpustakaan)

**Galeri**
- Carousel otomatis (auto-slide 4 detik) dengan navigasi panah dan indikator, serta efek hover zoom

**Testimoni**
- Kartu ulasan dengan rating bintang dan tautan ke ulasan Google Maps

**Kontak & Lokasi**
- Alamat lengkap, telepon, email, dan tombol PPDB
- Peta lokasi interaktif (Google Maps embed)

**Footer**
- Identitas sekolah, tautan Instagram & Facebook, dan hak cipta yayasan

## Cara Menjalankan

```bash
npm install        # install dependency
npm run dev        # jalankan mode development → http://localhost:3000
```

## Build Production

```bash
npm run build      # build aplikasi
npm run start      # jalankan hasil build
```

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| Next.js 14 (App Router) | Framework, routing, optimasi gambar |
| React 18 + TypeScript | Komponen UI dan type safety |
| Tailwind CSS 3 | Styling utility-first |
| Embla Carousel | Carousel galeri (react + autoplay) |
| Lucide React | Ikon |
| Plus Jakarta Sans | Tipografi (Google Fonts) |
| Google Maps Embed | Peta lokasi interaktif |

## Struktur Direktori

```
├── public/
│   ├── favicon.png                      # favicon situs
│   ├── icon.png                         # ikon app
│   ├── logo/                            # logo sekolah
│   └── gallery/                         # foto galeri sekolah
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # root layout + font + metadata
│   │   ├── page.tsx                     # landing page utama
│   │   └── globals.css                  # style global + animasi
│   └── components/
│       ├── SchoolGallery.tsx            # carousel galeri
│       ├── ScrollReveal.tsx             # animasi on-scroll (IntersectionObserver)
│       ├── CountUp.tsx                  # animasi angka dari 0
│       └── Testimonials.tsx             # kartu ulasan + rating
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Skema Warna

Turunan dari logo resmi sekolah:

| Peran | Warna | Kode |
| --- | --- | --- |
| Latar | Off-White | `#F8FAFC` |
| Card | Putih | `#FFFFFF` |
| Teks & Struktur | Dark Slate / Navy Charcoal | `#0F172A` |
| Aksen Utama | Amber Gold (CTA & badge) | `#F59E0B` |
| Aksen Sekunder | Emerald Green (ikon & statistik) | `#059669` |

## Catatan

- **Foto & logo**: letakkan file di `public/logo/` dan `public/gallery/`. Untuk mengganti gambar, cukup tukar file dengan nama yang sama atau sesuaikan path pada `src/components/SchoolGallery.tsx` dan `src/app/page.tsx`.
- **Testimoni**: saat ini menggunakan contoh ulasan. Ganti isi array `testimonials` di `src/components/Testimonials.tsx` dengan ulasan asli dari Google Maps.
- **Peta lokasi**: menggunakan embed Google Maps berbasis koordinat tanpa API key. Untuk marker yang lebih presisi, sesuaikan parameter `q`/`ll` pada `iframe` di `src/app/page.tsx`.
- **Animasi**: menghormati `prefers-reduced-motion` — pengguna yang mengaktifkan pengurangan gerak akan melihat konten tanpa animasi.

---

© 2026 Arfa Muhammad Fadhillah.
