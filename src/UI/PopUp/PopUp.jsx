import React from "react";
import styles from "./PopUp.module.css";

export default function PopUp({ children, visible, setVisible, position }) {
  const rootClasses = [styles.PopUp];
  if (visible) {
    if (position === "left") {
      rootClasses.push(styles.active);
    } else if (position === "centered") rootClasses.push(styles.centered);
    else rootClasses.push(styles.centered);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={
          position === "left" ? styles.PopUpContent : styles.PopUpContentCent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
