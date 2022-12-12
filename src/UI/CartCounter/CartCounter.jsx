import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeCartProd,
  removeOneProd,
} from "../../store/cartSlice";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./CartCounter.module.css";

export default function CartCounter({ id, counter }) {
  const dispatch = useDispatch();
  const prodList = useSelector((state) => state.prodList);
  const cartProds = useSelector((state) => state.addToCart);

  const currentProd = prodList.prods.find((item) => item.id === id);

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

  const updateLs = () => {
    localStorage.setItem("CART", JSON.stringify(cartProds.prods));
  };

  const addProdToCart = () => {
    dispatch(addToCart(currentProd));
    addToLs();
  };

  const decrement = () => {
    dispatch(removeOneProd(id));
    updateLs();
  };

  const removeProdType = () => {
    dispatch(removeCartProd(id));
  };
  return (
    <div className={styles.container}>
      <FiChevronLeft onClick={() => decrement()} />
      <div className={styles.counter}>{counter}</div>
      <FiChevronRight onClick={() => addProdToCart()} />
    </div>
  );
}
