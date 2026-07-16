import { referenceSite } from "../data/referenceContent";
import SiteLink from "./SiteLink";
import { HardButton } from "./ReplicaPrimitives";

const projects = [
  { label: "GR1M01RE", href: "https://ko-fi.com/pract1t10ner", external: true },
  { label: "TalentGarden", href: "/work" },
  { label: "Call of Duty Experience", href: "/work/call-of-duty" },
];

export default function ReplicaFooter({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead shell">
        <div>
          <p className="footer-brand">Steven de la Torre</p>
          <p>UX designer, game developer, and agentic builder. I turn ambiguous interactive ideas into things people can use, play, and understand.</p>
        </div>
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton>
      </div>

      <div className="footer-follow shell">
        <div><p className="footer-label">Follow the Build</p><p>Development updates, worldbuilding, systems, and the occasional glimpse inside GR1M01RE — only when there is something worth showing.</p></div>
        <a href="https://ko-fi.com/pract1t10ner" target="_blank" rel="noreferrer">Follow on Ko-fi →</a>
      </div>

      <div className="site-footer__grid shell">
        <div>
          <p className="footer-label">Pages</p>
          {referenceSite.navigation.map((item) => <SiteLink key={item.href} href={item.href} navigate={navigate}>{item.label}</SiteLink>)}
          <a href={`mailto:${referenceSite.email}`}>Contact</a>
        </div>
        <div>
          <p className="footer-label">Projects</p>
          {projects.map((item) => item.external ? <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a> : <SiteLink key={item.label} href={item.href} navigate={navigate}>{item.label}</SiteLink>)}
        </div>
        <div>
          <p className="footer-label">Elsewhere</p>
          {referenceSite.social.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>)}
          <a href={`mailto:${referenceSite.email}`}>Email →</a>
        </div>
      </div>

      <div className="site-footer__bottom shell">
        <span>Steven de la Torre · Columbus, Ohio · Remote · © 2026</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Top ↑</button>
      </div>
    </footer>
  );
}
