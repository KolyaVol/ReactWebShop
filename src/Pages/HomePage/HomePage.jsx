import React from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import styles from './HomePage.module.css'

export default function HomePage() {
    const addCssClass = (style) => {
       return [style, styles.header__item].join(' ')
        
    }
        
    

  return (
    <div>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__template}>
                    <div className={addCssClass(styles.inf1)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf2)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf3)}>
                    some info
                    </div>

                    <div className={addCssClass(styles.inf4)}>
                    some info
                    </div>

                    
                    <div className={addCssClass(styles.burger)}>burger</div>
                    <h1 className={addCssClass(styles.logo)}>logo</h1>
                    <MyInput classes={addCssClass(styles.input)} placeholder = 'hello'/>
                    <div className={addCssClass(styles.adress)}>adresses</div>
                    <div className={addCssClass(styles.sign)}>Sign in</div>
                    <div className={addCssClass(styles.basket)}>Shoppingcart</div>
                   

                </div>

            </div>
                
            <div className={styles.slider__box}>
                <div className='container'>
                    <div className='slider'>
                        <img src="" alt="" />
                        <div className="dots"></div>
                    </div>
                </div>
            </div>
            
        </header>
        
        
        <div className='container'>
            <div className='prod__list'>

                <div className="prod__item"></div>

                <div className="adds"></div>

                <div className="prod__item"></div>

                <div className="adds"></div>

                <div className="prod__item">array</div>

            </div>
        </div>

        <div className="container">
            <div className="footer"></div>
        </div>
    </div>
  )
}
