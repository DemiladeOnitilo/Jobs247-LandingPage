import TipCard from "./TipCard";

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
      className="bg-gradient-to-b from-[#0B4A9E] via-[#073B78] to-[#002D68] px-5 py-16 sm:px-8 md:py-24"
    >

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12">
        <div className="flex max-w-3xl flex-col gap-3">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#FF5A5D]">
            Career FAQs
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Practical answers for your next step
          </h2>
          <p className="text-lg text-[#C9D8F2] sm:text-xl">
            Open a question to find clear advice, in the order you’ll use it.
          </p>
        </div>

        <div className="flex flex-col gap-3">
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

