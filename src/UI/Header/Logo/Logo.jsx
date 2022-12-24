import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to={"/webshop"} className={styles.logo}>
      <h1>WEBSHOP</h1>
    </NavLink>
  );
}
