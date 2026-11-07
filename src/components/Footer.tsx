import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";
import styles from "./Footer.module.css";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.socials.x, label: "X / Twitter", Icon: XIcon },
];

export function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {new Date().getFullYear()} {site.name}
          {!minimal && " · built with care"}
        </span>
        {!minimal && (
          <ul className={styles.socials}>
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className={styles.social} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
