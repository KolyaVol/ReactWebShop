const defaultState = {
    prods: [
    
  ]}

export const addToCartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PROD':
            return {...state, prods: [...state.prods, action.payload]}
        case 'CONCAT_PROD_ARR':
            return {...state, prods: [...state.prods].concat(action.payload)}    
        case 'REMOVE_PROD':
            return {...state, prods: state.prods.filter(prod => prod.id !== action.payload)}
        default: 
            return state
    }
}