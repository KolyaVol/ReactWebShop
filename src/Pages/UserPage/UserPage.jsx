import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userName from "../../store/userNameSlice";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./UserPage.module.css";

export default function UserPage() {

  const dispatch = useDispatch;
  const userCurrentName = useSelector((state) => state.userName);
  let firstLetter = () => {
    if (userCurrentName) {
      return userCurrentName.split("").slice(0, 1).join();
    } else return "";
  };

  const navigate = useNavigate();

  const signOut = (event) => {
    event.preventDefault();
    localStorage.clear("AUTH");
    localStorage.clear("USERNAME");
    dispatch(userName(false));
    navigate("/webshop");
  };

  return (
    <div className={styles.UserPage}>
      <div className={styles.UserBox}>
        <div className={styles.UserTitle}>
          <div className={styles.UserPic}>{firstLetter()}</div>
          <div className={styles.UserName}>{userCurrentName}</div>
        </div>
        <MyButton onClick={signOut}>Выйти</MyButton>
      </div>
    </div>
  );
}
