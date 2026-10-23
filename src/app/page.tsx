import React from "react";
import Image from "next/image";
import {
  BookOpen,
  MapPin,
  CheckCircle2,
  Instagram,
  Facebook,
  Award,
  GraduationCap,
  Briefcase,
  Landmark,
} from "lucide-react";
import SchoolGallery from "@/components/SchoolGallery";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Testimonials from "@/components/Testimonials";
import SectionLabel from "@/components/SectionLabel";
import SiteNav from "@/components/SiteNav";
import PrincipalSection from "@/components/PrincipalSection";
import ExtracurricularSection from "@/components/ExtracurricularSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
          {/* Hero Section */}
          <header id="beranda" className="pt-28 md:pt-36">
            <div className="container">
              <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-6">
                  <p className="fade-up fade-up-delay-1 mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">
                    SMKS Muara Indonesia Jakarta
                  </p>
                  <h1 className="fade-up fade-up-delay-2 mb-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    Wujudkan masa depan karier yang profesional
                  </h1>
                  <p className="fade-up fade-up-delay-3 mb-8 max-w-xl text-base leading-relaxed text-slate-600">
                    Sekolah kejuruan swasta di Jatinegara, Jakarta Timur di bawah naungan Yayasan Pendidikan Islam
                    Al-Chairiyah Cipinang Muara. Terakreditasi A dengan Kurikulum SMK Merdeka Manajemen Perkantoran.
                  </p>
                  <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-3">
                    <a href="#kontak" className="btn-gold">Daftar Sekarang (PPDB)</a>
                    <a href="#profil" className="btn-ghost">Profil Sekolah</a>
                  </div>
                </div>
                <div className="fade-up fade-up-delay-3 md:col-span-6">
                  <div className="relative">
                    <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-emerald-600/30 md:block" />
                    <div className="relative aspect-[4/5] w-full overflow-hidden border border-slate-200/70">
                      <Image
                        src="/gallery/20103774-4.jpg"
                        alt="Suasana SMKS Muara Indonesia Jakarta"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

        {/* Profil Section */}
        <section id="profil" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl md:mb-14">
                <SectionLabel>Profil</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Sekolah kejuruan berbasis kompetensi
                </h2>
                <p className="text-slate-600">
                  SMKS Muara Indonesia Jakarta berlokasi di Jatinegara, Jakarta Timur. Berstatus Swasta di bawah naungan
                  Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara dengan sistem pembelajaran sehari penuh 5 hari.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-slate-200/70 py-10 md:grid-cols-4">
                <div>
                  <div className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">A</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Akreditasi</div>
                </div>
                <div>
                  <CountUp end={318} className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl" />
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Total Siswa</div>
                </div>
                <div>
                  <CountUp end={16} className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl" />
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Tenaga Pengajar</div>
                </div>
                <div>
                  <CountUp end={6000} suffix=" m²" className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl" />
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Luas Lahan</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12 grid gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">Tentang Sekolah</h3>
                  <p className="leading-relaxed text-slate-600">
                    SMKS Muara Indonesia Jakarta menyelenggarakan pendidikan kejuruan dengan fokus pada kompetensi
                    administrasi perkantoran modern. Siswa dibekali keterampilan praktis, karakter, dan pengalaman
                    kerja industri agar siap bersaing di dunia kerja.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 text-sm">
                    <div className="border-t border-slate-200/70 pt-4">
                      <p className="text-slate-500">NPSN</p>
                      <p className="mt-1 font-medium text-slate-900">20103774</p>
                    </div>
                    <div className="border-t border-slate-200/70 pt-4">
                      <p className="text-slate-500">Status</p>
                      <p className="mt-1 font-medium text-slate-900">Swasta</p>
                    </div>
                    <div className="border-t border-slate-200/70 pt-4">
                      <p className="text-slate-500">Telepon</p>
                      <p className="mt-1 font-medium text-slate-900">021-8500965</p>
                    </div>
                    <div className="border-t border-slate-200/70 pt-4">
                      <p className="text-slate-500">Email</p>
                      <p className="mt-1 font-medium text-slate-900">muaraindonesia965@yahoo.co.id</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="border border-slate-200/70 p-6 md:p-8">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">Data Sekolah</p>
                    <ul className="divide-y divide-slate-100 text-sm">
                      {[
                        ["Kurikulum", "SMK Merdeka Manajemen Perkantoran"],
                        ["Penyelenggaraan", "Sehari Penuh / 5 Hari"],
                        ["Rombongan Belajar", "11"],
                        ["Ruang Kelas", "21"],
                        ["Laboratorium", "2"],
                        ["Perpustakaan", "1"],
                        ["Daya Listrik", "41.500 VA"],
                      ].map(([label, value], i) => (
                        <li key={i} className="flex items-start justify-between gap-4 py-3">
                          <span className="text-slate-500">{label}</span>
                          <span className="text-right font-medium text-slate-900">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Kepala Sekolah Section */}
        <PrincipalSection />

        {/* Kenapa Section */}
        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl md:mb-14">
                <SectionLabel light>Keunggulan</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Kenapa memilih SMKS Muara Indonesia Jakarta
                </h2>
                <p className="text-slate-400">
                  Empat alasan utama sekolah ini menjadi pilihan tepat untuk masa depan putra-putri Anda.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Award,
                    title: "Terakreditasi A",
                    desc: "Mutu pendidikan telah terverifikasi secara nasional.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Kurikulum SMK Merdeka",
                    desc: "Materi pembelajaran relevan dengan kebutuhan dunia kerja.",
                  },
                  {
                    icon: Briefcase,
                    title: "Praktik Kerja Industri",
                    desc: "Pengalaman kerja nyata sebelum siswa menyelesaikan studi.",
                  },
                  {
                    icon: Landmark,
                    title: "Lingkungan Islami",
                    desc: "Pembinaan karakter dan akhlak di bawah naungan yayasan.",
                  },
                ].map((k, i) => (
                  <div key={i} className="border-t border-slate-700/70 pt-6 transition-transform duration-300 hover:-translate-y-1">
                    <k.icon className="mb-4 h-6 w-6 text-emerald-400" />
                    <h3 className="mb-2 text-lg font-semibold">{k.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{k.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Kurikulum Section */}
        <section id="kurikulum" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Kurikulum</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Program Keahlian Manajemen Perkantoran
                </h2>
                <p className="text-slate-600">
                  Kurikulum SMK Merdeka dengan sistem pembelajaran 5 hari penuh untuk membentuk lulusan yang terampil dan siap kerja.
                </p>
              </div>
              <div className="grid border border-slate-200/70 md:grid-cols-2">
                <div className="border-b border-slate-200/70 p-6 md:border-b-0 md:border-r md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-slate-900">SMK Merdeka Manajemen Perkantoran (K)</h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-slate-600">
                    Membekali kompetensi administrasi perkantoran modern, teknologi perkantoran digital, korespondensi,
                    pelayanan prima, dan manajemen arsip.
                  </p>
                  <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {[
                      "Administrasi Perkantoran Modern",
                      "Korespondensi & Arsip Digital",
                      "Teknologi Perkantoran & Komputer",
                      "Pelayanan Prima & Etika Bisnis",
                      "Praktik Kerja Industri (Prakerin)",
                      "Manajemen Surat & Dokumen",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-slate-900">Prospek Karier Lulusan</h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-slate-600">
                    Lulusan dipersiapkan untuk memasuki dunia kerja maupun melanjutkan usaha secara mandiri.
                  </p>
                  <ul className="divide-y divide-slate-100">
                    {[
                      "Administrasi & Staf Perkantoran",
                      "Sekretaris & Resepsionis",
                      "Staf Operasional Perusahaan",
                      "Wirausaha Mandiri",
                    ].map((job, i) => (
                      <li key={i} className="flex items-center gap-3 py-3 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Fasilitas Section */}
        <section id="fasilitas" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Fasilitas</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Sarana pendukung pembelajaran
                </h2>
                <p className="text-slate-600">
                  Prasarana yang menunjang kegiatan belajar mengajar di SMKS Muara Indonesia Jakarta.
                </p>
              </div>
              <div className="grid gap-8 border-t border-slate-200/70 pt-8 md:grid-cols-3">
                {[
                  { val: 21, label: "Ruang Kelas" },
                  { val: 2, label: "Laboratorium" },
                  { val: 1, label: "Perpustakaan" },
                ].map((f, i) => (
                  <div key={i}>
                    <CountUp end={f.val} className="text-5xl font-semibold tracking-tight text-slate-900" />
                    <div className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{f.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ekstrakurikuler Section */}
        <ExtracurricularSection />

        {/* Galeri Section */}
        <section id="galeri" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Galeri</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Suasana sekolah
                </h2>
                <p className="text-slate-600">Potret kegiatan belajar dan fasilitas SMKS Muara Indonesia Jakarta.</p>
              </div>
              <SchoolGallery />
            </ScrollReveal>
          </div>
        </section>

        {/* Berita Section */}
        <NewsSection />

        {/* Testimoni Section */}
        <section id="testimoni" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Testimoni</SectionLabel>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Kata mereka tentang sekolah kami
                </h2>
                <p className="text-slate-600">
                  Ulasan dari siswa, alumni, dan wali murid SMKS Muara Indonesia Jakarta.
                </p>
              </div>
              <Testimonials />
            </ScrollReveal>
          </div>
        </section>

        {/* Kontak & Lokasi Section */}
        <section id="kontak" className="section">
          <div className="container">
            <ScrollReveal className="grid gap-10 border-t border-slate-200/70 pt-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionLabel>Kontak</SectionLabel>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Lokasi & Informasi</h2>
                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-slate-500">Alamat</p>
                    <p className="mt-1 leading-relaxed text-slate-900">
                      JL. CIPINANG MUARA 3 KAV PLN, Kec. Jatinegara, Kota Adm. Jakarta Timur, Prov. D.K.I. Jakarta
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-500">Telepon</p>
                      <p className="mt-1 text-slate-900">021-8500965</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Email</p>
                      <p className="mt-1 text-slate-900">muaraindonesia965@yahoo.co.id</p>
                    </div>
                  </div>
                  <div>
                    <a href="#kontak" className="btn-gold">Daftar Sekarang (PPDB)</a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="h-[280px] overflow-hidden border border-slate-200/70 md:h-full">
                  <iframe
                    title="Peta lokasi SMKS Muara Indonesia Jakarta"
                    src="https://www.google.com/maps?q=SMKS+Muara+Indonesia+Jakarta&ll=-6.2213,106.8929&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 py-6">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p className="order-1 md:order-none">SMKS Muara Indonesia Jakarta</p>
          <div className="flex items-center gap-4 order-2 md:order-none">
            <a
              href="https://www.instagram.com/smks_mi_jkt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram SMKS Muara Indonesia Jakarta"
              className="text-slate-500 transition-colors hover:text-slate-900"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/smkmuaraindonesia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SMKS Muara Indonesia Jakarta"
              className="text-slate-500 transition-colors hover:text-slate-900"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="order-3 md:order-none text-center md:text-right">
            &copy; {new Date().getFullYear()} Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
