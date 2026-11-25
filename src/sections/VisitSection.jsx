import { Clock3, MapPin, Phone, Plus } from "lucide-react";
import { motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro.jsx";

const visitDetails = [
  {
    Icon: MapPin,
    label: "VISIT",
    content: (
      <>
        Harley Street Medical Centre
        <br />
        35 Harley Street, London W1G 8QH
      </>
    ),
  },
  {
    Icon: Phone,
    label: "CALL",
    content: (
      <a href="tel:+442079460280" className="hover:text-plum">
        +44 (0)20 7946 0280
      </a>
    ),
  },
  {
    Icon: Clock3,
    label: "CONSULTATIONS",
    content: (
      <>
        Monday — Friday
        <br />
        09:00 — 17:30
      </>
    ),
  },
];

export default function VisitSection() {
  return (
    <section
      className="grid scroll-mt-24 gap-12 bg-bluegrey/35 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-32"
      id="contact"
    >
      <div className="mx-auto w-full max-w-xl">
        <SectionIntro
          eyebrow="07 / FIND THE PRACTICE"
          number="HARLEY STREET, LONDON"
          title={
            <>
              A place to
              <br />
              <em>take a breath.</em>
            </>
          }
          copy="An independent practice in central London, designed to make the first conversation feel a little easier."
        />
        <div className="mt-9 divide-y divide-plum/15 border-y border-plum/15">
          {visitDetails.map(({ Icon, label, content }) => (
            <div className="flex items-start gap-4 py-4" key={label}>
              <span className="mt-1 grid size-9 shrink-0 place-items-center border border-plum/15 text-peach">
                <Icon size={16} />
              </span>
              <span className="flex flex-col gap-1 text-[11px] leading-5 text-plum/75">
                <b className="text-[8px] tracking-[0.15em] text-plum/55">
                  {label}
                </b>
                {content}
              </span>
            </div>
          ))}
        </div>
      </div>
      <motion.a
        className="group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden border border-plum/15 bg-paper p-5 transition-shadow hover:shadow-2xl hover:shadow-plum/10 sm:min-h-[480px] sm:p-8"
        href="https://maps.google.com/?q=35+Harley+Street+London"
        target="_blank"
        rel="noreferrer"
        aria-label="Open directions to Harley Street Medical Centre"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <svg
          className="absolute inset-0 -z-10 h-full w-full text-bluegrey/50 transition-transform duration-700 group-hover:scale-105"
          viewBox="0 0 640 480"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-20 100 650 350M-20 340 650 90M100-20l220 520M430-20 260 500M10 230h620M120 0v480M500 0v480"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M260 480 350 155 450 480M-20 200 300 330 520 230"
            stroke="#F5F1F8"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path d="M0 0h640v480H0z" fill="url(#map-fade)" />
          <defs>
            <linearGradient
              id="map-fade"
              x1="320"
              y1="0"
              x2="320"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1F8" stopOpacity=".2" />
              <stop offset="1" stopColor="#A8B7C9" stopOpacity=".42" />
            </linearGradient>
          </defs>
        </svg>
        <span className="flex items-center justify-between text-[8px] font-semibold tracking-[0.16em] text-plum/60">
          <span>MARYLEBONE</span>
          <span>51°31' N / 00°08' W</span>
        </span>
        <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[6px] border-paper bg-plum text-lavender shadow-lg">
          <MapPin size={20} />
        </span>
        <span className="absolute left-[47%] top-[61%] bg-paper/80 px-2 py-1 text-[8px] font-semibold tracking-[0.13em] text-plum">
          HARLEY STREET
        </span>
        <span className="flex items-center justify-between border-t border-plum/15 pt-4 text-[8px] font-semibold tracking-[0.16em] text-plum/70">
          OPEN DIRECTIONS
          <span className="grid size-9 place-items-center rounded-full bg-plum text-paper transition-transform group-hover:rotate-45">
            <Plus size={16} />
          </span>
        </span>
      </motion.a>
    </section>
  );
}
