import React from "react";
import styles from "./checklist.module.scss";
import CheckListCard from "../checkListCard/CheckListCard";

const CheckList = ({ list = [] }) => {
  const sortedTodos = list.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ul className={styles.checkList}>
      {sortedTodos.map((todo) => (
        <CheckListCard key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default CheckList;
