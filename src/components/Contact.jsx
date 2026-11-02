import { scrollToId } from "./scrollTo.js";
import { GeometricPattern } from "./Decor.jsx";


const contacts = [
  { label: "Phone / WhatsApp", info: "Number to be confirmed" },
  { label: "Email", info: "Address to be confirmed" },
  { label: "Social media", info: "Handles to be confirmed" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-16 text-center text-white sm:px-8 md:py-24"
      style={{
        // Starts on the exact colour the Checklist section ends on: no visible seam
        background: [
          "radial-gradient(50% 60% at 50% 100%, rgba(223,26,29,0.30), transparent 70%)",
          "linear-gradient(180deg, #0F2347 0%, #001B42 100%)",
        ].join(", "),
      }}
    >
      <GeometricPattern />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <h2 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Questions about your next move?
        </h2>
        <p className="max-w-md text-lg text-[#C9D8F2]">
          Get in touch with the Jobs247 team to learn more.
        </p>

        {/* No real contact link yet: swap for an <a href="..."> once confirmed */}
        <button
          type="button"
          onClick={() => scrollToId("top")}
          className="mt-2 cursor-pointer rounded-full bg-[#DF1A1D] px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-[#DF1A1D]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#C41518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
          Back to the top
        </button>

        <div className="mt-8 grid w-full gap-4 sm:w-auto sm:grid-flow-col">
          {contacts.map(({ label, info }) => (
            <div
              key={label}
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-left sm:min-w-52"
            >
              <h3 className="text-sm font-normal text-[#A9BFE6]">{label}</h3>
              <p className="text-lg font-medium text-white">{info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;