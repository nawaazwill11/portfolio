import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { 
    portfolioReducer
 } from './reducers'

 const reducer_index = {
     portfolio: portfolioReducer,
 }

const initStore = (reducer, preloadedState) => {

    return createStore(
        reducer_index[reducer],
        preloadedState,
        applyMiddleware(thunk)
    )
}
export default initStore