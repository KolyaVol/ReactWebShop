import React from "react";
import styles from "./MyInput.module.css";

export default function MyInput({ children, value, classes, ...props }) {
  return (
    <input className={[styles.MyInput, classes].join(" ")} {...props}>
      {children}
    </input>
  );
}
