import { configureStore } from '@reduxjs/toolkit'

import { 
    portfolioSlice
 } from './reducers'

 const reducer_index = {
     portfolio: portfolioSlice,
 }

const initStore = (reducer, preloadedState) => {
    // console.log('creating store', preloadedState)
    return configureStore({
        reducer: reducer_index[reducer].reducer,
        preloadedState,
    })
}

export default initStore