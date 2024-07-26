import styles from "./modaleTodo.module.scss";
import Calendar from "react-calendar";

const ModaleTodo = ({ cityId, onClose }) => {
  return (
    <div className={styles.todo}>
      <div>
        <h2 className={styles.title}>Add a new Todo</h2>
      </div>
      <div className={styles.calendario}>
        <Calendar />
      </div>
      <div className={styles.luogo}>
        <input type="text" placeholder="Luogo" />
      </div>
      <div className={styles.orario}>
        <input type="text" placeholder="orario" />
      </div>
      <div className={styles.testo}>
        <input type="text" placeholder="testo" />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModaleTodo;
