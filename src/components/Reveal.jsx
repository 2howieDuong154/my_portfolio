import { motion } from "framer-motion";

/**
 * Reveal — wrapper animation dùng chung: fade-in + slide-up nhẹ
 * khi phần tử xuất hiện trong viewport. Dùng cho hầu hết block nội dung.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  once = true,
}) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
