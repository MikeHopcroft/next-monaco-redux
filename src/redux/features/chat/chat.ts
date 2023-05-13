import {createSlice, PayloadAction} from '@reduxjs/toolkit';

///////////////////////////////////////////////////////////////////////////////
//
// Slice state definition
//
///////////////////////////////////////////////////////////////////////////////
export interface ChatTurn {
  user: string;
  loading: boolean;
  error?: string;
  agent?: string;
}

export interface ChatState {
  turns: ChatTurn[];
}

///////////////////////////////////////////////////////////////////////////////
//
// Slice Reducers
//
///////////////////////////////////////////////////////////////////////////////
export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    turns: [
      {
        user: 'hello!',
        loading: false,
        agent: 'how may I help you?',
      },

      {
        user: '',
        loading: false,
      },
    ],
  } as ChatState,
  reducers: {
    newTurn: state => {
      state.turns.push({user: '', loading: false});
    },
    userSays: (state, action: PayloadAction<string>) => {
      if (state.turns.length > 0) {
        const turn = state.turns[state.turns.length - 1];
        turn.user = action.payload;
      }
    },
    loading: state => {
      if (state.turns.length > 0) {
        state.turns[state.turns.length - 1].loading = true;
      }
    },
    agentSays: (state, action: PayloadAction<string>) => {
      if (state.turns.length > 0) {
        const turn = state.turns[state.turns.length - 1];
        turn.loading = false;
        turn.agent = action.payload;
        state.turns.push({user: '', loading: false});
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {newTurn, userSays, loading, agentSays} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
