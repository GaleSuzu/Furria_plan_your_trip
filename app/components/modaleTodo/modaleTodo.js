import styles from "./modaleTodo.module.scss";
import Calendar from "react-calendar";

const ModaleTodo = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Add Todo</h2>
        <div className={styles.calendario}>
          <Calendar />
        </div>
        <div className={styles.luogo}>
          <input type="text" placeholder="Luogo" />
        </div>
        <div className={styles.orario}>
          <input type="text" placeholder="Orario" />
        </div>
        <div className={styles.testo}>
          <input type="text" placeholder="Testo" />
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModaleTodo;
