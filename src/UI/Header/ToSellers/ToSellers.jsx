import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ToSellers.module.css";

export default function ToSellers() {
  return (
    <div>
      <div className={styles.sell}>
        <NavLink className={styles.sell} to={"/addprod"}>
          <h3>Продавайте у нас</h3>
        </NavLink>
      </div>
    </div>
  );
}
