'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Conversations from "./Components/Conversations";
import { Provider } from 'react-redux';
import { store } from '../globalRedux/store';
import { useMediaQuery } from 'react-responsive';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 995px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 995px)' });

  return (
    <html lang="en">
          <head>
    <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<Provider store={store}>
{children}





</Provider>
    
      </body>
    </html>
  );
}
