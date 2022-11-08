import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyInput from '../MyInput/MyInput'
import PopUp from '../PopUp/PopUp'
import styles from './Header.module.css'

export default function Header() {
    let [visible, setVisible] = useState(false)
    let [currChoice, setCurrChoice] = useState(false)

    const addCssClass = (style1, style2,...args) => {
       return [style1, style2, args].join(' ')
    }

  return (
    <div>
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__template}>
    
                    <div onMouseEnter={e => setCurrChoice(true)} onMouseLeave={e => setCurrChoice(false)} className={addCssClass(styles.currency, styles.header__item)}>
                    {currChoice
                    ?
                    <p>money
                        <div className={styles.curr__ChoiceBox}></div>
                    </p>
                    :
                    <p>money</p>
                    }

                    </div>

                    <div className={addCssClass(styles.inf2, styles.header__item)}>
                    city
                    </div>

                    <div className={addCssClass(styles.inf3, styles.header__item)}>
                    delivery
                    </div>

                    <div className={addCssClass(styles.inf4, styles.header__item)}>
                    sell smth
                    </div>

                    <PopUp 
                        visible={visible}
                        setVisible= {setVisible}
                        >
                        1231123
                    </PopUp>
                    <div onClick={() => setVisible(true)} className={addCssClass(styles.burger, styles.header__item)}>burger</div>


                    <Link className={addCssClass(styles.logo, styles.header__item)}>WEBSHOP</Link>


                    <MyInput classes={addCssClass(styles.input, styles.header__item)} placeholder = 'hello'/>


                    <div className={addCssClass(styles.adress, styles.header__item)}>adresses</div>


                    <Link to={'/Login'} className={addCssClass(styles.sign, styles.header__item)}>Sign in</Link>


                    <Link to={'cart'} className={addCssClass(styles.basket, styles.header__item)}>Shoppingcart</Link>
                   

                </div>

            </div>
                
            <div className={styles.bottom__white}>
                
                
            </div>
            
        </header>
    </div>
  )
}
