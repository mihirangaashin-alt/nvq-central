import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import {
  careerOpportunities,
  featuredMaterials,
  fieldOptions,
  latestNotices,
  levelOptions,
  stats,
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="pb-24 lg:pb-10">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-18 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Free-first learning for Sri Lanka
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Everything you need for your NVQ journey.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Courses, learning materials, past papers, practical resources, videos and guidance — all in one place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="#courses">Explore Courses</CtaButton>
              <Link
                href="#materials"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Browse Materials
              </Link>
            </div>

            <div id="search" className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <label htmlFor="resource-search" className="block text-sm font-semibold text-slate-700">
                Search resources
              </label>
              <form className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="resource-search"
                  type="search"
                  placeholder="Search courses, modules, videos or guides"
                  className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white"
                />
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-lg shadow-slate-200/70">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Learning path</p>
                <h2 className="mt-2 text-2xl font-bold">Your next step</h2>
              </div>
              <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200">
                Updated weekly
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Review the current NVQ level roadmap",
                "Collect reliable practical resources",
                "Track your portfolio preparation",
                "Explore careers and guidance notes",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-800 p-4">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="levels" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore by NVQ Level"
          title="Choose the level that matches your current stage"
          description="Progress through your studies with clear, structured pathways for each stage of learning."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {levelOptions.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {item.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="fields" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore by Field"
          title="Find resources across your area of interest"
          description="Browse practical learning areas that can support your training goals and career planning."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {fieldOptions.map((field) => (
            <article key={field.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-emerald-200 hover:bg-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-lg font-bold text-emerald-700">
                {field.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{field.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{field.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="materials" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Learning Materials"
          title="Useful resources for revision, practice and portfolio work"
          description="Access practical support materials that help learners prepare and improve confidently."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featuredMaterials.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                {item.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              <Link href="#" className="mt-5 inline-flex text-sm font-semibold text-emerald-700">
                View resource →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="notices" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest Notices"
          title="Stay informed about updates and opportunities"
          description="Keep an eye on announcements that affect resources, mentoring and platform improvements."
        />
        <div className="mt-8 space-y-4">
          {latestNotices.map((notice) => (
            <article key={notice.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{notice.title}</h3>
                <span className="text-sm text-slate-500">{notice.meta}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{notice.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="careers" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Opportunities"
          title="Explore meaningful roles around learning and community support"
          description="The platform supports both learners and contributors through accessible opportunities across the learning ecosystem."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {careerOpportunities.map((role) => (
            <article key={role.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                {role.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{role.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Join Our Contributor Team</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Help build a stronger learning ecosystem for Sri Lanka.</h2>
              <p className="mt-4 max-w-xl text-base text-slate-600">
                Share verified resources, contribute to quality review and support learners across disciplines and career stages.
              </p>
            </div>
            <CtaButton href="#contribute">Become a Contributor</CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Statistics"
          title="A learner-first platform built for access, trust and progress"
          align="center"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
