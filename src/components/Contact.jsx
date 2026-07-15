import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Reveal from "./Reveal";
import { profile } from "../data/data";

export default function Contact() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  return (
    <section id="contact" className="section-tone-contact section-px py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-teal-light uppercase mb-3">
            Liên hệ
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-ivory mb-6">
            Cùng làm việc gì đó nhé
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-body text-ivory/65 leading-relaxed max-w-xl mx-auto mb-10">
            Mình luôn sẵn sàng lắng nghe những dự án mới, ý tưởng thú vị hoặc đơn giản là một
            lời chào. Nhắn cho mình bất cứ lúc nào.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Soạn email gửi đến ${profile.email} bằng Gmail`}
            className="mb-10 inline-flex items-center gap-2 rounded-lg bg-teal-light px-6 py-3 font-body text-sm font-semibold text-navy transition-all duration-200 hover:scale-[1.03] hover:bg-ivory"
          >
            <HiOutlineMail />
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/50 font-body mb-10">
            <span className="inline-flex items-center gap-1.5">
              <HiOutlinePhone /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HiOutlineLocationMarker /> {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex justify-center gap-6 font-mono text-xs uppercase tracking-wide">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-teal-light transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
