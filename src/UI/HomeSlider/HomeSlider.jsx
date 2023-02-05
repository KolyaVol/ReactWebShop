import React, { useState } from "react";
import styles from "./HomeSlider.module.css";

export default function HomeSlider() {
  let [sliderItems, setSliderItems] = useState([
		{ img: "../images/sales1.jpg", id: 1 },
		{ img: "../images/sales2.jpg", id: 2 },
	]);
  let [item, setItem] = useState(1);
  return (
      <div className={styles.slider__box}>
        <div className={styles.slider}>
          {sliderItems.map((i) => (
            <img
              key={i.id + "image"}
              src={i.img}
              className={
                item === i.id
                  ? [styles.slider__item, styles.current].join(" ")
                  : styles.slider__item
              }
              alt="prod"
            />
          ))}
        </div>

        <div className={styles.dots}>
          {sliderItems.map((i) => (
            <div
              key={i.id}
              onClick={() => setItem(i.id)}
              className={
                item === i.id
                  ? [styles.dot, styles.current].join(" ")
                  : styles.dot
              }
            ></div>
          ))}
        </div>
      </div>
  );
}
