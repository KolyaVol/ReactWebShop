import React, { useState } from 'react'
import MyInput from '../MyInput/MyInput'
import PopUp from '../PopUp/PopUp'
import styles from './Header.module.css'

export default function Header() {
    let [visible, setVisible] = useState(false)

    const addCssClass = (style1, style2) => {
       return [style1, style2].join(' ')
    }

  return (
    <div>
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__template}>
                    <div className={addCssClass(styles.inf1, styles.header__item)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf2, styles.header__item)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf3, styles.header__item)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf4, styles.header__item)}>
                    some info
                    </div>

                    <PopUp>
                        
                    </PopUp>
                    <div className={addCssClass(styles.burger, styles.header__item)}>burger</div>


                    <h1 className={addCssClass(styles.logo, styles.header__item)}>logo</h1>


                    <MyInput classes={addCssClass(styles.input, styles.header__item)} placeholder = 'hello'/>


                    <div className={addCssClass(styles.adress, styles.header__item)}>adresses</div>


                    <div className={addCssClass(styles.sign, styles.header__item)}>Sign in</div>


                    <div className={addCssClass(styles.basket, styles.header__item)}>Shoppingcart</div>
                   

                </div>

            </div>
                
            <div className={styles.slider__box}>
                
                    <div className={styles.slider}>
                    
                    </div> 
               

                <div className={styles.dots}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                </div>
            </div>
            
        </header>
    </div>
  )
}
