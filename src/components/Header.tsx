"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigatie } from "@/data/site";
import { Poot, Telefoon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pad = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zand-diep/60 bg-creme/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo van Lodin honden uitlaat service"
            width={120}
            height={120}
            priority
            className="h-14 w-14 mix-blend-multiply sm:h-16 sm:w-16"
          />
          <span className="leading-tight">
            <span className="block font-display text-2xl font-semibold tracking-wide text-houtskool sm:text-3xl">
              LODIN
            </span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-goud sm:text-[0.7rem]">
              Honden Uitlaat Service
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigatie.map((item) => {
            const actief = pad === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  actief
                    ? "bg-olijf text-creme"
                    : "text-houtskool/80 hover:bg-zand hover:text-olijf-diep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-goud px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-goud-diep"
          >
            <Telefoon className="h-4 w-4" />
            Plan kennismaking
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu openen of sluiten"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zand-diep bg-white/70 text-olijf-diep lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-zand-diep/60 bg-creme px-4 pb-5 pt-2 lg:hidden">
          {navigatie.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-semibold ${
                pad === item.href
                  ? "bg-olijf text-creme"
                  : "text-houtskool hover:bg-zand"
              }`}
            >
              <Poot
                className={`h-4 w-4 ${pad === item.href ? "text-goud-licht" : "text-goud"}`}
              />
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-goud px-5 py-3 text-base font-bold text-white"
          >
            <Telefoon className="h-4 w-4" />
            Plan een kennismaking
          </Link>
        </nav>
      )}
    </header>
  );
}
