import { useEffect, useState } from "react";
import { referenceSite } from "../data/referenceContent";
import SiteLink from "./SiteLink";

export default function ReplicaHeader({ navigate, pathname }) {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to Content</a>
      <div className="site-header__inner">
        <SiteLink className="brand" href="/" navigate={navigate} aria-label="Home">
          <span className="brand__mark">{referenceSite.brand.initials}</span>
          <span className="brand__name">{referenceSite.brand.name}</span>
        </SiteLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {referenceSite.navigation.map((item) => (
            <SiteLink
              key={item.href}
              className={pathname === item.href ? "is-active" : ""}
              href={item.href}
              navigate={navigate}
            >
              {item.label}
            </SiteLink>
          ))}
          <SiteLink
            className="hard-button hard-button--cyan nav-cta"
            href={referenceSite.primaryCta.href}
            navigate={navigate}
          >
            {referenceSite.primaryCta.label}
          </SiteLink>
        </nav>
      </div>
    </header>
  );
}
