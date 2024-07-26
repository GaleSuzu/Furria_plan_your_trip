import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Import the icons
import styles from './checklist.module.scss';

const CheckList = ({ todos }) => {
  const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ul className={styles.checkList}>
      {sortedTodos.map((todo) => (
        <li key={todo._id} className={styles.checkItem}>
          <div className={styles.todoContent}>
            <p className={styles.date}>Date: {new Date(todo.date).toLocaleDateString()}</p>
            <p className={styles.time}>Time: {todo.time}</p>
            <p className={styles.place}>Place: {todo.place}</p>
            <p className={styles.text}>Text: {todo.text}</p>
          </div>
          <div className={styles.todoActions}>
            <FaEdit className={styles.icon} /> 
            <FaTrash className={styles.icon} /> 
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
