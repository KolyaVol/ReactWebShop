export const userName = localStorage.getItem('USERNAME')

const reducer = {
  prodList: prodListReducer,
  addToCart: addToCartReducer,
  isAuth: isAuthReducer,
  userName: userName,
}