import React from "react";

export default function ResourcesHero({
  title = "Explore our Resources",
  subtitle = "Actionable guides, playbooks, and templates to help you ship faster.",
  ctaPrimary = { label: "Browse all", href: "#resources" },
  ctaSecondary = { label: "Request a guide", href: "#request" },
  stats = [
    { label: "Guides", value: "120+" },
    { label: "Templates", value: "45" },
    { label: "Case Studies", value: "30" },
  ],
}) {
  return (
    <header className="bg-white dark:bg-[#0a3c6d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: Text content */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00bfa6]/20 text-[#0a3c6d] dark:bg-[#00bfa6]/30 dark:text-[#00bfa6]">
              Resources
            </p>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a3c6d] dark:text-white">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>

            {/* Search + CTAs */}
            <div className="mt-8 sm:flex sm:items-center sm:space-x-4">
              <label htmlFor="resource-search" className="sr-only">
                Search resources
              </label>
              <div className="relative w-full sm:w-80">
                <input
                  id="resource-search"
                  name="resource-search"
                  type="search"
                  placeholder="Search guides, templates, topics..."
                  className="block w-full rounded-md border border-slate-200 bg-white py-3 pl-4 pr-12 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:border-[#00bfa6] dark:bg-[#0a3c6d] dark:border-[#00bfa6]/30 dark:placeholder-slate-300 dark:text-white"
                  aria-label="Search resources"
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:flex sm:items-center">
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center justify-center rounded-md bg-[#0a3c6d] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#092f57] focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:ring-offset-2"
                >
                  {ctaPrimary.label}
                </a>

                <a
                  href={ctaSecondary.href}
                  className="ml-3 inline-flex items-center justify-center rounded-md border border-[#00bfa6] bg-white px-4 py-2 text-sm font-medium text-[#0a3c6d] hover:bg-[#00bfa6]/10 focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:ring-offset-2 dark:bg-[#0a3c6d] dark:text-[#00bfa6]"
                >
                  {ctaSecondary.label}
                </a>
              </div>
            </div>

            {/* Stats */}
            <dl className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md">
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <dt className="text-sm text-[#00bfa6] dark:text-[#00bfa6]">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-[#0a3c6d] dark:text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Updated weekly • Curated by our content team
            </p>
          </div>

          {/* Right: Image illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="rounded-2xl bg-gradient-to-br from-[#00bfa6]/10 to-white/60 dark:from-[#0a3c6d] dark:to-[#092f57] p-6 shadow-lg">
                <img
                  src="https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30a6/6736986d33f8bb5dcf4a33e5_Rectangle%2061.jpg"
                  alt="Resources illustration"
                  className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-md"
                />

                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-[#0a3c6d] dark:text-[#00bfa6]">
                    Featured
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                    How we reduced vendor spend by 30% — an implementation playbook.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="#"
                      className="text-sm font-medium text-[#00bfa6] hover:underline"
                    >
                      Read case study
                    </a>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00bfa6]/20 text-[#0a3c6d] dark:bg-[#00bfa6]/30 dark:text-[#00bfa6]">
                      Case Study
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
                <div className="p-3 rounded-lg border border-[#00bfa6]/30 bg-white dark:bg-[#0a3c6d]">
                  <p className="text-xs font-medium text-[#0a3c6d] dark:text-[#00bfa6]">
                    Template
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                    Onboarding checklist
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-[#00bfa6]/30 bg-white dark:bg-[#0a3c6d]">
                  <p className="text-xs font-medium text-[#0a3c6d] dark:text-[#00bfa6]">
                    Guide
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                    Vendor negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
