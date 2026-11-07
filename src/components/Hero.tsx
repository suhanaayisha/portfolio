import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {site.availability} · {site.location}
        </p>
        <h1 className={styles.title}>
          {site.name}
          <br />
          <span className={styles.titleMuted}>builds {site.tagline}.</span>
        </h1>
        <p className={styles.intro}>{site.intro}</p>
        <div className={styles.actions}>
          <Link href="/#projects" className="btn btnPrimary">
            View my work <span aria-hidden="true">→</span>
          </Link>
          <Link href="/#contact" className="btn btnGhost">
            Get in touch
          </Link>
        </div>
      </div>

      <Terminal />
    </section>
  );
}

function Command({ children }: { children: React.ReactNode }) {
  return (
    <p>
      <span className={styles.prompt} aria-hidden="true">
        ❯
      </span>
      {children}
    </p>
  );
}

function Terminal() {
  const { languages, frameworks, infra } = site.terminal;
  return (
    <figure className={styles.terminal} aria-label="Summary, styled as a terminal session">
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.light} />
        <span className={styles.light} />
        <span className={styles.light} />
        <span className={styles.barTitle}>zsh — whoami</span>
      </div>
      <div className={styles.screen}>
        <div>
          <Command>whoami</Command>
          <p className={styles.out}>
            {site.handle} — {site.role}
          </p>
        </div>
        <div>
          <Command>cat stack.txt</Command>
          <p className={styles.out}>
            <span className={styles.key}>languages:</span> {languages.join(", ")}
          </p>
          <p className={styles.out}>
            <span className={styles.key}>frameworks:</span> {frameworks.join(", ")}
          </p>
          <p className={styles.out}>
            <span className={styles.key}>infra:</span> {infra.join(", ")}
          </p>
        </div>
        <div>
          <Command>cat motto.txt</Command>
          <p className={styles.out}>&ldquo;{site.motto.quote}&rdquo;</p>
          <p className={styles.out}>
            <span className={styles.key}>— {site.motto.author}</span>
          </p>
        </div>
        <p aria-hidden="true">
          <span className={styles.prompt}>❯</span>
          <span className={styles.cursor} />
        </p>
      </div>
    </figure>
  );
}
