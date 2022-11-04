import React from 'react'
import styles from './HomeSlider.module.css'

export default function HomeSlider() {
  return (
    <div>

        <div className={styles.slider__box}>
            <div className={styles.slider}>
                    
            </div> 
               
            <div className={styles.dots}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>

    </div>
  )
}
