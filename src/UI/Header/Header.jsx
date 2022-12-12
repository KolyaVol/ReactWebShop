import React, { useEffect, useState } from "react";
import MyInput from "../MyInput/MyInput";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import Currency from "./Currency/Currency";
import CityMap from "./CityMap/CityMap";
import ToSellers from "./ToSellers/ToSellers";
import Burger from "./Burger/Burger";
import Logo from "./Logo/Logo";
import UserProfile from "./UserProfile/UserProfile";
import HeaderCart from "./HeaderCart/HeaderCart";
import { pasteCartArr } from "../../store/cartSlice";
import { userStateName } from "../../store/userNameSlice";
import styles from "./Header.module.css";
import Search from "./Search/Search";

export default function Header() {
  const dispatch = useDispatch();
  const cartProds = useSelector((state) => state.addToCart);

  const isAuthorise = localStorage.getItem("AUTH");

  useEffect(() => {
    if (!cartProds.prods[0] && localStorage.getItem("CART")) {
      dispatch(pasteCartArr(JSON.parse(localStorage.getItem("CART"))));
    }

    if (!isAuthorise) {
      localStorage.setItem("AUTH", "false");
    } else {
      dispatch(userStateName(localStorage.getItem("USERNAME")));
    }
  }, []);

  const addCssClass = (style1, style2, ...args) => {
    return [style1, style2, args].join(" ");
  };

  return (
    <div>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <header className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.header__template}>
              <Currency />

              <CityMap />

              <ToSellers />

              <Burger />

              <Logo />

              <Search />

              <UserProfile />

              <HeaderCart />
            </div>
          </div>
        </header>
      </IconContext.Provider>
    </div>
  );
}
