import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";

export default function Login() {
  const dispatch = useDispatch();

  const prodList = useSelector((state) => state.prodList);
  const cartList = useSelector((state) => state.addToCart);
  const params = useParams();
  
  const addToCart = () => {

    const prodId = params.id;
    const addProd = prodList.prods.find((item) => item.id == prodId);
    dispatch({ type: "ADD_PROD", payload: addProd });
    console.log(cartList);
  };

  return (
    <div className={styles.prod}>
      <div className={styles.container}>
        <div className={styles.photo__box}>
          <div className={styles.photo__arr}></div>
          <div className={styles.current__photo}></div>
        </div>
        <div className={styles.description}></div>
        <div className={styles.purchase}>
          <div className={styles.prices}>
            <div className={styles.price}>228</div>
            <div className={styles.sale}>322</div>
          </div>
          <MyButton onClick={() => addToCart()}>add to cart</MyButton>
          <MyButton>bue</MyButton>
        </div>
      </div>
    </div>
  );
}
