
const initialState = 10;

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            if (action.payload) {
                return state + action.payload
            } else {
                return state + 1
            }
        case 'DECREMENT':
            if (action.payload) {
                return state - action.payload
            } else {
                return state - 1
            }
        default:
            return state
    }
}
