import React from "react";
import NoteCard from "../noteCard/noteCard";
import styles from "./note.module.scss";

const Notes = () => {
  return (
    <>
      <div>
        <NoteCard />
      </div>
      <button className={styles.addButton}>+</button>
    </>
  );
};
export default Notes;
