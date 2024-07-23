'use client'; 

import { useState } from 'react';
import LoadingStartApp from './components/loading-startapp/LoadingStartApp';
import styles from './page.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingStartApp onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <main className={styles.main}>
      <p>Ciao sono main</p>
    </main>
  );
}