import React, { useState, useEffect } from "react";
import styles from "./budget.module.scss";
import WalletModal from "../walletModal/modal";
import FakeWalletCard from "../fakeWalletCard/FakeWalletCard";
import WalletCard from "../walletCard/walletCard";

const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState({
    initial: 2000,
    spent: 0,
  });

  useEffect(() => {
    fetch("/api/cost", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setBudget(response.data);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.budgetContainer}>
      <div className={styles.budgetHeader}>
        <div className={styles.budgetInitial}>
          <label>Budget Iniziale:</label>
          <input
            type="number"
            className={styles.budgetInput}
            value={budget.initial}
          />
        </div>
        <div className={styles.budgetSpent}>
          Spesa Effettuata: <span>0</span>
        </div>
      </div>
      <div className={styles.budgetContent}>
        <FakeWalletCard />
        <WalletCard />
      </div>
      {isModalOpen && <WalletModal onClose={closeModal} />}
      <button className={styles.addButton} onClick={openModal}>
        +
      </button>
    </div>
  );
};

export default Budget;
