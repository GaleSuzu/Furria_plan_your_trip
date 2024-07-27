import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import styles from './navbar.module.scss';
import Link from 'next/link'; 

export default function Navbar() {
  const [profileImage, setProfileImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className={styles.navbarContainer}>
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
        <FaBars className={styles.menuButton} onClick={toggleMenu} />
        
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <Link href="/about" className={styles.dropdownItem}>About Us</Link>
          </div>
        )}
      </div>
    </div>
  );
}
