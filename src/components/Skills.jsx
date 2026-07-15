import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/data";

function SkillCard({ category, items, index }) {
  return (
    <Reveal delay={index * 0.08} className="group">
      <div className="h-full rounded-xl border border-ivory/10 bg-navy-light/55 p-6 shadow-lg shadow-black/5 transition-colors duration-300 hover:border-teal/35 hover:bg-navy-light/80">
        <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden mb-5">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full"
          />
        </div>
        <h3 className="font-display text-lg text-ivory mb-4">{category}</h3>
        <ul className="flex flex-wrap gap-2">
          {items.map((it) => (
            <li
              key={it}
              className="rounded-md border border-ivory/10 bg-navy/25 px-3 py-1.5 font-mono text-xs text-ivory/65 transition-colors duration-300 group-hover:border-teal/30"
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-tone-grid section-px py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
          Kỹ năng
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ivory mb-12 max-w-2xl">
          Công cụ mình dùng hằng ngày
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <SkillCard key={s.category} category={s.category} items={s.items} index={i} />
        ))}
      </div>
    </section>
  );
}
