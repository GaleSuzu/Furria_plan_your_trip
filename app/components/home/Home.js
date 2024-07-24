'use client';

import styles from './home.module.scss';
import CityCardList from '../citycardlist/CityCardList';
import Searchbar from '../searchbar/Searchbar';

export default function Home() {
  return (
    <div className={styles.home}>
      <Searchbar />
      <CityCardList />
    </div>
  );
}
