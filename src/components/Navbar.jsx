<<<<<<< HEAD
import { useEffect, useState } from "react";
import Logo from "../assets/Jobs24.jpeg";
import { scrollToId } from "./scrollTo.js";

// Section ids must match the ids on the page: tips, jobs
const links = [
  { label: "Career Tips", id: "tips" },
  { label: "Jobs", id: "jobs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E5EAF2] bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-[#002D68]/10" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-center px-4 transition-all duration-300 sm:px-8 md:justify-between ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <a href="#top" onClick={(e) => go(e, "top")} className="shrink-0">
          <img
            src={Logo}
            alt="Jobs247"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-14" : "h-16 sm:h-20"
            }`}
          />
        </a>

        <div className="hidden items-center gap-8 text-base font-semibold md:flex">
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={on ? "location" : undefined}
                className={`group relative py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DF1A1D] focus-visible:ring-offset-4 ${
                  on ? "text-[#DF1A1D]" : "text-[#002D68] hover:text-[#DF1A1D]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-center bg-[#DF1A1D] transition-transform duration-300 ${
                    on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#start-here"
            onClick={(e) => go(e, "start-here")}
            className="group inline-flex items-center gap-2 rounded-md bg-[#DF1A1D] px-5 py-2.5 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#C41518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#DF1A1D]/40"
          >
            Start here
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
=======
import { useEffect, useState } from "react";
import Logo from "../assets/Jobs24.jpeg";
import { scrollToId } from "./scrollTo.js";

// Section ids must match the ids on your sections: tips, checklist, contact
const links = [
  { label: "Career Tips", id: "tips" },
  { label: "Checklist", id: "checklist" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      className={`bg-white md:sticky md:top-0 md:z-50 transition-shadow duration-300 ${
        scrolled ? "md:shadow-lg md:shadow-[#002D68]/10" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-center px-4 py-2 transition-all duration-300 sm:px-8 md:justify-between ${
          scrolled ? "md:py-1" : "md:py-2"
        }`}
      >
        <a href="#top" onClick={(e) => go(e, "top")} className="shrink-0">
          <img
            src={Logo}
            alt="Jobs247"
            className={`h-14 w-auto transition-all duration-300 ${
              scrolled ? "md:h-18" : "md:h-24"
            }`}
          />
        </a>

        <div className="hidden items-center gap-9 text-lg font-semibold md:flex">
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={on ? "location" : undefined}
                className={`group relative py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DF1A1D] focus-visible:ring-offset-4 ${
                  on ? "text-[#DF1A1D]" : "text-[#002D68] hover:text-[#DF1A1D]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-center bg-[#DF1A1D] transition-transform duration-300 ${
                    on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-[#DF1A1D] px-6 py-2.5 text-white shadow-md shadow-[#DF1A1D]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#C41518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#DF1A1D]/40"
          >
            Get in touch
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Reading progress (desktop only) */}
      <div aria-hidden="true" className="hidden h-[3px] bg-[#E1E6F0] md:block">
        <div
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #002D68, #DF1A1D)",
            transform: `scaleX(${progress})`,
            transformOrigin: "left",
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
>>>>>>> 25d48484a09fc28e59ccd48dcd0bd13d926feaa7
