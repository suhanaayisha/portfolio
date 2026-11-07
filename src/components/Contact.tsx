import { site } from "@/data/site";
import { CopyEmailButton } from "./CopyEmailButton";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">05. contact</span>
        <h2 id="contact-title" className={styles.title}>
          Have a project or role in mind? Let&apos;s talk.
        </h2>
        <p className={styles.text}>
          [A line on what you&apos;re open to — full-time roles, freelance, collaborations — and how fast you
          reply.]
        </p>
        <div className={styles.actions}>
          <a href={`mailto:${site.email}`} className={`btn btnPrimary ${styles.email}`}>
            {site.email} <span aria-hidden="true">↗</span>
          </a>
          <CopyEmailButton email={site.email} className={styles.copy} />
        </div>
      </div>
    </section>
  );
}
