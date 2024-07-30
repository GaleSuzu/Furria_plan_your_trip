"use client";
import React, { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import WalletCard from "../walletCard/walletCard";
import NavigationBar from "../NavigationBar/NavigationBar";
import WalletModal from "../walletModal/walletModal"; 
import styles from "./walletwrapper.module.scss";
import { useParams } from "next/navigation";
import { globalContext } from "../../(context)/Provider";

const WalletWrapper = ({ list }) => {
  const { travelData } = useContext(globalContext);
  const [cityImage, setCityImage] = useState(travelData.cityImage || "/images/default-city.jpg");
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    if (travelData.cityName && !travelData.cityImage) {
      setCityImage(travelData.cityImage);
    }
  }, [travelData.cityName, travelData.cityImage]);

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
        <NavigationBar activePage="wallet" travelData={travelData} />
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
      {showModal && <WalletModal cityId={travelData.cityId} onClose={handleCloseModal} />}
    </div>
  );
};

export default WalletWrapper;
