import styles from "../services.module.css";

export default function ServiceCard({ title, description, rate, image, background }) {
  return (
    <div className={styles.service_card} style={{ background }}>
      <div className={styles.service_card__content}>
        <h2 className={styles.service_card__title}>{title}</h2>
        <p className={styles.service_card__description}>{description}</p>
        <div className={styles.service_card__footer}>
          <p className={styles.service_card__rate}>{rate}</p>
          <a href="/contact" className={styles.service_card__btn}>
            Book Now
          </a>
        </div>
      </div>
      <div className={styles.service_card__image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}