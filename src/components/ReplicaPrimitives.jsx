import { useLayoutEffect, useRef } from "react";
import SiteLink from "./SiteLink";

export function Kicker({ children }) {
  return <p className="kicker"><span aria-hidden="true" />{children}</p>;
}

export function SectionIntro({ eyebrow, title, intro, as = "h2" }) {
  const Heading = as;
  return (
    <header className="section-intro">
      {eyebrow && <Kicker>{eyebrow}</Kicker>}
      {title && <Heading>{title}</Heading>}
      {intro && <p className="lede">{intro}</p>}
    </header>
  );
}

export function HardButton({ href, navigate, tone = "cyan", children }) {
  return <SiteLink className={`hard-button hard-button--${tone}`} href={href} navigate={navigate}>{children}</SiteLink>;
}

export function SpecTable({ title, rows }) {
  return (
    <div className="spec-table-wrap">
      <p className="spec-table__title">{title}</p>
      <table className="spec-table"><tbody>
        {rows.map(([label, value]) => (
          <tr key={label}><th scope="row">{label}</th><td>{label === "Status" && <span className="status-dot" aria-hidden="true" />}{value}</td></tr>
        ))}
      </tbody></table>
    </div>
  );
}

export function Marquee({ items }) {
  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => <span key={`${copy}-${item}`}>{item}<b>◆</b></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

function AutoFitMetricValue({ children }) {
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    const value = valueRef.current;
    if (!value) return undefined;

    let animationFrame;
    let isActive = true;
    const fitValue = () => {
      if (!isActive) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        value.style.fontSize = "";

        const availableWidth = value.clientWidth;
        const naturalWidth = value.scrollWidth;
        const maximumSize = Number.parseFloat(getComputedStyle(value).fontSize);

        if (availableWidth > 0 && naturalWidth > availableWidth) {
          const fittedSize = Math.max(14, maximumSize * (availableWidth / naturalWidth));
          value.style.fontSize = `${fittedSize}px`;
        }
      });
    };

    const resizeObserver = new ResizeObserver(fitValue);
    resizeObserver.observe(value.parentElement);
    document.fonts?.ready.then(fitValue);
    fitValue();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [children]);

  return <dd ref={valueRef}>{children}</dd>;
}

export function MetricGrid({ items, compact = false }) {
  return (
    <dl className={`metric-grid${compact ? " metric-grid--compact" : ""}`}>
      {items.map((item) => (
        <div className="metric-card" key={item.label ?? item.value}>
          {item.label && <dt>{item.label}</dt>}
          <AutoFitMetricValue>{item.value}</AutoFitMetricValue>
          {item.body && <p>{item.body}</p>}
          <small>{item.note ?? item.label}</small>
        </div>
      ))}
    </dl>
  );
}

export function EngagementGrid({ items }) {
  return <div className="engagement-grid">{items.map((item) => (
    <article className="engagement-card" key={item.title}><h3>{item.title}</h3><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>
  ))}</div>;
}

export function CaseStudyCard({ study, navigate }) {
  return (
    <SiteLink className="case-card" href={`/work/${study.slug}`} navigate={navigate}>
      <p className="case-card__meta">Case Study {study.index} · {study.meta}</p>
      <h3>{study.title}</h3>
      <p>{study.summary}</p>
      <div><strong>{study.metric}</strong><span>Read the Full Case →</span></div>
    </SiteLink>
  );
}

export function WorkRow({ item }) {
  return (
    <article className="work-row">
      <div><h3>{item.title}</h3><p>{item.summary}</p>{item.outcome ? <small className="work-row__outcome">{item.outcome}</small> : null}</div>
      <ul className="tag-list">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </article>
  );
}

export function ProductCard({ product }) {
  const content = (
    <>
      <span className="product-card__status">{product.status}</span>
      <h3>{product.title}</h3>
      <p>{product.summary}</p>
      <ul className="tag-list">{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      <strong>{product.cta}</strong>
    </>
  );

  return product.href ? (
    <a className={`product-card product-card--${product.tone}`} href={product.href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <article className={`product-card product-card--${product.tone}`}>{content}</article>
  );
}

export function ProfileBlock({ profile, cta, navigate }) {
  return (
    <div className="profile-block">
      <Kicker>{profile.eyebrow}</Kicker>
      <h2>{profile.title.map((line) => <span key={line}>{line}</span>)}</h2>
      <p className="lede">{profile.body}</p>
      {cta && (
        <div className="profile-block__actions">
          <HardButton href={cta.href} navigate={navigate} tone="plain">{cta.label}</HardButton>
        </div>
      )}
    </div>
  );
}

export function ProcessGrid({ items }) {
  return <ol className="process-grid">{items.map((item, index) => {
    const titleLines = Array.isArray(item.title) ? item.title : [item.title];
    return (
      <li key={titleLines.join(" ")}><span>{String(index + 1).padStart(2, "0")}</span>{item.meta && <p className="process-meta">{item.meta}</p>}<h3>{titleLines.map((line) => <span key={line}>{line}</span>)}</h3><p>{item.body}</p></li>
    );
  })}</ol>;
}

export function QuoteCard({ quote }) {
  return <figure className="quote-card"><blockquote>“{quote.text}”</blockquote><figcaption>— {quote.byline}</figcaption></figure>;
}

export function StackGrid({ groups }) {
  return <div className="stack-grid">{groups.map((group) => (
    <section key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>
  ))}</div>;
}

export function PageCta({ eyebrow = "Let’s Talk", title, body, cta, secondaryCta, navigate }) {
  return (
    <section className="page-cta">
      <div className="shell"><SectionIntro eyebrow={eyebrow} title={title} intro={body} /><div className="button-row"><HardButton href={cta.href} navigate={navigate}>{cta.label}</HardButton>{secondaryCta ? <HardButton href={secondaryCta.href} navigate={navigate} tone="plain">{secondaryCta.label}</HardButton> : null}</div></div>
    </section>
  );
}
