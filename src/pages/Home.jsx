import { me, whatIDo, hero, projects, youtube } from "../content";
import { Section, Card, SmartLink } from "../ui";

// Fixed petal set - no JS random, no re-render thrash. CSS does the fall.
const PETALS = [
  { left: "6%", delay: "0s", duration: "11s", size: 11, drift: 28, spin: 160 },
  { left: "14%", delay: "2.2s", duration: "13s", size: 8, drift: -22, spin: -200 },
  { left: "22%", delay: "5s", duration: "10s", size: 13, drift: 40, spin: 240 },
  { left: "34%", delay: "1s", duration: "14s", size: 9, drift: -35, spin: -140 },
  { left: "48%", delay: "3.5s", duration: "12s", size: 12, drift: 18, spin: 190 },
  { left: "58%", delay: "0.8s", duration: "15s", size: 7, drift: -45, spin: -260 },
  { left: "68%", delay: "4.2s", duration: "11s", size: 10, drift: 32, spin: 120 },
  { left: "76%", delay: "6s", duration: "13s", size: 14, drift: -20, spin: -180 },
  { left: "86%", delay: "1.6s", duration: "12s", size: 9, drift: 38, spin: 210 },
  { left: "93%", delay: "3s", duration: "14s", size: 11, drift: -28, spin: -150 },
  { left: "40%", delay: "7s", duration: "10s", size: 8, drift: 24, spin: 170 },
  { left: "18%", delay: "8.5s", duration: "13s", size: 12, drift: -16, spin: -220 },
];

const featuredProjects = [...projects.games, ...projects.web].slice(0, 3);
const featuredVideos = youtube.videos.slice(0, 3);

function SakuraPetals() {
  return (
    <div className="sakura-layer" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="sakura-petal"
          style={{
            "--left": p.left,
            "--delay": p.delay,
            "--duration": p.duration,
            "--size": `${p.size}px`,
            "--drift": `${p.drift}px`,
            "--spin": `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}

function MoreLink({ to, children }) {
  return (
    <SmartLink
      to={to}
      className="mt-6 inline-flex text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink sm:mt-8"
    >
      {children}
    </SmartLink>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-label="Introduction">
        <img
          src={hero.src}
          alt={hero.alt}
          width={1920}
          height={1080}
          className="home-hero-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="home-hero-scrim" aria-hidden="true" />
        <SakuraPetals />

        <div className="home-hero-copy site-shell">
          <h1 className="home-hero-title">{me.tagline || me.name}</h1>

          {me.sub ? <p className="home-hero-sub">{me.sub}</p> : null}

          <div className="home-hero-actions">
            <a href="#what-i-do" className="home-hero-cta">
              See what I do
            </a>
            <SmartLink to="/projects" className="home-hero-cta home-hero-cta-ghost">
              Projects
            </SmartLink>
          </div>
        </div>
      </section>

      <Section id="what-i-do" num="01" title="What I do">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {whatIDo.map((item) => (
            <Card
              key={item.title}
              to={item.to}
              title={item.title}
              blurb={item.blurb}
              cta={item.cta}
            />
          ))}
        </div>
      </Section>

      <Section num="02" title="Selected work">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <Card
              key={p.title}
              to={p.url}
              title={p.title}
              meta={p.year}
              blurb={p.blurb}
              tags={p.tags}
              img={p.img}
              media
              cta={p.url ? "Open" : null}
            />
          ))}
        </div>
        <MoreLink to="/projects">All projects →</MoreLink>
      </Section>

      <Section num="03" title="Popular videos">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {featuredVideos.map((v) => (
            <Card
              key={v.id}
              to={`https://www.youtube.com/watch?v=${v.id}`}
              title={v.title}
              img={{
                src: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
                alt: `Thumbnail for ${v.title}`,
              }}
              cta="Watch"
            />
          ))}
        </div>
        <MoreLink to="/content">All content →</MoreLink>
      </Section>
    </>
  );
}
