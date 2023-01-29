import React from 'react'
import styles from './Cart.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProdList from '../../UI/ProdList/ProdList';
import CartCounter from '../../UI/CartCounter/CartCounter';


export default function Cart() {
  
  const cartProds = useSelector((state) => state.addToCart);
  const router = useNavigate()
  
  let uniqueArr = cartProds.prods.filter(function (prod, index) {
    let nextIndex = cartProds.prods.findIndex(function (nextProd) {
      let sameId = nextProd.id === prod.id;
      return sameId;
    });
    return nextIndex === index;
  });
  
  function counter(prod) {
    return cartProds.prods.filter(function(item){
     if (item.id === prod.id) {
      return true
     } 
     else {
      return false
     }
  }).length
  };
  

  return (
		<div className={styles.Cart}>
			<div className={styles.container}>
				<div className={styles.cart__title}> Корзина:</div>
				{cartProds.prods[0] ? (
					uniqueArr.map((prod) => (
						<div key={prod.id + "prod"} className={styles.cart__item}>
							<div
								className={styles.cart__image}
								onClick={() => router(`/prod/${prod.id}`)}
							></div>
							<div
								className={styles.cart__description}
								onClick={() => router(`/prod/${prod.id}`)}
							>
								<div className={styles.cart__price}>{prod.price}</div>

								<div className={styles.cart__sale}>{prod.sale}</div>

								<div className={styles.cart__name}>{prod.name}</div>
							</div>
							<CartCounter id={prod.id} counter={counter(prod)} />
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
				<ProdList>Возможно, вам понравится</ProdList>
			</div>
		</div>
	);
}
