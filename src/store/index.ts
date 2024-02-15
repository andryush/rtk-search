import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { specialistsApi } from './apiSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    [specialistsApi.reducerPath]: specialistsApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(specialistsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
