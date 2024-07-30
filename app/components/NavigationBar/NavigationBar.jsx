import React, { useContext } from "react";
import { FaSuitcase, FaStickyNote, FaMoneyBill } from "react-icons/fa";
import styles from "./NavigationBar.module.scss";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { globalContext } from "../../(context)/Provider";

const NavigationBar = ({ activePage, travelData }) => {
  const { id } = useParams();
  const router = useRouter();
  const { setTravelData } = useContext(globalContext);

  const handleNavigation = (page) => {
    setTravelData(travelData);
    router.push(`/${page}/${id}`);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.navButton} ${activePage === "trip" ? styles.activeButton : ""}`}
        onClick={() => handleNavigation("trip")}
      >
        <FaSuitcase />
        <span>My Journey</span>
      </div>
      <div
        className={`${styles.navButton} ${activePage === "notes" ? styles.activeButton : ""}`}
        onClick={() => handleNavigation("notes")}
      >
        <FaStickyNote />
        <span>My Notes</span>
      </div>
      <div
        className={`${styles.navButton} ${activePage === "wallet" ? styles.activeButton : ""}`}
        onClick={() => handleNavigation("wallet")}
      >
        <FaMoneyBill />
        <span>Budget</span>
      </div>
    </nav>
  );
};

export default NavigationBar;
