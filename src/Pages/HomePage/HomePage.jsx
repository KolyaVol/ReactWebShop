import React, { useState } from 'react'
import Header from '../../UI/Header/Header'
import HomeSlider from '../../UI/HomeSlider/HomeSlider'
import styles from './HomePage.module.css'

export default function HomePage() {
    

    
        
    

  return (
    <div>
        
        <Header></Header>

        <HomeSlider/>
        
       
        
        <div className={styles.prod__list}>
            
            <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

             <div className={styles.prod__item}>
                <div className={styles.image}></div>
                <div className={styles.price}>228</div>

                <div className={styles.sale}>322</div>

                <div className={styles.description}>Pants 4 u</div>
            </div>

        </div>

        <div className={styles.reccomend__box}>
            <div className={styles.reccomend}></div>
            <div className={styles.reccomend}></div>
        </div>
        <div className={styles.arr__bg}></div>
        <div className={styles.footer__bg}>
           
            <div className={styles.footer__box}>gdfgd</div>
        </div>
    </div>
  )
}
