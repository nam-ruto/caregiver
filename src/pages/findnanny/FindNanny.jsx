import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaFilter } from 'react-icons/fa';
import heroImage from '../../assets/images/findnanny/hero-image.png';
import styles from './findnanny.module.css';
import BabysitterList from './components/BabysitterList';
import BabysitterCard from './components/BabysitterCard';

const FindNanny = () => {
  const [zipCode, setZipCode] = useState('36081');
  const [location, setLocation] = useState('Troy, AL');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement onboarding flow
    navigate('/onboarding');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroFlex}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Find Local Babysitters</h1>
              <p className={styles.subtitle}>
                Your family's safety is our top priority. Every caregiver in our network undergoes
                comprehensive background checks, identity verification, and reference checks.
              </p>
              
              <div className={styles.searchFormWrapper}>
                <form onSubmit={handleSubmit} className={styles.searchForm}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="zipcode" className={styles.inputLabel}>Enter your ZIP code to get started</label>
                    <input
                      id="zipcode"
                      type="text"
                      placeholder="Enter ZIP code (e.g., 36081)"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      pattern="[0-9]{5}"
                      title="Please enter a valid 5-digit ZIP code"
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    Get Started
                  </button>
                </form>

                <div className={styles.trustBadge}>
                  <div className={styles.trustIcon}>
                    <FaShieldAlt size={20} />
                  </div>
                  <span>
                    All caregivers with this badge are background checked.{' '}
                    <a href="/safety">Learn more →</a>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.heroImage}>
              <img
                src={heroImage}
                alt="Happy babysitter engaging with children"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className={styles.bodySection}>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>Here are some babysitters near you:</h2>
            <div className={styles.headerSubSection}>
              <div className={styles.headerLocation}>
                {/* <label htmlFor="location" className={styles.locationLabel}>Location</label> */}
                <select
                  id="location"
                  className={styles.locationSelect}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="Troy, AL">Troy, AL</option>
                  <option value="Montgomery, AL">Montgomery, AL</option>
                  <option value="Dothan, AL">Dothan, AL</option>
                </select>
              </div>
              <button className={styles.filterButton}>
                <FaFilter /> Filter Results
              </button>
            </div>
          </div>

          <BabysitterList />
        </div>
      </section>
    </div>
  );
};

export default FindNanny;
