import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';

import {exampleSlice} from '@/redux/features';

const makeStore = () => {
  const reducer = combineReducers({
    example: exampleSlice.reducer,
  });

  return configureStore({
    reducer,
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
