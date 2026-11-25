import { Plus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ActionLink from "./ActionLink.jsx";
import Brand from "./Brand.jsx";
import { navigation } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum px-5 pb-6 pt-16 text-paper sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
      <span
        className="pointer-events-none absolute -bottom-16 right-[4%] font-display text-[30vw] leading-none text-paper/[0.035]"
        aria-hidden="true"
      >
        SJM
      </span>
      <div className="relative mx-auto grid max-w-[1320px] gap-12 border-b border-paper/15 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr_auto] md:gap-8 lg:grid-cols-[1.5fr_.7fr_.7fr_auto] lg:gap-12">
        <div>
          <Brand footer />
          <p className="mt-7 font-display text-3xl leading-tight text-paper">
            Neurology is personal.
            <br />
            <em className="text-lavender">Care should be, too.</em>
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.17em] text-paper/50">
            <Sparkles size={13} className="text-peach" aria-hidden="true" />{" "}
            INDEPENDENT NEUROLOGY / LONDON
          </span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="mb-2 text-[8px] font-bold tracking-[0.18em] text-lavender">
            EXPLORE
          </span>
          {navigation.map((item) => (
            <Link
              className="group inline-flex items-center gap-2 text-[11px] text-paper/70 transition-colors hover:text-paper"
              to={item.to}
              key={item.label}
            >
              {item.label}
              <Plus
                size={12}
                className="text-peach opacity-0 transition-all group-hover:rotate-90 group-hover:opacity-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="mb-2 text-[8px] font-bold tracking-[0.18em] text-lavender">
            THE PRACTICE
          </span>
          <a
            className="text-[11px] text-paper/75 hover:text-paper"
            href="tel:+442079460280"
          >
            +44 (0)20 7946 0280
          </a>
          <a
            className="text-[11px] text-paper/75 hover:text-paper"
            href="mailto:hello@elenamarceau.co.uk"
          >
            Send an email
          </a>
          <p className="text-[11px] text-paper/55">Harley Street, London W1G</p>
          <ActionLink to="/visit#appointment" className="mt-2">
            Book a consultation
          </ActionLink>
        </div>
        <Link
          className="group inline-flex h-fit items-center gap-2 text-[9px] font-semibold text-lavender transition-colors hover:text-paper"
          to="/"
        >
          Return to the beginning{" "}
          <Plus
            size={14}
            className="transition-transform group-hover:rotate-90"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-3 pt-5 text-[8px] leading-5 text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Dr. Elena Marceau</span>
        <span>
          Illustrative demo — replace profile details before publishing
        </span>
        <Link className="hover:text-paper" to="/visit">
          Privacy &amp; practice information
        </Link>
      </div>
    </footer>
  );
}
