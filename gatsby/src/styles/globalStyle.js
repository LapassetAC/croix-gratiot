import { createGlobalStyle } from "styled-components";
import ModeratMedium from "../assets/fonts/Moderat-Medium.woff2";
import Democratica from "../assets/fonts/Democratica.woff";

export default createGlobalStyle`
 @font-face {
    font-family: 'Moderat';
    src: url(${ModeratMedium}) format("woff2");
  }

  @font-face {
    font-family: 'Democratica';
    src: url(${Democratica}) format("woff");
  }

  body {
    font-family: 'Moderat', sans-serif;
  }
  .pageAnimation {
    animation: pageAnimation 2s ${({ theme }) =>
      theme.cubicBezier.base} 1s forwards;
    opacity: 0;
  }

  @keyframes pageAnimation {
    100% {
      opacity: 1;
    }
  }
`;
