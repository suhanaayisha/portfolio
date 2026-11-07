import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Nav.module.css";

const links = [
  { href: "/#about", label: "01. about" },
  { href: "/#projects", label: "02. projects" },
  { href: "/#experience", label: "03. experience" },
  { href: "/#education", label: "04. education" },
  { href: "/#contact", label: "05. contact" },
];

/** Site header. Pass `trail` (e.g. "/projects/foo") to show the project-page variant. */
export function Nav({ trail }: { trail?: string }) {
  return (
    <header className={styles.header}>
      <nav aria-label="Main" className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.prompt}>~/</span>
          <span>{site.handle}</span>
          {trail ? (
            <span className={styles.trail}>{trail}</span>
          ) : (
            <span className={styles.caret} aria-hidden="true" />
          )}
        </Link>

        {trail ? (
          <Link href="/#projects" className={styles.back}>
            <span aria-hidden="true">←</span> all projects
          </Link>
        ) : (
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.resumeUrl} className={styles.resume} target="_blank" rel="noreferrer">
                résumé ↗
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
