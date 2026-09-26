'use client';

import Link from "next/link";
import { useState } from "react";

import { mobilePrimaryLinks, primaryNavigation } from "@/lib/site-config";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="NVQ Central home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
              N
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">NVQ</p>
              <p className="text-base font-bold text-slate-900">Central</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#search"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Search
            </Link>
            <Link
              href="#signin"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>
            <Link
              href="#signup"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-sm">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex gap-2">
                <Link
                  href="#signin"
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center font-medium text-slate-700"
                >
                  Sign In
                </Link>
                <Link
                  href="#signup"
                  className="flex-1 rounded-full bg-emerald-600 px-4 py-2 text-center font-semibold text-white"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-sm lg:hidden"
        aria-label="Bottom navigation"
      >
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1 px-3 py-2">
          {mobilePrimaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              <span className="text-base">{item.label === "Home" ? "⌂" : item.label === "Courses" ? "▣" : item.label === "Search" ? "⌕" : "◉"}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
