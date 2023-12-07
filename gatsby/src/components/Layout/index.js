import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import { DataProvider } from "data/Context";
import LayoutHandler from "./LayoutHandler";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DataProvider>
        <LayoutHandler>{children}</LayoutHandler>
      </DataProvider>
    </ThemeProvider>
  );
};

export default Layout;
