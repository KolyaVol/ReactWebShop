import { createSlice } from "@reduxjs/toolkit";
import refrig1 from "../images/refrig1.png";
import refrig2 from "../images/refrig2.png";
import refrig3 from "../images/refrig3.png";
import refrig4 from "../images/refrig4.png";
import washer1 from "../images/washer1.png";
import washer2 from "../images/washer2.png";
import fan1 from "../images/fan1.png";
import fan2 from "../images/fan2.png";
import keyboard from "../images/keyboard.png";
import lamp1 from "../images/lamp1.png";
import lamp2 from "../images/lamp2.png";
import microwave1 from "../images/microwave1.png";
import microwave2 from "../images/microwave2.png";
import notebook from "../images/notebook.png";
import robo from "../images/robo-cleaner.png";
import teapot from "../images/teapot.png";
import TV1 from "../images/TV1.png";
import TV2 from "../images/TV2.png";
import toaster from "../images/toaster.png";

const prodListSlice = createSlice({
	name: "prodList",
	initialState: {
		prods: [
			{
				id: 1,
				image: refrig1,
				price: 567,
				sale: "",
				type: "монитор",
				manufacturer: "Sumsong",
				name: "Монитор Sumsong 27B1H",
			},
			{
				id: 2,
				image: lamp1,
				price: 426,
				sale: 479,
				type: "монитор",
				manufacturer: "GL",
				name: "Монитор GL 24B2H",
			},
			{
				id: 3,
				image: microwave1,
				price: 928,
				sale: 1054,
				type: "монитор",
				manufacturer: "Pholips",
				name: "Монитор Pholips G32V",
			},
			{
				id: 4,
				image: fan1,
				price: 432,
				sale: 322,
				type: "монитор",
				manufacturer: "Mo",
				name: "Монитор Mo 24BBQ",
			},
			{
				id: 5,
				image: fan2,
				price: 232,
				sale: 322,
				type: "холодильник",
				manufacturer: "Pholips",
				name: "Холодильник Олимп",
			},
			{
				id: 6,
				image: lamp2,
				price: 233,
				sale: 322,
				type: "холодильник",
				manufacturer: "Sumsong",
				name: "Холодильник Sumsong",
			},
			{
				id: 7,
				image: teapot,
				price: 234,
				sale: 322,
				type: "холодильник",
				manufacturer: "Mo",
				name: "Холодильник Mo",
			},
			{
				id: 8,
				image: toaster,
				price: 235,
				sale: 322,
				type: "холодильник",
				manufacturer: "GL",
				name: "Холодильник GL",
			},
			{
				id: 9,
				image: keyboard,
				price: 236,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Sumsong",
				name: "Вентилятор Sumsong Osos1104",
			},
			{
				id: 10,
				image: microwave2,
				price: 237,
				sale: 322,
				type: "вентилятор",
				manufacturer: "GL",
				name: "Вентилятор GL V5000",
			},
			{
				id: 11,
				image: notebook,
				price: 238,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Pholips",
				name: "Вентилятор Pholips  Hurricane3000",
			},
			{
				id: 12,
				image: refrig2,
				price: 239,
				sale: 322,
				type: "вентилятор",
				manufacturer: "Mo",
				name: "Вентилятор Mo HomeWind 1S",
			},
			{
				id: 13,
				image: washer1,
				price: 240,
				sale: 322,
				type: "телевизор",
				manufacturer: "Sumsong",
				name: "Телевизор Sumsong",
			},
			{
				id: 14,
				image: TV1,
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
