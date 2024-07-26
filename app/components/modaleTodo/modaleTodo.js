import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./modaleTodo.module.scss";

const ModaleTodo = ({ cityId, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todoData = {
      date: date.toISOString(),
      place,
      time,
      text,
      cityId,
    };

    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error ${response.status}: ${errorText}`);
        throw new Error("Failed to create todo");
      }

      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.todo}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Add Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.calendario}>
            <Calendar
              onChange={handleDateChange}
              value={date}
              className={styles.reactCalendar}
            />
          </div>
          <div className={styles.luogo}>
            <input
              type="text"
              placeholder="Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className={styles.orario}>
            <input
              type="text"
              placeholder="Time (HH:MM)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className={styles.testo}>
            <input
              type="text"
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default ModaleTodo;
