import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// slices or reducers
import project from './slices/projects';

export const store = configureStore({
    reducer: {
        project: project,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, logger]),
});