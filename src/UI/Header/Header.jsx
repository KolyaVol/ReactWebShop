import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import MyInput from '../MyInput/MyInput'
import PopUp from '../PopUp/PopUp'
import styles from './Header.module.css'
import {SlMenu} from 'react-icons/sl'
import {BsCart3, BsFillPersonFill} from 'react-icons/bs'
import { IconContext } from 'react-icons'



export default function Header() {
    let [burgerVisible, setBurgerVisible] = useState(false)
    let [mapVisible, setMapVisible] = useState(false)
    let [currChoice, setCurrChoice] = useState('BYN')
    let [counter, setCounter] = useState(0)
    console.log(counter)

    const addCssClass = (style1, style2,...args) => {
       return [style1, style2, args].join(' ')
    }

  return (
    <div>
        <IconContext.Provider value={{ size: '1.5rem' }}>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__template}>
        
                        <div className={addCssClass(styles.currency, styles.header__item)}>
                            <p className={styles.currency__word}>{currChoice}</p>
                            <div className={styles.currency__block}>
                                <p className={styles.currency__title}>Выберите валюту</p>
                                <div onClick={() => setCurrChoice('BYN')} className={styles.currency__item}>BYN  Белорусские рубли</div>
                                <div onClick={() => setCurrChoice('RUB')} className={styles.currency__item}>RUB Российские рубли</div>
                                <div onClick={() => setCurrChoice('USD')} className={styles.currency__item}>USD Доллар США</div>
                            </div>

                        </div>

                        <div className={addCssClass(styles.inf2, styles.header__item)}>
                        <PopUp 
                            visible = {mapVisible}
                            setVisible = {setMapVisible}
                            position = 'centered'
                            >
                                <Map></Map>
                        </PopUp>
                        <div onClick={() => setMapVisible(true)} className={addCssClass(styles.city, styles.header__item)}>Minsk</div>
                        </div>

                        <div onClick={() => setCounter++} className={addCssClass(styles.sell, styles.header__item)}>
                            <button onClick={() => setCounter(counter + 1)}>gdfggergeg</button>
                        sell smth
                        </div>

                        <PopUp 
                            visible = {burgerVisible}
                            setVisible = {setBurgerVisible}
                            position = 'left'
                            >
                            1231123
                        </PopUp>
                        <div onClick={() => setBurgerVisible(true)} className={addCssClass(styles.burger, styles.header__item)}><SlMenu /></div>

                        <Link to={'/webshop'} className={addCssClass(styles.logo, styles.header__item)}>WEBSHOP</Link>

                        <MyInput classes={addCssClass(styles.input, styles.header__item)} placeholder = 'hello'/>

                        <Link to={'/Login'} className={addCssClass(styles.sign, styles.header__item)}>
                            <BsFillPersonFill/>
                            <span className={styles.sign}>Войти</span>
                        </Link>

                        <Link to={'/cart'} className={addCssClass(styles.basket, styles.header__item)}>
                            {counter 
                            ?
                            <div className={styles.counter}>{counter}</div>
                            :
                            ''
                            }
                            <BsCart3/>
                            <span className={styles.basket}>Корзина</span>
                        </Link>
                    

                    </div>

                </div>
                    
                <div className={styles.bottom__white}>
                      
                </div>
           
            </header>

        </IconContext.Provider>
        
    </div>
  )
}
