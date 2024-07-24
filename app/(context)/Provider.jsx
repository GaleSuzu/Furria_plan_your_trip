"use client";

import { createContext, useEffect, useState } from "react";
export const globalContext = createContext();

const Context = ({ children }) => {
  const [city, setCity] = useState([]); //qui mettiamo tutti gli useState che ci serve portare in giro

  const value = { city, setCity };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
