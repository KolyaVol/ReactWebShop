import React from "react";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./CityMap.module.css";

export default function CityMap() {
	let [mapVisible, setMapVisible] = useState(false);
	const defaultState = {
		center: [53.902406, 27.548581],
		zoom: 10,
	};

	const myPlacemarkOptions = {
		iconLayout: "default#image",
		// Своё изображение иконки метки.
		iconImageHref: "../images/shopImg.png",
		// Размеры метки.
		iconImageSize: [30, 30],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38],
	};
	return (
		<>
			<PopUp
				classes={styles.PopUpContentCent}
				visible={mapVisible}
				setVisible={setMapVisible}
				position="centered"
			>
				<div className={styles.map}>
					<YMaps apikey="bb5c9df0-b0e3-4173-bd47-b875de8b659f" preload={true}>
						<Map width="80rem" height="80rem" defaultState={defaultState}>
							<Placemark
								geometry={[53.902406, 27.548581]}
								defaultOptions={myPlacemarkOptions}
							/>
						</Map>
					</YMaps>
				</div>
			</PopUp>
			<h3 onClick={() => setMapVisible(true)} className={styles.city}>
				Минск
			</h3>
		</>
	);
}
