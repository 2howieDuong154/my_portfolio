import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/data";

const links = [
  { label: "Về tôi", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Học vấn", href: "#education" },
  { label: "Dự án", href: "#projects" },
  { label: "Công nghệ", href: "#built-with" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-6 lg:px-10"
    >
      <div
        className={`pointer-events-auto relative mx-auto max-w-7xl overflow-hidden rounded-2xl border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-ivory/15 bg-navy/92 shadow-[0_20px_65px_rgba(3,7,18,0.48)]"
            : "border-white/10 bg-navy/72 shadow-[0_14px_45px_rgba(3,7,18,0.3)]"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-teal-light/70 to-transparent" />

        <nav className="flex h-14 items-center justify-between px-5 md:h-[68px] md:px-7">
          <button
            onClick={() => handleNav("#hero")}
            className="font-display text-lg tracking-tight text-ivory transition-colors duration-200 hover:text-teal-light md:text-xl"
          >
            {profile.name.split(" ").slice(-1)}
            <span className="text-teal-light">.</span>
          </button>

          <ul className="hidden items-center gap-5 font-body text-xs text-ivory/70 md:flex lg:gap-8 lg:text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="transition-colors duration-200 hover:text-teal-light"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="text-2xl text-ivory transition-colors hover:text-teal-light md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/5 bg-navy/45 px-5 pb-3 md:hidden"
            >
              {links.map((l) => (
                <li key={l.href} className="border-b border-white/[0.04] last:border-0">
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full py-3 text-left text-sm text-ivory/80 transition-colors hover:text-teal-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
