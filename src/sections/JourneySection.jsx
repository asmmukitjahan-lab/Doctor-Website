import { motion } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";
import ActionLink from "../components/ActionLink.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { pathSteps } from "../data/content.js";

export default function JourneySection() {
  return (
    <section className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36" id="path">
      <div className="mx-auto max-w-[1320px]">
      <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
        <SectionIntro
          eyebrow="04 / YOUR FIRST VISIT"
          number="NO RUSH. NO WRONG QUESTIONS."
          title={<>A path through<br /><em>the unknown.</em></>}
          copy="You don’t need to arrive with a theory. We’ll work it out, one careful step at a time."
        />
        <ActionLink href="#appointment" variant="text" className="mb-1">What to bring</ActionLink>
      </div>
      <div className="grid gap-px border border-plum/10 bg-plum/10 sm:grid-cols-2 lg:grid-cols-4">
        {pathSteps.map((step, index) => (
          <motion.article
            key={step.number}
            className="group relative min-h-64 bg-paper px-5 py-6 transition-colors duration-300 hover:bg-white sm:px-7 sm:py-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="flex items-center justify-between text-[8px] font-semibold tracking-[0.16em] text-plum/45">
              STEP {step.number}
              <span className="grid size-9 place-items-center border border-plum/15 text-peach transition-all group-hover:rotate-45 group-hover:border-peach">
                {index === 0 ? <Sparkles size={15} /> : <Plus size={15} />}
              </span>
            </span>
            <h3 className="mt-12 font-display text-2xl leading-tight text-plum sm:text-3xl">{step.title}</h3>
            <p className="mt-3 max-w-[250px] text-[11px] leading-6 text-plum/65">{step.copy}</p>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-peach transition-all duration-300 group-hover:w-full" />
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
