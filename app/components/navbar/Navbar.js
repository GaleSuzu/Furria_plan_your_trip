import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import styles from './navbar.module.scss';

export default function Navbar() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.profileContainer}>
        {profileImage ? (
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        ) : (
          <label className={styles.uploadLabel}>
            <input type="file" accept="image/*" onChange={handleImageChange} className={styles.uploadInput} />
            <span className={styles.uploadText}>Upload</span>
          </label>
        )}
      </div>
      <img src="/furrialogo.svg" alt="Furria Logo" className={styles.logo} />
      <FaBars className={styles.menuButton} />
    </div>
  );
}
