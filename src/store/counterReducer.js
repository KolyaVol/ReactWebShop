const defaultState = {
    count: 0
}

export const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count++}
        case 'DECREMENT':
            return {...state, count: state.count--}
        default: 
            return state
    }
}