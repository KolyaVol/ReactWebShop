import React from "react";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import styles from "./Burger.module.css";
import { SlMenu } from "react-icons/sl";
import { IconContext } from "react-icons";

export default function Burger() {
  let [burgerVisible, setBurgerVisible] = useState(false);

  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };

  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <PopUp
        visible={burgerVisible}
        setVisible={setBurgerVisible}
        position="left"
      >
        1231123
      </PopUp>
      <div
        onClick={() => setBurgerVisible(true)}
        className={addCssClass(styles.burger, styles.header__item)}
      >
        <SlMenu />
      </div>
    </IconContext.Provider>
  );
}
