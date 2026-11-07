import { site } from "@/data/site";
import styles from "./Experience.module.css";

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className={styles.highlights}>
      {items.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container sectionInner split">
        <div className="splitHead">
          <span className="eyebrow">03. experience</span>
          <h2 id="experience-title" className="h2">
            Where I&apos;ve worked
          </h2>
        </div>
        <ol className={`splitBody ${styles.list}`}>
          {site.experience.map((job, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.period}>{job.period}</span>
              <div className={styles.detail}>
                <h3 className={styles.role}>
                  {job.role} <span className={styles.company}>@ {job.company}</span>
                </h3>
                {job.highlights && <Highlights items={job.highlights} />}
                {job.teams?.map((team) => (
                  <div key={team.name} className={styles.team}>
                    <h4 className={styles.teamName}>// {team.name}</h4>
                    <Highlights items={team.highlights} />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
