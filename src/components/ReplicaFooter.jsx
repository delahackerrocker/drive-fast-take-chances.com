import { referenceSite } from "../data/referenceContent";
import SiteLink from "./SiteLink";
import { HardButton } from "./ReplicaPrimitives";

export default function ReplicaFooter({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead shell">
        <div>
          <p className="footer-brand">{referenceSite.brand.name}</p>
          <p>Software engineer & builder. I take projects that are stuck or vague and ship them.</p>
        </div>
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Call →</HardButton>
      </div>

      <div className="site-footer__grid shell">
        <div>
          <p className="footer-label">Company</p>
          <p>Binitive Karol Binkowski</p>
          <p>Kraków, Poland · Remote</p>
        </div>
        <div>
          <p className="footer-label">Pages</p>
          {referenceSite.navigation.map((item) => (
            <SiteLink key={item.href} href={item.href} navigate={navigate}>{item.label}</SiteLink>
          ))}
        </div>
        <div>
          <p className="footer-label">Resources</p>
          <a href="https://github.com" target="_blank" rel="noreferrer">JSI Cheatsheet ↗</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">Ten Jules Agents ↗</a>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${referenceSite.email}`}>{referenceSite.email}</a>
          {referenceSite.social.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom shell">
        <span>Karol Binkowski · Kraków, Remote · © 2026</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Top ↑</button>
      </div>
    </footer>
  );
}
