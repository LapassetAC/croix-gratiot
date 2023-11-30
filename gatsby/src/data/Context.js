import React, { createContext, useState } from "react";

const Context = createContext();

const DataProvider = ({ children }) => {
  const [activeHomeSection, setActiveHomeSection] = useState("white");

  return (
    <Context.Provider value={{ activeHomeSection, setActiveHomeSection }}>
      {children}
    </Context.Provider>
  );
};

export { Context, DataProvider };
