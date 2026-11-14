import { useEffect, useMemo, useState } from "react";

const MYJOBMAG_RSS = "https://www.myjobmag.com/jobsxml.xml";
const NIGERIA_JOBS_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MYJOBMAG_RSS)}`;
const REMOTE_JOBS_URL = "https://remotive.com/api/remote-jobs?limit=50";

const CACHE_KEY = "jobs247-ng-hybrid-v1";
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

const parseMyJobMagTitle = (rawTitle = "") => {
  const separatorIndex = rawTitle.lastIndexOf(" at ");
  if (separatorIndex !== -1) {
    return {
      title: rawTitle.slice(0, separatorIndex).trim(),
      company: rawTitle.slice(separatorIndex + 4).trim(),
    };
  }
  return { title: rawTitle.trim(), company: "MyJobMag Listing" };
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all"); // "all" | "nigeria" | "remote"
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const loadJobs = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
        if (
          cached?.savedAt &&
          Date.now() - cached.savedAt < CACHE_TTL &&
          Array.isArray(cached.jobs) &&
          cached.jobs.length > 0
        ) {
          setJobs(cached.jobs);
          setStatus("ready");
          return;
        }
      } catch {
        // Ignore invalid localStorage cache and fetch fresh listings.
      }

      try {
        const [ngRes, remoteRes] = await Promise.allSettled([
          fetch(NIGERIA_JOBS_URL, { signal: controller.signal }).then((r) => {
            if (!r.ok) throw new Error("MyJobMag feed failed");
            return r.json();
          }),
          fetch(REMOTE_JOBS_URL, { signal: controller.signal }).then((r) => {
            if (!r.ok) throw new Error("Remotive feed failed");
            return r.json();
          }),
        ]);

        const combined = [];

        // 1. Nigerian vacancies from MyJobMag RSS
        if (ngRes.status === "fulfilled" && Array.isArray(ngRes.value?.items)) {
          const ngJobs = ngRes.value.items.map((item, idx) => {
            const { title, company } = parseMyJobMagTitle(item.title);
            return {
              id: item.guid || item.link || `ng-${idx}`,
              title,
              company_name: company,
              location: "Nigeria",
              category: item.categories?.[0] || "Nigeria Vacancy",
              job_type: "",
              source: "MyJobMag",
              regionGroup: "nigeria",
              url: item.link,
            };
          });
          combined.push(...ngJobs);
        }

        // 2. Nigeria-eligible remote jobs from Remotive
        if (remoteRes.status === "fulfilled" && Array.isArray(remoteRes.value?.jobs)) {
          const eligibleRemote = remoteRes.value.jobs
            .filter((job) => {
              const loc = (job.candidate_required_location || "").toLowerCase();
              return (
                loc.includes("worldwide") ||
                loc.includes("anywhere") ||
                loc.includes("nigeria") ||
                loc.includes("africa") ||
                loc.includes("emea")
              );
            })
            .slice(0, 18)
            .map((job) => ({
              id: `remotive-${job.id}`,
              title: job.title,
              company_name: job.company_name,
              location: job.candidate_required_location || "Remote (Worldwide)",
              category: job.category || "Remote",
              job_type: job.job_type ? job.job_type.replaceAll("_", " ") : "",
              source: "Remotive",
              regionGroup: "remote",
              url: job.url,
            }));

          combined.push(...eligibleRemote);
        }

        if (combined.length === 0) {
          if (!controller.signal.aborted) setStatus("error");
          return;
        }

        setJobs(combined);
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ savedAt: Date.now(), jobs: combined }),
          );
        } catch {
          // Storage full or disabled; listings still work for this visit.
        }
        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    };

    loadJobs();

    // Single cleanup function at the root level of useEffect
    return () => controller.abort();
  }, []);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      if (sourceFilter !== "all" && job.regionGroup !== sourceFilter) {
        return false;
      }
      if (!query) return true;

      return [job.title, job.company_name, job.location, job.category, job.source]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [jobs, search, sourceFilter]);

  const encodedQuery = encodeURIComponent(search.trim() || "jobs");

  return (
    <section id="jobs" className="bg-[#F3F6FC] px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#DF1A1D]">
            Find your next role
          </span>
          <h2 className="text-4xl font-bold leading-tight text-[#002D68] sm:text-5xl">
            Nigerian &amp; remote job openings
          </h2>
          <p className="max-w-2xl text-lg text-[#43516B]">
            Fresh local vacancies from MyJobMag alongside remote roles open to applicants in Nigeria. Apply directly on the original listing.
          </p>
        </div>

        {/* Search Input + Source Filter Tabs */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="flex max-w-xl flex-1 flex-col gap-2 text-sm font-semibold text-[#002D68]">
            Search by role, company, location, or category
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="e.g. developer, accountant, Lagos, worldwide"
              className="rounded-xl border border-[#CCD6E7] bg-white px-4 py-3 text-base font-normal text-[#17243D] outline-none transition placeholder:text-[#7B879B] focus:border-[#0B4A9E] focus:ring-4 focus:ring-[#0B4A9E]/15"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter job sources">
            {[
              { id: "all", label: "All Jobs" },
              { id: "nigeria", label: "Nigeria (MyJobMag)" },
              { id: "remote", label: "Remote (Africa / Global)" },
            ].map((tab) => {
              const active = sourceFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSourceFilter(tab.id)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                    active
                      ? "bg-[#002D68] text-white shadow-sm"
                      : "border border-[#CCD6E7] bg-white text-[#002D68] hover:border-[#0B4A9E]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {status === "loading" && (
          <p role="status" className="text-[#43516B]">
            Loading Nigerian and remote listings…
          </p>
        )}

        {status === "error" && (
          <div role="alert" className="rounded-xl border border-[#E5B7B8] bg-white p-5 text-[#713133]">
            Listings could not be loaded right now. Search directly on{" "}
            <a className="font-bold underline" href="https://www.myjobmag.com/" target="_blank" rel="noreferrer">
              MyJobMag
            </a>
            ,{" "}
            <a className="font-bold underline" href="https://ng.indeed.com/" target="_blank" rel="noreferrer">
              Indeed Nigeria
            </a>
            , or{" "}
            <a className="font-bold underline" href="https://www.jobberman.com/" target="_blank" rel="noreferrer">
              Jobberman
            </a>
            .
          </div>
        )}

        {status === "ready" && filteredJobs.length === 0 && (
          <div className="rounded-xl bg-white p-5 text-[#43516B]">
            <p>No cached jobs matched your search. Search live openings directly on:</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`https://ng.indeed.com/jobs?q=${encodedQuery}&l=Nigeria`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[#002D68] px-4 py-2 text-sm font-bold text-white hover:bg-[#0B4A9E]"
              >
                Indeed Nigeria ↗
              </a>
              <a
                href={`https://www.jobberman.com/jobs?q=${encodedQuery}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[#CCD6E7] px-4 py-2 text-sm font-bold text-[#002D68] hover:border-[#0B4A9E]"
              >
                Jobberman ↗
              </a>
              <a
                href={`https://www.linkedin.com/jobs/search/?keywords=${encodedQuery}&location=Nigeria`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[#CCD6E7] px-4 py-2 text-sm font-bold text-[#002D68] hover:border-[#0B4A9E]"
              >
                LinkedIn Nigeria ↗
              </a>
            </div>
          </div>
        )}

        {status === "ready" && filteredJobs.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="flex flex-col rounded-2xl border border-[#E0E6F0] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-bold text-[#DF1A1D]">
                    {job.company_name}
                  </p>
                  <span
                    className={`shrink-0 rounded-md px-2.5 py-0.5 text-xs font-bold ${
                      job.regionGroup === "nigeria"
                        ? "bg-[#E8F7EE] text-[#146C38]"
                        : "bg-[#EBF3FE] text-[#0B4A9E]"
                    }`}
                  >
                    {job.source}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#002D68]">{job.title}</h3>
                <p className="mt-2 text-sm text-[#53617A]">
                  {job.location} · {job.category}
                </p>

                {job.job_type && (
                  <p className="mt-3 text-sm font-medium text-[#53617A]">{job.job_type}</p>
                )}

                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-bold text-[#0B4A9E] underline underline-offset-4 hover:text-[#DF1A1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DF1A1D]"
                >
                  View on {job.source} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        )}

        {/* Quick Search Bar for External Nigerian Boards */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#DDE4F0] pt-6 text-sm text-[#66728A]">
          <p>
            Sources:{" "}
            <a href="https://www.myjobmag.com/" target="_blank" rel="noreferrer" className="font-semibold underline">
              MyJobMag
            </a>{" "}
            &amp;{" "}
            <a href="https://remotive.com/remote-jobs" target="_blank" rel="noreferrer" className="font-semibold underline">
              Remotive
            </a>{" "}
            (cached for 12 hours).
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-[#43516B]">More Nigerian boards:</span>
            <a
              href={`https://ng.indeed.com/jobs?q=${encodedQuery}&l=Nigeria`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0B4A9E] underline hover:text-[#DF1A1D]"
            >
              Indeed Nigeria ↗
            </a>
            <a
              href={`https://www.jobberman.com/jobs?q=${encodedQuery}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0B4A9E] underline hover:text-[#DF1A1D]"
            >
              Jobberman ↗
            </a>
            <a
              href={`https://www.linkedin.com/jobs/search/?keywords=${encodedQuery}&location=Nigeria`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0B4A9E] underline hover:text-[#DF1A1D]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;