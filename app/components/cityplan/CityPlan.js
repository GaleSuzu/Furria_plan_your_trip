"use client";

import { useState, useEffect } from "react";
import styles from "./cityplan.module.scss";
import MapModal from "../mapmodal/MapModal";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { useRouter } from "next/navigation";

export default function CityPlan() {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [showMapModal, setShowMapModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleCityChange = async (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 2) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTripData = {
      city: city,
      from: startDate,
      to: endDate,
    };
    try {
      const response = await fetch("/api/city", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTripData),
      });

      if (!response.ok) {
        throw new Error("Errore nella creazione della città");
      }

      // window.location.href = "/";
      router.push("/");
    } catch (error) {
      console.error("Errore nella pianificazione del viaggio:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <div className={styles.cityPlan}>
      <h1>Organizza il tuo viaggio</h1>
      <p>Crea il tuo primo itinerario e preparati al prossimo viaggio</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Dove?</label>
        <div className={styles.cityInputContainer}>
          <input
            type="text"
            id="name"
            name="name"
            value={city}
            onChange={handleCityChange}
            className={styles.cityInput}
            required
          />
          <GpsFixedIcon
            className={styles.gpsIcon}
            onClick={() => setShowMapModal(true)}
          />
        </div>
        {suggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
        <label htmlFor="dateStart">Inizio:</label>
        <input
          type="date"
          id="dateStart"
          name="dateStart"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label htmlFor="dateEnd">Fine:</label>
        <input
          type="date"
          id="dateEnd"
          name="dateEnd"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Pianifica</button>
      </form>
      {showMapModal && (
        <MapModal city={city} onClose={() => setShowMapModal(false)} />
      )}
    </div>
  );
}
