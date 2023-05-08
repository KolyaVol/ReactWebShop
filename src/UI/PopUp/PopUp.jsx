import React from "react";
import styles from "./PopUp.module.css";

export default function PopUp({
  children,
  visible,
  setVisible,
  position,
  classes,
}) {
  const rootClasses = [styles.PopUp];
  if (visible) {
    if (position === "left") {
      rootClasses.push(styles.active);
    }
    else rootClasses.push(styles.centered);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
