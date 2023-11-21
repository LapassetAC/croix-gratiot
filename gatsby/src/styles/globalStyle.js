import { createGlobalStyle } from "styled-components";
import ModeratMedium from "../assets/fonts/Moderat-Medium.woff2";
import ModeratBold from "../assets/fonts/Moderat-Bold.woff2";
import ModeratMonoMedium from "../assets/fonts/Moderat-Mono-Medium.woff2";
import Democratica from "../assets/fonts/Democratica.woff";

export default createGlobalStyle`
 @font-face {
    font-family: 'Moderat';
    src: url(${ModeratMedium}) format("woff2");
  }
 @font-face {
    font-family: 'Moderat Bold';
    src: url(${ModeratBold}) format("woff2");
  }
  @font-face {
    font-family: 'Moderat Mono';
    src: url(${ModeratMonoMedium}) format("woff2");
  }

  @font-face {
    font-family: 'Democratica';
    src: url(${Democratica}) format("woff");
  }

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Moderat', sans-serif;
  background-color: ${(props) => props.theme.colors.backgroundLight};
}

a {
text-decoration: none;
color: ${(props) => props.theme.colors.black};
display: block;
cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.grey};
    & * {
      color: ${(props) => props.theme.colors.grey};
    }
  }
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
}

  li {
  list-style: none;
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
