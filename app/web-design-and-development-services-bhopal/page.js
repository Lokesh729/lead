import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Serviceshero from "../components/servicescomponents/Serviceshero";
import SectionBlock from "../components/servicescomponents/SectionBlock";
import FeatureList from "../components/servicescomponents/FeatureList";
import ProcessSteps from "../components/servicescomponents/ProcessSteps";
import FAQSection from "../components/servicescomponents/Faqsection";
import Keywords from "../components/servicescomponents/Keywords";
import Cardssection from "../components/servicescomponents/Cardssection";
import Containersection from "../components/servicescomponents/Containersection";

import { webDevelopmenheaderTitles, webDevelopmentData } from "../data.jsx";
import { webDevelopmentPageSEO } from "../seo";

export const metadata = webDevelopmentPageSEO

export default function index() {
  const data = webDevelopmentData;
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={webDevelopmenheaderTitles} />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-30">
        <div className="max-w-6xl mx-auto px-4">
          <Serviceshero data={data} />
        </div>
      </section>

    {/* Dynamic Sections */}
      <section className="max-w-6xl mx-auto px-4 pb-10">

        {data.primarycardssection && (
          <Cardssection
            title={data.primarycardssection.title}
            highlight={data.primarycardssection.highlight}
            cards={data.primarycardssection.cards}
            conclusion={data.primarycardssection.conclusion}
          />
        )}
      </section>

      {/* keywords */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        {data.keywordssection && (
          <Keywords
            title={data.keywordssection.title}
            description={data.keywordssection.description}
            highlight={data.keywordssection.highlight}
            keywordlist={data.keywordssection.keywords}
            conclusion={data.keywordssection.conclusion}
          />
        )}
      </section>

      {/* advantages section */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        {data.advantagessection && (
          <Cardssection
            title={data.advantagessection.title}
            highlight={data.advantagessection.highlight}
            cards={data.advantagessection.benefitcards}
            conclusion={data.advantagessection.conclusion}
          />
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-10">
                {data.ctasection && (
                  <Containersection
                    title={data.ctasection.title}
                    highlight={data.ctasection.highlight}
                    description={data.ctasection.description}
                    features={data.ctasection.features}
                  />
                )} 
              </section>


                  <section className="max-w-6xl mx-auto px-4 pb-10">
        {data.sectionTwo && (
          <FeatureList
            title={data.sectionTwo.title}
            highlight={data.sectionTwo.highlight}
            description={data.sectionTwo.description}
            items={data.sectionTwo.features}
            conclusion={data.sectionTwo.conclusion}
          />
        )}
      </section>


        <section className="max-w-6xl mx-auto px-4 pb-10">
            {data.faqsection && (
              <FAQSection
                title={data.faqsection.title}
                highlight={data.faqsection.highlight}
                faqs={data.faqsection.faqs}
                conclusion={data.faqsection.conclusion}
              />
            )}
          </section>
    </main>
  );
}
