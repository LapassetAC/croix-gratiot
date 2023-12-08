import React, { createContext, useState, useEffect } from "react";
const Context = createContext();

const DataProvider = ({ children }) => {
  const [activeHomeSection, setActiveHomeSection] = useState("white");
  const [pageChange, setPageChange] = useState("/");
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      screenWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };
    handleResize();
    setIsMounted(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        activeHomeSection,
        setActiveHomeSection,
        pageChange,
        setPageChange,
        isMobile,
      }}
    >
      {isMounted && children}
    </Context.Provider>
  );
};

export { Context, DataProvider };
