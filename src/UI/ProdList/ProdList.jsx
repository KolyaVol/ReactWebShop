import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProdList.module.css";

export default function ProdList({...props}) {
  const router = useNavigate()
  const prodList = useSelector((state) => state.prodList);
  return (
    <section>
      <h3 className={styles.prods__title}>{props.children}</h3>
      <ul className={styles.prod__list}>
        {prodList.prods.map((prod) => (
          <li
            key={prod.id + "prod"}
            onClick={() => router(`/prod/${prod.id}`)}
            className={styles.prod__item}
          >
            <div className={styles.image}></div>

            <span className={styles.price}>{prod.price}</span>

            <span className={styles.sale}>{prod.sale}</span>

            <span className={styles.name}>{prod.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
