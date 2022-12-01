import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./HeaderCart.module.css";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';


export default function HeaderCart() {

    const cartProds = useSelector((state) => state.addToCart);
    
    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };
    console.log(cartProds.prods.length);

  return (
    <NavLink
      to={"/cart"}
      className={addCssClass(styles.basket, styles.header__item)}
    >
      {cartProds.prods[0] ? (
        <div className={styles.counter}>{+cartProds.prods.length}</div>
      ) : (
        ""
      )}
      <BsCart3 />
      <span className={styles.basket}>Корзина</span>
    </NavLink>
  );
}
