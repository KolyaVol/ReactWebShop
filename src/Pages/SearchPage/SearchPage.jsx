import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { filteredProds } from "../../store/prodFilterSlice";
import { sortKind } from "../../store/sortSlice";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const dispatch = useDispatch();
  const router = useNavigate();

  const sortedAndFilteredProds = useSelector((state) => state.filteredProdList);
  const sortByPrice = () => {
    dispatch(sortKind("price"));
  };
  return (
    <div className={styles.SearchPage}>
      <div className={styles.sort}>
        <p className={styles.sort__title}>Сортировать по: </p>
        <p onClick={() => sortByPrice()} className={styles.sort__type}>
          цене{" "}
        </p>
        <p className={styles.sort__type}>названию </p>
      </div>

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
