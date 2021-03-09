import {createStore, applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AuthREducer from './Auth/AuthReducer'

import BankReducer from './BankReducers/BankReducers'
import PersonalReducer from './PersonalReducer/PersonalReducer'



const reducer = combineReducers({
    BankReducer: BankReducer,
    PersonalAccountReducer : PersonalReducer,
    authREducer : AuthREducer
})

const initialState = {}

const midleware = [thunk]
const Store = createStore(
    reducer, initialState, composeWithDevTools(
        applyMiddleware(...midleware)))


export default Store