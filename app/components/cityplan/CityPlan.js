"use client";

import { useState, useContext } from "react";
import { globalContext } from "@/app/(context)/Provider";
import styles from "./cityplan.module.scss";

export default function CityPlan() {
  const { setCity } = useContext(globalContext);
  const [formData, setFormData] = useState({
    name: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/city", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: formData.name,
          date: `${formData.dateStart} - ${formData.dateEnd}`,
          image: "/default.jpg",
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nella creazione della città");
      }

      const result = await response.json();
      setCity((prevState) => [...prevState, result.data]);

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
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="dateStart">Inizio:</label>
        <input
          type="date"
          id="dateStart"
          name="dateStart"
          value={formData.dateStart}
          onChange={handleChange}
          required
        />
        <label htmlFor="dateEnd">Fine:</label>
        <input
          type="date"
          id="dateEnd"
          name="dateEnd"
          value={formData.dateEnd}
          onChange={handleChange}
          required
        />
        <button type="submit">Pianifica</button>
      </form>
    </div>
  );
}
