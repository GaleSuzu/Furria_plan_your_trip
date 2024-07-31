"use client";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { FaSuitcase, FaStickyNote, FaMoneyBill } from "react-icons/fa";
import WalletCard from "../walletCard/walletCard";
import WalletModal from "../walletModal/WalletModal";
import styles from "./walletwrapper.module.scss";
import { useParams } from "next/navigation";
import { globalContext } from "../../(context)/Provider";
import Link from "next/link";

const WalletWrapper = ({ list, cityName }) => {
  const { id } = useParams();
  const { travelData } = useContext(globalContext);
  const [showModal, setShowModal] = useState(false);
  const [cityImage, setCityImage] = useState("/images/default-city.jpg");

  useEffect(() => {
    const fetchCityImage = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/`, {
          params: {
            key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
            q: cityName,
            image_type: "photo",
            per_page: 3,
          },
        });
        if (response.data.hits.length > 0) {
          setCityImage(response.data.hits[0].webformatURL);
        }
      } catch (error) {
        console.error("Errore nel recupero dell'immagine della città:", error);
      }
    };

    if (cityName) {
      fetchCityImage();
    }
  }, [cityName]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.wallet}>
      <header className={styles.header}>
        <div className={styles.cityInfo}>
          <img
            src={cityImage}
            alt={cityName}
            className={styles.cityImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-city.jpg";
            }}
          />
          <div className={styles.cityDetails}>
            <h1 className={styles.city}>{cityName}</h1>
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <div>
          <nav className={styles.navbar}>
            <Link
              href={`/trip/${id}?name=${cityName}`}
              className={styles.navButton}
            >
              <FaSuitcase />
              <span>My Journey</span>
            </Link>
            <button className={styles.navButtonBudget}>
              <FaMoneyBill />
              <span>Budget</span>
            </button>
          </nav>
        </div>
        <div>
          {list.map((cost, index) => (
            <WalletCard key={index} cost={cost} />
          ))}
        </div>
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={handleOpenModal}>
            Add Expense
          </button>
        </div>
      </div>
      {showModal && (
        <WalletModal cityId={travelData.cityId} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default WalletWrapper;
