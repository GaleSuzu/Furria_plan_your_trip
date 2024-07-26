import React, { useState } from "react";
import styles from "@/app/components/checkListCard/CheckListCard.module.scss";
import { FaTrash, FaEdit } from "react-icons/fa";

const CheckListCard = ({ todo }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const editTodo = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const todoEditData = {
      date: todo.date,
      time: todo.time,
      place: todo.place,
      text: todo.text,
    };

    try {
      const response = await fetch(`/api/todo/${todo._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoEditData),
      });
      if (!response.ok) {
        throw new Error("Check item not modified!");
      }
      setIsActive(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteTodo = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/todo/${todo._id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Check item not deleted!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <FaEdit className={styles.icon} onClick={handleActive} />
        {isActive ? (
          <form onSubmit={editTodo}>
            <input
              type="date"
              defaultValue={new Date(todo.date).toISOString().split("T")[0]}
              onChange={(e) => (todo.date = e.target.value)}
            />
            <input
              type="time"
              defaultValue={todo.time}
              onChange={(e) => (todo.time = e.target.value)}
            />
            <input
              type="text"
              defaultValue={todo.place}
              onChange={(e) => (todo.place = e.target.value)}
            />
            <input
              type="text"
              defaultValue={todo.text}
              onChange={(e) => (todo.text = e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleActive}>
              Cancel
            </button>
          </form>
        ) : (
          <FaTrash className={styles.icon} onClick={deleteTodo} />
        )}
      </div>
    </li>
  );
};

export default CheckListCard;
