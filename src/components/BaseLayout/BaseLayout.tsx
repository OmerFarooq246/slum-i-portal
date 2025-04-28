import Head from 'next/head'
import { ReactNode } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Header from '../Header/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Figtree } from "next/font/google"
const figtree = Figtree({subsets: ['latin'], variable: "--font-figtree"})

type BaseLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function BaseLayout({title, children}: BaseLayoutProps) {
  return (
    <div className='relative h-screen flex flex-col'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="slum-i-portal" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main className={`grow ${geistSans.variable} ${geistMono.variable} ${figtree.variable}`}>
            {children}
        </main>
        {/* <Footer></Footer> */}
    </div>
  )
}