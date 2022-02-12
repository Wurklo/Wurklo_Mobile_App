import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// slices or reducers
import projects from './slices/projects';
import wurkers from './slices/wurkers';
import user from './slices/Login'

export const store = configureStore({
    reducer: {
        projects: projects,
        wurkers: wurkers,
        user: user,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, logger]),
});