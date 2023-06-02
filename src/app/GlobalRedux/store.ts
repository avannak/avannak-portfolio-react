'use client'
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import parallaxReducer from './Features/parallax/parallaxSlice';
import mousePositionReducer from './Features/parallax/mousePositionSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
    parallax: parallaxReducer,
    mousePosition: mousePositionReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(thunk), // add additional middleware as needed here
  });
  
  let persistor = persistStore(store);
  
  export { store, persistor };
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;