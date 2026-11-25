import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, copy, light = false, number }) {
  return (
    <motion.div
      className={`max-w-3xl ${light ? "text-paper" : "text-plum"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="mb-5 flex items-center justify-between gap-5 text-[8px] font-bold tracking-[0.16em] text-current/60 sm:mb-6 sm:text-[9px]">
        <span>{eyebrow}</span>
        {number && <span className="text-peach">{number}</span>}
      </div>
      <h2 className={`font-display text-[clamp(2.9rem,6vw,5.25rem)] leading-[0.91] tracking-[-0.055em] [&_em]:font-normal [&_em]:italic ${light ? "[&_em]:text-lavender" : "[&_em]:text-plum/70"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-6 max-w-[490px] text-sm leading-7 sm:text-base ${light ? "text-paper/70" : "text-muted"}`}>{copy}</p>}
    </motion.div>
  );
}
