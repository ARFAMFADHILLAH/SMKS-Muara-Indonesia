"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { allNavAnchors, navEntries, type NavEntry } from "@/lib/siteData";

export default function SiteNav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [activeId, setActiveId] = useState("beranda");
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = allNavAnchors.map((href) => document.getElementById(href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: [0, 0.15, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => href === `#${activeId}`;

  const groupIsActive = (entry: NavEntry) =>
    entry.items ? entry.items.some((item) => isActive(item.href)) : false;

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };

  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 140);
  };

  const closeAll = () => {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileGroup(null);
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#beranda" className="flex items-center gap-2" onClick={closeAll}>
          <Image
            src="/logo/logo-smks-muara-indonesia-removebg-preview.png"
            alt="Logo SMKS Muara Indonesia Jakarta"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-slate-900 xl:text-base">
            SMKS MUARA INDONESIA JAKARTA
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900 xl:hidden">
            SMKS Muara Indonesia
          </span>
        </a>

        <div className="hidden items-center gap-1 text-sm text-slate-600 lg:flex">
          {navEntries.map((entry) =>
            entry.items ? (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => openWithDelay(entry.label)}
                onMouseLeave={closeWithDelay}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === entry.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenGroup(openGroup === entry.label ? null : entry.label)
                  }
                  className={`nav-link ${groupIsActive(entry) ? "nav-link-active" : ""}`}
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openGroup === entry.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openGroup === entry.label && (
                  <div className="nav-dropdown-panel">
                    <ul className="w-64 border border-slate-200/70 bg-white py-2 shadow-lg">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={() => setOpenGroup(null)}
                            className={`block px-4 py-2.5 transition-colors hover:bg-slate-50 ${
                              isActive(item.href) ? "bg-slate-50" : ""
                            }`}
                          >
                            <span
                              className={`block text-sm font-medium ${
                                isActive(item.href) ? "text-emerald-700" : "text-slate-900"
                              }`}
                            >
                              {item.label}
                            </span>
                            {item.desc && (
                              <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                                {item.desc}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={entry.href}
                href={entry.href}
                className={`nav-link ${isActive(entry.href) ? "nav-link-active" : ""}`}
              >
                {entry.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <a href="#kontak" className="btn-gold hidden sm:inline-flex">
            Daftar Sekarang (PPDB)
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-9 w-9 items-center justify-center border border-slate-300 text-slate-900 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav-drawer lg:hidden">
          <nav className="container py-4">
            {navEntries.map((entry) =>
              entry.items ? (
                <div key={entry.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(mobileGroup === entry.label ? null : entry.label)}
                    aria-expanded={mobileGroup === entry.label}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-slate-900"
                  >
                    {entry.label}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        mobileGroup === entry.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileGroup === entry.label && (
                    <ul className="pb-3 pl-3">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={closeAll}
                            className="block py-2 text-sm text-slate-600"
                          >
                            {item.label}
                            {item.desc && (
                              <span className="mt-0.5 block text-xs text-slate-400">{item.desc}</span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div key={entry.href} className="border-b border-slate-100">
                  <a
                    href={entry.href}
                    onClick={closeAll}
                    className="block py-3 text-sm font-semibold text-slate-900"
                  >
                    {entry.label}
                  </a>
                </div>
              )
            )}
            <a href="#kontak" onClick={closeAll} className="btn-gold mt-4 w-full">
              Daftar Sekarang (PPDB)
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
