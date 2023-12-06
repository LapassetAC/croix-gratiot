import React, { createContext, useState } from "react";

const Context = createContext();

const DataProvider = ({ children }) => {
  const [activeHomeSection, setActiveHomeSection] = useState("white");
  const [pageChange, setPageChange] = useState("/");

  return (
    <Context.Provider
      value={{
        activeHomeSection,
        setActiveHomeSection,
        pageChange,
        setPageChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, DataProvider };
