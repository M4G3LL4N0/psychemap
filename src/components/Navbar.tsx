"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/map", label: "Map" },
  { href: "/atlas", label: "Atlas" },
  { href: "/examples", label: "Examples" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-400">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            PsycheMap
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-white/5 text-slate-100"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-slate-200 sm:inline"
          >
            Log in
          </Link>
          <Link href="/map" className="btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            Map a Question
          </Link>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-400 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-white/5 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  pathname === link.href ? "bg-white/5 text-slate-100" : "text-slate-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/map" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center text-sm">
              Map a Question
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
