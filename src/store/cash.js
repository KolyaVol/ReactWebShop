const defaultState = 0

export const cash = (state = defaultState, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, isAuth: 10}
        case 'DEC':
            return {...state, isAuth: 1}
        default: 
            return state
    }
}