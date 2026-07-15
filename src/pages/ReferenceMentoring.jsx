import { mentoringPage, referenceSite } from "../data/referenceContent";
import { HardButton, PageCta, ProcessGrid, SectionIntro } from "../components/ReplicaPrimitives";

export default function ReferenceMentoring({ navigate }) {
  return (
    <>
      <section className="page-hero shell">
        <SectionIntro eyebrow={mentoringPage.eyebrow} title={mentoringPage.title} intro={mentoringPage.intro} as="h1" />
        <div className="button-row"><HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a Free Intro →</HardButton><HardButton href={`mailto:${referenceSite.email}`} navigate={navigate} tone="plain">Email Me →</HardButton></div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Who It's For" />
        <div className="audience-grid">{mentoringPage.audiences.map((item) => <article key={item.title}><h2>{item.title}</h2><p>{item.body}</p></article>)}</div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="What We Can Work On" title="Come With a Goal. Or Just Come Stuck." />
        <div className="topic-grid">{mentoringPage.topics.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>
      <section className="split-band">
        <div className="shell split-band__grid">
          <div><SectionIntro eyebrow="Why Me" title="Technical Depth Meets the Human Side." /></div>
          <article><h3>The Technical Side</h3><p>Production software, open source, AI products, full backends, audits, and scaling.</p></article>
          <article><h3>The Human Side</h3><p>Motivation, focus, confidence, and the fear of shipping are part of the work too.</p></article>
        </div>
      </section>
      <section className="section shell"><SectionIntro eyebrow="How It Works" /><ProcessGrid items={mentoringPage.process} /></section>
      <section className="free-panel shell"><div><p>First Session Free</p><h2>I'd Rather Show You I Can Help Than Tell You.</h2></div><HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a Free Intro →</HardButton></section>
      <PageCta title="Bring Something Concrete." cta={{ label: "Email Me →", href: `mailto:${referenceSite.email}` }} navigate={navigate} />
    </>
  );
}
