import {
  homePage,
  referenceSite,
} from "../data/referenceContent";
import {
  CaseStudyCard,
  EngagementGrid,
  HardButton,
  Kicker,
  Marquee,
  MetricGrid,
  PageCta,
  ProcessGrid,
  ProductCard,
  ProfileBlock,
  QuoteCard,
  SectionIntro,
  SpecTable,
  WorkRow,
} from "../components/ReplicaPrimitives";

export default function ReferenceHome({ navigate }) {
  return (
    <>
      <section className="hero shell" aria-labelledby="home-title">
        <div className="hero__copy">
          <Kicker>{homePage.eyebrow}</Kicker>
          <h1 id="home-title">
            <span>{homePage.headline[0]}</span>
            <mark>{homePage.headline[1]}</mark>
          </h1>
          <p className="hero__lede">{homePage.intro}</p>
          <div className="button-row">
            <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Call →</HardButton>
            <HardButton href="/#work" navigate={navigate} tone="plain">See the Work ↓</HardButton>
          </div>
        </div>
        <SpecTable title="Engineer Spec" rows={homePage.spec} />
      </section>

      <Marquee items={homePage.capabilities} />

      <section className="section section--proof shell">
        <SectionIntro eyebrow="Proof, Not Adjectives" />
        <MetricGrid items={homePage.proof} />
        <p className="credential-strip">{homePage.credentials}</p>
      </section>

      <section className="section section--ruled shell">
        <SectionIntro eyebrow="Typical Engagements" title="How You Can Hire Me." />
        <EngagementGrid items={homePage.engagements} />
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Call →</HardButton>
      </section>

      <section className="section shell" id="work">
        <SectionIntro eyebrow="Selected Case Studies" />
        <div className="case-grid">
          {homePage.featuredStudies.map((study) => <CaseStudyCard key={study.slug} study={study} navigate={navigate} />)}
        </div>
        <HardButton href="/work" navigate={navigate} tone="plain">See All Work & Products →</HardButton>
      </section>

      <section className="statement-section">
        <div className="shell">
          <SectionIntro eyebrow="What I Actually Do" title="I Find What's Costing You — and I Cut It." />
          <p className="statement-copy">The prototype that will not scale. The architecture nobody wants to touch. The feature stuck in review. I take the expensive problem everyone learned to live with — and cut it.</p>
        </div>
      </section>

      <section className="section shell">
        <SectionIntro eyebrow="Selected Work" />
        <div className="work-list">{homePage.selectedWork.map((item) => <WorkRow key={item.title} item={item} />)}</div>
      </section>

      <section className="section shell">
        <SectionIntro eyebrow="Things I Ship" title="My Own Products, in the Wild." intro="Between contracts I build and ship products with real users." />
        <div className="product-grid">{homePage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>

      <section className="section section--profile shell">
        <ProfileBlock profile={homePage.profile} />
        <QuoteCard quote={homePage.quote} />
      </section>

      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={homePage.process} />
      </section>

      <PageCta
        title="Have Something That Needs to Ship?"
        body="Bring the problem. In thirty minutes we'll know whether I'm the right person to solve it."
        cta={referenceSite.primaryCta}
        navigate={navigate}
      />
    </>
  );
}
