import React from "react";
import { useState } from "react";
import styles from "./Currency.module.css";

export default function Currency() {
    let [currChoice, setCurrChoice] = useState("BYN");

    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };

  return (
    <div>
        <div className={addCssClass(styles.currency, styles.header__item)}>
            <p className={styles.currency__word}>{currChoice}</p>
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
    </div>
  );
}
