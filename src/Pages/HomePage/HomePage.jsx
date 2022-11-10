import React from 'react'
import Footer from '../../UI/Footer/Footer'
import Header from '../../UI/Header/Header'
import HomeSlider from '../../UI/HomeSlider/HomeSlider'
import ProdList from '../../UI/ProdList/ProdList'
import RecBox from '../../UI/RecBox/RecBox'
import styles from './HomePage.module.css'

export default function HomePage() {
    

    
        
    

  return (
    <div className={styles.body}>
        
        <Header></Header>

        <HomeSlider/>
        
        <ProdList></ProdList>

        <RecBox/>

        <ProdList></ProdList>
        
        <Footer/>
    </div>
  )
}
