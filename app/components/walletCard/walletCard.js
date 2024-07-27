import React from "react";
import styles from "./walletcard.module.scss";
import { FaEdit, FaTrash } from "react-icons/fa";

const WalletCard = () => {
  const handleEdit = () => {
    alert("Facciamo finta di modificare");
  };

  const handleDelete = () => {
    alert("Facciamo finta di eliminare");
  };

  return (
    <div className={styles.walletCard}>
      <h2 className={styles.title}>Fake Spesa</h2>
      <p className={styles.details}>Luogo: Un Bar per strada</p>
      <p className={styles.details}>Costo: 20€</p>
      <div className={styles.actions}>
        <FaEdit className={styles.icon} onClick={handleEdit} />
        <FaTrash className={styles.icon} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default WalletCard;
