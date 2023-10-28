import { combineReducers, createStore } from 'redux'
import { cashReducer, customersReducer } from './reducers'
import composeWithDevTools from 'redux-devtools-extension'

const rootReducers = combineReducers({
  cashReducer: cashReducer,
  customersReducer: customersReducer,
})

const store = createStore(rootReducers, composeWithDevTools)

export default store
