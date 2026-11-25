import { motion } from "framer-motion";
import { AudioLines, Plus, Sparkles } from "lucide-react";
import ActionLink from "../components/ActionLink.jsx";

export default function VoicesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-bluegrey/55 px-5 py-20 text-plum sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 size-[30rem] -translate-y-1/2 rounded-full border border-plum/[0.08] sm:right-[6%]" />
      <div className="pointer-events-none absolute -right-5 top-1/2 -z-10 size-[23rem] -translate-y-1/2 rounded-full border border-plum/[0.08]" />
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1fr_.7fr]">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 inline-flex items-center gap-2 text-[8px] font-bold tracking-[0.17em] text-plum/60">
            <Sparkles size={13} className="text-peach" /> A PRINCIPLE, NOT A
            PROMISE
          </div>
          <h2 className="font-display text-[clamp(3.2rem,7vw,6.7rem)] leading-[0.84] tracking-[-0.06em]">
            First, be
            <br />
            <em className="font-normal italic text-plum/70">heard.</em>
          </h2>
          <p className="mt-6 max-w-[520px] text-sm leading-7 text-plum/70 sm:text-base">
            Every patient’s experience is their own. Stories belong to the
            people who lived them, and are shared here only with their explicit
            permission.
          </p>
          <ActionLink href="#appointment" variant="text" className="mt-7">
            Start with your story
          </ActionLink>
        </motion.div>
        <div className="relative flex min-h-56 items-center justify-center sm:min-h-72">
          <span
            className="absolute left-[8%] top-0 font-display text-[10rem] leading-none text-plum/[0.07] sm:text-[13rem]"
            aria-hidden="true"
          >
            “
          </span>
          <div className="relative flex flex-col items-center gap-5 text-center">
            <div className="grid size-20 place-items-center rounded-full border border-plum/20 bg-paper/30 text-plum/70 sm:size-24">
              <AudioLines size={31} strokeWidth={1} />
            </div>
            <p className="text-[8px] font-semibold leading-5 tracking-[0.18em] text-plum/60">
              LISTENING IS
              <br />
              PART OF THE SCIENCE
            </p>
            <span className="flex items-center gap-2 text-[8px] tracking-[0.16em] text-plum/45">
              <span className="h-px w-8 bg-peach" />
              05 — 08 / LISTEN
            </span>
          </div>
          <Plus
            className="absolute bottom-4 right-[8%] rotate-45 text-peach"
            size={20}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
