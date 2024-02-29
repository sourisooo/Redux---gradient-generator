import {configureStore} from '@reduxjs/toolkit'
import colorReducer from '../reducers/colorReducer'

const store = configureStore({
    reducer: {
        color: colorReducer
    },
    devTools: true
})

export default store