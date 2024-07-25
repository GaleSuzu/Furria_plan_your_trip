import styles from "./modaleTodo.module.scss";
import Calendar from "react-calendar";

const modaleTodo = () => {
  return (
    <div className={styles.todo}>
      <div>
        <h2 className={styles.title}></h2>
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
    </div>
  );
};
export default modaleTodo;
