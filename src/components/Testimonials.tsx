import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nama Siswa",
    role: "Alumni Manajemen Perkantoran",
    rating: 5,
    quote: "Belajar di SMKS Muara Indonesia membekali saya keterampilan perkantoran yang langsung terpakai saat bekerja.",
  },
  {
    name: "Nama Orang Tua",
    role: "Wali Murid",
    rating: 5,
    quote: "Guru-gurunya komunikatif dan lingkungan sekolahnya mendukung pembentukan karakter anak.",
  },
  {
    name: "Nama Siswa",
    role: "Siswa Kelas XI",
    rating: 4,
    quote: "Fasilitas lab dan praktiknya membantu saya memahami materi administrasi perkantoran dengan lebih mudah.",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=SMKS+Muara+Indonesia+Jakarta+Jl.+Cipinang+Muara+III+Kav.+PLN";

export default function Testimonials() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-slate-200/70 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
          >
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${
                    s < t.rating ? "fill-amber-500 text-amber-500" : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-700">"{t.quote}"</p>
            <div>
              <p className="text-sm font-medium text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="font-medium text-slate-900">4,7</span> dari 31 ulasan Google
        </span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 underline underline-offset-4 hover:text-emerald-700"
        >
          Lihat semua ulasan di Google Maps
        </a>
      </div>
    </div>
  );
}
