import Image from "next/image";
import { site } from "@/data/site";
import styles from "./About.module.css";

const groups = site.skills;

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container sectionInner split">
        <div className="splitHead">
          <span className="eyebrow">01. about</span>
          <h2 id="about-title" className="h2">
            A bit about me
          </h2>
          {site.photo && (
            <Image
              src={site.photo}
              alt={`Photo of ${site.name}`}
              width={144}
              height={144}
              className={styles.photo}
            />
          )}
        </div>
        <div className={`splitBody ${styles.body}`}>
          <div className={styles.prose}>
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className={styles.stack}>
            {groups.map((g) => (
              <div key={g.label} className={styles.cell}>
                <dt className={styles.label}>// {g.label}</dt>
                <dd>
                  <ul className="tagList">
                    {g.items.map((item, i) => (
                      <li key={i} className={styles.chip}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
