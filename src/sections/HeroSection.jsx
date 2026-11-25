import { motion, useReducedMotion } from "framer-motion";
import { Activity, Brain, Plus, Sparkles } from "lucide-react";
import ActionLink from "../components/ActionLink.jsx";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[780px] overflow-hidden bg-plum px-5 pb-10 pt-36 text-paper sm:min-h-[850px] sm:px-8 sm:pt-40 lg:min-h-[900px] lg:px-12 lg:pt-32"
      id="home"
    >
      <div
        className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(circle_at_78%_38%,rgba(201,185,230,.38),transparent_35%),linear-gradient(135deg,transparent_40%,rgba(168,183,201,.09))]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 top-36 -z-10 size-[34rem] rounded-full border border-lavender/10 sm:right-0"
        aria-hidden="true"
      />
      <motion.svg
        className="pointer-events-none absolute right-[-12%] top-[22%] -z-10 h-[520px] w-[55%] opacity-40"
        viewBox="0 0 640 530"
        fill="none"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 8 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <path
          d="M24 338C143 345 94 211 220 222s95 110 196 37 102-115 200-147"
          stroke="#C9B9E6"
          strokeOpacity=".52"
        />
        <path
          d="M37 431c99-20 142-88 207-50s96 14 146-89 105-41 227-129"
          stroke="#D8B5A5"
          strokeOpacity=".42"
        />
        <path
          d="M108 90c79 7 110 81 201 46s114-70 219-46"
          stroke="#C9B9E6"
          strokeOpacity=".42"
        />
        {[
          ["24", "338"],
          ["220", "222"],
          ["416", "259"],
          ["616", "112"],
          ["244", "381"],
          ["552", "163"],
          ["309", "61"],
          ["376", "480"],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#C9B9E6" />
        ))}
      </motion.svg>
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-9 flex items-center justify-between border-y border-paper/15 py-3 text-[8px] font-semibold tracking-[0.18em] text-paper/60 sm:mb-12 sm:text-[9px]">
          <span className="inline-flex items-center gap-2 text-lavender">
            <span className="size-1.5 rounded-full bg-peach" /> PRIVATE
            NEUROLOGY PRACTICE
          </span>
          <span>51°31' N&nbsp; / &nbsp;LONDON</span>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-8">
          <motion.div
            className="relative z-10 order-1 pb-3 lg:order-2 lg:justify-self-end lg:pl-8 lg:pt-6 lg:text-right"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13, delayChildren: 0.1 },
              },
            }}
          >
            <motion.div
              className="mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.17em] text-paper/70 sm:text-[10px] lg:justify-end"
              variants={rise}
            >
              <span className="grid size-8 place-items-center rounded-full border border-lavender/35 text-peach">
                <Sparkles size={14} />
              </span>
              A DIFFERENT KIND OF NEUROLOGY
            </motion.div>
            <motion.h1
              className="max-w-[780px] font-display text-[clamp(3.75rem,8.1vw,8rem)] leading-[0.83] tracking-[-0.06em] text-paper [&_em]:font-normal [&_em]:italic [&_em]:text-lavender lg:ml-auto"
              variants={rise}
            >
              Your brain
              <br />
              is <em>not</em> a puzzle
              <br />
              to solve alone.
            </motion.h1>
            <motion.p
              className="mt-7 max-w-[450px] text-sm leading-7 text-paper/75 sm:mt-8 sm:text-base lg:ml-auto"
              variants={rise}
            >
              Specialist neurology, without the rush. A considered space to
              listen, investigate and find a way forward that feels like yours.
            </motion.p>
            <motion.div
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 lg:justify-end"
              variants={rise}
            >
              <ActionLink href="#appointment" icon={Plus}>
                Start a conversation
              </ActionLink>
              <ActionLink
                href="#specialties"
                variant="lightOutline"
                icon={Activity}
              >
                Explore the atlas
              </ActionLink>
            </motion.div>
            <motion.div
              className="mt-10 flex items-center gap-3 text-[8px] font-semibold tracking-[0.17em] text-paper/55 lg:justify-end"
              variants={rise}
            >
              <span className="h-px w-9 bg-peach" /> LISTEN / UNDERSTAND / MOVE
              FORWARD
            </motion.div>
          </motion.div>

          <div className="relative order-2 mx-auto h-[430px] w-full max-w-[570px] sm:h-[520px] lg:order-1 lg:mt-12 lg:h-[660px]">
            <motion.div
              className="absolute inset-y-4 left-[9%] right-[8%] overflow-hidden rounded-t-[48%] border border-lavender/35 bg-bluegrey/20 sm:inset-y-6"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{
                duration: reduceMotion ? 0 : 1.05,
                delay: 0.25,
                ease: [0.78, 0, 0.2, 1],
              }}
            >
              <img
                className="h-full w-full object-cover object-[54%_37%] saturate-[.82] transition-transform duration-1000 hover:scale-[1.035]"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=88"
                srcSet="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85 800w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=88 1200w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=88 1600w"
                sizes="(max-width: 760px) 78vw, (max-width: 1080px) 42vw, 560px"
                alt="Editorial portrait representing the neurology practice"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/65 via-transparent to-plum/5" />
              <div className="absolute inset-3 rounded-t-[48%] border border-paper/40 sm:inset-4" />
            </motion.div>
            <motion.div
              className="absolute -left-1 bottom-[16%] flex min-h-[68px] items-center gap-3 border border-plum/10 bg-paper px-3 py-2 text-plum shadow-xl shadow-plum/20 sm:left-0 sm:gap-4 sm:px-4"
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid size-9 place-items-center rounded-full border border-peach/60 text-peach">
                <Brain size={17} />
              </span>
              <span className="flex flex-col gap-1">
                <small className="text-[7px] font-bold tracking-[0.15em] text-plum/55">
                  HERE TO HELP YOU
                </small>
                <strong className="font-display text-lg leading-none">
                  Dr. Elena Marceau
                </strong>
              </span>
              <Plus size={15} className="ml-2 text-peach" aria-hidden="true" />
            </motion.div>
            <motion.div
              className="absolute right-[1%] top-[7%] -z-10 aspect-square w-[76%] rounded-full border border-lavender/25"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 90, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            >
              <span className="absolute inset-5 rounded-full border border-dashed border-lavender/25" />
              <span className="absolute -right-1 top-1/4 size-3 rounded-full bg-peach shadow-[0_0_22px_rgba(216,181,165,.65)]" />
            </motion.div>
            <span className="absolute bottom-8 right-0 hidden text-[8px] tracking-[0.2em] text-paper/60 [writing-mode:vertical-rl] sm:block">
              FIG. 01 — PERSON BEFORE DIAGNOSIS
            </span>
          </div>
        </div>
        <a
          className="group mt-3 flex items-center gap-3 border-t border-paper/15 pt-4 text-[8px] font-semibold tracking-[0.17em] text-paper/60 transition-colors hover:text-paper sm:mt-7"
          href="#practice"
        >
          INDEPENDENT CONSULTANT NEUROLOGIST
          <span className="h-px flex-1 bg-paper/15 transition-colors group-hover:bg-peach/70" />
          <span className="inline-flex items-center gap-2 text-lavender">
            SCROLL TO EXPLORE{" "}
            <Plus
              size={13}
              className="transition-transform group-hover:rotate-90"
            />
          </span>
        </a>
      </div>
    </section>
  );
}
