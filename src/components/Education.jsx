import { HiOutlineExternalLink, HiOutlinePlus } from "react-icons/hi";
import Reveal from "./Reveal";
import { certifications, education } from "../data/data";

function EducationCard({ item, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="border border-white/10 rounded-xl p-6 h-full hover:border-teal/30 transition-colors duration-300">
        <p className="font-mono text-xs text-teal-light tracking-wide mb-3">
          {item.period}
        </p>
        <h3 className="font-display text-lg md:text-xl text-ivory mb-1">{item.degree}</h3>
        <p className="font-body text-sm text-ivory/50 mb-3">{item.school}</p>
        <p className="font-body text-ivory/70 leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

function CertificateCard({ certificate, index }) {
  return (
    <Reveal delay={index * 0.08} className="lg:col-span-2">
      <article className="group h-full overflow-hidden rounded-2xl border border-ivory/10 bg-navy/35 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-navy/55">
        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[2.04/1] overflow-hidden bg-navy-soft"
          aria-label={`Xem ${certificate.title}`}
        >
          <img
            src={certificate.image}
            alt={certificate.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ivory/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <HiOutlineExternalLink /> Xem ảnh
          </span>
        </a>

        <div className="p-6 md:p-7">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-sand-light">
            {certificate.issuer}
          </p>
          <h3 className="mb-2 font-display text-xl text-ivory md:text-2xl">
            {certificate.title}
          </h3>
          <p className="max-w-2xl font-body text-sm leading-relaxed text-ivory/65">
            {certificate.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

function CertificatePlaceholder({ delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex min-h-64 h-full flex-col items-center justify-center rounded-2xl border border-dashed border-ivory/15 bg-navy/25 p-8 text-center">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/25 bg-teal/10 text-xl text-teal-light">
          <HiOutlinePlus />
        </span>
        <h3 className="mb-2 font-display text-lg text-ivory/75">Chứng chỉ tiếp theo</h3>
        <p className="max-w-52 font-body text-sm leading-relaxed text-ivory/40">
          Khu vực dành cho các chứng chỉ và thành tựu chuyên môn mới.
        </p>
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-tone-panel section-px py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
          Học vấn & Chứng chỉ
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-ivory mb-12 max-w-2xl">
          Nền tảng kiến thức
        </h2>
      </Reveal>

      {education.length > 0 && (
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {education.map((item, index) => (
            <EducationCard key={item.school} item={item} index={index} />
          ))}
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        {certifications.map((certificate, index) => (
          <CertificateCard
            key={`${certificate.issuer}-${certificate.title}`}
            certificate={certificate}
            index={index}
          />
        ))}
        <CertificatePlaceholder delay={certifications.length * 0.08} />
      </div>
    </section>
  );
}
