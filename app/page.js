'use client'; 

import { useState, useEffect } from 'react';
import LoadingStartApp from './components/loading-startapp/LoadingStartApp';
import Home from './components/home/Home';
import './globals.css'; 

export default function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <LoadingStartApp />;
  }

  return <Home />;
}
