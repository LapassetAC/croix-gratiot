import { createGlobalStyle } from "styled-components";
import ModeratMedium from "../assets/fonts/Moderat-Medium.woff2";

export default createGlobalStyle`
 @font-face {
    font-family: 'Moderat';
    src: url(${ModeratMedium}) format("woff2");
  }

  body {
    font-family: 'Moderat', sans-serif;
  }
`;
