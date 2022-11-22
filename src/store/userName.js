const defaultState = ''

export const userName = (state = defaultState, action) => {
    switch (action.type) {
        case 'USERNAME':
            return action.payload
        default: 
            return state
    }
}