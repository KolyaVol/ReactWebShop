import React from "react";
import { useState } from "react";
import Map from "../../Map/Map";
import PopUp from "../../PopUp/PopUp";
import styles from "./CityMap.module.css";

export default function CityMap() {
  let [mapVisible, setMapVisible] = useState(false);

  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };
  return (
    <div>
      <div className={addCssClass(styles.inf2, styles.header__item)}>
        <PopUp
          visible={mapVisible}
          setVisible={setMapVisible}
          position="centered"
        >
          <Map></Map>
        </PopUp>
        <div
          onClick={() => setMapVisible(true)}
          className={addCssClass(styles.city, styles.header__item)}
        >
          Minsk
        </div>
      </div>
    </div>
  );
}
