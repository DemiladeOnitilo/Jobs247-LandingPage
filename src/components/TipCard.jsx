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