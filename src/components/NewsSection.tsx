import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { news, ppdbInfo, type NewsItem } from "@/lib/siteData";

const categoryStyle: Record<NewsItem["category"], string> = {
  PPDB: "bg-amber-500 text-white",
  Kegiatan: "bg-emerald-600 text-white",
  Prestasi: "bg-slate-900 text-white",
  Informasi: "bg-slate-500 text-white",
};

function CategoryBadge({ category }: { category: NewsItem["category"] }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
        categoryStyle[category]
      }`}
    >
      {category}
    </span>
  );
}

export default function NewsSection() {
  const [featured, ...rest] = news;
  const secondary = rest.slice(0, 2);
  const list = rest.slice(2);

  return (
    <section id="berita" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Berita & Informasi</SectionLabel>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Kabar terbaru sekolah
              </h2>
              <p className="text-slate-600">
                Informasi terkini mengenai kegiatan sekolah, prestasi siswa, serta pendaftaran PPDB.
              </p>
            </div>
            <a href="#kontak" className="btn-ghost shrink-0">
              Lihat semua berita
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="group lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-200/70">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <CategoryBadge category={featured.category} />
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CalendarDays className="h-4 w-4" />
                  {featured.date}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                {featured.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{featured.excerpt}</p>
              <a
                href="#kontak"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline underline-offset-4 transition-colors hover:text-emerald-700"
              >
                Baca selengkapnya
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <div className="flex flex-col gap-6 lg:col-span-5">
              {secondary.map((item) => (
                <article key={item.title} className="group flex gap-4">
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden border border-slate-200/70">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <CategoryBadge category={item.category} />
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                  </div>
                </article>
              ))}

              {list.map((item) => (
                <article key={item.title} className="group flex gap-4">
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden border border-slate-200/70">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <CategoryBadge category={item.category} />
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 border border-slate-200/70 bg-white p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Informasi PPDB
              </h3>
              <a
                href="#kontak"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline underline-offset-4 transition-colors hover:text-emerald-700"
              >
                Hubungi panitia
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ppdbInfo.map((info) => (
                <div key={info.label} className="flex gap-3">
                  <info.icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <dt className="text-sm text-slate-500">{info.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-900">{info.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
