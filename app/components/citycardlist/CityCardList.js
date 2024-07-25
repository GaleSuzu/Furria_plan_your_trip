import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./citycardlist.module.scss";
import CityCard from "../cityCard/CityCard";

export default function CityCardList({ list = [], searchQuery }) {
  const router = useRouter();
  const [filteredCities, setFilteredCities] = useState(list);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCities(
        list.filter((city) =>
          city.city.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredCities(list);
    }
  }, [searchQuery, list]);

  const navigateToCityPlan = () => {
    router.push("/city-plan");
  };

  return (
    <div className={styles.cityCardList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Waiting for...</h2>
        <button className={styles.showAllButton}>Show All</button>
      </div>
      <ul className={styles.cardsContainer}>
        {filteredCities.map((city, index) => (
          <CityCard key={index} city={city.city} id={city._id} />
        ))}
      </ul>
      <div className={styles.addButtonContainer}>
        <button className={styles.addButton} onClick={navigateToCityPlan}>
          +
        </button>
      </div>
    </div>
  );
}
