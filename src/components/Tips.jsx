import TipCard from "./TipCard";
import { AbstractFlow } from "./Decor.jsx";

const topics = [
  {
    title: "Writing your CV",
    tips: [
      "Keep it clear, tidy and easy to scan.",
      "Lead with recent experience and achievements.",
      "Use a professional email address and check for typos.",
    ],
  },
  {
    title: "Cover letters",
    tips: [
      "Keep it to one page: simple, polite, to the point.",
      "Address the hiring manager by name when you can.",
      "Say why you suit this role and this company.",
    ],
  },
  {
    title: "Searching for jobs",
    tips: [
      "Be clear on the role, location and pay you want.",
      "Use filters to cut out roles that don’t fit.",
      "Research a company before you apply.",
    ],
  },
  {
    title: "Interview preparation",
    tips: [
      "Prepare examples that show your skills at work.",
      "Plan your journey and arrive early.",
      "Have a question or two ready for the interviewer.",
    ],
  },
  {
    title: "Building your network",
    tips: [
      "Tell people what kind of role you’re looking for.",
      "Keep your professional profiles up to date.",
      "Thank anyone who refers you or shares advice.",
    ],
  },
  {
    title: "Growing in your career",
    tips: [
      "Set one learning goal each quarter.",
      "Keep a record of your wins and feedback.",
      "Ask for stretch tasks that build new skills.",
    ],
  },
];

const Tips = () => {
  return (
    <section
      id="tips"
      className="relative isolate overflow-hidden bg-[#0B1220] px-5 py-16 sm:px-8 md:py-24"
    >

      <AbstractFlow />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#0B4A9E]/30 blur-3xl"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12">
        <div className="flex max-w-3xl flex-col gap-3">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#DF1A1D]">
            Career tips
          </span>
          <h2 className="text-4xl font-bold leading-tight text-[#8DB4F5] sm:text-5xl">
            Everything you need, one tip at a time
          </h2>
          <p className="text-xl text-[#C9D8F2] font-thin">
            Simple habits that make applications stronger. Pick a topic and start with one thing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <TipCard
              key={topic.title}
              step={index + 1}
              title={topic.title}
              tips={topic.tips}
              accent={index % 3 === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;

