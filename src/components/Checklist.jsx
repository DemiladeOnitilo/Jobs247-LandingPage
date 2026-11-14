import { useState } from "react";

const items = [
  "CV tailored to the job description",
  "Cover letter is short and addressed properly",
  "Spelling and contact details double-checked",
  "Researched the company",
  "Examples ready for likely interview questions",
];

const Checklist = () => {
  const [done, setDone] = useState([]);

  const toggle = (i) =>
    setDone((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const percent = (done.length / items.length) * 100;

  return (
    <section
      id="checklist"
      className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      style={{ background: "linear-gradient(180deg, #0B1220 0%, #0F2347 100%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#DF1A1D]/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#DF1A1D]">
            Before you apply
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-[#8DB4F5] sm:text-5xl">
            Your quick application checklist
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#C9D8F2] lg:mx-0">
            Tick each item off before you hit send. It lives on this page only
            and resets when you refresh.
          </p>
        </div>

        {/* Checklist card */}
        <div
          role="group"
          aria-label="Application checklist"
          className="w-full rounded-2xl border border-[#222E48] bg-[#121B2E] p-5 shadow-2xl shadow-black/30 sm:p-7"
        >
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li key={item} className="border-b border-[#222E48] last:border-b-0">
                <label className="flex cursor-pointer items-center gap-4 py-4">
                  <input
                    type="checkbox"
                    checked={done.includes(i)}
                    onChange={() => toggle(i)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 border-[#9AA7C2] text-white transition peer-checked:border-[#DF1A1D] peer-checked:bg-[#DF1A1D] peer-focus-visible:ring-4 peer-focus-visible:ring-[#8DB4F5]/50 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-[#EAEFFA] transition peer-checked:text-[#9AA7C2] peer-checked:line-through">
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {/* Progress */}
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-[#8DB4F5]">
              <span>Progress</span>
              <span aria-live="polite">
                {done.length} of {items.length} done
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#222E48]">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${percent}%`,
                  background: "linear-gradient(90deg, #002D68, #DF1A1D)",
                }}
              />
            </div>
            {done.length > 0 && (
              <button
                type="button"
                onClick={() => setDone([])}
                className="mt-4 cursor-pointer text-sm font-semibold text-[#9AA7C2] underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DB4F5]"
              >
                Reset checklist
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;