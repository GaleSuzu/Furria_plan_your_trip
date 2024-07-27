import React, { useState } from "react";
import styles from "./budget.module.scss";
import WalletModal from "../walletModal/modal";
import FakeWalletCard from "../fakeWalletCard/FakeWalletCard";

const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          />
        </div>
        <div className={styles.budgetSpent}>
          Spesa Effettuata: <span>0</span>
        </div>
      </div>
      <div className={styles.budgetContent}>
        <FakeWalletCard />
      </div>
      {isModalOpen && <WalletModal onClose={closeModal} />}
      <button className={styles.addButton} onClick={openModal}>
        +
      </button>
    </div>
  );
};

export default Budget;
