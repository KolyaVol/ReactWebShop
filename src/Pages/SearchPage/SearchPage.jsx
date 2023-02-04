import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNameSort } from "../../hooks/useNameSort";
import { usePriceSort } from "../../hooks/usePriceSort";
import { filteredProds } from "../../store/prodFilterSlice";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const dispatch = useDispatch();
  const router = useNavigate();

  const sortedAndFilteredProds = useSelector((state) => state.filteredProdList);

  const priceSort = usePriceSort(sortedAndFilteredProds.prods);
  const nameSort = useNameSort(sortedAndFilteredProds.prods);

  const sortByPrice = () => {
    dispatch(filteredProds(priceSort));
  };

  const sortByName = () => {
    dispatch(filteredProds(nameSort));
  };
  return (
		<div className={styles.SearchPage}>
			<div className={styles.sort}>
				<p className={styles.sort__title}>Сортировать по: </p>
				<p onClick={() => sortByPrice()} className={styles.sort__type}>
					цене{" "}
				</p>
				<p onClick={() => sortByName()} className={styles.sort__type}>
					названию{" "}
				</p>
			</div>

			<div className={styles.prod__list}>
				{sortedAndFilteredProds.prods.map((prod) => (
					<div
						key={prod.id + "prod"}
						onClick={() => router(`/prod/${prod.id}`)}
						className={styles.prod__item}
					>
						<img src={prod.image[0]} alt="" className={styles.image} />

						<div className={styles.price}>{prod.price}</div>

						<div className={styles.sale}>{prod.sale}</div>

						<div className={styles.name}>{prod.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}
