<<<<<<< HEAD
const TipCard = ({ step, title, tips }) => (
  <details id={`tip-${step}`} className="group overflow-hidden rounded-xl border border-white/15 bg-[#0B3A78]/80 transition-colors open:border-[#8DB4F5]/70 open:bg-[#0D427F]">
    <summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-4 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8DB4F5] sm:px-6">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-extrabold text-white ${step % 3 === 0 ? "bg-[#DF1A1D]" : "bg-[#0B4A9E]"}`}>
        {String(step).padStart(2, "0")}
      </span>
      <span className="flex-1 text-base font-bold text-white sm:text-lg">{title}</span>
      <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xl text-[#D6E2F8] transition-transform group-open:rotate-45 group-open:bg-[#DF1A1D] group-open:text-white">+</span>
    </summary>
    <ul className="flex flex-col gap-3 px-5 pb-5 pl-[4.5rem] sm:px-6 sm:pb-6 sm:pl-[5.75rem]">
      {tips.map((tip) => (
        <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-[#D6E2F8] sm:text-base">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5A5D]" />
          {tip}
        </li>
      ))}
    </ul>
  </details>
);

export default TipCard;
=======
const TipCard = ({ step, title, tips, accent = false }) => {
  return (
    <article className="group flex h-full w-full flex-col gap-5 rounded-2xl border border-[#222E48] bg-[#121B2E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8DB4F5]/50 hover:shadow-xl hover:shadow-black/30 sm:p-8 z-10">
      <div
        aria-hidden="true"
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white ${
          accent ? "bg-[#DF1A1D]" : "bg-[#002D68]"
        }`}
      >
        {step}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-[#EAEFFA]">{title}</h3>
        <ul className="flex flex-col gap-2.5">
          {tips.map((tip) => (
            <li
              key={tip}
              className="relative pl-6 text-base leading-relaxed text-[#9AA7C2]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.6em] h-2.5 w-2.5 rounded-full bg-[#DF1A1D]"
              />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TipCard;
>>>>>>> 25d48484a09fc28e59ccd48dcd0bd13d926feaa7
