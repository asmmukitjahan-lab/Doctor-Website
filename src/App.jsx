import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import JourneyPage from "./pages/JourneyPage.jsx";
import PracticePage from "./pages/PracticePage.jsx";
import SpecialtiesPage from "./pages/SpecialtiesPage.jsx";
import VisitPage from "./pages/VisitPage.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ScrollManager />
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  );
}
