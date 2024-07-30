import { useState } from "react";
import styles from "./WalletModal.module.scss";

const WalletModal = ({ cityId, onClose }) => {
  const [place, setPlace] = useState("");
  const [cost, setCost] = useState(null);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const costData = {
      place,
      cost,
      cityId,
      text,
      category,
    };

    try {
      const response = await fetch("/api/cost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(costData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error ${response.status}: ${errorText}`);
        throw new Error("Failed to create a cost");
      }
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Aggiungi un costo</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Luogo:</label>
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Costo:</label>
            <input type="number" onChange={(e) => setCost(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Testo:</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Categoria:</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.cancelButton} onClick={onClose}>
              Annulla
            </button>
            <button className={styles.submitButton} type="submit">
              Aggiungi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WalletModal;
