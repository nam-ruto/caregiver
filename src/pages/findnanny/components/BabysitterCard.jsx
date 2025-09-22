import PropTypes from 'prop-types';
import { FaShieldAlt, FaStar } from 'react-icons/fa';
import styles from './babysitter.module.css';

const BabysitterCard = ({ babysitter }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img src={babysitter.image} alt={`${babysitter.name}'s profile`} className={styles.avatar} />
          <div className={styles.info}>
            <h3 className={styles.name}>{babysitter.name}</h3>
            <div className={styles.badges}>
              {babysitter.isVerified && (
                <span className={`${styles.badge} ${styles.shield__text}`}>
                  <FaShieldAlt className={styles.shield} /> Verified
                </span>
              )}
              {babysitter.rating && (
                <span className={styles.badge}>
                  <FaStar className={styles.star} /> {babysitter.rating}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.rate}>from ${babysitter.hourlyRate}/hr</div>
      </div>

      <div className={styles.location}>
        {babysitter.location} · {babysitter.experience} years experience
      </div>

      <div className={styles.trust}>
        Hired by {babysitter.hiredCount} families in your area
      </div>

      <div className={styles.skills}>
        {babysitter.skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <p className={styles.description}>
        {babysitter.description.length > 150
          ? `${babysitter.description.slice(0, 150)}... `
          : babysitter.description}
        {babysitter.description.length > 150 && (
          <button className={styles.readMore}>read more</button>
        )}
      </p>

      <button className={styles.profileButton}>See profile</button>
    </div>
  );
};

BabysitterCard.propTypes = {
  babysitter: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isVerified: PropTypes.bool.isRequired,
    rating: PropTypes.number,
    hourlyRate: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    hiredCount: PropTypes.number.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BabysitterCard;
