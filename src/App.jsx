import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { me, links } from "./content";
import { SocialLinks } from "./ui";

const SITE = "https://vinhelysia.io.vn";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About me" },
  { to: "/content", label: "Content" },
  { to: "/projects", label: "Projects" },
];

const metaByPath = {
  "/": {
    title: "VinhElysia | Personal website",
    description: "Personal website of VinhElysia.",
  },
  "/about": {
    title: "About | VinhElysia",
    description: "About VinhElysia.",
  },
  "/content": {
    title: "Content | VinhElysia",
    description: "Videos and clips from VinhElysia.",
  },
  "/projects": {
    title: "Projects | VinhElysia",
    description: "Projects from VinhElysia.",
  },
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait a tick so the target exists after route paint.
    const id = decodeURIComponent(hash.slice(1));
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);
  return null;
}

function DocumentMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = metaByPath[pathname] || metaByPath["/"];
    document.title = meta.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${SITE}${pathname === "/" ? "" : pathname}`);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", meta.description);
  }, [pathname]);
  return null;
}

function NavItems({ onNavigate, className = "" }) {
  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `nav-link${isActive ? " is-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close drawer when the route changes (back button, etc.)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Desktop: never keep the mobile drawer open
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    if (mq.matches) setMenuOpen(false);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Esc closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <ScrollToTop />
      <DocumentMeta />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-bg focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/90">
        <nav
          aria-label="Main"
          className="site-shell header-nav flex items-center justify-between gap-4"
        >
          <NavLink
            to="/"
            className="brand-mark"
            onClick={() => setMenuOpen(false)}
          >
            {me.name}
          </NavLink>

          <NavItems className="header-nav-links" />

          <button
            type="button"
            className="header-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="mobile-nav-panel border-t border-line bg-bg"
          >
            <NavItems
              onNavigate={() => setMenuOpen(false)}
              className="site-shell flex flex-col gap-1 py-3"
            />
          </div>
        )}
      </header>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="mobile-nav-backdrop fixed inset-0 z-30 bg-ink/20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main id="main" className="site-shell">
        <Outlet />
      </main>

      <footer id="contact" className="site-footer">
        <div className="site-shell py-12 sm:py-16 md:py-20">
          <p className="footer-kicker">Get in touch</p>

          <h2 className="footer-title">
            Want a commission, collab, or just want to talk games?
          </h2>

          <p className="footer-note">
            I take Genshin and HSR grind commissions. Message me on YouTube,
            TikTok or GitHub.
          </p>

          <div className="mt-8 sm:mt-10">
            <SocialLinks links={links} />
          </div>

          <p className="footer-meta">
            © {new Date().getFullYear()} {me.name}
          </p>
        </div>
      </footer>
    </>
  );
}
