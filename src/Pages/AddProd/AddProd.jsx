import React from "react";
import styles from "./AddProd.module.css";
import MyInput from "../../UI/MyInput/MyInput";

export default function AddProd() {
  let charArr = [
    "id",
    "image",
    "price",
    "sale",
    "type",
    "manufacturer",
    "name",
  ];
  return (
    <form className={styles.addProd}>
      {charArr.map((char) => (
        <div className={styles.charItem}>
          <span className={styles.charTitle}>{char}</span>
          <MyInput classes ={styles.input} required placeholder={`Введите ${char}`}></MyInput>
        </div>
      ))}
      <input type='submit'></input>
    </form>
  );
}
