'use client';

import { useState, useEffect } from 'react';
import LoadingStartApp from './components/loading-startapp/LoadingStartApp';
import Context from './(context)/Provider';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <Context>
          {loading ? (
            <LoadingStartApp />
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </Context>
      </body>
    </html>
  );
}
