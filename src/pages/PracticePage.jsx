import PageBanner from "../components/PageBanner.jsx";
import SiteLayout from "../components/SiteLayout.jsx";
import JourneySection from "../sections/JourneySection.jsx";
import MethodSection from "../sections/MethodSection.jsx";
import PracticeSection from "../sections/PracticeSection.jsx";

export default function PracticePage() {
  return (
    <SiteLayout title="The Practice — Dr. Elena Marceau">
      <main id="main-content">
        <PageBanner
          index="01"
          eyebrow="THE PRACTICE"
          title={<>Care, in<br /><em>context.</em></>}
          copy="A little more time to listen. A little more room for the whole picture."
        />
        <PracticeSection />
        <MethodSection />
        <JourneySection />
      </main>
    </SiteLayout>
  );
}
