import React from "react";
import styles from "./AddProd.module.css";
import MyInput from "../../UI/MyInput/MyInput";

export default function AddProd() {
  let charArr = [
    "Добавить картинку",
    "Цена со скидкой",
    "Цена до скидки",
    "Тип товара",
    "Производитель",
    "Название товара",
  ];
  return (
    <form className={styles.addProd}>
      {charArr.map((char) => (
        <div key={char} className={styles.charItem}>
          <span className={styles.charTitle}>{char}</span>
          <MyInput classes ={styles.input} required placeholder={`Введите ${char}`}></MyInput>
        </div>
      ))}
    </form>
  );
}
