import { about } from "../content";
import { Section, SkillList } from "../ui";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1 className="page-title">About me</h1>
        <p className="page-lead">
          CS student, builder and Genshin creator. Based in Vietnam.
        </p>
      </section>

      <Section num="01" title="Who I am">
        <div className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-4 md:items-stretch">
            <img
              src={about.portrait.src}
              alt={about.portrait.alt}
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
              className="about-portrait"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-8">
            <div className="space-y-5 sm:space-y-6">
              {about.paragraphs.map((p) => (
                <p
                  key={p}
                  className="text-[0.95rem] leading-relaxed sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
                What I use
              </p>
              <SkillList skills={about.skills} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
