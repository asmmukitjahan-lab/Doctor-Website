import { useEffect } from "react";
import Footer from "./Footer.jsx";
import Navigation from "./Navigation.jsx";

export default function SiteLayout({ children, title = "Dr. Elena Marceau — Consultant Neurologist" }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen w-full bg-paper font-sans text-plum antialiased selection:bg-lavender selection:text-plum">
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-plum px-4 py-3 text-paper shadow-lg transition-transform focus:translate-y-0 focus:outline focus:outline-2 focus:outline-peach focus:outline-offset-4"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
