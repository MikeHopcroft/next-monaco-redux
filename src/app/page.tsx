"use client"

import Editor from '@monaco-editor/react';
import MonacoEditor from 'react-monaco-editor';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <Image
          src="/microsoft.png"
          alt="Microsoft Logo"
          width={100}
          height={24}
          priority
        />
        {/* <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          // value={code}
          // options={options}
          // onChange={::this.onChange}
          // editorDidMount={::this.editorDidMount}
        /> */}
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
    </main>
  );
}
