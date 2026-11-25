import { motion } from "framer-motion";

const details = [
  { number: "01", title: "Time to listen", note: "Unhurried consultations" },
  {
    number: "02",
    title: "Care with context",
    note: "The person, not just a symptom",
  },
  {
    number: "03",
    title: "A clearer next step",
    note: "Decisions made together",
  },
];

export default function ProofSection() {
  return (
    <section
      className="mx-auto grid max-w-[1320px] gap-4 border-b border-plum/15 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.1fr_repeat(3,1fr)] lg:items-center lg:gap-0 lg:px-12 lg:py-10"
      aria-label="Practice principles"
    >
      <div className="flex items-center gap-3 text-[8px] font-semibold tracking-[0.16em] text-plum/65 sm:col-span-2 lg:col-span-1">
        <span>THE PRACTICE, IN THREE IDEAS</span>
        <span className="text-peach">✳</span>
      </div>
      {details.map((item, index) => (
        <motion.div
          className="flex min-h-12 items-center gap-3 border-l border-plum/15 pl-4 sm:pl-5"
          key={item.number}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="self-start mt-1 text-[8px] tracking-[0.14em] text-peach">
            {item.number}
          </span>
          <div className="flex flex-col gap-1">
            <strong className="font-display text-xl font-normal leading-tight text-plum">
              {item.title}
            </strong>
            <small className="text-[10px] text-plum/60">{item.note}</small>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
