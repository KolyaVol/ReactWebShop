import React from 'react'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function Cart() {

  let [prodss, setProdss] = useState([
        {id: 1, image: '123', price: 228, sale: 322, name: 'this is smth' },
        {id: 2, image: '123', price: 229, sale: 322, name: 'this is smth' },
        {id: 3, image: '123', price: 230, sale: 322, name: 'this is smth' },
        {id: 4, image: '123', price: 231, sale: 322, name: 'this is smth' },
        {id: 5, image: '123', price: 232, sale: 322, name: 'this is smth' },
        {id: 6, image: '123', price: 233, sale: 322, name: 'this is smth' },
        {id: 7, image: '123', price: 234, sale: 322, name: 'this is smth' },
        {id: 8, image: '123', price: 235, sale: 322, name: 'this is smth' },
        {id: 9, image: '123', price: 236, sale: 322, name: 'this is smth' },
        {id: 10, image: '123', price: 237, sale: 322, name: 'this is smth' },
        {id: 11, image: '123', price: 238, sale: 322, name: 'this is smth' },
        {id: 12, image: '123', price: 239, sale: 322, name: 'this is smth' },
        {id: 13, image: '123', price: 240, sale: 322, name: 'this is smth' },
        {id: 14, image: '123', price: 241, sale: 322, name: 'this is smth' },
    
    ])

  return (
    <div className={styles.container}>
        <div className={styles.title}>В корзине пока пусто</div>
        <div className={styles.subtitle}>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</div>
        <Link className={styles.link} to={'/webshop'}>Перейти на главную</Link>
    <div className={styles.prod__list}>
            {prodss.map(prod => 
              prod.id < 8 
              ?
              <div key={prod.id + 'prod'} className={styles.prod__item}>
                    <div className={styles.image}></div>

                    <div className={styles.price}>{prod.price}</div>

                    <div className={styles.sale}>{prod.sale}</div>

                    <div className={styles.name}>{prod.name}</div>
                </div>
                :
                ''
                )}

            
        </div>
    </div>
    
  )
}
