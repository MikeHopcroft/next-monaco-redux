import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {chatReducer} from './features/chat';
import {exampleReducer} from './features/example';

export const store = configureStore({
  reducer: combineReducers({chatReducer, exampleReducer}),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppStore = ReturnType<typeof configureStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
