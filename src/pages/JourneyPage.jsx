import PageBanner from "../components/PageBanner.jsx";
import SiteLayout from "../components/SiteLayout.jsx";
import AppointmentSection from "../sections/AppointmentSection.jsx";
import JourneySection from "../sections/JourneySection.jsx";
import VoicesSection from "../sections/VoicesSection.jsx";

export default function JourneyPage() {
  return (
    <SiteLayout title="Your First Visit — Dr. Elena Marceau">
      <main id="main-content">
        <PageBanner
          index="03"
          eyebrow="YOUR FIRST VISIT"
          title={<>A path through<br /><em>the unknown.</em></>}
          copy="You don’t need a theory or the perfect words. We can begin right where you are."
        />
        <JourneySection />
        <VoicesSection />
        <AppointmentSection />
      </main>
    </SiteLayout>
  );
}
