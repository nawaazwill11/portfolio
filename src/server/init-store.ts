import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { portfolioSlice } from '../shared/reducers'

 const reducer_index = {
     portfolio: portfolioSlice,
 }

const initStore = (reducer, preloadedState) => {
    return configureStore({
        reducer: reducer_index[reducer],
        preloadedState
    })
}

export default initStore