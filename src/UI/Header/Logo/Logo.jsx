import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };

  return (
      <NavLink
        to={"/webshop"}
        className={addCssClass(styles.logo, styles.header__item)}
      >
        WEBSHOP
      </NavLink>
  );
}
