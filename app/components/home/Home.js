'use client';

import Navbar from '../navbar/Navbar';
import Searchbar from '../searchbar/Searchbar';
import CityCardList from '../citycardlist/CityCardList';
import Footer from '../footer/Footer';
import '../../globals.css';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Searchbar />
      <CityCardList />
      <Footer />
    </div>
  );
}
