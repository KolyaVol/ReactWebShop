import React from 'react'
import styles from './Login.module.css'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'

export default function Login() {
  return (
    <div className={styles.Login}>
      <form className={styles.Login__form}>
          <div className={styles.title}>
          Войти или создать профиль
          </div>
          <div className={styles.subtitle}>
            Имя пользователя
          </div>
          <MyInput type='text' placeholder='Введите свое имя пользователя'></MyInput>
          <div className={styles.subtitle}>
            Пароль
          </div>
          <MyInput type='text' placeholder='Введите свой пароль'></MyInput>
          <div className={styles.buttons}>
            <MyButton>Войти</MyButton>
          </div>
          
      </form>
      
    </div>
  )
}
