import React from 'react';
import styles from './contact.module.css';
import { BookingForm } from './components/BookingForm';
import { GetInTouch } from './components/GetInTouch';
import { OperationHours } from './components/OperationHours';

const Contact = () => {
  return (
    <div>
      {/* Hero Section with Booking Form */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <BookingForm />
        </div>
      </section>

      {/* Body Section with Get In Touch and Operation Hours */}
      <section className={styles.bodySection}>
        <div className={styles.infoGrid}>
          <GetInTouch />
          <OperationHours />
        </div>
      </section>
    </div>
  );
};

export default Contact;