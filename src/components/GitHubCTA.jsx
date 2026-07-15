import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Reveal from "./Reveal";
import { profile } from "../data/data";

export default function GitHubCTA() {
  return (
    <section id="github" className="section-tone-built section-px pb-24 md:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-ivory/10 bg-[#0d1220]/90 px-6 py-10 shadow-[0_28px_80px_rgba(3,7,18,0.3)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-teal/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-teal-dark/15 blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_right,black,transparent)]" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-3xl text-ivory shadow-lg shadow-black/20">
                  <FiGithub aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-teal-light">
                    Mã nguồn & Thử nghiệm
                  </p>
                  <p className="mt-1 font-mono text-xs text-ivory/35">https://github.com/2howieDuong154</p>
                </div>
              </div>

              <h2 className="mb-4 max-w-xl font-display text-3xl font-medium leading-tight text-ivory md:text-4xl">
                Khám phá thêm trên GitHub
              </h2>
              <p className="max-w-xl font-body text-sm leading-relaxed text-ivory/55 md:text-base">
                Theo dõi các dự án, mã nguồn và những thử nghiệm kỹ thuật mới trong quá trình
                học hỏi và phát triển sản phẩm.
              </p>
            </div>

            <motion.a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-fit items-center gap-3 rounded-xl border border-white/60 bg-ivory px-6 py-3.5 font-body text-sm font-semibold text-navy shadow-xl shadow-black/25 transition-colors duration-200 hover:bg-white"
              aria-label="Mở trang GitHub"
            >
              <FiGithub className="text-lg" />
              Mở GitHub
              <HiOutlineExternalLink className="text-base text-navy/55 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <div className="relative z-10 mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/[0.07] pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/30">
            <span>Repositories</span>
            <span>Source code</span>
            <span>Experiments</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
