import { useMemo, useState } from "react";
import { projects } from "../content";
import { Section, Card, FilterChips } from "../ui";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
  { id: "web", label: "Web & apps" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const games = projects.games;
  const web = projects.web;

  const showGames = filter === "all" || filter === "games";
  const showWeb = filter === "all" || filter === "web";

  const counts = useMemo(
    () => ({
      all: games.length + web.length,
      games: games.length,
      web: web.length,
    }),
    [games.length, web.length],
  );

  const chips = FILTERS.map((f) => ({
    ...f,
    label: `${f.label} (${counts[f.id]})`,
  }));

  return (
    <>
      <section className="page-hero">
        <h1 className="page-title">Projects</h1>
        <p className="page-lead">
          Games and websites. Most of the web ones exist because I wanted the
          tool and nobody had built it yet.
        </p>
      </section>

      <div className="pt-6 sm:pt-8">
        <FilterChips
          options={chips}
          value={filter}
          onChange={setFilter}
          label="Project type"
        />
      </div>

      {showGames ? (
        <Section num="01" title="Game dev" border={false}>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {games.map((p) => (
              <Card
                key={p.title}
                to={p.url}
                title={p.title}
                meta={p.year}
                blurb={p.blurb}
                tags={p.tags}
                img={p.img}
                media
                cta={p.url ? "Look at it" : null}
              />
            ))}
          </div>
        </Section>
      ) : null}

      {showWeb ? (
        <Section
          num={showGames ? "02" : "01"}
          title="Web and apps"
          border={showGames}
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {web.map((p) => (
              <Card
                key={p.title}
                to={p.url}
                title={p.title}
                meta={p.year}
                blurb={p.blurb}
                tags={p.tags}
                img={p.img}
                media
                cta={p.url ? "Open it" : null}
              />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
