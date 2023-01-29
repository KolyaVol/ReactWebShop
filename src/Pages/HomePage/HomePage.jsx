import React from "react";
import HomeSlider from "../../UI/HomeSlider/HomeSlider";
import ProdList from "../../UI/ProdList/ProdList";
import RecBox from "../../UI/RecBox/RecBox";
import styles from "./HomePage.module.css";

export default function HomePage() {
	return (
		<section className={styles.homePage}>
			<HomeSlider />

			<ProdList>Хиты продаж</ProdList>

			<RecBox />

			<ProdList></ProdList>
		</section>
	);
}
