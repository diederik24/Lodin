"use client";

import { useState } from "react";
import { faq } from "@/data/site";
import { Chevron } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {faq.map((item, i) => {
        const actief = open === i;
        return (
          <div
            key={item.vraag}
            className={`overflow-hidden rounded-3xl border transition-colors ${
              actief
                ? "border-goud/60 bg-white shadow-sm"
                : "border-zand-diep bg-white/60"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(actief ? null : i)}
              aria-expanded={actief}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-display text-lg font-semibold text-houtskool">
                {item.vraag}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                  actief
                    ? "rotate-180 bg-goud text-houtskool"
                    : "bg-zand text-olijf-diep"
                }`}
              >
                <Chevron className="h-5 w-5" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                actief ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-base leading-relaxed text-houtskool/75 sm:px-6">
                  {item.antwoord}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
