import { counterReducer } from './counter'
import { letterReducer } from './letter'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    counter: counterReducer,
    letter: letterReducer
})
