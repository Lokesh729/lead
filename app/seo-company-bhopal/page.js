import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Serviceshero from "../components/servicescomponents/Serviceshero";
import SectionBlock from "../components/servicescomponents/SectionBlock";
import Keywords from "../components/servicescomponents/Keywords";
import FeatureList from "../components/servicescomponents/FeatureList";
import Cardssection from "../components/servicescomponents/Cardssection";
import FAQSection from "../components/servicescomponents/Faqsection";
import Link from "next/link";

import { seoMarketingTitles, seoMarketingData } from "../data.jsx";
import { seoPageSEO } from "../seo";
import Cardsectiontwo from "../components/servicescomponents/Cardsectiontwo";
import Containersection from "../components/servicescomponents/Containersection";

export const metadata = seoPageSEO;

const tags = [
  { label: "Best SEO Services in Bhopal", href: "/seo-company-bhopal" },
  { label: "Top SEO Company in Bhopal", href: "/seo-company-bhopal" },
  { label: "Top SEO Agency in Bhopal", href: "/seo-company-bhopal" },
  { label: "SEO Company Near Me in Bhopal", href: "/seo-company-bhopal" },
];

export default function index() {
  const data = seoMarketingData;
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={seoMarketingTitles} />
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

      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-red-600 text-2xl font-raleway mb-4 text-center">
          <span className="text-white">Tags</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              className="border border-white text-white text-sm text-center py-2 px-3 rounded
               hover:bg-red-600 hover:text-white hover:border-red-600
               hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-red-600 text-2xl font-raleway mb-4 text-center">
          <span className="text-white">Ready to Dominate Bhopal's Search Results?</span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12">
          Get your free SEO audit today and discover how we can help your business
          attract more customers through proven SEO strategies.
        </p>
        <div className="flex justify-center">
          <a
            href="/#contact"
            className="bg-red-600 text-white font-bold py-4 px-12 rounded text-lg inline-block 
               transition-transform transform hover:scale-105 hover:bg-red-700"
          >
            Start Your SEO Journey Now
          </a>
        </div>
      </section>


    </main>
  );
}
