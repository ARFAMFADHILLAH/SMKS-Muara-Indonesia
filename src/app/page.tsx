import React from "react";
import { BookOpen, MapPin, CheckCircle2, Instagram, Facebook } from "lucide-react";
import SchoolGallery from "@/components/SchoolGallery";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="flex items-center gap-2">
            <img src="/logo/logo-smks-muara-indonesia-removebg-preview.png" alt="Logo SMKS Muara Indonesia Jakarta" className="h-8 w-auto" />
            <span className="text-sm font-semibold tracking-tight text-slate-900 md:text-base">
              SMKS MUARA INDONESIA JAKARTA
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#beranda" className="hover:text-slate-900">Beranda</a>
            <a href="#profil" className="hover:text-slate-900">Profil</a>
            <a href="#kurikulum" className="hover:text-slate-900">Kurikulum</a>
            <a href="#fasilitas" className="hover:text-slate-900">Fasilitas</a>
            <a href="#galeri" className="hover:text-slate-900">Galeri</a>
            <a href="#kontak" className="hover:text-slate-900">Kontak</a>
          </div>
          <a href="#kontak" className="btn-gold">Daftar Sekarang (PPDB)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="beranda" className="pt-28 md:pt-36">
        <div className="container">
          <div className="max-w-3xl">
            <p className="fade-up fade-up-delay-1 mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">SMKS Muara Indonesia Jakarta</p>
            <h1 className="fade-up fade-up-delay-2 mb-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Wujudkan masa depan karier yang profesional
            </h1>
            <p className="fade-up fade-up-delay-3 mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Sekolah kejuruan swasta di Jatinegara, Jakarta Timur di bawah naungan Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara.
              Terakreditasi A dengan Kurikulum SMK Merdeka Manajemen Perkantoran.
            </p>
            <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-3">
              <a href="#kontak" className="btn-gold">Daftar Sekarang (PPDB)</a>
              <a href="#profil" className="btn-ghost">Profil Sekolah</a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="profil" className="section">
        <div className="container">
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
            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Profil</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Sekolah kejuruan berbasis kompetensi
                </h2>
                <p className="mb-6 max-w-2xl leading-relaxed text-slate-600">
                  SMKS Muara Indonesia Jakarta berlokasi di JL. Cipinang Muara 3 Kav PLN, Kecamatan Jatinegara, Jakarta Timur.
                  Berstatus Swasta dibawah naungan Yayasan Pendidikan Islam Al-Chairiyah Cipinang Muara. Sistem pembelajaran sehari penuh 5 hari.
                </p>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="border-t border-slate-200/70 pt-4">
                    <p className="text-slate-500">NPSN</p>
                    <p className="mt-1 font-medium text-slate-900">20103774</p>
                  </div>
                  <div className="border-t border-slate-200/70 pt-4">
                    <p className="text-slate-500">Email</p>
                    <p className="mt-1 font-medium text-slate-900">muaraindonesia965@yahoo.co.id</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="border border-slate-200/70 p-6 md:p-8">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500">Data Sekolah</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-600">Kurikulum</span>
                      <span className="text-slate-900">SMK Merdeka Manajemen Perkantoran</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-600">Rombongan Belajar</span>
                      <span className="text-slate-900">11</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-600">Ruang Kelas</span>
                      <span className="text-slate-900">21</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-600">Laboratorium</span>
                      <span className="text-slate-900">2</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-600">Perpustakaan</span>
                      <span className="text-slate-900">1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section id="kurikulum" className="section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Kurikulum</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Program Keahlian Manajemen Perkantoran
              </h2>
              <p className="text-slate-600">
                Kurikulum SMK Merdeka dengan sistem pembelajaran 5 hari penuh untuk membentuk lulusan yang terampil dan siap kerja.
              </p>
            </div>
            <div className="border border-slate-200/70 p-6 md:p-10">
              <div className="mb-6 flex items-start gap-4">
                <div className="mt-1 text-emerald-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">SMK Merdeka Manajemen Perkantoran (K)</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
                    Membekali kompetensi administrasi perkantoran modern, teknologi perkantoran digital, korespondensi, pelayanan prima, dan manajemen arsip.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Administrasi Perkantoran Modern",
                  "Korespondensi & Arsip Digital",
                  "Teknologi Perkantoran & Komputer",
                  "Pelayanan Prima & Etika Bisnis",
                  "Praktik Kerja Industri (Prakerin)",
                  "Manajemen Surat & Dokumen",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
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
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Fasilitas</p>
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

      {/* Galeri Section */}
      <section id="galeri" className="section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Galeri</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Suasana sekolah
              </h2>
              <p className="text-slate-600">Potret kegiatan belajar dan fasilitas SMKS Muara Indonesia Jakarta.</p>
            </div>
            <SchoolGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Kontak & Lokasi Section */}
      <section id="kontak" className="section">
        <div className="container">
          <ScrollReveal className="grid gap-10 border-t border-slate-200/70 pt-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Kontak</p>
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
              <div className="flex h-[280px] items-center justify-center border border-slate-200/70 bg-slate-50 md:h-full">
                <div className="text-center text-sm text-slate-500">
                  <MapPin className="mx-auto mb-2 h-5 w-5" />
                  <p>Peta Lokasi</p>
                  <p className="mt-1 text-xs">Jatinegara, Jakarta Timur</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
