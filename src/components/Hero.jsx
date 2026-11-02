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

