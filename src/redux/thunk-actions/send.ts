import {AnyAction, ThunkAction} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {agentSays, loading, userSays, } from '../features';

// Factory for thunk action that initializes the NodeStore in the graphSlice
// with data pulled from the RESTful api on the iskg service.
export function send(user: string): ThunkAction<
  void,
  AppState,
  unknown,
  AnyAction
> {
  return async (dispatch, getState) => {
//    dispatch(userSays(user));
    dispatch(loading());
    await sleep(3000);
    dispatch(agentSays(`The time is ${new Date().toLocaleTimeString()}`));
  };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
