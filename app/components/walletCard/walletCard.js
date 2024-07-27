import React, { useState } from "react";
import styles from "./walletcard.module.scss";

const WalletCard = ({ cost }) => {
  const [isActive, setIsActive] = useState(false);

  /*   const handleActive = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const editCost = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const costEditData = {
      text: cost.text,
      cost: cost.cost,
      cityId: cost.cityId,
    };

    try {
      const response = await fetch(`/api/cost/${cost._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(costEditData),
      });
      if (!response.ok) {
        throw new Error("Cost not provided!");
      }
      setIsActive(false);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  }; */

  return (
    <div className={styles.walletCard}>
      <h2>Wallet Card</h2>
    </div>
  );
};

export default WalletCard;
