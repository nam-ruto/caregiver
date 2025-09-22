import styles from "./home.module.css";
import heroImg from "../../assets/images/home/home-hero.svg";
import story1 from "../../assets/images/home/our-story-1.png";
import story2 from "../../assets/images/home/our-story-2.png";
import story3 from "../../assets/images/home/story-3.png";
import HomeServiceCard from "./components/HomeServiceCard";
import { FaCaretRight, FaBabyCarriage, FaMoon, FaCalendarCheck, FaBus } from "react-icons/fa"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className="container">
          <div className={styles.hero__grid}>
            <div className={styles.hero__copy}>
              <h1 className="h1">Trusted Child Care for Your Busy Life</h1>
              <p className="lead">
                Compassionate, vetted caregivers for daytime, overnight, and
                after-school support—so you can focus on what matters.
              </p>
              <div className={styles.hero__actions}>
                <a href="/contact" className="btn btn--primary">Book Now</a>
              </div>
            </div>
            <div className={styles.hero__art}>
              <img src={heroImg} alt="Parent and child illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`${styles.section} ${styles.story}`}>
        <div className="container">
          <div className={styles.story__grid}>
            <div className={styles.story__copy}>
              <h2 className="h2">Our Story</h2>
              <p>
                We started Caregiver with a simple goal: make quality childcare
                accessible and stress-free for every family. Our team matches
                families with trained caregivers who lead with patience,
                empathy, and safety.
              </p>
              <h3 className="h3">Our Values</h3>
              <ul className={styles.story__bullets}>
                <li><FaCaretRight className={styles.bullet__icon} />Background-checked caregivers</li>
                <li><FaCaretRight className={styles.bullet__icon} />Flexible scheduling</li>
                <li><FaCaretRight className={styles.bullet__icon} />Emergency drop-ins</li>
                <li><FaCaretRight className={styles.bullet__icon} />Transparent pricing</li>
              </ul>
            </div>
            <div className={styles.story__images}>
              <img src={story3} alt="Playtime with caregiver" />
            </div>
          </div>
        </div>
      </section>

      {/* Services (home style) */}
      <section className={`${styles.section} ${styles.services}`}>
        <div className="container">
          <header className={styles.services__header}>
            <h2 className="h2">Our Services</h2>
            <p className="muted">
              From daytime to overnight care, we tailor support to your family’s needs.
            </p>
          </header>
          <div className={styles.services__grid}>
            <HomeServiceCard
              icon={<FaBabyCarriage />}
              title="Day Cares"
              blurb="Enriching daytime supervision and activities."
              href="/services#day-cares"
            />
            <HomeServiceCard
              icon={<FaMoon />}
              title="Overnight Cares"
              blurb="Peace of mind with safe, reliable overnight care."
              href="/services#overnight"
            />
            <HomeServiceCard
              icon={<FaCalendarCheck />}
              title="Drop-In Child Care"
              blurb="Short-notice care for appointments or errands."
              href="/services#drop-in"
            />
            <HomeServiceCard
              icon={<FaBus />}
              title="After-School Transportation"
              blurb="Pickups, drop-offs, and homework wind-down."
              href="/services#transport"
            />
          </div>
        </div>
      </section>

      {/* Home Banner:Find A Babysitter Job */}
      <section className={`${styles.banner}`}>
        <div className="container">
          <div className={styles.banner__inner}>
            <h2 className={styles.banner__h2}>Find A Babysitter Job?</h2>
            <p className={styles.banner__p}>We connect loving caregivers with families who need support.</p>
            <button className="btn btn--beige" onClick={() => {window.location.href = "/contact"}}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
