import {
  BookOpen,
  Users,
  ShieldCheck,
  HeartHandshake,
  Dumbbell,
  Goal,
  Palette,
  Music,
  CalendarDays,
  FileText,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  desc?: string;
};

export type NavEntry = {
  label: string;
  href?: string;
  items?: NavItem[];
};

/**
 * Struktur navigasi utama. Dipakai oleh SiteNav (desktop + mobile) sekaligus
 * section yang butuh tahu daftar anchor, sehingga tidak ada href yang dobel.
 */
export const navEntries: NavEntry[] = [
  { label: "Beranda", href: "#beranda" },
  {
    label: "Profil Sekolah",
    items: [
      { label: "Profil Umum", href: "#profil", desc: "Statistik, akreditasi & data sekolah" },
      { label: "Kepala Sekolah", href: "#kepala-sekolah", desc: "Profil dan sapaan kepala sekolah" },
      { label: "Kurikulum", href: "#kurikulum", desc: "Program keahlian Manajemen Perkantoran" },
      { label: "Fasilitas", href: "#fasilitas", desc: "Ruang kelas, laboratorium & perpustakaan" },
    ],
  },
  {
    label: "Kesiswaan",
    items: [
      { label: "Ekstrakurikuler", href: "#ekstrakurikuler", desc: "Kegiatan pilihan di luar kelas" },
      { label: "Galeri", href: "#galeri", desc: "Potret kegiatan sekolah" },
      { label: "Berita & Informasi", href: "#berita", desc: "Kabar terbaru & info PPDB" },
    ],
  },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export const allNavAnchors: string[] = navEntries.flatMap((entry) =>
  entry.items ? entry.items.map((item) => item.href) : entry.href ? [entry.href] : []
);

export type Principal = {
  name: string;
  title: string;
  greeting: string;
  message: string;
  signature: string;
  photo: string | null;
  initials: string;
  facts: { label: string; value: string }[];
};

/**
 * PLACEHOLDER - ganti nama, jabatan, foto, dan teks sapaan dengan data asli.
 */
export const principal: Principal = {
  name: "Nama Kepala Sekolah",
  title: "Kepala Sekolah",
  greeting: "Assalamu'alaikum warahmatullahi wabarakatuh.",
  message:
    "Selamat datang di SMKS Muara Indonesia Jakarta. Kami menyiapkan siswa yang siap bekerja, berkarakter, dan percaya diri. Paragraf ini masih placeholder dan sebaiknya diganti dengan sapaan asli kepala sekolah.",
  signature: "NIP. -",
  photo: null,
  initials: "KS",
  facts: [
    { label: "Akreditasi", value: "A" },
    { label: "Masa jabatan", value: "20-" },
    { label: "Lembaga", value: "Yayasan Al-Chairiyah" },
  ],
};

export type Extracurricular = {
  name: string;
  desc: string;
  schedule: string;
  icon: LucideIcon;
};

/**
 * PLACEHOLDER - contoh kegiatan ekstrakurikuler. Ganti dengan kegiatan yang
 * benar-benar dijalankan sekolah.
 */
export const extracurriculars: Extracurricular[] = [
  {
    name: "Rohis / IPDA",
    desc: "Kajian keislaman dan pembiasaan akhlak di lingkungan kerja.",
    schedule: "Latihan rutin mingguan",
    icon: BookOpen,
  },
  {
    name: "Pramuka",
    desc: "Pembentukan kedisiplinan, kemandirian, dan kepemimpinan siswa.",
    schedule: "Latihan rutin mingguan",
    icon: ShieldCheck,
  },
  {
    name: "PMR",
    desc: "Keterampilan pertolongan pertama dan kegiatan sosial kemasyarakatan.",
    schedule: "Latihan rutin mingguan",
    icon: HeartHandshake,
  },
  {
    name: "Pencak Silat",
    desc: "Pembinaan fisik, keberanian, dan sportivitas lewat seni bela diri.",
    schedule: "2x latihan per minggu",
    icon: Users,
  },
  {
    name: "Futsal",
    desc: "Pembinaan teknik dan strategi bermain beregu untuk tim sekolah.",
    schedule: "2x latihan per minggu",
    icon: Goal,
  },
  {
    name: "Basket",
    desc: "Latihan fisik, kerja sama tim, dan pengembangan mental yang sehat.",
    schedule: "2x latihan per minggu",
    icon: Dumbbell,
  },
  {
    name: "Kaligrafi",
    desc: "Keterampilan menulis Arab sebagai mutu menulis yang terampil.",
    schedule: "1x latihan per minggu",
    icon: Palette,
  },
  {
    name: "Choir & Marching Band",
    desc: "Latihan vokal dan ansambel musik untuk memperkaya seni sekolah.",
    schedule: "1x latihan per minggu",
    icon: Music,
  },
];

export type NewsCategory = "PPDB" | "Kegiatan" | "Prestasi" | "Informasi";

export type NewsItem = {
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

/**
 * PLACEHOLDER - contoh artikel berita sekolah.
 */
export const news: NewsItem[] = [
  {
    title: "Pendaftaran PPDB Tahun Ajaran 2026/2027 Telah Dibuka",
    category: "PPDB",
    date: "15 Oktober 2026",
    excerpt:
      "Pendaftaran peserta didik baru telah dibuka untuk tahun ajaran 2026/2027. Kuota terbatas dan dapat diisi lebih awal melalui pendaftaran online atau langsung ke sekolah.",
    image: "/gallery/20103774-4.jpg",
    featured: true,
  },
  {
    title: "Siswa SMKS Muara Indonesia Raih Juara Lomba Keterampilan",
    category: "Prestasi",
    date: "2 Oktober 2026",
    excerpt:
      "Tim Manajemen Perkantoran meraih juara pada lomba keterampilan administrasi perkantoran tingkat nasional.",
    image: "/gallery/20103774-5.jpg",
  },
  {
    title: "Workshop Teknologi Perkantoran Digital",
    category: "Kegiatan",
    date: "20 September 2026",
    excerpt:
      "Praktisi perkantoran digital berbagi penggunaan tools terbaru bagi siswa kelas XI.",
    image: "/gallery/20103774-6.jpg",
  },
  {
    title: "Pengambilan Rapor dan Konsultasi Wali Murid",
    category: "Informasi",
    date: "12 September 2026",
    excerpt:
      "Pengambilan rapor dilaksanakan serentak pada 27 September 2026. Wali murid dapat berkonsultasi dengan wali kelas pada jam yang telah ditentukan.",
    image: "/gallery/20103774-4.jpg",
  },
];

export type InfoItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

/**
 * PLACEHOLDER - informasi resmi PPDB. Sesuaikan tanggal dan kontak.
 */
export const ppdbInfo: InfoItem[] = [
  { label: "Gelombang 1", value: "1 Oktober - 30 November 2026", icon: CalendarDays },
  { label: "Gelombang 2", value: "1 Desember 2026 - 15 Januari 2027", icon: CalendarDays },
  { label: "Syarat Dokumen", value: "Fotokopi rapor, akta lahir, dan KK", icon: FileText },
  { label: "Pendaftaran Offline", value: "021-8500965 (08.00-14.00 WIB)", icon: PhoneCall },
];
