export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const sticky = header && getComputedStyle(header).position === "sticky";
  const offset = sticky ? header.offsetHeight : 0;
  const top =
    id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - offset + 1;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
};