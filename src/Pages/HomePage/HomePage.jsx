import React from "react";
import HomeSlider from "../../UI/HomeSlider/HomeSlider";
import ProdList from "../../UI/ProdList/ProdList";
import RecBox from "../../UI/RecBox/RecBox";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <HomeSlider />

      <ProdList></ProdList>

      <RecBox />

      <ProdList></ProdList>
    </div>
  );
}
