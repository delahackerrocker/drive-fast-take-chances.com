import { startTransition, useEffect, useState } from "react";
import ReplicaFooter from "./components/ReplicaFooter";
import ReplicaHeader from "./components/ReplicaHeader";
import { getReferenceCaseStudy } from "./data/referenceContent";
import ReferenceAbout from "./pages/ReferenceAbout";
import ReferenceCaseStudy from "./pages/ReferenceCaseStudy";
import ReferenceHome from "./pages/ReferenceHome";
import ReferenceServices from "./pages/ReferenceServices";
import ReferenceWork from "./pages/ReferenceWork";

const pageRoutes = {
  "/": { component: ReferenceHome, title: "Dela — UX Designer, Game Developer, and Agentic Builder" },
  "/work": { component: ReferenceWork, title: "Work — Dela" },
  "/about": { component: ReferenceAbout, title: "About — Dela" },
  "/services": { component: ReferenceServices, title: "Services — Dela" },
};

const caseStudyRoutes = ["/work/call-of-duty", "/work/gr1m01re"];

function readLocation() {
  return { pathname: window.location.pathname, hash: window.location.hash };
}

function normalizePath(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

export default function App() {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const sync = () => startTransition(() => setLocation(readLocation()));
    window.addEventListener("popstate", sync);
    window.addEventListener("app:navigate", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("app:navigate", sync);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    window.dispatchEvent(new Event("app:navigate"));
  };

  const pathname = normalizePath(location.pathname);
  const route = pageRoutes[pathname];
  const studySlug = caseStudyRoutes.includes(pathname) ? pathname.replace("/work/", "") : null;
  const study = studySlug ? getReferenceCaseStudy(studySlug) : null;
  const Page = route?.component;

  useEffect(() => {
    document.title = route?.title ?? (study ? `${study.title} — Dela` : "Page Not Found");
    requestAnimationFrame(() => {
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [location.hash, pathname, route?.title, study]);

  return (
    <div className="app-shell">
      <ReplicaHeader navigate={navigate} pathname={pathname} />
      <main id="main-content">
        {Page ? <Page navigate={navigate} /> : study ? <ReferenceCaseStudy study={study} navigate={navigate} /> : (
          <section className="missing-page shell"><p className="kicker"><span />404</p><h1>That Page Isn't Here.</h1><button type="button" onClick={() => navigate("/")}>Return Home →</button></section>
        )}
      </main>
      <ReplicaFooter navigate={navigate} />
    </div>
  );
}
