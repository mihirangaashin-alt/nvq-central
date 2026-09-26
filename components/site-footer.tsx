import Link from "next/link";

import { footerSections } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-white">
                N
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">NVQ</p>
                <h3 className="text-lg font-semibold text-white">Central</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              A free-first education platform designed to support NVQ learners across Sri Lanka.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {footerSections.explore.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Community</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {footerSections.community.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {footerSections.help.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Information</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {footerSections.information.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Official Sources</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
                {footerSections.officialSources.map((source) => (
                  <span key={source} className="rounded-full border border-slate-700 px-3 py-1.5">
                    {source}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-400">© 2026 NVQ Central. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
