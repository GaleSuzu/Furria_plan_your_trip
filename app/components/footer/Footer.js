import Link from 'next/link';
import { FaHome, FaCalendarAlt, FaUser } from 'react-icons/fa'; 
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/" className={`${styles.footerButton} ${styles.active}`}>
        <FaHome />
        <span>Home</span>
      </Link>
      <Link href="/calendar" className={styles.footerButton}>
        <FaCalendarAlt className={styles.inactiveIcon} />
        <span>Calendar</span>
      </Link>
      <Link href="/profile" className={styles.footerButton}>
        <FaUser className={styles.inactiveIcon} />
        <span>Profile</span>
      </Link>
    </div>
  );
}
