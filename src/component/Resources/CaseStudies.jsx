import React, { useState, useMemo } from "react";

const CASE_STUDIES = [
  {
    id: "health-system-medical-waste",
    title: "Cost Reduction for a Large Health System in the Southwestern United States",
    author: "Matt Cauller",
    date: "Dec 31, 2024",
    industry: "Healthcare",
    category: "Medical Waste",
    excerpt:
      "Mobilia analyzed invoices, standardized pricing and recovered $234,000 in overpayments, achieving an approximate 22% annual cost reduction.",
    savings: "~22%",
    highlight: "$234,000 recovered",
    href: "/case-studies/cost-reduction-for-a-large-health-system-in-the-southwestern-united-states",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a31ac_%E7%9F%A9%E5%BD%A2%2029%402x%20(1).jpg",
  },
  {
    id: "software-company-payroll-wireless",
    title: "Payroll Processing and Wireless Spend Optimization for a Software Company",
    author: "Matt Cauller",
    date: "Dec 31, 2024",
    industry: "Tech",
    category: "Payroll & Wireless",
    excerpt:
      "Mobilia negotiated a new payroll contract (35% reduction) and optimized wireless plans (29% reduction), plus ongoing support that reclaimed ~25 hours/month for the internal team.",
    savings: "Payroll 35% / Wireless 29%",
    highlight: "35% payroll savings",
    href: "/case-studies/payroll-processing-and-wireless-spend-optimization-for-a-software-company",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a31c4_%25E7%259F%25A9%25E5%25BD%25A2%252029-p-1080.jpg",
  },
  {
    id: "construction-wireless",
    title: "Wireless Spend Optimization for a Construction Firm",
    author: "Mobilia",
    date: "2024",
    industry: "Construction",
    category: "Wireless",
    excerpt:
      "A construction firm with 900 wireless devices optimized plans and removed wasteful line items to lower recurring costs.",
    savings: "Varies",
    href: "/case-studies/wireless-spend-optimization-for-a-construction-firm",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a31db_%25E7%259F%25A9%25E5%25BD%25A2%252029%2520(1)-p-1080.jpg",
  },
  {
    id: "restaurants-group",
    title: "Cost Optimization for a Group of High-End Restaurants",
    author: "Mobilia",
    date: "2024",
    industry: "Restaurants",
    category: "Mixed",
    excerpt:
      "Mobilia consolidated vendor agreements across 22 locations and standardized pricing to address inconsistent charges and geographic differences.",
    savings: "Varies",
    href: "/case-studies/cost-optimization-for-restaurants",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a31f3_%25E7%259F%25A9%25E5%25BD%25A2%252029%2520(2)-p-800.jpg",
  },
  {
    id: "manufacturing-utilities",
    title: "Utilities Cost Reduction for a Manufacturing Plant",
    author: "Mobilia",
    date: "2024",
    industry: "Manufacturing",
    category: "Utilities",
    excerpt:
      "A regional manufacturing plant reduced recurring utility expenses by identifying incorrect rate classes and hidden fees across multiple suppliers.",
    savings: "18%",
    highlight: "$120,000 in annual savings",
    href: "/case-studies/utilities-cost-reduction-manufacturing",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a320d_%25E7%259F%25A9%25E5%25BD%25A2%252029%2520(3)-p-800.jpg",
  },
  {
    id: "education-it-optimization",
    title: "IT Spend Optimization for an Educational Institution",
    author: "Matt Cauller",
    date: "2024",
    industry: "Education",
    category: "IT Services",
    excerpt:
      "Mobilia streamlined IT vendor contracts for a multi-campus educational network, consolidating support costs and reducing software license waste.",
    savings: "25%",
    highlight: "$85,000 in reduced IT spend",
    href: "/case-studies/it-spend-optimization-education",
    image: "https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30cd/6736986d33f8bb5dcf4a3221_%25E7%259F%25A9%25E5%25BD%25A2%252029%2520(4)-p-800.jpg",
  },
];

export default function CaseStudies() {
  const [query, setQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const industries = useMemo(
    () => ["All", ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry)))],
    []
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(CASE_STUDIES.map((c) => c.category)))],
    []
  );

  const results = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      if (industryFilter !== "All" && cs.industry !== industryFilter) return false;
      if (categoryFilter !== "All" && cs.category !== categoryFilter) return false;
      if (
        query &&
        !`${cs.title} ${cs.excerpt} ${cs.author}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [query, industryFilter, categoryFilter]);

  return (
    <section aria-labelledby="case-studies-heading" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h2
            id="case-studies-heading"
            className="text-4xl font-extrabold text-[#0a3c6d] tracking-tight"
          >
            Case Studies
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Real results from real clients — audits, negotiations, recovered refunds, and sustainable cost reductions across wireless, payroll, and medical waste categories.
          </p>
        </div>

        {/* --- Filters + Search --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <input
            id="cs-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by company, category, or outcome..."
            className="w-72 rounded-md border border-slate-200 py-2 px-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:border-[#00bfa6] bg-white shadow-sm"
          />
          <select
            className="rounded-md border border-slate-200 py-2 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00bfa6] bg-white shadow-sm"
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
          >
            {industries.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>

          <select
            className="rounded-md border border-slate-200 py-2 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00bfa6] bg-white shadow-sm"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* --- Case Study Cards (Row Layout) --- */}
        <div className="flex flex-col gap-8">
          {results.length === 0 ? (
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm text-center">
              <p className="text-sm text-slate-600">
                No case studies found. Try different filters or keywords like “wireless” or “payroll”.
              </p>
            </div>
          ) : (
            results.map((cs) => (
              <article
                key={cs.id}
                className="group flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-1/3 h-52 md:h-40 overflow-hidden rounded-xl">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#00bfa6]">
                    {cs.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0a3c6d] group-hover:text-[#00bfa6] transition">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {cs.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      {cs.highlight && (
                        <p className="text-sm font-semibold text-[#0a3c6d]">
                          {cs.highlight}
                        </p>
                      )}
                      <p className="text-xs text-slate-500 mt-1">
                        {cs.author} • {cs.date}
                      </p>
                    </div>
                    <a
                      href={cs.href}
                      className="text-sm font-medium text-[#00bfa6] hover:text-[#0a3c6d] hover:underline"
                    >
                      Read More →
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-[#00bfa610]/10 text-[#00bfa6]">
                      Savings: {cs.savings}
                    </span>
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-[#0a3c6d10]/10 text-[#0a3c6d]">
                      Industry: {cs.industry}
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
      
        </div>
      </div>
    </section>
  );
}
