import React from "react";
import { useState } from "react";
import styles from "./ProdList.module.css";

export default function ProdList() {
  let [prods, setProds] = useState([
    {
      id: 1,
      image: "123",
      price: 567,
      sale: "",
      type: "monitor",
      manufacturer: "Sumsong",
      name: "Монитор Sumsong 27B1H",
    },
    {
      id: 2,
      image: "123",
      price: 426,
      sale: 479,
      type: "monitor",
      manufacturer: "GL",
      name: "Монитор GL 24B2H",
    },
    {
      id: 3,
      image: "123",
      price: 928,
      sale: 1054,
      type: "monitor",
      manufacturer: "Pholips",
      name: "Монитор Pholips G32V",
    },
    {
      id: 4,
      image: "123",
      price: 432,
      sale: 322,
      type: "monitor",
      manufacturer: "Mo",
      name: "Монитор Mo 24BBQ",
    },
    {
      id: 5,
      image: "123",
      price: 232,
      sale: 322,
      type: "refrigerator",
      manufacturer: "Pholips",
      name: "Холодильник Олимп",
    },
    {
      id: 6,
      image: "123",
      price: 233,
      sale: 322,
      type: "refrigerator",
      manufacturer: "Sumsong",
      name: "Холодильник Sumsong",
    },
    {
      id: 7,
      image: "123",
      price: 234,
      sale: 322,
      type: "refrigerator",
      manufacturer: "Mo",
      name: "Холодильник Mo",
    },
    {
      id: 8,
      image: "123",
      price: 235,
      sale: 322,
      type: "refrigerator",
      manufacturer: "GL",
      name: "Холодильник GL",
    },
    {
      id: 9,
      image: "123",
      price: 236,
      sale: 322,
      type: "fan",
      manufacturer: "Sumsong",
      name: "Вентилятор Sumsong Osos1104",
    },
    {
      id: 10,
      image: "123",
      price: 237,
      sale: 322,
      type: "fan",
      manufacturer: "GL",
      name: "Вентилятор GL V5000",
    },
    {
      id: 11,
      image: "123",
      price: 238,
      sale: 322,
      type: "fan",
      manufacturer: "Pholips",
      name: "Вентилятор Pholips  Hurricane3000",
    },
    {
      id: 12,
      image: "123",
      price: 239,
      sale: 322,
      type: "fan",
      manufacturer: "Mo",
      name: "Вентилятор Mo HomeWind 1S",
    },
    {
      id: 13,
      image: "123",
      price: 240,
      sale: 322,
      type: "TV",
      manufacturer: "Sumsong",
      name: "Телевизор Sumsong",
    },
    {
      id: 14,
      image: "123",
      price: 241,
      sale: 322,
      type: "TV",
      manufacturer: "GL",
      name: "Телевизор GL",
    },
  ]);

  return (
    <div>
      <p className={styles.prods__title}>Хиты продаж</p>
      <div className={styles.prod__list}>
        {prods.map((prod) => (
          <div key={prod.id + "prod"} className={styles.prod__item}>
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
