import { youtube, tiktok } from "../content";
import { Section, Card } from "../ui";

export default function Content() {
  return (
    <>
      <section className="page-hero">
        <h1 className="page-title">Content</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
          Abyss clears, lyre covers, and short clips. Full channels linked below.
        </p>
      </section>

      <Section num="01" title="YouTube">
        <p className="mb-6 max-w-xl text-sm leading-relaxed sm:mb-10 sm:text-base">
          {youtube.blurb}{" "}
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Full channel here.
          </a>
        </p>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {youtube.videos.map((v) => (
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
      </Section>

      <Section num="02" title="TikTok">
        <p className="mb-6 max-w-xl text-sm leading-relaxed sm:mb-10 sm:text-base">
          {tiktok.blurb}{" "}
          <a
            href={tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Profile here.
          </a>
        </p>

        {tiktok.posts.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {tiktok.posts.map((p) => (
              <Card
                key={p.url}
                to={p.url}
                title={p.title}
                img={p.img}
                cta="Open"
              />
            ))}
          </div>
        ) : null}
      </Section>
    </>
  );
}
