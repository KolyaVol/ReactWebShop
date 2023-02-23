import React from "react";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./CityMap.module.css";

export default function CityMap() {
	let [mapVisible, setMapVisible] = useState(false);
	const defaultState = {
		center: [55.751574, 37.573856],
		zoom: 5,
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
							<Placemark geometry={[55.684758, 37.738521]} />
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
