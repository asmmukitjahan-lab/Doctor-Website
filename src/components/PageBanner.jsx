import { motion, useReducedMotion } from "framer-motion";
import { Brain, Plus, Sparkles } from "lucide-react";

export default function PageBanner({ index, eyebrow, title, copy }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-plum px-5 pb-14 pt-36 text-paper sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-44">
      <div
        className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(circle_at_78%_38%,rgba(201,185,230,.38),transparent_35%),linear-gradient(135deg,transparent_40%,rgba(168,183,201,.09))]"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute -right-4 top-16 -z-10 font-display text-[44vw] leading-none text-paper/[0.035] sm:right-6 sm:top-8 sm:text-[30vw]">
        {index}
      </span>
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-9 flex items-center justify-between border-y border-paper/15 py-3 text-[8px] font-semibold tracking-[0.18em] text-paper/60 sm:mb-12 sm:text-[9px]">
          <span className="text-lavender">{index} / 04</span>
          <span>{eyebrow}</span>
          <span className="hidden sm:inline">NEUROLOGY / LONDON</span>
        </div>
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <motion.div
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <h1 className="font-display text-[clamp(3.75rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.06em] text-paper [&_em]:font-normal [&_em]:italic [&_em]:text-lavender">
              {title}
            </h1>
            <p className="mt-7 max-w-[440px] text-sm leading-7 text-paper/75 sm:mt-9 sm:text-base">
              {copy}
            </p>
            <div className="mt-8 flex items-center gap-3 text-[8px] font-semibold tracking-[0.18em] text-paper/55">
              <span className="grid size-8 place-items-center rounded-full border border-lavender/35 text-peach">
                <Sparkles size={14} aria-hidden="true" />
              </span>
              CARE, CONSIDERED / FIG. {index}
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto h-[280px] w-full max-w-[560px] sm:h-[360px] lg:h-[420px]"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.12 }}
          >
            <div className="absolute inset-y-0 left-[8%] right-[8%] overflow-hidden rounded-t-[48%] border border-lavender/35 bg-bluegrey/20">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-65 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/10 to-plum/10" />
              <div className="absolute inset-3 rounded-t-[48%] border border-paper/35" />
            </div>
            <motion.div
              className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lavender/45 bg-plum/55 text-lavender backdrop-blur-sm sm:size-40"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 80, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            >
              <Brain size={54} strokeWidth={0.8} className="sm:size-16" />
            </motion.div>
            <span className="absolute left-0 top-[17%] grid size-10 place-items-center rounded-full bg-peach text-plum shadow-lg shadow-plum/20 sm:size-12">
              <Plus size={20} aria-hidden="true" />
            </span>
            <span className="absolute bottom-[9%] right-0 max-w-40 border border-paper/20 bg-plum/85 px-4 py-3 text-[8px] font-semibold leading-4 tracking-[0.14em] text-paper/75 backdrop-blur-sm">
              LISTEN CLOSELY<br />MOVE FORWARD TOGETHER
            </span>
            <span className="absolute right-[5%] top-[6%] size-3 rounded-full bg-lavender shadow-[0_0_24px_rgba(201,185,230,.8)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
