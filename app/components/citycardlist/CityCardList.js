import React, { useState, useEffect } from "react";
import styles from "./citycardlist.module.scss";

/* const initialCities = [
  { name: 'Milan', date: '5/8 - 12/8', image: '/milan.jpg' },
  { name: 'Barcellona', date: '30/10/2024', image: '/barcellona.jpg' },
  { name: 'Berlin', date: '24/12/2024', image: '/berlin.jpg' }
]; */

export default function CityCardList() {
  const [city, setCity] = useState([]);
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
  useEffect(() => {
    fetch("/api/city", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setCity(response.data);
      });
  }, []);

  return (
    <div className={styles.cityCardList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Waiting for...</h2>
        <button className={styles.showAllButton}>Show All</button>
      </div>
      <ul className={styles.cardsContainer}>
        {city.map((city, index) => (
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
