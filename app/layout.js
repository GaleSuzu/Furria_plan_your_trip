'use client';

import { useState, useEffect } from 'react';
import LoadingStartApp from './components/loading-startapp/LoadingStartApp';
import Context from './(context)/Provider';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './globals.css';

function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem('loadingShown')) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('loadingShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  const path = window.location.pathname;
  const showNavbarAndFooter = path !== '/city-plan';

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      {loading ? <LoadingStartApp /> : children}
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Context>
          <MainLayout>{children}</MainLayout>
        </Context>
      </body>
    </html>
  );
}
