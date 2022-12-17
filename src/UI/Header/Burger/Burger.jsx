import React from "react";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import styles from "./Burger.module.css";
import { SlMenu } from "react-icons/sl";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filteredProds } from "../../../store/prodFilterSlice";
import { usePosts } from "../../../hooks/usePosts";

export default function Burger() {
  let [burgerVisible, setBurgerVisible] = useState(false);
  const prodList = useSelector((state) => state.prodList);
  const dispatch = useDispatch();
  const router = useNavigate();

  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };

  const refrig = usePosts(prodList.prods, "", "холодильник");
  const tv = usePosts(prodList.prods, "", "телевизор");
  const fan = usePosts(prodList.prods, "", "вентилятор");
  const monitor = usePosts(prodList.prods, "", "монитор");

  const clickHandler = (smth) => {
    dispatch(filteredProds(smth));
    router("/search");
    setBurgerVisible(false);
  };

  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <PopUp
        visible={burgerVisible}
        setVisible={setBurgerVisible}
        position="left"
      >
        <nav>
          <p onClick={() => clickHandler(refrig)}>Холодильник</p>
          <p onClick={() => clickHandler(tv)}>Телевизор</p>
          <p onClick={() => clickHandler(fan)}>Вентилятор</p>
          <p onClick={() => clickHandler(monitor)}>Монитор</p>
        </nav>
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
