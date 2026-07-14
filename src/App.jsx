import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { me, links } from "./content";
import { SocialLinks } from "./ui";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About me" },
  { to: "/content", label: "Content" },
  { to: "/projects", label: "Projects" },
];

const titles = {
  "/": "VinhElysia — CS student, Genshin creator, game dev",
  "/about": "About — VinhElysia",
  "/content": "Content — VinhElysia",
  "/projects": "Projects — VinhElysia",
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || "VinhElysia";
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
      <DocumentTitle />

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

      <footer id="contact" className="border-t border-line">
        <div className="site-shell py-12 sm:py-16 md:py-24">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
            Get in touch
          </h2>

          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug tracking-tight sm:mt-8 sm:text-2xl md:text-3xl">
            Want a commission, collab, or just want to talk games? Message me.
          </p>

          <div className="mt-8 sm:mt-10">
            <SocialLinks links={links} />
          </div>

          <p className="mt-12 text-xs text-muted sm:mt-16">
            © {new Date().getFullYear()} {me.name}
          </p>
        </div>
      </footer>
    </>
  );
}
