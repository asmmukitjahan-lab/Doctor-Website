import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary: {
    link: "bg-lavender text-plum hover:bg-paper",
    icon: "bg-plum text-paper",
  },
  secondary: {
    link: "bg-plum text-paper hover:bg-bluegrey",
    icon: "bg-paper text-plum",
  },
  outline: {
    link: "border border-plum/35 bg-transparent text-plum hover:bg-plum hover:text-paper",
    icon: "bg-plum text-paper",
  },
  lightOutline: {
    link: "border border-paper/45 bg-transparent text-paper hover:bg-paper hover:text-plum",
    icon: "bg-paper text-plum",
  },
  text: {
    link: "text-plum hover:text-plum/65",
    icon: "text-peach",
  },
};

export default function ActionLink({
  to,
  href,
  children,
  variant = "primary",
  icon: Icon = Plus,
  className = "",
  ...props
}) {
  const Element = to ? Link : "a";
  const style = variants[variant];
  const isTextLink = variant === "text";

  return (
    <Element
      to={to}
      href={href}
      className={`group inline-flex items-center font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-4 ${
        isTextLink
          ? "gap-3 border-b border-plum/20 pb-2 text-[10px] hover:border-peach"
          : "min-h-12 justify-between gap-5 rounded-l-sm rounded-r-full py-1.5 pl-5 pr-1.5 text-[11px] hover:-translate-y-0.5"
      } ${style.link} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className={`${isTextLink ? "shrink-0 transition-transform duration-300 group-hover:rotate-90" : "grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45"} ${style.icon}`}>
        <Icon size={16} aria-hidden="true" />
      </span>
    </Element>
  );
}
