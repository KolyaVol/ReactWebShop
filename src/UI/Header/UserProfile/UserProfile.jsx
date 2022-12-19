import React from "react";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./UserProfile.module.css";

export default function UserProfile() {

  const userName = useSelector((state) => state.userName);
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      {!isAuth && userName.firstName === "" ? (
        <NavLink to={"/login"} className={styles.sign}>
          <BsFillPersonFill />
          <span className={styles.sign}>Войти</span>
        </NavLink>
      ) : (
        <NavLink to={"/userPage"} className={styles.sign}>
          <BsFillPersonFill />
          <span className={styles.sign}>{`${userName.firstName}`}</span>
        </NavLink>
      )}
    </IconContext.Provider>
  );
}
