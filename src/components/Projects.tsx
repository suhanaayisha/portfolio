"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, projects, type Project, type ProjectCategory } from "@/data/site";
import { ArrowUpRightIcon, FolderIcon } from "./Icons";
import { ProjectMedia } from "./ProjectMedia";
import styles from "./Projects.module.css";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [{ id: "all", label: "all" }, ...categories];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const featured = projects.find((p) => p.featured);
  const showFeatured = filter === "all" && featured;
  const visible =
    filter === "all" ? projects.filter((p) => p !== featured) : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className={`container sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">02. projects</span>
            <h2 id="projects-title" className="h2">
              Selected work
            </h2>
          </div>
          <div role="group" aria-label="Filter projects" className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={styles.filter}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {showFeatured && <FeaturedProject project={featured} />}

        {visible.length > 0 ? (
          <ul className={styles.grid}>
            {visible.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>// nothing here yet</p>
        )}
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.featured}>
      <div className={styles.featuredMediaWrap}>
        <ProjectMedia project={project} className={styles.featuredMedia} sizes="(max-width: 1000px) 100vw, 520px" />
      </div>
      <div className={styles.featuredBody}>
        <span className={styles.featuredMeta}>featured · {project.year}</span>
        <h3 className={styles.featuredTitle}>{project.name}</h3>
        <p className={styles.featuredSummary}>{project.summary}</p>
        <ul className="tagList" aria-label="Built with">
          {project.tags.map((t, i) => (
            <li key={i} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <span className={styles.readMore}>
          Read case study <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const category = categories.find((c) => c.id === project.category)?.label;
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.cardTop}>
        <FolderIcon size={28} strokeWidth={1.6} className={styles.folder} />
        <ArrowUpRightIcon size={18} />
      </div>
      <h3 className={styles.cardTitle}>{project.name}</h3>
      <p className={styles.cardSummary}>{project.summary}</p>
      <ul className="tagList" aria-label="Built with">
        {category && <li className="tag">{category}</li>}
        {project.tags.map((t, i) => (
          <li key={i} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
