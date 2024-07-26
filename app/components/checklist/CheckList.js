import React from 'react';
import styles from './checklist.module.scss';

const CheckList = ({ todos }) => {
  return (
    <ul className={styles.checkList}>
      {todos.map((todo) => (
        <li key={todo._id} className={styles.checkItem}>
          <p>Date: {new Date(todo.date).toLocaleDateString()}</p>
          <p>Time: {todo.time}</p>
          <p>Place: {todo.place}</p>
          <p>Text: {todo.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
