import React from "react";
import { useState } from "react";
import styles from "./RecBox.module.css";

export default function RecBox() {
  let [rec, setRec] = useState([
		{ id: 1, img: "../../images/PocoSale.jpg", bgc: "blue" },
		{ id: 2, img: "../images/TradeIn.png", bgc: "pink" },
	]);
  return (
    <div>
      <div className={styles.reccomend__box}>
        {rec.map((p) => (
          <div key={p.id + "recBox"} className={styles.recommend}>
            <img src={p.img} alt="" className={styles.content}/>
            <div className={styles.shadow}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
