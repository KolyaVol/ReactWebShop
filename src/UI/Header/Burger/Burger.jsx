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
  const [burgerVisible, setBurgerVisible] = useState(false);
  const prodList = useSelector((state) => state.prodList);
  const dispatch = useDispatch();
  const router = useNavigate();

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
        classes={styles.PopUpContent}
        visible={burgerVisible}
        setVisible={setBurgerVisible}
        position="left"
      >
        <nav>
          <p onClick={() => clickHandler(refrig)}>Холодильники</p>
          <p onClick={() => clickHandler(tv)}>Телевизоры</p>
          <p onClick={() => clickHandler(fan)}>Вентиляторы</p>
          <p onClick={() => clickHandler(monitor)}>Мониторы</p>
        </nav>
      </PopUp>
      <div onClick={() => setBurgerVisible(true)} className={styles.burger}>
        <SlMenu />
      </div>
    </IconContext.Provider>
  );
}
