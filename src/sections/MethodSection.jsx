import { Activity, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ActionLink from "../components/ActionLink.jsx";
import SectionIntro from "../components/SectionIntro.jsx";

export default function MethodSection() {
  return (
    <section className="grid scroll-mt-24 bg-plum text-paper lg:grid-cols-[1.05fr_.95fr]">
      <motion.div
        className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[740px]"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1500&q=88"
          srcSet="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=750&q=85 750w, https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=88 1100w, https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1500&q=88 1500w"
          sizes="(max-width: 760px) 100vw, 54vw"
          alt="Abstract neurological image representing the complexity of the brain"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-65 saturate-[.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/10 to-plum/15" />
        <span className="absolute left-5 top-6 text-[8px] font-semibold tracking-[0.18em] text-paper/70 sm:left-8 sm:top-8">
          A MAP IS NOT THE TERRITORY
        </span>
        <span className="absolute bottom-6 left-5 text-[8px] font-semibold tracking-[0.16em] text-paper/70 sm:bottom-8 sm:left-8">
          NEURAL SYSTEMS / 01—03
        </span>
        <div
          className="absolute right-[8%] top-[15%] grid size-52 place-items-center rounded-full border border-lavender/45 text-lavender sm:size-72"
          aria-hidden="true"
        >
          <span className="absolute inset-5 rounded-full border border-dashed border-lavender/45" />
          <span className="absolute inset-12 rounded-full border border-paper/25" />
          <Brain size={72} strokeWidth={0.8} />
          <Sparkles size={19} className="absolute right-8 top-10 text-peach" />
        </div>
        <span className="absolute bottom-[18%] right-[8%] hidden max-w-36 border border-paper/25 bg-plum/70 px-4 py-3 text-[8px] leading-4 tracking-[0.16em] text-paper/75 backdrop-blur-sm sm:block">
          PATIENT
          <br />
          PERSON / CONTEXT / CARE
        </span>
      </motion.div>
      <div className="flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-[clamp(3rem,7vw,7.5rem)]">
        <SectionIntro
          eyebrow="03 / HOW I THINK"
          number="LOOK CLOSER"
          title={
            <>
              The brain is
              <br />
              complex.
              <br />
              <em>
                Your care
                <br />
                doesn’t need
                <br />
                to be.
              </em>
            </>
          }
          copy="Symptoms don't always arrive in neat categories. Your history, your everyday life and the small things you've noticed all belong in the picture."
          light
        />
        <div className="mt-9 grid border-y border-paper/15 sm:grid-cols-3">
          <span className="flex items-center gap-3 py-4 text-[10px] text-paper/80 sm:flex-col sm:items-start sm:border-r sm:border-paper/15 sm:py-5">
            <b className="font-sans text-[8px] font-medium tracking-[0.15em] text-peach">
              01
            </b>
            <span>Ask better questions</span>
          </span>
          <span className="flex items-center gap-3 border-t border-paper/15 py-4 text-[10px] text-paper/80 sm:flex-col sm:items-start sm:border-r sm:border-t-0 sm:border-paper/15 sm:px-4 sm:py-5">
            <b className="font-sans text-[8px] font-medium tracking-[0.15em] text-peach">
              02
            </b>
            <span>Explain what we find</span>
          </span>
          <span className="flex items-center gap-3 border-t border-paper/15 py-4 text-[10px] text-paper/80 sm:flex-col sm:items-start sm:border-t-0 sm:px-4 sm:py-5">
            <b className="font-sans text-[8px] font-medium tracking-[0.15em] text-peach">
              03
            </b>
            <span>Decide together</span>
          </span>
        </div>
        <ActionLink
          href="#path"
          variant="lightOutline"
          icon={Activity}
          className="mt-8 w-fit"
        >
          See how care unfolds
        </ActionLink>
      </div>
    </section>
  );
}
