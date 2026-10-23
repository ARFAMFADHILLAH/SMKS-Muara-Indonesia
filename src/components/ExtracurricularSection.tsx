import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { extracurriculars } from "@/lib/siteData";

export default function ExtracurricularSection() {
  return (
    <section id="ekstrakurikuler" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="mb-10 max-w-2xl md:mb-14">
            <SectionLabel>Ekstrakurikuler</SectionLabel>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Kegiatan di luar kelas
            </h2>
            <p className="text-slate-600">
              Selain pembelajaran di kelas, siswa dapat mengembangkan minat, bakat, dan karakter
              melalui kegiatan ekstrakurikuler yang dikelola sekolah.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extracurriculars.map((item) => (
              <div
                key={item.name}
                className="group flex h-full flex-col border border-slate-200/70 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-emerald-600/30 bg-emerald-600/10 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900">{item.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <p className="mt-auto border-t border-slate-100 pt-3 text-xs uppercase tracking-[0.15em] text-slate-500">
                  {item.schedule}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
