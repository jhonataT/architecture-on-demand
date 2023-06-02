
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../setup/setupDataSlice';
import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//     reducer: dataSlice
// });

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const persistedReducer = persistReducer(persistConfig, dataSlice)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })