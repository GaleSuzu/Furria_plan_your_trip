import React from "react";
import styles from "./citycardlist.module.scss";
import CityCard from "../cityCard/CityCard";

export default function CityCardList({ list = [] }) {
  const addCity = () => {
    const newCity = {
      name: "New City",
      date: "1/1 - 1/2",
      image: "/default.jpg",
    };
    setCities([...cities, newCity]);
  };

  return (
    <div className={styles.cityCardList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Waiting for...</h2>
        <button className={styles.showAllButton}>Show All</button>
      </div>
      <ul className={styles.cardsContainer}>
        {list.map((city, index) => (
          <CityCard key={index} city={city.city} id={city._id} />
        ))}
      </ul>
      <div className={styles.addButtonContainer}>
        <button className={styles.addButton} onClick={addCity}>
          +
        </button>
      </div>
    </div>
  );
}
