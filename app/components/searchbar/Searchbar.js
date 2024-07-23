import { FaSearch } from 'react-icons/fa'; 
import styles from './searchbar.module.scss';

export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Where we go?" className={styles.input} />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}
