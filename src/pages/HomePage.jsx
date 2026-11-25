import SiteLayout from "../components/SiteLayout.jsx";
import AppointmentSection from "../sections/AppointmentSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import JourneySection from "../sections/JourneySection.jsx";
import MethodSection from "../sections/MethodSection.jsx";
import PracticeSection from "../sections/PracticeSection.jsx";
import ProofSection from "../sections/ProofSection.jsx";
import SpecialtiesSection from "../sections/SpecialtiesSection.jsx";
import VisitSection from "../sections/VisitSection.jsx";
import VoicesSection from "../sections/VoicesSection.jsx";

export default function HomePage() {
  return (
    <SiteLayout>
      <main id="main-content">
        <HeroSection />
        <ProofSection />
        <PracticeSection />
        <SpecialtiesSection />
        <MethodSection />
        <JourneySection />
        <VoicesSection />
        <AppointmentSection />
        <VisitSection />
      </main>
    </SiteLayout>
  );
}
