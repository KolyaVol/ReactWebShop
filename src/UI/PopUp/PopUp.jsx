import React from 'react'
import styles from './PopUp.module.css'

export default function PopUp({children, visible, setVisible}) {

    const rootClasses = [styles.PopUp]
    if (visible) {
        rootClasses.push(styles.active)
    }

  return (
    <div className={rootClasses.join(' ')} onClick = {() => setVisible(false)}>
        <div className={styles.PopUpContent} onClick = {(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
