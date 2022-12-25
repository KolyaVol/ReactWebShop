import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";

export default function Login() {
  const router = useNavigate();

  const dispatch = useDispatch();
  const prodList = useSelector((state) => state.prodList);
  const params = useParams();
  const currentProd = prodList.prods.find((item) => item.id == params.id);

  const addToLs = () => {
    if (localStorage.getItem("CART")) {
      localStorage.setItem(
        "CART",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("CART")),
          currentProd,
        ])
      );
    } else {
      localStorage.setItem("CART", JSON.stringify([currentProd]));
    }
  };

  const addProdToCart = () => {
    dispatch(addToCart(currentProd));
    addToLs();
  };

  const addAndGoToCart = () => {
    dispatch(addToCart(currentProd));
    addToLs();
    router("/cart");
  };

  return (
    <div className={styles.prod}>
      <div className={styles.container}>
        <div className={styles.photo__box}>
          <div className={styles.photo__arr}>
            <div className={styles.photo__arr__item}></div>
            <div className={styles.photo__arr__item}></div>
            <div className={styles.photo__arr__item}></div>
            <div className={styles.photo__arr__item}></div>
            <div className={styles.photo__arr__item}></div>
          </div>

          <div className={styles.current__photo}></div>
        </div>
        <h2 className={styles.description}>{currentProd.name}</h2>
        <div className={styles.purchase}>
          <div className={styles.prices}>
            <div className={styles.price}>{currentProd.price}</div>
            <div className={styles.sale}>{currentProd.sale}</div>
          </div>

          <MyButton style={styles.btn} onClick={() => addProdToCart()}>
            add to cart
          </MyButton>
          <MyButton onClick={() => addAndGoToCart()}>buy</MyButton>
        </div>
      </div>
    </div>
  );
}
