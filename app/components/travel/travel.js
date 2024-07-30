"use client";
import React, { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import CheckList from "../checklist/CheckList";
import Notes from "../notes/Notes";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./travel.module.scss";
import { useParams } from "next/navigation";
import axios from "axios";
import { globalContext } from "../../(context)/Provider";

const Travel = ({ todos, onAddTodo }) => {
  const { id } = useParams();
  const { travelData, setTravelData } = useContext(globalContext);
  const [cityImage, setCityImage] = useState("/images/default-city.jpg");

  useEffect(() => {
    const fetchCityImage = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/`, {
          params: {
            key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
            q: travelData.cityName,
            image_type: "photo",
            per_page: 3,
          },
        });
        if (response.data.hits.length > 0) {
          setCityImage(response.data.hits[0].webformatURL);
          setTravelData(prevState => ({
            ...prevState,
            cityImage: response.data.hits[0].webformatURL
          }));
        }
      } catch (error) {
        console.error("Errore nel recupero dell'immagine della città:", error);
      }
    };

    if (travelData.cityName) {
      fetchCityImage();
    }
  }, [travelData.cityName, setTravelData]);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className={styles.countdown}>
        <div>
          <span>{days}</span> DAYS
        </div>
        <div>
          <span>{hours}</span> HRS
        </div>
        <div>
          <span>{minutes}</span> MINS
        </div>
        <div>
          <span>{seconds}</span> SECS
        </div>
      </div>
    );
  };

  return (
    <div className={styles.travel}>
      <header className={styles.header}>
        <div className={styles.cityInfo}>
          <img
            src={travelData.cityImage || cityImage}
            alt={travelData.cityName || "City"}
            className={styles.cityImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-city.jpg";
            }}
          />
          <div className={styles.cityDetails}>
            <h1>{travelData.cityName}</h1>
            <p>{travelData.cityDate ? new Date(travelData.cityDate).toLocaleDateString() : "N/A"}</p>
            <Countdown date={travelData.cityDate} renderer={renderer} />
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <NavigationBar activePage="trip" travelData={travelData} />
        <CheckList list={todos} />
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={onAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
