"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/20103774-4.jpg",
    alt: "Suasana kegiatan SMKS Muara Indonesia Jakarta",
    caption: "Kegiatan Belajar",
  },
  {
    src: "/gallery/20103774-5.jpg",
    alt: "Aktivitas siswa SMKS Muara Indonesia Jakarta",
    caption: "Aktivitas Siswa",
  },
  {
    src: "/gallery/20103774-6.jpg",
    alt: "Lingkungan sekolah SMKS Muara Indonesia Jakarta",
    caption: "Lingkungan Sekolah",
  },
];

const autoplayOptions = { delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true };

export default function SchoolGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSlideCount(emblaApi.scrollSnapList().length);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden border border-slate-200/70" ref={emblaRef}>
        <div className="flex">
          {galleryImages.map((image, index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[16/7]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/60 to-transparent p-4 md:p-6">
                <span className="text-sm text-white/90">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 border border-slate-200/70 bg-white p-2 transition hover:bg-slate-50 md:left-4"
        aria-label="Gambar sebelumnya"
      >
        <ChevronLeft className="h-4 w-4 text-slate-900" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 border border-slate-200/70 bg-white p-2 transition hover:bg-slate-50 md:right-4"
        aria-label="Gambar berikutnya"
      >
        <ChevronRight className="h-4 w-4 text-slate-900" />
      </button>

      <div className="mt-4 flex items-center gap-2">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 w-6 transition-colors ${index === selectedIndex ? "bg-amber-500" : "bg-slate-300"}`}
            aria-label={`Tampilkan slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
