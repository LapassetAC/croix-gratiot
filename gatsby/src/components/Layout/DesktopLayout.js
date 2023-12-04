import React, { useRef, useEffect, useState } from "react";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustation";
import NousRencontrerPage from "components/pages/NousRencontrer";
import styled from "styled-components";
import { Router, Link, useLocation } from "@reach/router";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";

// const StyledPageContainer = styled.div`
//   transition: left 1s;
//   position: absolute;
//   width: 100%;
//   display: flex;
//   &:nth-child(2) {
//     left: ${({ $isActive }) => ($isActive ? "60px" : "calc(100vw - 180px)")};
//     z-index: 1;
//   }
//   &:nth-child(3) {
//     left: ${({ $isActive }) => ($isActive ? "120px" : "calc(100vw - 120px)")};
//     z-index: 2;
//   }
//   &:nth-child(4) {
//     left: ${({ $isActive }) => ($isActive ? "180px" : "calc(100vw - 60px)")};
//     z-index: 3;
//   }
//   .pageContent {
//     background-color: ${({ theme }) => theme.colors.backgroundLight};
//     @media ${({ theme }) => theme.minWidth.xl} {
//       width: calc(100% - 270px);
//     }
//     &:not(.home) {
//       @media ${({ theme }) => theme.minWidth.xl} {
//         width: calc(100% - 270px);
//         padding: 0 180px 0 60px;
//       }
//     }
//   }
// `;
// const StyledLinkContainer = styled.div`
//   flex: 0 0 60px;
//   border-left: 2px solid
//     ${({ theme, $activeSection }) =>
//       $activeSection === "orange"
//         ? theme.colors.black
//         : $activeSection === "red" || $activeSection === "green"
//         ? theme.colors.backgroundLight
//         : theme.colors.black};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transition: all 1s;
//   background-color: ${({ theme, $activeSection }) =>
//     $activeSection === "orange"
//       ? theme.colors.orange
//       : $activeSection === "green"
//       ? theme.colors.green
//       : $activeSection === "red"
//       ? theme.colors.red
//       : $activeSection === "white"
//       ? theme.colors.backgroundLight
//       : theme.colors.backgroundLight};
//   a,
//   button {
//     font-size: 18px;
//     text-transform: uppercase;
//     letter-spacing: 0.9px;
//     writing-mode: sideways-lr;
//     text-orientation: upright;
//     text-align: end;
//     transition: color 1s;
//     color: ${({ theme, $activeSection }) =>
//       $activeSection === "orange"
//         ? theme.colors.black
//         : $activeSection === "red" || $activeSection === "green"
//         ? theme.colors.backgroundLight
//         : theme.colors.black};
//   }
//   &:not(.homeNav) {
//     position: fixed;
//     min-height: 100vh;
//     width: 60px;
//     top: 0;
//     padding-top: 30px;
//   }
//   &.homeNav {
//     border: none;
//     z-index: 1;
//     & > div {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       align-items: center;
//       height: calc(100vh - 100px);
//       position: fixed;
//       & > div {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         button {
//           margin-top: 15px;
//         }
//       }
//     }
//     svg {
//       path {
//         transition: fill 1s;
//         fill: ${({ theme, $activeSection }) =>
//           $activeSection === "orange"
//             ? theme.colors.black
//             : $activeSection === "red" || $activeSection === "green"
//             ? theme.colors.backgroundLight
//             : theme.colors.black};
//       }
//     }
//   }
// `;

const StyledContainer = styled.div`
  nav {
    position: fixed;
    background-color: white;
    display: grid;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all 1s;
    grid-template-columns: ${({ $activePage }) =>
      $activePage === "/"
        ? "calc(100vw - 180px) 60px 60px 60px"
        : $activePage === "/nos-pratiques/"
        ? "60px calc(100vw - 180px) 60px 60px"
        : $activePage === "/la-degustation/"
        ? "60px 60px calc(100vw - 180px)  60px"
        : $activePage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : null};
    a {
      border-left: 2px solid;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.9px;
      writing-mode: sideways-lr;
      text-orientation: upright;
      text-align: end;
      padding: 30px 0 0 15px;
    }
  }
  main {
    margin: ${({ $activePage }) =>
      $activePage === "/"
        ? "0 180px 0 60px"
        : $activePage === "/nos-pratiques/"
        ? "0 120px 0 120px"
        : $activePage === "/la-degustation/"
        ? "0 60px 0 180px"
        : $activePage === "/nous-rencontrer/"
        ? "0 0 0 240px"
        : null};
  }
`;

export default function DesktopLayout() {
  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState(pathname);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <StyledContainer $activePage={activePage}>
      <nav>
        <Link to="/">
          <LogoLGCDesktop />
        </Link>
        <Link to="/nos-pratiques/">Nos Pratiques</Link>
        <Link to="/la-degustation/">La Dégustation</Link>
        <Link to="/nous-rencontrer/">Nous rencontrer</Link>
      </nav>
      <main>
        <Router>
          <HomePage path="/" />
          <NosPratiquesPage path="/nos-pratiques/" />
          <LaDegustationPage path="/la-degustation/" />
          <NousRencontrerPage path="/nous-rencontrer/" />
        </Router>
      </main>
    </StyledContainer>

    // <StyledContainer $pageHeight={pageHeight}>
    //   {/* HomePage */}
    //   <StyledPageContainer ref={homePageRef}>
    //     <StyledLinkContainer
    //       className="homeNav"
    //       $activeSection={activeHomeSection}
    //     >
    //       <div>
    //         <Link to="/">
    //           <LogoLGCDesktop />
    //         </Link>
    //         <div>
    //           <button>EN</button>
    //           <button>FR</button>
    //         </div>
    //       </div>
    //     </StyledLinkContainer>
    //     <HomePage className="pageContent home" />
    //   </StyledPageContainer>

    //   {/* Nos Pratiques */}
    //   <StyledPageContainer
    //     $isActive={isNosPratiquesActive}
    //     ref={nosPratiquesRef}
    //   >
    //     <StyledLinkContainer $activeSection={activeHomeSection}>
    //       <Link to="/nos-pratiques/">Nos Pratiques</Link>
    //     </StyledLinkContainer>
    //     <NosPratiquesPage className="pageContent" />
    //   </StyledPageContainer>

    //   {/* La Dégustation */}
    //   <StyledPageContainer
    //     $isActive={isLadegustationActive}
    //     ref={laDegustationRef}
    //   >
    //     <StyledLinkContainer $activeSection={activeHomeSection}>
    //       <Link to="/la-degustation/">La Dégustation</Link>
    //     </StyledLinkContainer>
    //     <LaDegustationPage className="pageContent" />
    //   </StyledPageContainer>

    //   {/* Nous rencontrer */}
    //   <StyledPageContainer
    //     $isActive={isNousRencontrerActive}
    //     ref={nousRencontrerRef}
    //   >
    //     <StyledLinkContainer $activeSection={activeHomeSection}>
    //       <Link to="/nous-rencontrer/">Nous rencontrer</Link>
    //     </StyledLinkContainer>
    //     <NousRencontrerPage className="pageContent" />
    //   </StyledPageContainer>
    // </StyledContainer>
  );
}
