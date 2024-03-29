import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userStateName from "../../store/userNameSlice";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./UserPage.module.css";

export default function UserPage() {
	const dispatch = useDispatch;
	const userName = useSelector((state) => state.userName);
	let firstLetter = () => {
		if (userName.firstName) {
			return userName.firstName.split("").slice(0, 1).join();
		} else return "";
	};

	const navigate = useNavigate();

	const signOut = (event) => {
		event.preventDefault();
		localStorage.clear("AUTH");
		localStorage.clear("USERNAME");
		dispatch(userStateName(false));
		navigate("/webshop");
	};

	return (
		<div className={styles.UserPage}>
			<div className={styles.UserBox}>
				<div className={styles.UserTitle}>
					<div className={styles.UserPic}>{firstLetter()}</div>
					<h3 className={styles.UserName}>{userName.firstName}</h3>
				</div>
				<MyButton styles={styles.btn} onClick={signOut}>Выйти</MyButton>
			</div>
			<div className={styles.myCards}>
				<h3>Мои карты</h3>
				<span>Добавить карту</span>
			</div>
			<div className={styles.myPurchases}>
				<h3>Покупки</h3>
				<span>У вас пока нет покупок</span>
			</div>
			<div className={styles.myFavorites}>
				<h3>Избранное</h3>
				<span>У вас пока нет избранных товаров</span>
			</div>
		</div>
	);
}
