"use client";

import React, { useState, useEffect } from "react";
import styles from "./budget.module.scss";
import WalletCard from "../../walletCard/walletCard";
import WalletModal from "../../walletModal/modal";
import { useParams } from "next/navigation";

const Budget = ({ list = [] }) => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState({
    initial: 2000,
    spent: 0,
  });
  const [costData, setCostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCostData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/cost?cityId=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch costs");
        }
        const data = await response.json();
        setCostData(data.data);
        console.log(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchCostData();
    }
  }, [id]);

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
        {/*  <p>{costData[1].text}</p> */}
        {costData.map((cost) => (
          <WalletCard key={cost._id} cost={cost} />
        ))}
      </div>
      {isModalOpen && <WalletModal onClose={closeModal} />}
      <button className={styles.addButton} onClick={openModal}>
        +
      </button>
    </div>
  );
};

export default Budget;
