"use client";

import React, { useState } from "react";
import { FaSuitcase, FaStickyNote, FaMoneyBill } from "react-icons/fa";
import Countdown from "react-countdown";
import CheckList from "../checklist/CheckList";
import Notes from "../notes/Notes";
import styles from "./travel.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";

const Travel = ({ cityName, cityDate, todos, onAddTodo }) => {
  const { id } = useParams();
  const [isCheckListVisible, setIsCheckListVisible] = useState(true);
  const [isWalletVisible, setIsWalletVisible] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(false);

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

  return (
    <div className={styles.travel}>
      <header className={styles.header}>
        <div className={styles.cityInfo}>
          <img
            // src="/path/to/milano.jpg"
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
    </div>
  );
};

export default Travel;
