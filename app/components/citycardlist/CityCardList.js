import React, { useState } from 'react';
import styles from './citycardlist.module.scss';

const initialCities = [
  { name: 'Milan', date: '5/8 - 12/8', image: '/milan.jpg' },
  { name: 'Barcellona', date: '30/10/2024', image: '/barcellona.jpg' },
  { name: 'Berlin', date: '24/12/2024', image: '/berlin.jpg' }
];

export default function CityCardList() {
  const [cities, setCities] = useState(initialCities);

  const addCity = () => {
    const newCity = { name: 'New City', date: '1/1 - 1/2', image: '/default.jpg' };
    setCities([...cities, newCity]);
  };

  return (
    <div className={styles.cityCardList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Waiting for...</h2>
        <button className={styles.showAllButton}>Show All</button>
      </div>
      <ul className={styles.cardsContainer}>
        {cities.map((city, index) => (
          <li key={index} className={styles.cityCard}>
            <img src={city.image} alt={city.name} className={styles.cityImage} />
            <div className={styles.cityInfo}>
              <h3>{city.name}</h3>
              <p>{city.date}</p>
            </div>
            <button className={styles.countdownButton}>Countdown</button>
          </li>
        ))}
      </ul>
      <div className={styles.addButtonContainer}>
        <button className={styles.addButton} onClick={addCity}>+</button>
      </div>
    </div>
  );
}
