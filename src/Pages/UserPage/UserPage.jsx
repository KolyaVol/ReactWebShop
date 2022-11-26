import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/MyButton/MyButton';
import styles from "./UserPage.module.css";

export default function UserPage() {


  const userName = useSelector((state) => state.userName);
  let firstLetter = () => {
    if (userName) {
      return userName.split("").slice(0, 1).join();
    }
    else return ''
  } 

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const signOut = (event) => {
  event.preventDefault();
  localStorage.clear("AUTH");
  localStorage.clear("USERNAME");
  dispatch({ type: "USERNAME", payload: false });
  dispatch({ type: "NOT_AUTH", payload: false});
  navigate('/webshop')
  
};

  return (
    <div className={styles.UserPage}>
      <div className={styles.UserBox}>
        <div className={styles.UserTitle}>
          <div className={styles.UserPic}>{firstLetter}</div>
          <div className={styles.UserName}>{userName}</div>
        </div>
        <MyButton onClick={signOut}>Выйти</MyButton>
      </div>
    </div>
  );
}
