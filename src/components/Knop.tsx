import Link from "next/link";
import type { ReactNode } from "react";

type KnopProps = {
  href: string;
  children: ReactNode;
  variant?: "goud" | "olijf" | "omlijnd" | "licht";
  className?: string;
};

const stijlen: Record<string, string> = {
  goud: "bg-goud text-white hover:bg-goud-diep",
  olijf: "bg-olijf text-creme hover:bg-olijf-diep",
  omlijnd:
    "border-2 border-olijf text-olijf-diep hover:bg-olijf hover:text-creme",
  licht: "bg-creme text-olijf-diep hover:bg-zand",
};

export default function Knop({
  href,
  children,
  variant = "goud",
  className = "",
}: KnopProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold shadow-sm transition-all hover:-translate-y-0.5 ${stijlen[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
