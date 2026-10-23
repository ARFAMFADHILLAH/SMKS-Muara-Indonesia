import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { principal } from "@/lib/siteData";

export default function PrincipalSection() {
  return (
    <section id="kepala-sekolah" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="mb-10 max-w-2xl md:mb-14">
            <SectionLabel>Kepala Sekolah</SectionLabel>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Sapaan Kepala Sekolah
            </h2>
            <p className="text-slate-600">
              Sambutan langsung dari kepala sekolah tentang arah pendidikan, karakter, dan harapan
              bagi para siswa SMKS Muara Indonesia Jakarta.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 hidden h-full w-full border border-amber-500/40 md:block" />
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-slate-200/70 bg-slate-100">
                  {principal.photo ? (
                    <Image
                      src={principal.photo}
                      alt={`${principal.name}, ${principal.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-50 text-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-slate-300 text-2xl font-semibold text-slate-400">
                        {principal.initials}
                      </span>
                      <span className="max-w-[80%] text-xs uppercase tracking-[0.2em] text-slate-400">
                        Slot foto kepala sekolah
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {principal.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-amber-600">
                  {principal.title}
                </p>
              </div>

              <Quote className="mb-3 h-6 w-6 text-emerald-600" />
              <p className="mb-3 text-base font-medium text-slate-900">{principal.greeting}</p>
              <p className="leading-relaxed text-slate-600">{principal.message}</p>

              <div className="mt-8 border-t border-slate-200/70 pt-6">
                <p className="text-sm font-semibold text-slate-900">{principal.name}</p>
                <p className="text-xs text-slate-500">{principal.signature}</p>
              </div>

              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-slate-200/70 pt-6 sm:grid-cols-3">
                {principal.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-slate-500">{fact.label}</dt>
                    <dd className="mt-1 font-medium text-slate-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
