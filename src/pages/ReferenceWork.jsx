import { referenceSite, workPage } from "../data/referenceContent";
import { CaseStudyCard, PageCta, ProductCard, SectionIntro } from "../components/ReplicaPrimitives";

export default function ReferenceWork({ navigate }) {
  return (
    <>
      <section className="page-hero shell"><SectionIntro eyebrow={workPage.eyebrow} title={workPage.title} intro={workPage.intro} as="h1" /></section>
      <section className="section shell">
        <SectionIntro eyebrow="Current Builds" title="My Own Worlds and Tools." intro="Original products and systems in active development." />
        <div className="product-grid">{workPage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Case Studies" />
        <div className="case-grid">{workPage.studies.map((study) => <CaseStudyCard key={study.slug} study={study} navigate={navigate} />)}</div>
      </section>
      <PageCta title="Have Something Strange, Useful, or Stuck?" cta={referenceSite.primaryCta} navigate={navigate} />
    </>
  );
}
