"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingStartApp from "./components/loading-startapp/LoadingStartApp";
import Context from "./(context)/Provider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

function MainLayout({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("loadingShown")) {
      const timer = setTimeout(() => {
        setInitialLoading(false);
        sessionStorage.setItem("loadingShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setInitialLoading(false);
    }
  }, []);

  const path = router.pathname;
  const showNavbarAndFooter = path !== "/city-plan";

  return (
    <>
      {initialLoading ? (
        <LoadingStartApp />
      ) : (
        <>
          {showNavbarAndFooter && <Navbar />}
          {children}
          {showNavbarAndFooter && <Footer />}
        </>
      )}
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
