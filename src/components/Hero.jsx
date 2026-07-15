import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { profile } from "../data/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-tone-hero relative min-h-screen flex flex-col justify-center section-px pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-dark/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] xl:gap-20"
      >
        <div>
          {profile.available && (
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-light animate-pulse-soft" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-light" />
              </span>
              <span className="font-mono text-xs tracking-wide text-ivory/70 uppercase">
                Sẵn sàng làm việc
              </span>
            </motion.div>
          )}

          <motion.p variants={item} className="font-mono text-sm text-teal-light tracking-wide mb-4">
            Xin chào, mình là
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ivory mb-6"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display italic text-xl md:text-2xl text-ivory/60 mb-6"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="font-body text-base md:text-lg text-ivory/70 max-w-xl leading-relaxed mb-10"
          >
            {profile.tagline}
          </motion.p>

          <motion.blockquote
            variants={item}
            className="relative mt-10 max-w-xl border-l border-sand/45 pl-5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-0.5 -top-5 font-display text-5xl text-sand-light/20"
            >
              “
            </span>
            <p className="relative font-display text-base italic leading-relaxed text-ivory/65 md:text-lg">
              Chỉ có nỗ lực thôi là chưa đủ, bạn phải biết nắm bắt thời cơ. Đừng bao giờ
              từ bỏ ước mơ, dù xuất phát điểm của bạn có thấp đến đâu.
            </p>
            <footer className="mt-3 flex items-center gap-3">
              <span className="h-px w-7 bg-sand/55" />
              <cite className="font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-sand-light">
                Lôi Quân
              </cite>
            </footer>
          </motion.blockquote>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg bg-teal-light px-6 py-3 font-body text-sm font-semibold text-navy transition-all duration-200 hover:scale-[1.03] hover:bg-ivory"
            >
              Xem dự án
            </a>
            <a
              href={profile.cvUrl}
              download
              className="px-6 py-3 rounded-lg border border-white/15 text-ivory/85 font-body text-sm font-medium hover:border-teal-light hover:text-teal-light transition-all duration-200 hover:scale-[1.03]"
            >
              Tải CV
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-[470px]">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-teal/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-teal/20" />

          <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-soft shadow-2xl shadow-black/30">
            <img
              src="/background_image/20240122_201456.jpg"
              alt="Không gian làm việc và lập trình của Dương Thanh Hoài"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-teal/10" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

            <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-light">
                  Không gian làm việc
                </p>
                <p className="mt-1 font-display text-lg text-ivory/90">
                  Xây dựng · Học hỏi · Cải tiến
                </p>
              </div>
              <span className="mb-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-light shadow-[0_0_18px_rgba(90,156,146,0.9)]" />
            </figcaption>
          </figure>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ivory/40"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Cuộn xuống</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <HiArrowDown />
        </motion.span>
      </motion.div>
    </section>
  );
}
