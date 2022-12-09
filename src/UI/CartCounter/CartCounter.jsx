import React from "react";
import { useDispatch } from "react-redux";
import { removeCartProd, removeOneProd } from "../../store/CartSlice";
import MyButton from "../MyButton/MyButton";
import styles from "./CartCounter.module.css";

export default function CartCounter({ id, counter }) {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(removeOneProd(id));
  }

  const decrement = () => {
    dispatch(removeCartProd(id));
  };
  return (
    <div className={styles.container}>
      <MyButton onClick={() => decrement()}>Decr</MyButton>
      <div className={styles.counter}>{counter}</div>
      <MyButton onClick={() => increment()}>Incr</MyButton>
    </div>
  );
}
