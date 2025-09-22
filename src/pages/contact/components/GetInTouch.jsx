import React from 'react';
import styles from '../contact.module.css';

export const GetInTouch = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Get In Touch</h2>
      
      <div className={styles.infoItem}>
        <h3>Address</h3>
        <p>123 Childcare Street</p>
        <p>Sydney, NSW 2000</p>
        <p>Australia</p>
      </div>

      <div className={styles.infoItem}>
        <h3>Phone</h3>
        <p>Main: (02) 1234 5678</p>
        <p>Emergency: 0400 123 456</p>
      </div>

      <div className={styles.infoItem}>
        <h3>Email</h3>
        <p>info@childcarewebapp.com</p>
        <p>bookings@childcarewebapp.com</p>
      </div>

      <div className={styles.infoItem}>
        <h3>Social Media</h3>
        <p>Facebook: @ChildcareWebApp</p>
        <p>Instagram: @ChildcareWebApp</p>
      </div>
    </div>
  );
};
