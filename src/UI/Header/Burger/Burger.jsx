import React from "react";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import styles from "./Burger.module.css";
import { SlMenu } from "react-icons/sl";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filteredProds } from "../../../store/prodFilterSlice";
import { useProds } from "../../../hooks/useProds";

export default function Burger() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const prodList = useSelector((state) => state.prodList);
  const dispatch = useDispatch();
  const router = useNavigate();

  const refrig = useProds(prodList.prods, "", "холодильник");
  const tv = useProds(prodList.prods, "", "телевизор");
  const vacum = useProds(prodList.prods, "", "пылесос");
  const wash = useProds(prodList.prods, "", "стирал");
  const note = useProds(prodList.prods, "", "ноутбук");
  const phone = useProds(prodList.prods, "", "смарт");
  const acustic = useProds(prodList.prods, "", "станция");
  const mcwave = useProds(prodList.prods, "", "микроволновая печь");

  const clickHandler = (smth) => {
    dispatch(filteredProds(smth));
    router("/search");
    setBurgerVisible(false);
  };

  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <PopUp
        classes={styles.PopUpContent}
        visible={burgerVisible}
        setVisible={setBurgerVisible}
        position="left"
      >
        <nav>
          <p onClick={() => clickHandler(refrig)}>Холодильники</p>
          <p onClick={() => clickHandler(tv)}>Телевизоры</p>
          <p onClick={() => clickHandler(vacum)}>Пылесосы</p>
          <p onClick={() => clickHandler(wash)}>Стиральные машины</p>
          <p onClick={() => clickHandler(note)}>Ноутбуки</p>
          <p onClick={() => clickHandler(phone)}>Смартфоны</p>
          <p onClick={() => clickHandler(acustic)}>Акустические станции</p>
          <p onClick={() => clickHandler(mcwave)}>Микроволновые печи</p>
        </nav>
      </PopUp>
      <div onClick={() => setBurgerVisible(true)} className={styles.burger}>
        <SlMenu />
      </div>
    </IconContext.Provider>
  );
}
