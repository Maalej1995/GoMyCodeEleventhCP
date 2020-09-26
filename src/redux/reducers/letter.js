let initialState = 'A'

export const letterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LETTER':
            return action.payload
        default:
            return state
    }
}