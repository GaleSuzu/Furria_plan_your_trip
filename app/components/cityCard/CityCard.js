import styles from "./citycard.module.scss";
import { useState } from "react";

const CityCard = ({ city }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCity, setEditCity] = useState({ name: "", date: "" });
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
    <>
      <li
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
        <div className={styles.cityInfo}>
          <h3>{city}</h3>
        </div>
      </li>
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
    </>
  );
};

export default CityCard;
