import React, { useState } from 'react'
import Header from '../../UI/Header/Header'
import HomeSlider from '../../UI/HomeSlider/HomeSlider'
import ProdList from '../../UI/ProdList/ProdList'
import RecBox from '../../UI/RecBox/RecBox'
import styles from './HomePage.module.css'

export default function HomePage() {
    

    
        
    

  return (
    <div>
        
        <Header></Header>

        <HomeSlider/>
        
        <ProdList></ProdList>

        <RecBox/>

        <ProdList></ProdList>
        <div className={styles.arr__bg}></div>
        <div className={styles.footer__bg}>
           
            <div className={styles.footer__box}>gdfgd</div>
        </div>
    </div>
  )
}
