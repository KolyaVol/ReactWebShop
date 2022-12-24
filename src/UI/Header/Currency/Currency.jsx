import React from "react";
import { useState } from "react";
import styles from "./Currency.module.css";

export default function Currency() {
    let [currChoice, setCurrChoice] = useState("BYN");

  return (
    
    <div className={styles.currency}>
        <h3 className={styles.currency__word}>{currChoice}</h3>
        
        <div className={styles.currency__block}>
            <p className={styles.currency__title}>Выберите валюту</p>
            <div
                onClick={() => setCurrChoice("BYN")}
                className={styles.currency__item}
            >
                BYN Белорусские рубли
            </div>
            <div
                onClick={() => setCurrChoice("RUB")}
                className={styles.currency__item}
            >
                RUB Российские рубли
            </div>
            <div
                onClick={() => setCurrChoice("USD")}
                className={styles.currency__item}
            >
                USD Доллар США
            </div>
        </div>
    </div>
    
  );
}
