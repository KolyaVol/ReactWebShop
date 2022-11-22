import React, { useEffect } from "react";
import styles from "./Login.module.css";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  let isAuthorise = localStorage.getItem('AUTH') 
  useEffect(() => {
     if (!isAuthorise) {
      localStorage.setItem("AUTH", "false")
     } 
  }, []);

  let [hasAcc, setHasAcc] = useState(true);
  let [name, setName] = useState('');

const login = (event) => {
  event.preventDefault();
  localStorage.setItem("AUTH", "true");
  localStorage.setItem("USERNAME", `${name}`);
};

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
console.log(userName);

  return (
    <div className={styles.Login}>
      {hasAcc ? (
        <form onSubmit={login} className={styles.Login__form}>
          <div className={styles.title}>Войти или создать профиль</div>
          <div className={styles.subtitle}>Имя пользователя</div>
          <MyInput
            type="text"
            required
            placeholder="Введите свое имя пользователя"
            onChange={e => setName(e.target.value)}
          >
           
          </MyInput>
          <div className={styles.subtitle}>Пароль</div>
          <MyInput
            required
            type="password"
            placeholder="Введите свой пароль"
          ></MyInput>
          <div className={styles.buttons}>
            <MyButton onClick={() => setHasAcc(false)}>
              Зарегистрироваться
            </MyButton>

            <MyButton>Войти</MyButton>
          </div>
        </form>
      ) : (
        <form onSubmit={login} className={styles.Login__form}>
          <div className={styles.title}>Войти или создать профиль</div>
          <div className={styles.subtitle}>Имя пользователя</div>
          <MyInput
            type="text"
            required
            placeholder="Введите свое имя пользователя"
            onChange={e => setName(e.target.value)}
          >
           
          </MyInput>
          <div className={styles.subtitle}>Пароль</div>
          <MyInput
            type="password"
            required
            placeholder="Введите свой пароль"
          ></MyInput>
          <MyInput
            type="password"
            required
            placeholder="Повторите пароль"
          ></MyInput>
          <div className={styles.buttons}>
            <MyButton onClick={() => setHasAcc(true)}>Войти</MyButton>

            <Link className={styles.link} to={"/webshop"}>
              <MyButton
              //onClick={() => dispatch({ type: "AUTH", payload: true })}
              >
                Зарегистрироваться
              </MyButton>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
