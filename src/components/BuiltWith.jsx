import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineCollection } from "react-icons/hi";
import {
  SiFramer,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Reveal from "./Reveal";
import { siteTechnologies } from "../data/data";

const technologyIcons = {
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  javascript: SiJavascript,
  icons: HiOutlineCollection,
};

function TechnologyCard({ technology, index }) {
  const Icon = technologyIcons[technology.icon] || HiOutlineCode;

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group relative h-full overflow-hidden rounded-xl border border-ivory/10 bg-navy-light/70 p-6 shadow-xl shadow-black/10 transition-colors duration-300 hover:border-teal/45 hover:bg-navy-soft/65"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-teal/25 bg-teal/10 text-2xl text-teal-light transition-transform duration-300 group-hover:scale-110">
            <Icon aria-hidden="true" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-ivory/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-teal-light">
          {technology.category}
        </p>
        <h3 className="mb-3 font-display text-xl text-ivory">{technology.name}</h3>
        <p className="font-body text-sm leading-relaxed text-ivory/60">
          {technology.description}
        </p>
      </motion.article>
    </Reveal>
  );
}

export default function BuiltWith() {
  return (
    <section id="built-with" className="section-tone-built section-px py-24 md:py-32">
      <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-light">
              Công nghệ xây dựng
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-3xl font-medium text-ivory md:text-4xl">
              Đằng sau portfolio này
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ivory/55 md:text-right">
            Một bộ công nghệ hiện đại, gọn nhẹ và tập trung vào trải nghiệm người dùng.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteTechnologies.map((technology, index) => (
          <TechnologyCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </section>
  );
}
