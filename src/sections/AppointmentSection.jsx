import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import ActionLink from "../components/ActionLink.jsx";
import SectionIntro from "../components/SectionIntro.jsx";

const fieldStyle =
  "mt-2 w-full border-0 border-b border-plum/20 bg-transparent px-0 py-3 text-[12px] text-plum outline-none transition-colors placeholder:text-plum/40 focus:border-peach focus:ring-0";

export default function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  const submitPreview = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="grid scroll-mt-24 gap-12 bg-paper px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-36"
      id="appointment"
    >
      <div className="mx-auto w-full max-w-xl">
        <SectionIntro
          eyebrow="06 / BEGIN HERE"
          number="ONE STEP AT A TIME"
          title={
            <>
              You don’t have
              <br />
              to figure it out
              <br />
              <em>by yourself.</em>
            </>
          }
          copy="This is a form preview. Connect your secure practice booking service before collecting patient information."
        />
        <ActionLink href="tel:+442079460280" variant="text" className="mt-7">
          Prefer to call? +44 (0)20 7946 0280
        </ActionLink>
        <p className="mt-7 flex items-start gap-2 text-[10px] leading-5 text-plum/60">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-peach/35 text-plum">
            !
          </span>
          Demo only — please don’t enter medical details.
        </p>
      </div>
      <motion.form
        className="mx-auto w-full max-w-2xl border border-plum/10 bg-white/65 p-5 shadow-xl shadow-plum/[0.04] sm:p-8 lg:p-10"
        onSubmit={submitPreview}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-7 flex items-center justify-between border-b border-plum/15 pb-4 text-[8px] font-semibold tracking-[0.16em] text-plum/60">
          <span>REQUEST A CONVERSATION</span>
          <span>01 / 05</span>
        </div>
        <div className="mb-5">
          <label
            className="text-[10px] font-semibold text-plum"
            htmlFor="atlas-name"
          >
            Your name <i className="text-peach">*</i>
          </label>
          <input
            className={fieldStyle}
            id="atlas-name"
            name="name"
            autoComplete="name"
            placeholder="How should we address you?"
            required
          />
        </div>
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="text-[10px] font-semibold text-plum"
              htmlFor="atlas-phone"
            >
              Phone number <i className="text-peach">*</i>
            </label>
            <input
              className={fieldStyle}
              id="atlas-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44"
              required
            />
          </div>
          <div>
            <label
              className="text-[10px] font-semibold text-plum"
              htmlFor="atlas-email"
            >
              Email address <i className="text-peach">*</i>
            </label>
            <input
              className={fieldStyle}
              id="atlas-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            className="text-[10px] font-semibold text-plum"
            htmlFor="atlas-date"
          >
            A date that might work
          </label>
          <input
            className={fieldStyle}
            id="atlas-date"
            name="date"
            type="date"
          />
        </div>
        <div className="mb-7">
          <label
            className="text-[10px] font-semibold text-plum"
            htmlFor="atlas-message"
          >
            A little context{" "}
            <span className="ml-2 text-[8px] font-normal tracking-[0.12em] text-plum/45">
              OPTIONAL
            </span>
          </label>
          <textarea
            className={`${fieldStyle} resize-y`}
            id="atlas-message"
            name="message"
            rows="2"
            placeholder="Please avoid sharing private medical details here."
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-5 border-t border-plum/15 pt-5 sm:flex-row sm:items-center">
          <p className="text-[9px] leading-5 text-plum/55">
            Secure booking integration required before launch.
          </p>
          <button
            className="group inline-flex min-h-12 items-center gap-5 rounded-l-sm rounded-r-full bg-plum py-1.5 pl-5 pr-1.5 text-[11px] font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-plum/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-4"
            type="submit"
          >
            {submitted ? "Preview submitted" : "Continue"}
            <span className="grid size-9 place-items-center rounded-full bg-lavender text-plum transition-transform group-hover:rotate-45">
              {submitted ? <Check size={16} /> : <Plus size={16} />}
            </span>
          </button>
        </div>
        <AnimatePresence>
          {submitted && (
            <motion.p
              className="mt-5 border-l-2 border-peach pl-3 text-[10px] leading-5 text-plum/70"
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Preview complete. Connect a secure booking service to receive
              requests.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}
