import styles from "app\components\walletCard\walletcard.module.scss";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

const WalletCard = ({ cost }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const editCost = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const costEditData = {
      category: cost.category,
      text: cost.text,
      cost: cost.cost,
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
        throw new Error("Expense not modified!");
      }
      setIsActive(false);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteCost = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/cost/${cost._id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Check item not deleted!");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.walletCard}>
      {isActive ? (
        <form onSubmit={editCost} className={styles.form}>
          <input
            type="text"
            defaultValue={cost.text}
            onChange={(e) => (cost.text = e.target.value)}
          />
          <input
            type="text"
            defaultValue={cost.category}
            onChange={(e) => (cost.category = e.target.value)}
          />
          <input
            type="number"
            defaultValue={cost.cost}
            onChange={(e) => (cost.cost = e.target.value)}
          />
          <div className={styles.formButtons}>
            <button type="submit">
              <SaveIcon className={styles.icon} /> Save
            </button>
            <button
              type="button"
              onClick={handleActive}
              className={styles.cancelButton}
            >
              <CloseIcon className={styles.icon} /> Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className={styles.title}>{cost.text}</h2>
          <p className={styles.details}>Costo: {cost.cost} €</p>
          <p className={styles.details}>Categoria: {cost.category}</p>
        </>
      )}

      <div className={styles.actions}>
        <FaEdit className={styles.icon} onClick={handleActive} />
        {!isActive && <FaTrash className={styles.icon} onClick={deleteCost} />}
      </div>
    </div>
  );
};

export default WalletCard;
