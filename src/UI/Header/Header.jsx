import React, { useEffect, useState } from "react";
import MyInput from "../MyInput/MyInput";
import styles from "./Header.module.css";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import Currency from "./Currency/Currency";
import CityMap from "./CityMap/CityMap";
import ToSellers from "./ToSellers/ToSellers";
import Burger from "./Burger/Burger";
import Logo from "./Logo/Logo";
import UserProfile from "./UserProfile/UserProfile";
import HeaderCart from "./HeaderCart/HeaderCart";
import { pasteCartArr } from "../../store/CartSlice";
import { userStateName } from "../../store/userNameSlice";

export default function Header() {
  const [filter, setFilter] = useState({ sort: "", query: "" });

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
     dispatch(userStateName(localStorage.getItem("USERNAME")))
    
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

              <MyInput
                classes={addCssClass(styles.input, styles.header__item)}
                value={filter.query}
                onChange={(e) =>
                  setFilter({ ...filter, query: e.target.value })
                }
                placeholder="Поиск..."
                
              />

              <UserProfile />

              <HeaderCart />
            </div>
          </div>
        </header>
      </IconContext.Provider>
    </div>
  );
}
