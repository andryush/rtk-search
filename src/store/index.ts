import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { specialistsApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    [specialistsApi.reducerPath]: specialistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(specialistsApi.middleware),
});

setupListeners(store.dispatch);
