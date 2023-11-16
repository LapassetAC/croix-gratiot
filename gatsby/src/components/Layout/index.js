import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      {/* <Navigation>{children}</Navigation> */}
    </ThemeProvider>
  );
};

export default Layout;
