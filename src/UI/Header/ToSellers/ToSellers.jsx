import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./ToSellers.module.css";


export default function ToSellers() {

    const addCssClass = (style1, style2, ...args) => {
      return [style1, style2, args].join(" ");
    };
  return (
    <div>
      <div className={addCssClass(styles.sell, styles.header__item)}>
        <NavLink className={styles.header__item} to={"/addprod"}>
          Продавайте у нас
        </NavLink>
      </div>
    </div>
  );
}
