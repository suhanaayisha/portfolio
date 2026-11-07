import { site } from "@/data/site";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container sectionInner split">
        <div className="splitHead">
          <span className="eyebrow">04. education</span>
          <h2 id="education-title" className="h2">
            Education
          </h2>
        </div>
        <ul className={`splitBody ${styles.list}`}>
          {site.education.map((e) => (
            <li key={e.degree} className={styles.card}>
              <span className={styles.period}>{e.period}</span>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>{e.school}</p>
              {e.notes.length > 0 && (
                <ul className={styles.notes}>
                  {e.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
