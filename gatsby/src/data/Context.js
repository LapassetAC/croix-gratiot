import React, { createContext, useState } from "react";

const Context = createContext();

const DataProvider = ({ children }) => {
  const [activeHomeSection, setActiveHomeSection] = useState("white");

  console.log(activeHomeSection);

  return (
    <Context.Provider value={{ activeHomeSection, setActiveHomeSection }}>
      {children}
    </Context.Provider>
  );
};

export { Context, DataProvider };
