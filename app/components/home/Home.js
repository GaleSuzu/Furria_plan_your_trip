"use client";

import styles from "./home.module.scss";
import CityCardList from "../citycardlist/CityCardList";
import Searchbar from "../searchbar/Searchbar";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Provider";

export default function Home() {
  const { city } = useContext(globalContext);
  return (
    <div className={styles.home}>
      <Searchbar />
      <CityCardList list={city} />
    </div>
  );
}
