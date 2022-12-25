import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { usePosts } from '../../../hooks/usePosts';
import { filteredProds } from '../../../store/prodFilterSlice';
import Map from '../../Map/Map';
import PopUp from '../../PopUp/PopUp';
import styles from "./MobileBurger.module.css";

export default function MobileBurger() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const prodList = useSelector((state) => state.prodList);
  const cartProds = useSelector((state) => state.addToCart);
  let [mapVisible, setMapVisible] = useState(false);
  let [currChoice, setCurrChoice] = useState("BYN");

  const [burgerVisible, setBurgerVisible] = useState(false);

  const refrig = usePosts(prodList.prods, "", "холодильник");
  const tv = usePosts(prodList.prods, "", "телевизор");
  const fan = usePosts(prodList.prods, "", "вентилятор");
  const monitor = usePosts(prodList.prods, "", "монитор");

  const userName = useSelector((state) => state.userName);
  const isAuth = useSelector((state) => state.isAuth);

  const clickHandler = (smth) => {
    dispatch(filteredProds(smth));
    router("/search");
    setBurgerVisible(false);
  };

  const routClickHandler = (rout) => {
    router(`${rout}`);
    setBurgerVisible(false);
  };

  const currencyClickHandler = (currency) => {
    setCurrChoice(`${currency}`);
    setBurgerVisible(false);
  };


  return (
    <div className={styles.mobile__burger}>
      <PopUp
        classes={styles.PopUpContent}
        visible={burgerVisible}
        setVisible={setBurgerVisible}
        position="left"
      >
        <nav>
          <h3>
            <div
              onClick={() => routClickHandler("/cart")}
              className={styles.nav__item}
            >
              {cartProds.prods[0] ? (
                <div className={styles.counter}>{+cartProds.prods.length}</div>
              ) : (
                ""
              )}
              Корзина
            </div>
          </h3>

          <h3>
            {!isAuth && userName.firstName === "" ? (
              <div
                onClick={() => routClickHandler("/login")}
                className={styles.nav__item}
              >
                Войти
              </div>
            ) : (
              <div
                onClick={() => routClickHandler("/userPage")}
                className={styles.nav__item}
              >
                {`${userName.firstName}`}
              </div>
            )}
          </h3>

          <h3>
            <div
              onClick={() => routClickHandler("/addprod")}
              className={styles.nav__item}
            >
              Продавайте у нас!
            </div>
          </h3>

          <PopUp
            classes={styles.PopUpContentCent}
            visible={mapVisible}
            setVisible={setMapVisible}
            position="centered"
          >
            <Map></Map>
          </PopUp>
          <h3 onClick={() => setMapVisible(true)} className={styles.city}>
            Минск
          </h3>

          <div className={styles.currency}>
            <h3 className={styles.currency__word}>{currChoice}</h3>
            <div className={styles.currency__block}>
              <p className={styles.currency__title}>Выберите валюту</p>
              <div
                onClick={() => currencyClickHandler("BYN")}
                className={styles.currency__item}
              >
                BYN Белорусские рубли
              </div>
              <div
                onClick={() => currencyClickHandler("RUB")}
                className={styles.currency__item}
              >
                RUB Российские рубли
              </div>
              <div
                onClick={() => currencyClickHandler("USD")}
                className={styles.currency__item}
              >
                USD Доллар США
              </div>
            </div>
          </div>

          <h3 onClick={() => clickHandler(refrig)}>Холодильники</h3>
          <h3 onClick={() => clickHandler(tv)}>Телевизоры</h3>
          <h3 onClick={() => clickHandler(fan)}>Вентиляторы</h3>
          <h3 onClick={() => clickHandler(monitor)}>Мониторы</h3>
        </nav>
      </PopUp>
      <span onClick={() => setBurgerVisible(true)}></span>
    </div>
  );
}