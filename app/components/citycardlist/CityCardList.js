import React, { useState, useEffect } from "react";
import styles from "./citycardlist.module.scss";

export default function CityCardList({ list = [] }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCity, setEditCity] = useState({ name: "", date: "" });

  const addCity = () => {
    const newCity = {
      name: "New City",
      date: "1/1 - 1/2",
      image: "/default.jpg",
    };
    setCities([...cities, newCity]);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
  };

  const deleteCity = () => {
    setCities(cities.filter((city) => city !== selectedCity));
    setSelectedCity(null);
  };

  const startEditCity = () => {
    setEditCity(selectedCity);
    setEditMode(true);
  };

  const saveEditCity = () => {
    setCities(cities.map((city) => (city === selectedCity ? editCity : city)));
    setSelectedCity(null);
    setEditMode(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.cityCardList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Waiting for...</h2>
        <button className={styles.showAllButton}>Show All</button>
      </div>
      <ul className={styles.cardsContainer}>
        {list.map((city, index) => (
          <li
            key={index}
            className={`${styles.cityCard} ${
              selectedCity === city ? styles.selected : ""
            }`}
            onMouseDown={() => {
              setTimeout(() => selectCity(city), 1000);
            }}
            onMouseUp={() => {
              clearTimeout();
            }}
          >
            {/*       <img
              src={city.image}
              alt={city.name}
              className={styles.cityImage}
            /> */}
            <div className={styles.cityInfo}>
              <h3>{city.city}</h3>
              {/*          <p>{city.date}</p> */}
            </div>
            <button className={styles.countdownButton}>Countdown</button>
          </li>
        ))}
      </ul>
      {selectedCity && !editMode && (
        <div className={styles.actionButtons}>
          <button onClick={startEditCity}>Modifica</button>
          <button onClick={deleteCity}>Elimina</button>
        </div>
      )}
      {editMode && (
        <div className={styles.editForm}>
          <input
            type="text"
            name="name"
            value={editCity.name}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="date"
            value={editCity.date}
            onChange={handleEditChange}
          />
          <button onClick={saveEditCity}>Salva</button>
        </div>
      )}
      <div className={styles.addButtonContainer}>
        <button className={styles.addButton} onClick={addCity}>
          +
        </button>
      </div>
    </div>
  );
}
