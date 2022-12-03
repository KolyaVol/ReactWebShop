import React from 'react'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProdList from '../../UI/ProdList/ProdList';



export default function Cart() {

  const cartProds = useSelector((state) => state.addToCart);
  console.log(cartProds);
  return (
    <div className={styles.Cart}>
      <div className={styles.container}>
        <div className={styles.cart__title}> Корзина:</div>
        {cartProds.prods[0] ? (
          cartProds.prods.map((prod) => (
            <div key={prod.id + "prod"} className={styles.cart__item}>
              <div className={styles.cart__image}></div>
              <div className={styles.cart__description}>
                <div className={styles.cart__price}>{prod.price}</div>

                <div className={styles.cart__sale}>{prod.sale}</div>

                <div className={styles.cart__name}>{prod.name}</div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.title}>В корзине пока пусто</div>
            <div className={styles.subtitle}>
              Загляните на главную, чтобы выбрать товары или найдите нужное в
              поиске
            </div>
            <Link className={styles.link} to={"/webshop"}>
              Перейти на главную
            </Link>
          </div>
        )}
        <div className={styles.space} />
        <ProdList />
      </div>
    </div>
  );
}
