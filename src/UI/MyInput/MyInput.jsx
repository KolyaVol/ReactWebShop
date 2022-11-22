import React from "react";
import styles from "./MyInput.module.css";

export default function MyInput({ children, value, ...props }) {
  return (
    <input className={[styles.MyInput, props.classes].join(" ")} {...props}>
      {children}
    </input>
  );
}
