import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./HeaderCart.module.css";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';


export default function HeaderCart() {

    const cartProds = useSelector((state) => state.addToCart);
    
  return (
    <NavLink
      to={"/cart"}
      className={styles.basket}
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
