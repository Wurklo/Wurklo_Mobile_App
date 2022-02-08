import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// slices or reducers
import greeting from './slices/greeting';

export const store = configureStore({
    reducer: {
        greeting: greeting,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, logger]),
});