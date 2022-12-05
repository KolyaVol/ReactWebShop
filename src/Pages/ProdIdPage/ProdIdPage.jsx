import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import styles from "./ProdIdPage.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const router = useNavigate();
  
  const cartProds = useSelector((state) => state.addToCart);
  
  const mySet = new Set(cartProds.prods.map((prod) => (prod.id)));

  let resultOfPain = cartProds.prods.filter((prod) =>
    !mySet.has(prod.id));


    
    

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

  const addToCart = () => {
    dispatch({
      type: "ADD_PROD",
      payload: currentProd,
    });
    addToLs();
    console.log(resultOfPain);
  };

  const addAndGoToCart = () => {
    dispatch({
      type: "ADD_PROD",
      payload: currentProd,
    });
    addToLs();
    router("/cart");
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
          <MyButton onClick={() => addAndGoToCart()}>buy</MyButton>
        </div>
      </div>
    </div>
  );
}
