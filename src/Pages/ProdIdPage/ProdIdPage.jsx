import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";

export default function Login() {
  const dispatch = useDispatch();

  const prodList = useSelector((state) => state.prodList);
  const params = useParams();
  const currentProd = prodList.prods.find((item) => item.id == params.id);

  const addToCart = () => {
    dispatch({
      type: "ADD_PROD",
      payload: currentProd,
    });
  };

  return (
    <div className={styles.prod}>
      <div className={styles.container}>
        <div className={styles.photo__box}>
          <div className={styles.photo__arr}></div>
          <div className={styles.current__photo}></div>
        </div>
        <div className={styles.description}>{currentProd.name}</div>
        <div className={styles.purchase}>
          <div className={styles.prices}>
            <div className={styles.price}>{currentProd.price}</div>
            <div className={styles.sale}>{currentProd.sale}</div>
          </div>
          
            <MyButton style={styles.btn} onClick={() => addToCart()}>
              add to cart
            </MyButton>
            <MyButton>bue</MyButton>
          
        </div>
      </div>
    </div>
  );
}
