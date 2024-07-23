import { FaHome, FaCalendarAlt, FaUser } from 'react-icons/fa'; 
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <button className={`${styles.footerButton} ${styles.active}`}>
        <FaHome />
        <span>Home</span>
      </button>
      <button className={styles.footerButton}>
        <FaCalendarAlt className={styles.inactiveIcon} />
        <span>Calendar</span>
      </button>
      <button className={styles.footerButton}>
        <FaUser className={styles.inactiveIcon} />
        <span>Profile</span>
      </button>
    </div>
  );
}
