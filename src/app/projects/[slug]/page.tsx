import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNextProject, getProject, projects } from "@/data/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectMedia } from "@/components/ProjectMedia";
import { GitHubIcon } from "@/components/Icons";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const next = getNextProject(slug);

  const toc = [
    ...cs.sections.map((s) => ({ id: s.id, label: s.title.toLowerCase() })),
    ...(cs.architecture ? [{ id: "architecture", label: "architecture" }] : []),
    ...(cs.results ? [{ id: "results", label: "results" }] : []),
  ];
  const num = (id: string) => String(toc.findIndex((t) => t.id === id) + 1).padStart(2, "0");

  return (
    <>
      <Nav trail={`/projects/${project.slug}`} />
      <main>
        <section className={`container ${styles.intro}`}>
          <span className="eyebrow">case study · {project.year}</span>
          <h1 className={styles.title}>
            {project.name}: {cs.headline}
          </h1>
          <p className={styles.lead}>{project.summary}</p>
          <div className={styles.actions}>
            {project.links.demo && (
              <a href={project.links.demo} className="btn btnPrimary" target="_blank" rel="noreferrer">
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.source && (
              <a href={project.links.source} className="btn btnGhost" target="_blank" rel="noreferrer">
                <GitHubIcon size={18} /> Source code
              </a>
            )}
          </div>
        </section>

        <section className="container" aria-label="Project details">
          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt>role</dt>
              <dd>{cs.role}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>timeline</dt>
              <dd>{cs.timeline}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>stack</dt>
              <dd>{project.tags.join(", ")}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>status</dt>
              <dd>
                <span className={styles.statusDot} aria-hidden="true" />
                {cs.status}
              </dd>
            </div>
          </dl>
          {project.image && (
            <ProjectMedia
              project={project}
              className={`${styles.media} ${project.imageFit === "contain" ? styles.mediaContain : ""}`}
              sizes="(max-width: 1248px) 100vw, 1152px"
              priority
            />
          )}
        </section>

        <div className={`container ${styles.body}`}>
          <nav className={styles.toc} aria-label="On this page">
            <span className={styles.tocLabel}>// on this page</span>
            {toc.map((t, i) => (
              <a key={t.id} href={`#${t.id}`} className={styles.tocLink}>
                {String(i + 1).padStart(2, "0")} {t.label}
              </a>
            ))}
          </nav>

          <div className={styles.articles}>
            {cs.sections.map((s) => (
              <article key={s.id} id={s.id} className={styles.article}>
                <span className="eyebrow">{num(s.id)}</span>
                <h2 className={styles.articleTitle}>{s.title}</h2>
                {s.text && <p className={styles.text}>{s.text}</p>}
                {s.bullets && (
                  <ul className={styles.bullets}>
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {cs.architecture && (
              <article id="architecture" className={styles.article}>
                <span className="eyebrow">{num("architecture")}</span>
                <h2 className={styles.articleTitle}>Architecture</h2>
                <p className={styles.text}>{cs.architecture.summary}</p>
                <ol className={styles.flow}>
                  {cs.architecture.steps.map((step, i, all) => (
                    <li key={i} className={styles.flowStep}>
                      <span className={styles.flowBox}>{step}</span>
                      {i < all.length - 1 && (
                        <span className={styles.flowArrow} aria-hidden="true">
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </article>
            )}

            {cs.results && (
              <article id="results" className={styles.article}>
                <span className="eyebrow">{num("results")}</span>
                <h2 className={styles.articleTitle}>Results</h2>
                <dl className={styles.metrics}>
                  {cs.results.map((r, i) => (
                    <div key={i} className={styles.metric}>
                      <dt className={styles.metricValue}>{r.value}</dt>
                      <dd>{r.label}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            )}
          </div>
        </div>

        {next && next.slug !== project.slug && (
          <section className={styles.next}>
            <Link href={`/projects/${next.slug}`} className={`container ${styles.nextLink}`}>
              <span>
                <span className={styles.nextLabel}>next project</span>
                <span className={styles.nextName}>{next.name}</span>
              </span>
              <span className={styles.nextArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </section>
        )}
      </main>
      <Footer minimal />
    </>
  );
}
