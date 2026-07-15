import Reveal from "./Reveal";
import { experience } from "../data/data";

export default function Experience() {
  return (
    <section id="experience" className="section-tone-aurora section-px py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
          Kinh nghiệm
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ivory mb-14 max-w-2xl">
          Hành trình làm việc
        </h2>
      </Reveal>

      <div className="relative max-w-3xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.role + exp.period} delay={i * 0.1} className="relative pl-10">
              <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-navy border-2 border-teal-light" />

              <p className="font-mono text-xs text-teal-light tracking-wide mb-2">
                {exp.period}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-ivory mb-1">{exp.role}</h3>
              <p className="font-body text-sm text-ivory/50 mb-3">{exp.company}</p>
              <p className="font-body text-ivory/70 leading-relaxed mb-4 max-w-xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-teal/15 bg-teal/10 px-2.5 py-1 font-mono text-[11px] text-teal-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
