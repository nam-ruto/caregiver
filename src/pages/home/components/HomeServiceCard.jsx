import styles from "../home.module.css";

export default function HomeServiceCard({ icon, title, blurb, href }) {
  return (
    <article className={styles.card}>
      <div className={styles.card__icon} aria-hidden="true">{icon}</div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__blurb}>{blurb}</p>
      <a className={styles.card__link} href={href}>View more →</a>
    </article>
  );
}
