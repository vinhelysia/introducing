import { projects } from "../content";
import { Section, Card } from "../ui";

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <h1 className="page-title">Projects</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
          Games and websites. Most of the web ones exist because I wanted the
          tool and nobody had built it yet.
        </p>
      </section>

      <Section num="01" title="Game dev">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {projects.games.map((p) => (
            <Card
              key={p.title}
              to={p.url}
              title={p.title}
              meta={p.year}
              blurb={p.blurb}
              tags={p.tags}
              img={p.img}
              cta={p.url ? "Look at it" : null}
            />
          ))}
        </div>
      </Section>

      <Section num="02" title="Web and apps">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {projects.web.map((p) => (
            <Card
              key={p.title}
              to={p.url}
              title={p.title}
              meta={p.year}
              blurb={p.blurb}
              tags={p.tags}
              img={p.img}
              cta={p.url ? "Open it" : null}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
