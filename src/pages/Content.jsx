import { youtube, tiktok } from "../content";
import { Section, Card } from "../ui";

export default function Content() {
  return (
    <>
      <section className="page-hero">
        <h1 className="page-title">Content</h1>
        <p className="page-lead">
          Abyss clears, lyre covers and short clips. Full channels linked below.
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
            Full channel here ↗
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
            Profile here ↗
          </a>
        </p>

        {tiktok.posts.length > 0 ? (
          <div className="tiktok-grid">
            {tiktok.posts.map((p) => (
              <figure key={p.id} className="tiktok-card">
                <iframe
                  title={p.title}
                  src={`https://www.tiktok.com/embed/v2/${p.id}`}
                  className="tiktok-frame"
                  allow="encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <figcaption className="tiktok-caption">
                  <a
                    href={`https://www.tiktok.com/@vinhelysia1/video/${p.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.title} ↗
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty-cta">
            <p>
              Clips live on TikTok. Open the profile for the latest lyre covers and
              teapot shares.
            </p>
            <a
              href={tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="empty-cta-btn"
            >
              Open TikTok ↗
            </a>
          </div>
        )}
      </Section>
    </>
  );
}
