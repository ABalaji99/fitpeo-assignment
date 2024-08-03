// src/components/DataContext.js
import React, { createContext, useState } from 'react';
import { fitpeoData } from '../api/Data';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apidata, setApidata] = useState(fitpeoData);
  

  return (
    <DataContext.Provider value={{ apidata, setApidata }}>
      {children}
    </DataContext.Provider>
  );
};
