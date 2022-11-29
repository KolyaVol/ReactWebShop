import React from 'react'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Cart() {

  const prodList = useSelector((state) => state.prodList);

  return (
    <div className={styles.Cart}>
      <div className={styles.container}>
        <div className={styles.title}>В корзине пока пусто</div>
        <div className={styles.subtitle}>
          Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
        </div>
        <Link className={styles.link} to={"/webshop"}>
          Перейти на главную
        </Link>
        <div className={styles.prod__list}>
          {prodList.prods.map((prod) =>
            prod.id < 8 ? (
              <div key={prod.id + "prod"} className={styles.prod__item}>
                <div className={styles.image}></div>

                <div className={styles.price}>{prod.price}</div>

                <div className={styles.sale}>{prod.sale}</div>

                <div className={styles.name}>{prod.name}</div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
