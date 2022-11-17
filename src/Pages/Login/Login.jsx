import React from "react";
import styles from "./Login.module.css";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [isAuth, setIsAuth] = useState(false);

  return (
    <div className={styles.Login}>
      {isAuth == true ? (
        <form className={styles.Login__form}>
          <div className={styles.title}>Войти или создать профиль</div>
          <div className={styles.subtitle}>Имя пользователя</div>
          <MyInput
            type="text"
            placeholder="Введите свое имя пользователя"
          ></MyInput>
          <div className={styles.subtitle}>Пароль</div>
          <MyInput type="password" placeholder="Введите свой пароль"></MyInput>
          <div className={styles.buttons}>
            <MyButton>Войти</MyButton>
          </div>
        </form>
      ) : (
        <form className={styles.Login__form}>
          <div className={styles.title}>Войти или создать профиль</div>
          <div className={styles.subtitle}>Имя пользователя</div>
          <MyInput
            type="text"
            placeholder="Введите свое имя пользователя"
          ></MyInput>
          <div className={styles.subtitle}>Пароль</div>
          <MyInput type="password" placeholder="Введите свой пароль"></MyInput>
          <MyInput type="password" placeholder="Повторите пароль"></MyInput>
          <div className={styles.buttons}>
            <Link className={styles.link} to={"/webshop"}>
              <MyButton onClick={() => setIsAuth(true)}>
                Зарегистрироваться
              </MyButton>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
