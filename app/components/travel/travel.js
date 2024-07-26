"use client";

import React, { useState } from "react";
import { FaSuitcase, FaStickyNote, FaMoneyBill } from "react-icons/fa";
import Countdown from "react-countdown";
import CheckList from "../checklist/CheckList";
import styles from "./travel.module.scss";

const Travel = ({ cityName, cityDate, todos, onAddTodo }) => {
  const [isCheckListVisible, setIsCheckListVisible] = useState(false);

  const toggleCheckListVisibility = () => {
    setIsCheckListVisible(!isCheckListVisible);
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

  return (
    <div className={styles.travel}>
      <header className={styles.header}>
        <div className={styles.cityInfo}>
          <img
            src="/path/to/milano.jpg"
            alt={cityName}
            className={styles.cityImage}
          />
          <div className={styles.cityDetails}>
            <h1>{cityName}</h1>
            <p>{cityDate.toLocaleDateString()}</p>
            <Countdown date={cityDate} renderer={renderer} />
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <nav className={styles.navbar}>
          <button
            className={`${styles.navButton} ${
              isCheckListVisible ? styles.activeButton : ""
            }`}
            onClick={toggleCheckListVisibility}
          >
            <FaSuitcase />
            <span>My Journey</span>
          </button>
          <button className={styles.navButton}>
            <FaStickyNote />
            <span>My Notes</span>
          </button>
          <button className={styles.navButton}>
            <FaMoneyBill />
            <span>Budget</span>
          </button>
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
      </div>
    </div>
  );
};

export default Travel;
