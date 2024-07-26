import styles from "@/app/components/checkListCard/CheckListCard.module.scss";
import { FaTrash, FaEdit } from "react-icons/fa";
const CheckListCard = ({ todo }) => {
  return (
    <li className={styles.checkItem}>
      <div className={styles.todoContent}>
        <p className={styles.date}>
          Date: {new Date(todo.date).toLocaleDateString()}
        </p>
        <p className={styles.time}>Time: {todo.time}</p>
        <p className={styles.place}>Place: {todo.place}</p>
        <p className={styles.text}>Text: {todo.text}</p>
      </div>
      <div className={styles.todoActions}>
        <FaEdit className={styles.icon} />
        <FaTrash className={styles.icon} />
      </div>
    </li>
  );
};

export default CheckListCard;
