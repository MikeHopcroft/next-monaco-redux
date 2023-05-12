'use client';

import './globals.css';
import {Inter} from 'next/font/google';
import React, {FC} from 'react';

import {Providers} from '@/redux/provider';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'next-monaco-redux',
  description: 'Example application using next, monaco and redux',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
