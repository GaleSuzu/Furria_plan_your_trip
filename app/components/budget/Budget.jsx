import React, { useState } from "react";
import styles from "./budget.module.scss";
import WalletModal from "../walletModal/modal";

const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>Budget iniziale</div>
      <div>spesa Effettuata</div>
      <button className={styles.addButton} onClick={openModal}>
        +
      </button>
      {isModalOpen && <WalletModal onClose={closeModal} />}
    </div>
  );
};

export default Budget;
