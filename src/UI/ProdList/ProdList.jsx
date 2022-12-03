import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProdList.module.css";

export default function ProdList({...props}) {
  const router = useNavigate()
  const prodList = useSelector((state) => state.prodList);
  return (
    <div>
      <p className={styles.prods__title}>{props.children}</p>
      <div className={styles.prod__list}>
        {prodList.prods.map((prod) => (
          <div
            key={prod.id + "prod"}
            onClick={() => router(`/prod/${prod.id}`)}
            className={styles.prod__item}
          >
            <div className={styles.image}></div>

            <div className={styles.price}>{prod.price}</div>

            <div className={styles.sale}>{prod.sale}</div>

            <div className={styles.name}>{prod.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
