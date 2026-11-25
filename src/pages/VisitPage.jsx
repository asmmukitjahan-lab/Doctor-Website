import PageBanner from "../components/PageBanner.jsx";
import SiteLayout from "../components/SiteLayout.jsx";
import AppointmentSection from "../sections/AppointmentSection.jsx";
import VisitSection from "../sections/VisitSection.jsx";

export default function VisitPage() {
  return (
    <SiteLayout title="Visit the Practice — Dr. Elena Marceau">
      <main id="main-content">
        <PageBanner
          index="04"
          eyebrow="VISIT THE PRACTICE"
          title={<>Let’s begin<br />with a <em>conversation.</em></>}
          copy="Find the practice, ask a question or take the first step towards an appointment."
        />
        <AppointmentSection />
        <VisitSection />
      </main>
    </SiteLayout>
  );
}
