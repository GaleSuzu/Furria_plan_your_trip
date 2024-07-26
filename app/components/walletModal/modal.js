import { useState } from "react";
import styles from "./modal.module.scss";

const WalletModal = ({ cityId, onClose }) => {
  const [place, setPlace] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const costData = {
      place,
      cost,
      cityId,
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
    <div className={styles.modalCost}>
      <h2>Aggiungi un costo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Luogo:
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </label>
          <label>
            Costo:
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </label>
          <div>
            <button onClick={onClose}>Annulla</button>
            <button type="submit">Aggiungi</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WalletModal;
