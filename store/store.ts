import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';
import { BASE_URL } from './urls';

// ...

const store = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { serviceApi: BASE_URL }
            }
        })
})


export default store;