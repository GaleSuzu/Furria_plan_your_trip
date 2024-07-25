import styles from "./travel.module.scss";

const Travel = () => {
  return (
    <div className="">
      <h1 className={styles.title}> Travel</h1>
      <div className={styles.milano}>
        <p className={styles.hero}>qui ci sta la hero di milano</p>
        <p className={styles.title}> qui ci sta il countdown </p>
      </div>
    </div>
  );
};

export default Travel;
