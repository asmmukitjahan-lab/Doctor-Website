import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ActionLink from "../components/ActionLink.jsx";
import SectionIntro from "../components/SectionIntro.jsx";

export default function PracticeSection() {
  return (
    <section
      className="grid scroll-mt-24 items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-36"
      id="practice"
    >
      <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[560px]">
        <motion.div
          className="absolute inset-y-0 left-[8%] right-[6%] overflow-hidden rounded-t-[48%] bg-bluegrey"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=88"
            srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85 700w, https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=88 1100w, https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=88 1400w"
            sizes="(max-width: 760px) 82vw, (max-width: 1080px) 40vw, 520px"
            alt="A calm, light-filled consultation room"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover saturate-[.72] transition-transform duration-1000 hover:scale-[1.04]"
          />
        </motion.div>
        <span className="absolute left-0 top-[18%] text-[8px] font-semibold tracking-[0.18em] text-plum/60 [writing-mode:vertical-rl]">
          A QUIETER KIND OF CLINIC
        </span>
        <div className="absolute -bottom-2 right-0 grid size-32 -rotate-6 place-items-center rounded-full border-[7px] border-paper bg-lavender text-plum shadow-xl sm:size-40">
          <span className="flex flex-col items-center text-center font-display text-2xl leading-[0.88]">
            <Sparkles size={16} className="mb-2 text-peach" />
            room to
            <br />
            <em>think</em>
          </span>
        </div>
        <span className="absolute bottom-2 left-[8%] text-[8px] font-semibold tracking-[0.17em] text-plum/60">
          EST. / INDEPENDENT PRACTICE
        </span>
        <div className="absolute inset-y-4 left-[5%] right-[3%] -z-10 rounded-t-[48%] border border-plum/15" />
      </div>
      <div className="mx-auto max-w-2xl">
        <SectionIntro
          eyebrow="01 / THE PRACTICE"
          number="01—08"
          title={
            <>
              Medicine looks
              <br />
              for answers.
              <br />
              <em>
                People need
                <br />
                understanding.
              </em>
            </>
          }
          copy="I’m Dr. Elena Marceau. Neurology asks us to look closely, but good care starts with looking beyond the scan—with time, curiosity and a willingness to listen."
        />
        <ActionLink href="#path" variant="text" className="mt-8">
          Meet my approach
        </ActionLink>
        <div className="mt-12 flex items-center gap-3 border-t border-plum/15 pt-5">
          <span className="font-display text-3xl italic text-bluegrey">EM</span>
          <small className="text-[8px] font-semibold tracking-[0.17em] text-plum/60">
            CARE, CONSIDERED / LONDON
          </small>
        </div>
      </div>
    </section>
  );
}
