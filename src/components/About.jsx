import Reveal from "./Reveal";
import { about } from "../data/data";

export default function About() {
  return (
    <section id="about" className="section-tone-calm section-px py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
          Về tôi
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ivory mb-12 max-w-2xl">
          Mình là ai
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="font-body text-ivory/70 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="flex md:flex-col gap-6 md:gap-8 flex-wrap">
          {about.highlights.map((h, i) => (
            <Reveal key={h.label} delay={0.15 + i * 0.08} className="flex-1 min-w-[120px]">
              <div className="border-l-2 border-sand/55 pl-4">
                <p className="font-display text-3xl md:text-4xl text-ivory">{h.value}</p>
                <p className="font-mono text-xs text-ivory/50 uppercase tracking-wide mt-1">
                  {h.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
