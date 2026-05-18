"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/maps", label: "Maps" },
  { href: "/dashboard/library", label: "Library" },
  { href: "/dashboard/new", label: "New map" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-1 border-b border-white/5 pb-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "rounded-lg px-3 py-2 text-sm transition-colors",
            pathname === link.href
              ? "bg-white/5 text-slate-100"
              : "text-slate-500 hover:text-slate-300"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
