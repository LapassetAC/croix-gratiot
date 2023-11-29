import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import { DataProvider } from "DataContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DataProvider>{children}</DataProvider>
    </ThemeProvider>
  );
};

export default Layout;
