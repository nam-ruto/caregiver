import React from 'react';
import styles from '../contact.module.css';

export const OperationHours = () => {
  const hours = [
    { day: 'Monday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Saturday', open: '8:00 AM', close: '4:00 PM' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' },
  ];

  return (
    <div className={styles.contactInfo} style={{ marginTop: '0rem' }}>
      <h2>Operation Hours</h2>
      <table className={styles.hoursTable}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((schedule) => (
            <tr key={schedule.day}>
              <td>{schedule.day}</td>
              <td>{schedule.open}</td>
              <td>{schedule.close}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.infoItem} style={{ marginTop: '1rem' }}>
        <h3>Special Notes</h3>
        <p>Extended hours for Night Care service (6:00 PM - 10:00 PM)</p>
        <p>Public holidays may have different operating hours</p>
      </div>
    </div>
  );
};
