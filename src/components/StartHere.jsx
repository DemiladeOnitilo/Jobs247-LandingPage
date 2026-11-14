const principles = [
  {
    number: "01",
    title: "Make the match clear",
    description: "Choose the two or three requirements that matter most in the role. Put your closest experience and skills where a reader will see them first.",
    example: "Lead with the experience that fits this job, not everything you have ever done.",
  },
  {
    number: "02",
    title: "Back up your claims",
    description: "For each important skill, give a short example of how you used it. Explain what you did and what changed as a result.",
    example: "Replace “good at solving problems” with one real problem you handled and how you resolved it.",
  },
  {
    number: "03",
    title: "Make it easy to follow",
    description: "Use clear headings, concise sentences and a consistent layout. Keep details relevant so the reader can understand your fit quickly.",
    example: "Read it once as a busy hiring manager: can you spot the role, your strongest evidence and how to reach you?",
  },
];

const StartHere = () => (
  <section id="start-here" className="bg-[#F2F6FC] px-5 py-12 sm:px-8 ">
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#DF1A1D]">Put your best foot forward</p>
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#002D68] sm:text-5xl">What makes an application convincing?</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#43516B]">A strong application helps an employer see the connection between the role and the work you can do. These three principles make that connection easier to follow.</p>
      </div>

      <ol className="grid gap-4 md:grid-cols-3">
        {principles.map((principle) => (
          <li key={principle.number} className="flex h-full flex-col rounded-xl border border-[#DCE5F1] bg-white p-6 shadow-sm sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#E9F1FC] text-sm font-extrabold text-[#0B4A9E]">{principle.number}</span>
            <h3 className="mt-5 text-xl font-bold text-[#002D68]">{principle.title}</h3>
            <p className="mt-2 leading-relaxed text-[#53617A]">{principle.description}</p>
            <p className="mt-5 border-l-2 border-[#DF1A1D] pl-4 text-sm leading-relaxed text-[#43516B]"><span className="font-bold text-[#002D68]">Try this: </span>{principle.example}</p>
          </li>
        ))}
      </ol>
      <p className="max-w-4xl border-t border-[#DCE5F1] pt-5 text-sm leading-relaxed text-[#53617A]">
        Use real details from your experience. If you do not have formal work history yet, school projects, volunteering and personal projects can also show how you approach a task.
      </p>
    </div>
  </section>
);

export default StartHere;
