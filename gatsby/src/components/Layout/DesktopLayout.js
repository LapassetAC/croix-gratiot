import React, { useRef, useEffect, useState } from "react";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustation";
import NousRencontrerPage from "components/pages/NousRencontrer";
import styled from "styled-components";
import { Router, Link, useLocation, navigate } from "@reach/router";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";

const StyledContainer = styled.div`
  nav {
    /* z-index: -1; */
    position: fixed;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: grid;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all 1s;
    grid-template-columns: ${({ $incomingPage }) =>
      $incomingPage === "/"
        ? "calc(100vw - 180px) 60px 60px 60px"
        : $incomingPage === "/nos-pratiques/"
        ? "60px calc(100vw - 180px) 60px 60px"
        : $incomingPage === "/la-degustation/"
        ? "incomingPage 60px calc(100vw - 180px)  60px"
        : $incomingPage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : null};
    & > div {
      display: block;
      border-left: 2px solid;
      padding: 30px 0 0 15px;
      button {
        writing-mode: sideways-lr;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        font-size: 18px;
        text-align: end;
        text-orientation: upright;
        background-color: ${({ theme }) => theme.colors.backgroundLight};
      }
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
    transition: opacity 1s;
    opacity: ${({ $isTransition }) => ($isTransition ? 0 : 1)};
    .transitionMask {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      height: 100vh;
      top: 0;
      transition: all 1s;
      left: ${({ $activePage, $isTransition }) =>
        $isTransition && $activePage === "/"
          ? "60px"
          : $isTransition && $activePage === "/nos-pratiques/"
          ? "120px"
          : $isTransition && $activePage === "/la-degustation/"
          ? "180px"
          : $isTransition && $activePage === "/nous-rencontrer/"
          ? "240px"
          : "100vw"};
      right: ${({ $activePage, $isTransition }) =>
        $activePage === "/"
          ? "180px"
          : $activePage === "/nos-pratiques/"
          ? "120px"
          : $activePage === "/la-degustation/"
          ? "60px"
          : $activePage === "/nous-rencontrer/"
          ? "0"
          : null};
    }
  }
`;

export default function DesktopLayout() {
  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState(pathname);
  const [incomingPage, setIncomingPage] = useState(pathname);
  const [isTransition, setIsTransition] = useState(false);

  function handlePageChange(page) {
    setIncomingPage(page);
    setIsTransition(true);
    setTimeout(() => {
      navigate(page);
      setActivePage(page);
      setIsTransition(false);
    }, 1000);
  }

  return (
    <StyledContainer
      $incomingPage={incomingPage}
      $activePage={activePage}
      $isTransition={isTransition}
    >
      <nav>
        <div>
          <button onClick={() => handlePageChange("/")}>
            <LogoLGCDesktop />
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/nos-pratiques/")}>
            Nos Pratiques
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/la-degustation/")}>
            La Dégustation
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/nous-rencontrer/")}>
            Nous rencontrer
          </button>
        </div>
      </nav>
      <main>
        <Router>
          <HomePage path="/" />
          <NosPratiquesPage path="/nos-pratiques/" />
          <LaDegustationPage path="/la-degustation/" />
          <NousRencontrerPage path="/nous-rencontrer/" />
        </Router>
        <div className="transitionMask"></div>
      </main>
    </StyledContainer>
  );
}
