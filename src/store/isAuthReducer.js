const defaultState = false

export const isAuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'AUTH':
            return true
        case 'NOT_AUTH':
            return false
        default: 
            return state
    }
}