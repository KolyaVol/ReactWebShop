import { createSlice } from "@reduxjs/toolkit";
import nitro1 from "../images/Nitro1.jpg";
import refrSamsung1 from "../images/refrSamsung1.jpg";
import LG1 from "../images/LG1.jpg";
import vacuumSamsung1 from "../images/vacuumSamsung1.jpg";
import washingSumsung1 from "../images/washingSumsung1.jpg";
import mcwSamsung1 from "../images/mcwSamsung1.jpg";
import acusticSven1 from "../images/acusticSven1.jpg";
import aresa1 from "../images/aresa1.jpg";
import clock1 from "../images/clock1.jpg";
import cofe1 from "../images/cofe1.jpg";
import meat1 from "../images/meat1.jpg";
import miPoco1 from "../images/miPoco1.jpg";
import sandv1 from "../images/sandv1.jpg";
import yandex1 from "../images/yandex1.jpg";



const prodListSlice = createSlice({
	name: "prodList",
	initialState: {
		prods: [
			{
				id: 1,
				image: nitro1,
				price: 567,
				sale: "",
				type: "монитор",
				manufacturer: "Sumsong",
				name: "Монитор Sumsong 27B1H",
			},
			{
				id: 2,
				image: refrSamsung1,
				price: 426,
				sale: 479,
				type: "монитор",
				manufacturer: "GL",
				name: "Монитор GL 24B2H",
			},
			{
				id: 3,
				image: LG1,
				price: 928,
				sale: 1054,
				type: "монитор",
				manufacturer: "Pholips",
				name: "Монитор Pholips G32V",
			},
			{
				id: 4,
				image: vacuumSamsung1,
				price: 432,
				sale: 322,
				type: "монитор",
				manufacturer: "Mo",
				name: "Монитор Mo 24BBQ",
			},
			{
				id: 5,
				image: washingSumsung1,
				price: 232,
				sale: 322,
				type: "холодильник",
				manufacturer: "Pholips",
				name: "Холодильник Олимп",
			},
			{
				id: 6,
				image: mcwSamsung1,
				price: 233,
				sale: 322,
				type: "холодильник",
				manufacturer: "Sumsong",
				name: "Холодильник Sumsong",
			},
			{
				id: 7,
				image: miPoco1,
				price: 234,
				sale: 322,
				type: "холодильник",
				manufacturer: "Mo",
				name: "Холодильник Mo",
			},
			{
				id: 8,
				image: aresa1,
				price: 235,
				sale: 322,
				type: "холодильник",
				manufacturer: "GL",
				name: "Холодильник GL",
			},
			{
				id: 9,
				image: clock1,
				price: 236,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Sumsong",
				name: "Вентилятор Sumsong Osos1104",
			},
			{
				id: 10,
				image: cofe1,
				price: 237,
				sale: 322,
				type: "вентилятор",
				manufacturer: "GL",
				name: "Вентилятор GL V5000",
			},
			{
				id: 11,
				image: meat1,
				price: 238,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Pholips",
				name: "Вентилятор Pholips  Hurricane3000",
			},
			{
				id: 12,
				image: sandv1,
				price: 239,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Mo",
				name: "Вентилятор Mo HomeWind 1S",
			},
			{
				id: 13,
				image: yandex1,
				price: 240,
				sale: 322,
				type: "телевизор",
				manufacturer: "Sumsong",
				name: "Телевизор Sumsong",
			},
			{
				id: 14,
				image: acusticSven1,
				price: 241,
				sale: 322,
				type: "телевизор",
				manufacturer: "GL",
				name: "Телевизор GL",
			},
		],
	},
	reducers: {
		addProd(state, actions) {
			state.prods = [...state.prods, actions.payload];
		},
		removeProd(state, actions) {
			state.prods = state.prods.filter((prod) => prod.id !== actions.payload);
		},
	},
});

export default prodListSlice.reducer;
export const { addProd, removeProd } = prodListSlice.actions;
