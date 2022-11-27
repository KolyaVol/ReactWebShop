import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";


export default function Login() {
  


  

  return (
    <div className={styles.prod}>
      <div className={styles.container}>
        <div className={styles.photo}></div>
        <div className={styles.description}></div>
        <div className={styles.purchase}>
          <div className={styles.prices}>
            <div className={styles.price}>228</div>
            <div className={styles.sale}>322</div>
          </div>
          <MyButton />
          <MyButton />
        </div>
      </div>
    </div>
  );
}
