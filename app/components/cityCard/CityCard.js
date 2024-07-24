import styles from "./citycard.module.scss";
import { useState } from "react";
/* import { useRouter } from "next/router"; */

const CityCard = ({ city, id }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCity, setEditCity] = useState({ name: "", date: "" });
  const selectCity = (city) => {
    setSelectedCity(city);
  };

  /*   const router = useRouter(); */

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
  const deleteCity = async () => {
    try {
      const response = await fetch(`/api/city/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response not Ok!");
      }
      /*  router.refresh("/"); */
    } catch (error) {
      console.error("Error deleting city:", error);
    }
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
