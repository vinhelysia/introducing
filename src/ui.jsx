import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "./content";

// Numbered section header. "01 / ABOUT" with a hairline under it.
export function Section({ num, title, children, id, border = true }) {
  return (
    <section
      id={id}
      className={`${border ? "border-t border-line " : ""}py-12 sm:py-16 md:py-24`}
    >
      <div className="mb-6 flex items-baseline gap-3 sm:mb-10 sm:gap-4">
        <span className="text-xs font-medium tracking-widest text-muted tabular-nums">
          {num}
        </span>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

// Routes, hash anchors and outside links all arrive here. Pick the right tag
// instead of making the caller think about it.
export function SmartLink({ to, children, className }) {
  if (!to) return <span className={className}>{children}</span>;

  if (to.startsWith("http")) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  if (to.startsWith("#") || to.startsWith("mailto:")) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

// The one card used by every page. Whole card is the click target.
export function Card({ to, title, meta, blurb, tags, img, cta }) {
  return (
    <SmartLink
      to={to}
      className="group block border border-line p-4 transition-[border-color,background-color,transform] duration-200 sm:p-6 hover:border-ink hover:bg-ink/[0.02] focus-visible:border-ink active:border-ink"
    >
      {img && (
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className="mb-4 aspect-video w-full border border-line object-cover sm:mb-6"
        />
      )}

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
          {title}
        </h3>
        {meta && (
          <span className="shrink-0 text-xs text-muted tabular-nums">{meta}</span>
        )}
      </div>

      {blurb && (
        <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
          {blurb}
        </p>
      )}

      {tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {tags.map((t) => (
            <li
              key={t}
              className="border border-line px-2 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <span className="mt-4 inline-block text-sm font-medium underline decoration-line underline-offset-4 sm:mt-6 group-hover:decoration-ink">
          {cta}
        </span>
      )}
    </SmartLink>
  );
}

// Brand icons — SVG only, no extra icon package.
function IconYouTube({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

function IconTikTok({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.6 6.8a5.6 5.6 0 0 1-3.2-1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V2h2.8a5.6 5.6 0 0 0 3.1 4.8z" />
    </svg>
  );
}

function IconGitHub({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconDiscord({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.89 3l-.2.37a18.3 18.3 0 0 1 4.63 1.6 16.5 16.5 0 0 0-5.2-1.9 13.2 13.2 0 0 0-4.24 0A16.5 16.5 0 0 0 5.68 5A18.3 18.3 0 0 1 10.3 3.37L10.1 3a19.8 19.8 0 0 0-4.43 1.37C2.8 8.4 2.1 12.3 2.35 16.15a19.9 19.9 0 0 0 5.99 3.05l.76-1.28a12.9 12.9 0 0 1-1.9-.91l.46-.36c3.63 1.68 7.57 1.68 11.16 0l.46.36c-.61.36-1.25.67-1.91.91l.76 1.28a19.9 19.9 0 0 0 6-3.05c.33-4.5-.56-8.36-2.57-11.78zM9.1 13.9c-.9 0-1.63-.84-1.63-1.87s.72-1.87 1.63-1.87 1.64.84 1.63 1.87-.72 1.87-1.63 1.87zm5.8 0c-.9 0-1.63-.84-1.63-1.87s.72-1.87 1.63-1.87 1.64.84 1.63 1.87-.72 1.87-1.63 1.87z" />
    </svg>
  );
}

function IconEmail({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

// Skill logos — original Simple Icons SVGs in /public/img/skills/
// Masked so they pick up site ink color.
const skillIconSrc = {
  Rust: asset("img/skills/rust.svg"),
  "C++": asset("img/skills/cplusplus.svg"),
  "C#": asset("img/skills/csharp.svg"),
  GDScript: asset("img/skills/godot.svg"),
  Python: asset("img/skills/python.svg"),
  Git: asset("img/skills/git.svg"),
  Kotlin: asset("img/skills/kotlin.svg"),
  TypeScript: asset("img/skills/typescript.svg"),
  React: asset("img/skills/react.svg"),
};

/** Skill chips with official monochrome logos. */
export function SkillList({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((name) => {
        const src = skillIconSrc[name];
        return (
          <li
            key={name}
            className="inline-flex items-center gap-2 border border-line px-3 py-2 text-sm leading-none"
          >
            {src ? (
              <span
                className="skill-icon"
                style={{ "--skill-icon": `url(${src})` }}
                aria-hidden="true"
              />
            ) : null}
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}

const iconBtnClass =
  "inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg focus-visible:border-ink active:border-ink active:bg-ink active:text-bg";

const contactIcons = {
  youtube: IconYouTube,
  tiktok: IconTikTok,
  github: IconGitHub,
  discord: IconDiscord,
  email: IconEmail,
};

/**
 * Icon row: YouTube, TikTok, GitHub, Discord, Email.
 * Discord tag is copied on click (unless it's a full URL).
 */
export function SocialLinks({ links, className = "" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const items = [
    {
      id: "youtube",
      label: "YouTube",
      href: links.youtube,
      external: true,
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: links.tiktok,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      href: links.github,
      external: true,
    },
    {
      id: "discord",
      label: links.discord ? `Discord: ${links.discord}` : "Discord",
      href: links.discord?.startsWith("http") ? links.discord : undefined,
      copy: links.discord?.startsWith("http") ? undefined : links.discord,
      external: Boolean(links.discord?.startsWith("http")),
    },
    {
      id: "email",
      label: links.email ? `Email: ${links.email}` : "Email",
      href: links.email ? `mailto:${links.email}` : undefined,
      external: false,
    },
  ].filter((item) => {
    const raw = item.copy || item.href || "";
    if (!raw) return false;
    if (/YOUR_|REPLACE|PASTE_/i.test(raw)) return false;
    if (raw === "mailto:") return false;
    return true;
  });

  async function copyDiscord(value) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // ignore — user can still see the tag in title/aria-label
    }
  }

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-2">
        {items.map(({ id, label, href, copy, external }) => {
          const Icon = contactIcons[id];

          if (copy) {
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => copyDiscord(copy)}
                  aria-label={
                    copied ? "Discord tag copied" : `${label} (click to copy)`
                  }
                  title={copied ? "Copied" : `${copy} — click to copy`}
                  className={`${iconBtnClass} cursor-pointer bg-transparent${
                    copied ? " border-ink bg-ink text-bg" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </button>
              </li>
            );
          }

          return (
            <li key={id}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                title={label}
                className={iconBtnClass}
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {copied ? (
        <p className="mt-3 text-xs text-muted" role="status" aria-live="polite">
          Discord tag copied.
        </p>
      ) : null}
    </div>
  );
}
