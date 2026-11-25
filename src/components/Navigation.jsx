import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Minus, Plus, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ActionLink from "./ActionLink.jsx";
import Brand from "./Brand.jsx";
import { navigation } from "../data/content.js";

const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");

const navLinkStyle =
  "group relative inline-flex min-h-10 items-center whitespace-nowrap rounded-full border border-transparent px-3 text-[12px] font-semibold tracking-wide text-plum/70 transition-[color,background-color,border-color] duration-300 hover:border-peach/65 hover:bg-lavender/50 hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-2";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const desktopNavigationRef = useRef(null);
  const mobileNavigationRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 26);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setOpenMobileGroup(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!openDropdown) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!desktopNavigationRef.current?.contains(event.target))
        setOpenDropdown(null);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [openDropdown]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      mobileNavigationRef.current?.querySelector("button, a")?.focus();
    });
    const closeOnKeyboard = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = mobileNavigationRef.current?.querySelectorAll(
        "a[href], button:not([disabled])",
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnKeyboard);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnKeyboard);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeMobileOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setOpenMobileGroup(null);
      }
    };
    window.addEventListener("resize", closeMobileOnDesktop);
    return () => window.removeEventListener("resize", closeMobileOnDesktop);
  }, []);

  const closeMobileNavigation = (restoreFocus = false) => {
    setMobileOpen(false);
    setOpenMobileGroup(null);
    if (restoreFocus)
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5 lg:px-7">
      <div className="pointer-events-auto mx-auto max-w-[1480px]">
        <nav
          className="relative z-[70] grid min-h-[68px] grid-cols-[1fr_auto] items-center gap-3 rounded-full border border-plum/15 bg-paper/95 px-3 shadow-xl shadow-plum/5 backdrop-blur-xl transition-all duration-300 sm:min-h-[74px] sm:px-5 lg:grid-cols-[auto_1fr_auto] lg:px-7"
          aria-label="Main navigation"
        >
          <Brand />
          <div
            className="hidden items-center justify-center gap-4 lg:flex 2xl:gap-7"
            ref={desktopNavigationRef}
          >
            {navigation.map((item) => {
              if (!item.children) {
                return (
                  <NavLink
                    className={navLinkStyle}
                    end={item.to === "/"}
                    to={item.to}
                    key={item.to}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const isOpen = openDropdown === item.label;
              const menuId = `atlas-dropdown-${slugify(item.label)}`;
              return (
                <div
                  className="relative"
                  key={item.label}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenDropdown(null);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && isOpen) {
                      setOpenDropdown(null);
                      event.currentTarget.querySelector("button")?.focus();
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`${navLinkStyle} inline-flex items-center gap-1.5`}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? menuId : undefined}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  >
                    {item.label}
                    {isOpen ? (
                      <Minus size={13} aria-hidden="true" />
                    ) : (
                      <Plus size={13} aria-hidden="true" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={menuId}
                        className="absolute left-0 top-full z-[80] mt-3 w-[min(440px,85vw)] border border-plum/10 bg-paper p-5 text-plum shadow-2xl shadow-plum/15 sm:p-6"
                        role="group"
                        aria-label={`${item.label} links`}
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
                        transition={{ duration: reduceMotion ? 0 : 0.18 }}
                      >
                        <div className="flex items-end justify-between gap-5 border-b border-plum/15 pb-4">
                          <div>
                            <p className="mb-1 text-[8px] font-bold tracking-[0.17em] text-plum/55">
                              {item.label.toUpperCase()}
                            </p>
                            <h2 className="font-display text-xl leading-tight">
                              {item.summary}
                            </h2>
                          </div>
                          <Link
                            className="group flex shrink-0 items-center gap-2 pb-1 text-[9px] font-semibold text-plum/65 hover:text-plum"
                            to={item.to}
                            onClick={() => setOpenDropdown(null)}
                          >
                            Overview{" "}
                            <Plus
                              size={13}
                              className="text-peach transition-transform group-hover:rotate-90"
                            />
                          </Link>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-4">
                          {item.children.map((child) => (
                            <Link
                              className="group relative flex min-h-14 flex-col justify-center gap-1 border-b border-plum/10 pr-5 transition-colors hover:text-plum/70"
                              to={child.to}
                              key={child.label}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <strong className="text-[12px] font-semibold">
                                {child.label}
                              </strong>
                              <small className="text-[10px] text-plum/60">
                                {child.note}
                              </small>
                              <Plus
                                size={13}
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-peach opacity-0 transition-all group-hover:rotate-90 group-hover:opacity-100"
                                aria-hidden="true"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <ActionLink
              to="/visit#appointment"
              className="hidden min-h-10 gap-2 pl-4 pr-1 sm:inline-flex"
            >
              Book a visit
            </ActionLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="grid size-10 place-items-center border border-plum/15 text-plum transition-colors hover:bg-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-2 lg:hidden"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls={mobileOpen ? "atlas-mobile-navigation" : undefined}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: reduceMotion ? 0 : -35 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: reduceMotion ? 0 : 35 }}
                  transition={{ duration: reduceMotion ? 0 : 0.15 }}
                >
                  {mobileOpen ? <X size={19} /> : <Menu size={19} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                className="fixed inset-0 z-[50] bg-plum/60 lg:hidden"
                aria-label="Close navigation"
                tabIndex={-1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
                onClick={() => closeMobileNavigation(true)}
              />
              <motion.aside
                ref={mobileNavigationRef}
                id="atlas-mobile-navigation"
                className="fixed inset-y-0 right-0 z-[60] flex h-[100dvh] w-full max-w-[440px] flex-col overflow-y-auto overscroll-contain border-l border-lavender/20 bg-plum px-6 pb-6 pt-24 text-paper shadow-2xl lg:hidden sm:px-8 sm:pt-28"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-5 flex items-center justify-between border-b border-paper/15 pb-4">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-lavender">
                    EXPLORE THE PRACTICE
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 py-2 pl-2 text-[12px] text-paper/80 hover:text-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-2"
                    onClick={() => closeMobileNavigation(true)}
                  >
                    Close <X size={15} aria-hidden="true" />
                  </button>
                </div>
                <div className="flex-1">
                  {navigation.map((item) => {
                    if (!item.children) {
                      return (
                        <Link
                          className="group flex min-h-[58px] items-center justify-between border-b border-paper/15 font-display text-[16px] leading-tight text-paper transition-colors hover:text-lavender"
                          key={item.to}
                          to={item.to}
                          onClick={() => closeMobileNavigation()}
                        >
                          {item.label}
                          <Plus
                            size={16}
                            className="text-lavender transition-transform group-hover:rotate-90"
                            aria-hidden="true"
                          />
                        </Link>
                      );
                    }

                    const isOpen = openMobileGroup === item.label;
                    const groupId = `atlas-mobile-group-${slugify(item.label)}`;
                    return (
                      <div
                        className="border-b border-paper/15"
                        key={item.label}
                      >
                        <button
                          className="flex min-h-[58px] w-full items-center justify-between font-display text-[16px] leading-tight text-paper transition-colors hover:text-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-peach focus-visible:outline-offset-2"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={isOpen ? groupId : undefined}
                          onClick={() =>
                            setOpenMobileGroup(isOpen ? null : item.label)
                          }
                        >
                          {item.label}
                          {isOpen ? (
                            <Minus size={16} className="text-lavender" />
                          ) : (
                            <Plus size={16} className="text-lavender" />
                          )}
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={groupId}
                              className="overflow-hidden pb-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: reduceMotion ? 0 : 0.2 }}
                            >
                              {item.children.map((child) => (
                                <Link
                                  className="group flex min-h-12 items-center justify-between gap-3 border-t border-paper/10 px-1 py-2 text-[11px] text-paper/90 hover:text-lavender"
                                  key={child.label}
                                  to={child.to}
                                  onClick={() => closeMobileNavigation()}
                                >
                                  <span className="flex flex-col gap-1">
                                    <strong className="font-medium">
                                      {child.label}
                                    </strong>
                                    <small className="text-[10px] text-paper/55">
                                      {child.note}
                                    </small>
                                  </span>
                                  <Plus
                                    size={13}
                                    className="shrink-0 text-peach transition-transform group-hover:rotate-90"
                                    aria-hidden="true"
                                  />
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
                <ActionLink
                  to="/visit#appointment"
                  className="mt-6 min-h-12 w-full"
                  onClick={() => closeMobileNavigation()}
                >
                  Make an appointment
                </ActionLink>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
