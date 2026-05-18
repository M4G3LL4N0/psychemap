import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#0a0e1a]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-slate-100">PsycheMap</p>
            <p className="mt-2 text-sm text-slate-400">
              Evidence-aware maps for consciousness, symbolism, and reality-modeling.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-300">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/map" className="hover:text-slate-200">Map a Question</Link></li>
              <li><Link href="/atlas" className="hover:text-slate-200">Atlas</Link></li>
              <li><Link href="/examples" className="hover:text-slate-200">Examples</Link></li>
              <li><Link href="/pricing" className="hover:text-slate-200">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-300">Account</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/dashboard" className="hover:text-slate-200">Dashboard</Link></li>
              <li><Link href="/login" className="hover:text-slate-200">Log in</Link></li>
              <li><Link href="/signup" className="hover:text-slate-200">Sign up</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-300">Trust</p>
            <p className="mt-3 text-sm text-slate-500">
              PsycheMap is for inquiry, not diagnosis or treatment. Maps label evidence levels and separate symbolism from mechanism.
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} PsycheMap. Not medical or therapeutic advice.
        </p>
      </div>
    </footer>
  );
}
