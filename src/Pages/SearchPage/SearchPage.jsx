import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./SearchPage.module.css";

export default function SearchPage() {
    const router = useNavigate()
    const sortedAndFilteredProds = useSelector(
      (state) => state.filteredProdList
    );
  return (
    <div className={styles.SearchPage}>
      <div className={styles.prod__list}>
        {sortedAndFilteredProds.prods.map((prod) => (
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
