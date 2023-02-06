import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";

export default function Login() {
	const [currImg, setCurrImg] = useState(1);

	const router = useNavigate();
	const dispatch = useDispatch();
	const prodList = useSelector((state) => state.prodList);
	const params = useParams();
	const currentProd = prodList.prods.find((item) => item.id === +params.id);

	const addToLs = () => {
		if (localStorage.getItem("CART")) {
			localStorage.setItem(
				"CART",
				JSON.stringify([
					...JSON.parse(localStorage.getItem("CART")),
					currentProd,
				])
			);
		} else {
			localStorage.setItem("CART", JSON.stringify([currentProd]));
		}
	};

	const addProdToCart = () => {
		dispatch(addToCart(currentProd));
		addToLs();
	};

	const addAndGoToCart = () => {
		dispatch(addToCart(currentProd));
		addToLs();
		router("/cart");
	};
	console.log(currImg);
	return (
		<div className={styles.prodIdPage}>
			<h2 className={styles.prodId__title}> {currentProd.name}</h2>
			<div className={styles.photo__box}>
				<div className={styles.photo__arr}>
					<img
						onClick={() => setCurrImg(1)}
						src={currentProd.image[0]}
						alt=""
					/>
					<img
						onClick={() => setCurrImg(2)}
						src={currentProd.image[1]}
						alt=""
					/>
					<img
						onClick={() => setCurrImg(3)}
						src={currentProd.image[2]}
						alt=""
					/>
					<img
						onClick={() => setCurrImg(4)}
						src={currentProd.image[3]}
						alt=""
					/>
					<img
						onClick={() => setCurrImg(5)}
						src={currentProd.image[4]}
						alt=""
					/>
				</div>
				<div className={styles.current__photo}>
					<div
						className={
							currImg === 1
								? `${styles.current__photo_container} ${styles.first_img}`
								: currImg === 2
								? `${styles.current__photo_container} ${styles.second_img}`
								: currImg === 3
								? `${styles.current__photo_container} ${styles.third_img}`
								: currImg === 4
								? `${styles.current__photo_container} ${styles.forth_img}`
								: `${styles.current__photo_container} ${styles.fifth_img}`
						}
					>
						<img src={currentProd.image[0]} alt="" />
						<img src={currentProd.image[1]} alt="" />
						<img src={currentProd.image[2]} alt="" />
						<img src={currentProd.image[3]} alt="" />
						<img src={currentProd.image[4]} alt="" />
					</div>
				</div>
			</div>
			<table className={styles.description}>
				{" "}
				<caption>Основные характеристики</caption>
				<tr>
					<td>{currentProd.descript[0]}</td> <td>{currentProd.descript[1]}</td>
				</tr>
				<tr>
					<td>{currentProd.descript[2]}</td> <td>{currentProd.descript[3]}</td>
				</tr>
				<tr>
					<td>{currentProd.descript[4]}</td> <td>{currentProd.descript[5]}</td>
				</tr>
				<tr>
					<td>{currentProd.descript[6]}</td> <td>{currentProd.descript[7]}</td>
				</tr>
			</table>
			<section className={styles.purchase}>
				<div className={styles.prices}>
					<span className={styles.price}>{currentProd.price}</span>
					<span className={styles.sale}>{currentProd.sale}</span>
					{currentProd.sale ? (
						<span className={styles.differ}>
							-{currentProd.sale - currentProd.price}
						</span>
					) : (
						""
					)}
				</div>
				<MyButton styles={styles.btn} onClick={() => addProdToCart()}>
					В корзину
				</MyButton>
				<MyButton styles={styles.btn} onClick={() => addAndGoToCart()}>
					Купить
				</MyButton>
			</section>
		</div>
	);
}
