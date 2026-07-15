import SiteLink from "../components/SiteLink";
import { MetricGrid, PageCta, ProcessGrid, StackGrid } from "../components/ReplicaPrimitives";
import { referenceSite } from "../data/referenceContent";

export default function ReferenceCaseStudy({ study, navigate }) {
  return (
    <article className="case-study-page">
      <header className="case-study-hero shell">
        <SiteLink href="/work" navigate={navigate} className="back-link">← All Work</SiteLink>
        <p className="case-study-hero__meta">{study.meta}</p>
        <h1>{study.title}</h1>
        <p className="lede">{study.summary}</p>
        <MetricGrid items={study.metrics} compact />
      </header>
      <div className="case-study-body shell">
        {study.sections.map((section) => (
          <section key={section.title}><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        ))}
        <section><h2>How It Went</h2><ProcessGrid items={study.process} /></section>
        <section><h2>Stack</h2><StackGrid groups={[{ title: "Tools and Technologies", items: study.stack }]} /></section>
      </div>
      <PageCta title="Working on Something Similar?" cta={referenceSite.primaryCta} navigate={navigate} />
    </article>
  );
}
