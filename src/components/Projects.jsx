import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/data";

function ProjectCard({ p, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-ivory/10 bg-navy-light/55 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35 hover:bg-navy-light/80">
        <div className="relative h-44 bg-gradient-to-br from-teal-dark/40 via-navy-soft to-navy-light overflow-hidden">
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display italic text-2xl text-ivory/20">
                {p.title.split(" ")[0]}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl text-ivory mb-2">{p.title}</h3>
          <p className="font-body text-sm text-ivory/65 leading-relaxed mb-4 flex-1">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-teal/15 bg-teal/10 px-2.5 py-1 font-mono text-[11px] text-teal-light"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/5">
            <a
              href={p.link}
              className="inline-flex items-center gap-1.5 text-sm text-ivory/70 hover:text-teal-light transition-colors duration-200"
            >
              <HiOutlineExternalLink /> Xem thử
            </a>
            <a
              href={p.repo}
              className="inline-flex items-center gap-1.5 text-sm text-ivory/70 hover:text-teal-light transition-colors duration-200"
            >
              <FiGithub /> Mã nguồn
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-tone-columns section-px py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
          Dự án
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ivory mb-12 max-w-2xl">
          Một số dự án đã thực hiện gần đây
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
