import { aboutPage, referenceSite } from "../data/referenceContent";
import { PageCta, SectionIntro, StackGrid } from "../components/ReplicaPrimitives";

export default function ReferenceAbout({ navigate }) {
  return (
    <>
      <section className="about-hero shell">
        <div className="about-hero__portrait" aria-label="Portrait placeholder"><span>D</span></div>
        <SectionIntro eyebrow={aboutPage.eyebrow} title={aboutPage.title} intro={aboutPage.intro} as="h1" />
      </section>
      <section className="section prose-section shell">
        <h2>The Short Version</h2>
        {aboutPage.shortVersion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Think" />
        <div className="principle-grid">{aboutPage.principles.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Stack" />
        <StackGrid groups={aboutPage.stack} />
        <p className="credential-strip">Accessible Player Experience Trained · Cross-Disciplinary by Default · Building Since Age 14</p>
      </section>
      <PageCta title="Have Something Strange, Useful, or Stuck?" cta={referenceSite.primaryCta} navigate={navigate} />
    </>
  );
}
