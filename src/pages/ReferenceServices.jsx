import { referenceSite, servicesPage } from "../data/referenceContent";
import { EngagementGrid, HardButton, PageCta, ProcessGrid, SectionIntro } from "../components/ReplicaPrimitives";

export default function ReferenceServices({ navigate }) {
  return (
    <>
      <section className="page-hero shell">
        <SectionIntro eyebrow={servicesPage.eyebrow} title={servicesPage.title} intro={servicesPage.intro} as="h1" />
        <div className="button-row"><HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton></div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Typical Engagements" title="Design, Build, or Unblock the Hard Part." />
        <EngagementGrid items={servicesPage.engagements} />
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={servicesPage.process} />
      </section>
      <PageCta
        title="Have Something Strange, Useful, or Stuck?"
        body="Bring me the messy idea. We’ll find the real problem and what a useful first version looks like."
        cta={referenceSite.primaryCta}
        secondaryCta={{ label: "Or Send a Message →", href: `mailto:${referenceSite.email}` }}
        navigate={navigate}
      />
    </>
  );
}
