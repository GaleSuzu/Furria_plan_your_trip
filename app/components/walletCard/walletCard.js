/* import React from "react";
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
 */

import React from "react";
import styles from "./walletcard.module.scss";
import { FaEdit, FaTrash } from "react-icons/fa";

const WalletCard = ({ cost }) => {
  const handleEdit = () => {
    // Implement edit logic here, possibly by passing cost data to a modal or form
    console.log("Edit clicked", cost);
  };

  const handleDelete = () => {
    // Implement delete logic here, possibly by calling a function to remove the cost
    console.log("Delete clicked", cost);
  };

  return (
    <div className={styles.walletCard}>
      <h2 className={styles.title}>{cost.text}</h2>
      <p className={styles.details}>Luogo: {cost.location}</p>
      <p className={styles.details}>Costo: {cost.cost}€</p>
      <div className={styles.actions}>
        <FaEdit className={styles.icon} onClick={handleEdit} />
        <FaTrash className={styles.icon} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default WalletCard;
