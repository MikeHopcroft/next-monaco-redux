'use client';

import Image from 'next/image';

import {
  add,
  agentSays,
  ChatTurn,
  decrement,
  increment,
  loading,
  newTurn,
  userSays,
} from '@/redux/features';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {send} from '@/redux/thunk-actions';

// import styles from './page.module.css';

export default function Page() {
  const count = useAppSelector(state => state.exampleReducer.count);
  const turns = useAppSelector(state => state.chatReducer.turns);
  const dispatch = useAppDispatch();

  return (
    <main>
      <div>Turns: {turns.length}</div>
      <div>
        <button style={{marginRight: 10}} onClick={() => dispatch(newTurn())}>
          new turn
        </button>
        <button style={{marginRight: 10}} onClick={() => dispatch(loading())}>
          loading
        </button>
        <button style={{marginRight: 10}} onClick={() => dispatch(send('zzz'))}>
          send
        </button>
      </div>
      <div>
        {turns.map((turn, key) => (
          <Turn key={key} turn={turn}></Turn>
        ))}
        <div style={{width: '30%', margin: 20}}>
          <form onSubmit={event => send((event.target as any)[0].value)}>
            <input
              name="text"
              style={{width: '100%', backgroundColor: 'lightsalmon'}}
            ></input>
          </form>
        </div>
      </div>
    </main>
  );
}

interface ITurnProps {
  turn: ChatTurn;
}

function Turn({turn}: ITurnProps) {
  const parts: React.ReactElement[] = [];
  if (turn.agent) {
    parts.push(<div style={{backgroundColor: 'lightgreen'}}>{turn.agent}</div>);
  }

  return (
    <>
      {
        <div style={{width: '30%', backgroundColor: 'lightgreen', margin: 20}}>
          {turn.user ? turn.user : '<enter text>'}
        </div>
      }
      {turn.loading && (
        <div style={{backgroundColor: 'lightred'}}>Loading ...</div>
      )}
      {turn.agent && (
        <div
          style={{
            width: '30%',
            backgroundColor: 'lightblue',
            margin: 20,
            marginLeft: 40,
          }}
        >
          {turn.agent}
        </div>
      )}
    </>
  );
}
