"use client";

import { useState } from "react";
import styles from "./cityplan.module.scss";

export default function CityPlan() {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

      window.location.href = "/";
    } catch (error) {
      console.error("Errore nella pianificazione del viaggio:", error);
    }
  };

  return (
    <div className={styles.cityPlan}>
      <h1>Organizza il tuo viaggio</h1>
      <p>Crea il tuo primo itinerario e preparati al prossimo viaggio</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Dove?</label>
        <input
          type="text"
          id="name"
          name="name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
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
    </div>
  );
}
