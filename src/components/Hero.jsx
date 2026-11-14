import { scrollToId } from "./scrollTo.js";

const steps = [
  ["01", "Prepare", "CV & cover letter"],
  ["02", "Find", "Search & network"],
  ["03", "Interview", "Show what you can do"],
  ["04", "Grow", "Build your next skills"],
];

const Hero = () => (
  <section id="top" className="bg-gradient-to-b from-[#001B42] via-[#002D68] to-[#0B4A9E] px-6 py-14 text-white sm:px-8 sm:py-20 lg:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex max-w-xl flex-col items-start">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9D8F2]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#FF5A5D]" />
          Career tips from Jobs247
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          Take the next step in your career.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#D6E2F8] sm:text-xl">
          Clear, useful advice for every part of your job search — from preparing your application to growing in the role.
        </p>
        <a
          href="#tips"
          onClick={(event) => { event.preventDefault(); scrollToId("tips"); }}
          className="mt-7 inline-flex items-center gap-4 rounded-md bg-[#DF1A1D] px-5 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#C41518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
          Explore career tips <span aria-hidden="true" className="text-xl">→</span>
        </a>
      </div>

      <div aria-label="Career tips in order" className="overflow-hidden rounded-xl border border-white/20 bg-white text-[#14253F] shadow-2xl shadow-[#001B42]/30">
        <div className="flex justify-between bg-[#F1F5FB] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#52647F]">
          <span>Your career guide</span><span>4 steps</span>
        </div>
        <ol className="px-6">
          {steps.map(([number, title, description]) => (
            <li key={number} className="flex min-h-[76px] items-center gap-4 border-b border-[#E5EAF2] last:border-0">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-extrabold text-white ${number === "01" ? "bg-[#DF1A1D]" : "bg-[#0B4A9E]"}`}>
                {number}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <strong className="text-base text-[#14253F]">{title}</strong>
                <small className="text-sm text-[#66758A]">{description}</small>
              </span>
              <span aria-hidden="true" className="text-lg text-[#0B4A9E]">↗</span>
            </li>
          ))}
        </ol>
        <p className="bg-[#F8FAFD] px-6 py-4 text-xs text-[#65758D]">Start where you are. Take one step at a time.</p>
      </div>
    </div>
  </section>
);

export default Hero;
