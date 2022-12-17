import { createSlice } from "@reduxjs/toolkit";

const prodListSlice = createSlice({
    name: 'prodList',
    initialState: {
    prods: [
    {
      id: 1,
      image: "123",
      price: 567,
      sale: "",
      type: "монитор",
      manufacturer: "Sumsong",
      name: "Монитор Sumsong 27B1H",
    },
    {
      id: 2,
      image: "123",
      price: 426,
      sale: 479,
      type: "монитор",
      manufacturer: "GL",
      name: "Монитор GL 24B2H",
    },
    {
      id: 3,
      image: "123",
      price: 928,
      sale: 1054,
      type: "монитор",
      manufacturer: "Pholips",
      name: "Монитор Pholips G32V",
    },
    {
      id: 4,
      image: "123",
      price: 432,
      sale: 322,
      type: "монитор",
      manufacturer: "Mo",
      name: "Монитор Mo 24BBQ",
    },
    {
      id: 5,
      image: "123",
      price: 232,
      sale: 322,
      type: "холодильник",
      manufacturer: "Pholips",
      name: "Холодильник Олимп",
    },
    {
      id: 6,
      image: "123",
      price: 233,
      sale: 322,
      type: "холодильник",
      manufacturer: "Sumsong",
      name: "Холодильник Sumsong",
    },
    {
      id: 7,
      image: "123",
      price: 234,
      sale: 322,
      type: "холодильник",
      manufacturer: "Mo",
      name: "Холодильник Mo",
    },
    {
      id: 8,
      image: "123",
      price: 235,
      sale: 322,
      type: "холодильник",
      manufacturer: "GL",
      name: "Холодильник GL",
    },
    {
      id: 9,
      image: "123",
      price: 236,
      sale: 322,
      type: "вентилятор",
      manufacturer: "Sumsong",
      name: "Вентилятор Sumsong Osos1104",
    },
    {
      id: 10,
      image: "123",
      price: 237,
      sale: 322,
      type: "вентилятор",
      manufacturer: "GL",
      name: "Вентилятор GL V5000",
    },
    {
      id: 11,
      image: "123",
      price: 238,
      sale: 322,
      type: "вентилятор",
      manufacturer: "Pholips",
      name: "Вентилятор Pholips  Hurricane3000",
    },
    {
      id: 12,
      image: "123",
      price: 239,
      sale: 322,
      type: "вентилятор",
      manufacturer: "Mo",
      name: "Вентилятор Mo HomeWind 1S",
    },
    {
      id: 13,
      image: "123",
      price: 240,
      sale: 322,
      type: "телевизор",
      manufacturer: "Sumsong",
      name: "Телевизор Sumsong",
    },
    {
      id: 14,
      image: "123",
      price: 241,
      sale: 322,
      type: "телевизор",
      manufacturer: "GL",
      name: "Телевизор GL",
    },
  ]},
    reducers: {
        addProd(state, actions) {
            state.prods = [...state.prods, actions.payload]
        },
        removeProd(state, actions) {
            state.prods = state.prods.filter(prod => prod.id !== actions.payload)
        },
    }
})

export default prodListSlice.reducer
export const {addProd, removeProd} = prodListSlice.actions