import PageBanner from "../components/PageBanner.jsx";
import SiteLayout from "../components/SiteLayout.jsx";
import AppointmentSection from "../sections/AppointmentSection.jsx";
import JourneySection from "../sections/JourneySection.jsx";
import MethodSection from "../sections/MethodSection.jsx";
import SpecialtiesSection from "../sections/SpecialtiesSection.jsx";

export default function SpecialtiesPage() {
  return (
    <SiteLayout title="Neurology Specialties — Dr. Elena Marceau">
      <main id="main-content">
        <PageBanner
          index="02"
          eyebrow="AREAS OF FOCUS"
          title={<>Every signal<br />has a <em>story.</em></>}
          copy="Neurological symptoms can be hard to name. We’ll take the time to understand what yours are telling us."
        />
        <SpecialtiesSection />
        <MethodSection />
        <JourneySection />
        <AppointmentSection />
      </main>
    </SiteLayout>
  );
}
