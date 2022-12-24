import React from "react";
import { useState } from "react";
import Map from "../../Map/Map";
import PopUp from "../../PopUp/PopUp";
import styles from "./CityMap.module.css";

export default function CityMap() {
  let [mapVisible, setMapVisible] = useState(false);

  return (
      <div>
        <PopUp
          classes={styles.PopUpContentCent}
          visible={mapVisible}
          setVisible={setMapVisible}
          position="centered"
        >
          <Map></Map>
        </PopUp>
        <h3 onClick={() => setMapVisible(true)} className={styles.city}>
          Минск
        </h3>
      </div>
  );
}
