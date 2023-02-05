import React from "react";
import styles from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {  
  return (
		<button className={[styles.MyBtn, props.styles].join(" ")} {...props}>
			{children}
		</button>
	);
}
