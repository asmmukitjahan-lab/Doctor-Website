import { Brain, Plus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ActionLink from "../components/ActionLink.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { specialties } from "../data/content.js";

export default function SpecialtiesSection() {
  return (
    <section
      className="scroll-mt-24 bg-bluegrey/30 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      id="specialties"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex items-end justify-between gap-8 sm:mb-16">
          <SectionIntro
            eyebrow="02 / AREAS OF FOCUS"
            number="THE NEUROLOGY ATLAS"
            title={
              <>
                Every signal
                <br />
                has a <em>story.</em>
              </>
            }
            copy="From a familiar headache to a new change that is harder to name. We take your concern seriously, and start by listening."
          />
          <div className="hidden items-center gap-3 border-l border-plum/20 pl-5 text-plum/60 sm:flex">
            <Brain size={25} strokeWidth={1.1} className="text-peach" />
            <span className="text-[8px] font-semibold leading-4 tracking-[0.16em]">
              NEUROLOGY
              <br />
              IN CONTEXT
            </span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                className="group rounded-xl relative flex min-h-56 scroll-mt-24 flex-col justify-between overflow-hidden border border-plum/10 bg-paper/75 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-peach/60 hover:bg-paper hover:shadow-xl hover:shadow-plum/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-2 sm:min-h-64 sm:px-6 sm:py-6"
                id={`condition-${item.slug}`}
                href="#appointment"
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
              >
                <span className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold tracking-[0.16em] text-plum/45">
                    NO. {item.number}
                  </span>
                  <span className="grid size-10 rotate-3 place-items-center border border-plum/15 text-plum/70 transition-all duration-300 group-hover:rotate-0 group-hover:border-peach group-hover:text-peach">
                    <Icon size={19} strokeWidth={1.4} />
                  </span>
                </span>
                <span className="mt-9 flex items-end justify-between gap-3">
                  <span>
                    <strong className="block font-display text-xl leading-tight text-plum sm:text-2xl">
                      {item.name}
                    </strong>
                    <small className="mt-2 block text-[10px] leading-5 text-plum/65">
                      {item.note}
                    </small>
                  </span>
                  <span className="mb-1 grid size-7 shrink-0 place-items-center rounded-full bg-lavender/60 text-plum transition-all duration-300 group-hover:rotate-90 group-hover:bg-plum group-hover:text-paper">
                    <Plus size={14} />
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-peach transition-all duration-300 group-hover:w-full" />
              </motion.a>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-plum/15 pt-5 text-[10px] text-plum/65 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2">
            <Sparkles size={13} className="text-peach" />
            One person. One careful assessment.
          </span>
          <span className="inline-flex items-center gap-2">
            Not sure where you fit?{" "}
            <ActionLink href="#appointment" variant="text">
              Let’s talk
            </ActionLink>
          </span>
        </div>
      </div>
    </section>
  );
}
