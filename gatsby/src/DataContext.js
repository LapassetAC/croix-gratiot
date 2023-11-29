import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [currentPageHeight, setCurrentPageHeight] = useState(null);
  console.log(currentPageHeight);

  return (
    <DataContext.Provider value={{ currentPageHeight, setCurrentPageHeight }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
