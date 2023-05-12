'use client';

import Editor from '@monaco-editor/react';
import Image from 'next/image';

import {add, decrement, increment} from '@/redux/features';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

// import styles from './page.module.css';

export default function Page() {
  const count = useAppSelector(state => state.exampleReducer.count);
  const dispatch = useAppDispatch();

  return (
    <main>
      <div>
        <div style={{marginBottom: 20}}>
          <Image
            src="/microsoft.png"
            alt="Microsoft Logo"
            width={100}
            height={24}
            priority
          />
        </div>
        <div style={{marginBottom: 20}}>
          <h4 style={{marginBottom: 16}}>Counter: {count}</h4>
        </div>
        <div style={{marginBottom: 20}}>
          <button
            style={{marginRight: 10}}
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
          <button
            style={{marginRight: 10}}
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
          <button style={{marginRight: 10}} onClick={() => dispatch(add(5))}>
            add 5
          </button>
        </div>
        <div>
          <Editor
            height="300px"
            defaultLanguage="javascript"
            defaultValue="// some comment"
          />
        </div>
      </div>
    </main>
  );
}
