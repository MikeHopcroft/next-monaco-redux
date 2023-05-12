import {configureStore} from '@reduxjs/toolkit';

import {exampleReducer} from './features/example';

export const store = configureStore({
  reducer: {exampleReducer},
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;