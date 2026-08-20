import { homePage, referenceSite } from "../data/referenceContent";
import {
  CaseStudyCard, EngagementGrid, HardButton, Kicker, Marquee, MetricGrid, PageCta,
  ProcessGrid, ProductCard, ProfileBlock, SectionIntro, SpecTable, WorkRow,
} from "../components/ReplicaPrimitives";

export default function ReferenceHome({ navigate }) {
  return (
    <>
      <section className="hero shell" aria-labelledby="home-title">
        <div className="hero__copy">
          <Kicker>{homePage.eyebrow}</Kicker>
          <h1 id="home-title"><span>{homePage.headline[0]}</span><mark>{homePage.headline[1]}</mark></h1>
          <p className="hero__lede">{homePage.intro}</p>
          <div className="button-row">
            <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton>
            <HardButton href="/#work" navigate={navigate} tone="plain">See the Work ↓</HardButton>
          </div>
        </div>
        <SpecTable title="Builder Spec" rows={homePage.spec} />
      </section>
      <Marquee items={homePage.capabilities} />
      <section className="section section--proof shell">
        <SectionIntro eyebrow="Proof, Not Adjectives" />
        <MetricGrid items={homePage.proof} />
        <p className="credential-strip">{homePage.credentials}</p>
      </section>
      <section className="section section--ruled shell" id="services">
        <SectionIntro eyebrow="Typical Engagements" title="How You Can Hire Me." />
        <EngagementGrid items={homePage.engagements} />
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton>
      </section>
      <section className="section shell" id="work">
        <SectionIntro eyebrow="Selected Case Studies" />
        <div className="case-grid">{homePage.featuredStudies.map((study) => <CaseStudyCard key={study.slug} study={study} navigate={navigate} />)}</div>
        <HardButton href="/work" navigate={navigate} tone="plain">See All Work and Experiments →</HardButton>
      </section>
      <section className="statement-section"><div className="shell">
        <SectionIntro eyebrow="What I Actually Do" title="I Turn Fuzzy Ideas Into Things People Can Use, Play, and Understand." />
        <p className="statement-copy">The feature you can explain but cannot quite design. The prototype that technically works but feels wrong. The game system that exists in documents but not under a player’s thumbs. I find the experience at the center, build the riskiest part first, and carry it across the line without losing the reason it should exist.</p>
      </div></section>
      <section className="section shell">
        <SectionIntro eyebrow="Selected Work" />
        <div className="work-list">{homePage.selectedWork.map((item) => <WorkRow key={item.title} item={item} />)}</div>
      </section>
      <section className="section section--current-builds shell">
        <SectionIntro eyebrow="Current Builds" title="My Own Worlds and Tools." />
        <div className="product-grid">{homePage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>
      <section className="section section--profile shell">
        <ProfileBlock
          profile={homePage.profile}
          cta={{ href: "/about", label: "Read the Full Story →" }}
          navigate={navigate}
        />
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={homePage.process} />
      </section>
      <PageCta
        title="Have Something Strange, Useful, or Stuck?"
        body="Bring me the messy idea. We will spend 30 minutes finding the real problem, what a useful first version looks like, and whether I am the right person to help design or build it. No pitch deck required."
        cta={referenceSite.primaryCta}
        secondaryCta={{ label: "Or Send a Message →", href: `mailto:${referenceSite.email}` }}
        navigate={navigate}
      />
    </>
  );
}
