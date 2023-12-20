import { createGlobalStyle } from "styled-components";
import ModeratMedium from "../assets/fonts/Moderat-Medium.woff2";
import ModeratMediumItalic from "../assets/fonts/Moderat-Medium-Italic.woff2";
import ModeratBold from "../assets/fonts/Moderat-Bold.woff2";
import ModeratBoldItalic from "../assets/fonts/Moderat-Bold-Italic.woff2";
import ModeratMonoMedium from "../assets/fonts/Moderat-Mono-Medium.woff2";
import ModeratMonoLight from "../assets/fonts/Moderat-Mono-Light.woff2";
import ModeratMonoBold from "../assets/fonts/Moderat-Mono-Bold.woff2";
import Democratica from "../assets/fonts/Democratica.woff";

export default createGlobalStyle`
 @font-face {
    font-family: 'Moderat';
    src: url(${ModeratMedium}) format("woff2");
  }
 @font-face {
    font-family: 'Moderat Italic';
    src: url(${ModeratMediumItalic}) format("woff2");
  }
 @font-face {
    font-family: 'Moderat Bold';
    src: url(${ModeratBold}) format("woff2");
  }
 @font-face {
    font-family: 'Moderat Bold Italic';
    src: url(${ModeratBoldItalic}) format("woff2");
  }
  @font-face {
    font-family: 'Moderat Mono';
    src: url(${ModeratMonoMedium}) format("woff2");
  }
  @font-face {
    font-family: 'Moderat Mono Light';
    src: url(${ModeratMonoLight}) format("woff2");
  }
  @font-face {
    font-family: 'Moderat Mono Bold';
    src: url(${ModeratMonoBold}) format("woff2");
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
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props) => props.theme.colors.black};
  font-family: "Moderat", sans-serif;
  font-size: 14px;
  line-height: 21px;
  @media ${({ theme }) => theme.minWidth.sm} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${({ theme }) => theme.minWidth.lg} {
    font-size: 18px;
    line-height: 27px;
  }
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


  /* Components */

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 15px;
  @media ${(props) => props.theme.minWidth.lg} {
    grid-gap: 30px;
  } 
}

  .sectionTitle {
    font-family: Democratica;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 36px;
    font-size: 46px;
    @media ${({ theme }) => theme.minWidth.sm} {   
      font-size: 72px;
      line-height: 58px;
    }   
    @media ${({ theme }) => theme.minWidth.lg} {      
      line-height: 70px;
      font-size: 90px;
    }
  }

  .btn {
    font-family: "Moderat Mono", sans-serif;
    text-decoration-line: underline;
    font-size: 12px;
    display: flex;
    align-items: center;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 14px;
    }
    &.white {
      svg {
        fill: ${(props) => props.theme.colors.backgroundLight};
      }
    }
    img, svg {
      margin-right: 15px;
    }
  }

  .base-text {
    font-family: "Moderat", sans-serif;
    line-height: 21px;
    font-size: 14px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .largeText {
    font-family: Moderat Bold;
    text-align: center;
    font-size: 16px;
    line-height: 150%;
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 20px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 2/7;
      font-size: 22px;
      line-height: 160%;
    }
  }

  @keyframes nosVins{
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    } 
  }
.hero-img {
  @media ${({ theme }) => theme.minWidth.sm} {
  height: calc(100vh - 30px);
  }
}
@media print {
  body {
    visibility: hidden;
  }
  #no-print {
    visibility: hidden; 
  }
  #print {
    visibility: visible;
  }
}

`;
