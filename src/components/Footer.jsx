import { profile } from "../data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-px py-8 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ivory/40">
        <p>© {year} {profile.name}. Đã giữ mọi quyền.</p>
        <p>Thiết kế & xây dựng bằng React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
