<<<<<<< HEAD
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
=======
import { DotGrid } from "./Decor.jsx";
import { scrollToId } from "./scrollTo.js";

const topics = ["CV", "Cover letters", "Job search", "Interviews", "Career growth"];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-5 py-14 text-white sm:px-8 lg:py-20"
      style={{
        background: [
          "radial-gradient(60% 50% at 8% 0%, rgba(255,255,255,0.14), transparent 70%)",
          "radial-gradient(60% 50% at 92% 0%, rgba(255,255,255,0.12), transparent 70%)",
          "linear-gradient(160deg, #001B42 0%, #002D68 55%, #0B4A9E 100%)",
        ].join(", "),
      }}
    >
      <DotGrid />
      {/* Red glow behind the tip card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 z-10 h-196 w-196 rounded-full blur-2xl"
        style={{ background: "radial-gradient(closest-side, rgba(223,26,29,0.35), transparent)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-[#D6E2F8]">
            Career tips from Jobs247
          </span>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Practical advice to help you
            <span className="text-[#FF5A5D]"> get hired</span> and grow.
          </h1>

          <p className="max-w-md text-lg font-medium text-[#C9D8F2] sm:text-xl">
            Short, useful tips on CVs, job searching and interviews, all in one
            place, so you can apply with more confidence.
          </p>

          <a
            href="#tips"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("tips");
            }}
            className="mt-2 inline-block rounded-full bg-[#DF1A1D] px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-[#DF1A1D]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#C41518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            Read the tips
          </a>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-[#D6E2F8]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Quick tip card */}
        <div className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
          <div className="relative rotate-3 rounded-3xl bg-[#0B1220]/90 p-7 text-[#14213D] shadow-2xl shadow-black/30 sm:p-8 lg:max-w-md">
            <span className="inline-flex items-center rounded-full bg-[#DF1A1D]/10 px-3 py-1 text-sm font-bold text-[#DF1A1D]">
              Quick tip
            </span>
            <h2 className="mt-4 text-[#FFFFFF] text-3xl font-bold leading-tight sm:text-3xl">
              Tailor your CV to every role.
            </h2>
            <p className="mt-3 text-xl text-[#58627A]">
              Read the job description closely and reflect its key skills and
              requirements in your CV, so employers can see the match quickly.
            </p>
            <div
              className="mt-6 h-1.5 rounded-full"
              style={{ background: "linear-gradient(90deg, #002D68, #DF1A1D)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

>>>>>>> 25d48484a09fc28e59ccd48dcd0bd13d926feaa7
