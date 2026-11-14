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
