import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./HeaderCart.module.css";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';


export default function HeaderCart() {

    const counter = useSelector((state) => state.counter);
    
    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };

  return (
    <NavLink
      to={"/cart"}
      className={addCssClass(styles.basket, styles.header__item)}
    >
      {counter.count ? <div className={styles.counter}>{counter.count}</div> : ""}
      <BsCart3 />
      <span className={styles.basket}>Корзина</span>
    </NavLink>
  );
}
