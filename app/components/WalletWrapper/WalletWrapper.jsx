"use client";
import React, { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import WalletCard from "../WalletCard/walletCard";
import WalletModal from "../walletModal/WalletModal";
import styles from "./walletwrapper.module.scss";
import { useParams } from "next/navigation";
import { globalContext } from "../../(context)/Provider";

const WalletWrapper = ({ list, cityName, cityDate, todos }) => {
  const { travelData } = useContext(globalContext);
  const [showModal, setShowModal] = useState(false);
  const [isCheckListVisible, setIsCheckListVisible] = useState(true);
  const [isWalletVisible, setIsWalletVisible] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(false);
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

  const handleChecklist = () => {
    setIsCheckListVisible(true);
    setIsWalletVisible(false);
    setIsNoteVisible(false);
  };

  const handleWallet = () => {
    setIsCheckListVisible(false);
    setIsNoteVisible(false);
    setIsWalletVisible(true);
  };

  const handleNotes = () => {
    setIsCheckListVisible(false);
    setIsWalletVisible(false);
    setIsNoteVisible(true);
  };

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
            alt={cityName}
            className={styles.cityImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-city.jpg";
            }}
          />
          <div className={styles.cityDetails}>
            <h1>{cityName}</h1>
            <p>{cityDate.toLocaleDateString()}</p>
            <Countdown date={cityDate} renderer={renderer} />
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.body}>
          <nav className={styles.navbar}>
            <button
              className={`${styles.navButton} ${
                isCheckListVisible ? styles.activeButton : ""
              }`}
              onClick={handleChecklist}
            >
              <FaSuitcase />
              <span>My Journey</span>
            </button>
            <button
              className={`${styles.navButton} ${
                isNoteVisible ? styles.activeButton : ""
              }`}
              onClick={handleNotes}
            >
              <FaStickyNote />
              <span>My Notes</span>
            </button>
            <Link
              href={`/wallet/${id}`}
              className={`${styles.navButton} ${
                isWalletVisible ? styles.activeButton : ""
              }`}
              onClick={handleWallet}
            >
              <FaMoneyBill />
              <span>Budget</span>
            </Link>
          </nav>
          {isCheckListVisible && (
            <>
              <CheckList list={todos} />
              <div className={styles.addButtonContainer}>
                <button className={styles.addButton} onClick={onAddTodo}>
                  Add Todo
                </button>
              </div>
            </>
          )}
          {/* {isWalletVisible && <Budget />} */}
          {isNoteVisible && <Notes />}
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
