import {createSlice, PayloadAction} from '@reduxjs/toolkit';

///////////////////////////////////////////////////////////////////////////////
//
// Slice state definition
//
///////////////////////////////////////////////////////////////////////////////
export interface exampleState {
  count: number;
}

///////////////////////////////////////////////////////////////////////////////
//
// Slice Reducers
//
///////////////////////////////////////////////////////////////////////////////
export const exampleSlice = createSlice({
  name: 'example',
  initialState: {count: 0},
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: state => {
      state.count--;
    },
    increment: state => {
      state.count++;
    },
  },
});

// Action creators are generated for each case reducer function
export const {add, decrement, increment} = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
