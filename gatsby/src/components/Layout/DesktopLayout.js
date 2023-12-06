import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";
import { useContext } from "react";
import { Context } from "data/Context";
import { useI18next, Link } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.div`
  nav {
    background-color: transparent;
    pointer-events: none;
    position: fixed;
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
        ? "60px 60px calc(100vw - 180px)  60px"
        : $incomingPage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : null};
    & > div {
      transition: all 0.4s;
      border-left: 2px solid;
      border-color: ${({ $activeSection, theme }) =>
        $activeSection === "red" || $activeSection === "green"
          ? theme.colors.backgroundLight
          : theme.colors.brandBrown};
      padding: 30px 0 0 17.5px;
      button {
        transition: all 0.2s;
        writing-mode: sideways-lr;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        font-size: 18px;
        text-align: end;
        text-orientation: upright;
        color: ${({ $activeSection, theme }) =>
          $activeSection === "red" || $activeSection === "green"
            ? theme.colors.backgroundLight
            : theme.colors.brandBrown};
      }
      &.homeNav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        padding: 30px 0 60px 14px;
        border: none;
        aside {
          display: flex;
          flex-direction: column;
          a {
            margin-top: 15px;
          }
        }
      }
    }
    a,
    button {
      pointer-events: all;
    }
  }
  main {
    position: relative;
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
    &:not(.transitionMask) {
      transition: opacity 1s;
      opacity: ${({ $transitionIsActive }) => ($transitionIsActive ? 0 : 1)};
    }
    .transitionMask {
      position: fixed;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      height: 100vh;
      top: 0;
      transition: all 1s;
      width: ${({ $transitionIsActive }) => ($transitionIsActive ? 100 : 0)}%;
      right: ${({ $transitionDirection }) =>
        $transitionDirection === "left" && 0};
      left: ${({ $transitionDirection }) =>
        $transitionDirection === "right" && 0};
    }
  }
`;

export default function DesktopLayout({ children }) {
  const { pathname } = useLocation();
  const { activeHomeSection } = useContext(Context);

  const [activePage, setActivePage] = useState(pathname);
  const [incomingPage, setIncomingPage] = useState(pathname);
  const [transitionIsActive, setTransitionIsActive] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("left");

  const { originalPath } = useI18next();

  function handlePageChange(page) {
    setIncomingPage(page);
    setTransitionIsActive(true);
    if (pathname === "/") {
      setTransitionDirection("left");
    }
    if (
      (pathname === "/nos-pratiques/" && page === "/la-degustation/") ||
      page === "/nous-rencontrer/"
    ) {
      setTransitionDirection("left");
    }
    if (pathname === "/nos-pratiques/" && page === "/") {
      setTransitionDirection("right");
    }
    if (
      (pathname === "/la-degustation/" && page === "/nos-pratiques/") ||
      page === "/"
    ) {
      setTransitionDirection("right");
    }
    if (pathname === "/la-degustation/" && page === "/nous-rencontrer/") {
      setTransitionDirection("left");
    }
    if (pathname === "/nous-rencontrer/") {
      setTransitionDirection("right");
    }
    setTimeout(() => {
      navigate(page);
      setActivePage(page);
      setTransitionIsActive(false);
    }, 1000);
  }

  return (
    <StyledContainer
      $incomingPage={incomingPage}
      $activePage={activePage}
      $transitionIsActive={transitionIsActive}
      $transitionDirection={transitionDirection}
      $activeSection={activeHomeSection}
    >
      <main>
        {children}
        <div className="transitionMask"></div>
      </main>
      <nav>
        <div className="homeNav">
          <button
            aria-label="La Croix Gratiot logo"
            onClick={() => handlePageChange("/")}
          >
            <LogoLGCDesktop />
          </button>
          <aside>
            <Link to={originalPath} language={"en"}>
              EN
            </Link>
            <Link to={originalPath} language={"fr"}>
              FR
            </Link>
          </aside>
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
    </StyledContainer>
  );
}
