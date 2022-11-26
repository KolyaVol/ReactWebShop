import React from "react";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const userName = useSelector((state) => state.userName);
  const isAuth = useSelector((state) => state.isAuth);

  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };
  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      {!isAuth && !userName ? (
        <NavLink
          to={"/login"}
          className={addCssClass(styles.sign, styles.header__item)}
        >
          <BsFillPersonFill />
          <span className={styles.sign}>Войти</span>
        </NavLink>
      ) : (
        <NavLink
          to={"/userPage"}
          className={addCssClass(styles.sign, styles.header__item)}
        >
          <BsFillPersonFill />
          <span className={styles.sign}>{`${userName}`}</span>
        </NavLink>
      )}
    </IconContext.Provider>
  );
}
