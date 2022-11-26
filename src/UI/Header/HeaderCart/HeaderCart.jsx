import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./HeaderCart.module.css";
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react';

export default function HeaderCart() {

    let [counter, setCounter] = useState(0);

    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };

  return (
    <NavLink
      to={"/cart"}
      className={addCssClass(styles.basket, styles.header__item)}
    >
      {counter ? <div className={styles.counter}>{counter}</div> : ""}
      <BsCart3 />
      <span className={styles.basket}>Корзина</span>
    </NavLink>
  );
}
