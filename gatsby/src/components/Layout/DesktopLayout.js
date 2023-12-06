import React, { useState } from "react";
import styled from "styled-components";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";
import { useContext } from "react";
import { Context } from "data/Context";
import { useI18next, Link } from "gatsby-plugin-react-i18next";
import Footer from "./Footer";

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
      $incomingPage === "/nos-pratiques/"
        ? "60px calc(100vw - 180px) 60px 60px"
        : $incomingPage.startsWith("/la-degustation/")
        ? "60px 60px calc(100vw - 180px)  60px"
        : $incomingPage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : "calc(100vw - 180px) 60px 60px 60px"};
    & > div {
      transition: all 0.4s;
      border-left: 2px solid;
      border-color: ${({ $activeSection, theme }) =>
        $activeSection === "red" || $activeSection === "green"
          ? theme.colors.backgroundLight
          : theme.colors.brandBrown};
      padding: 30px 0 0 17.5px;
      a,
      button {
        pointer-events: all;
        writing-mode: sideways-lr;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        font-size: 18px;
        text-align: end;
        text-orientation: upright;
        transition: color 0.2s;
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
        svg {
          transition: fill 0.2s;
          fill: ${({ $activeSection, theme }) =>
            $activeSection === "red" || $activeSection === "green"
              ? theme.colors.backgroundLight
              : theme.colors.brandBrown};
        }
        aside {
          display: flex;
          flex-direction: column;
          a {
            margin-top: 15px;
            &.active {
              text-decoration-line: underline;
              text-decoration-thickness: 2px;
              text-underline-offset: 4px;
            }
          }
        }
      }
    }
  }
  main {
    padding: 15px 15px 0 0;
    position: relative;
    margin: ${({ $activePage }) =>
      $activePage === "/nos-pratiques/"
        ? "0 120px 0 120px"
        : $activePage.startsWith("/la-degustation/")
        ? "0 60px 0 180px"
        : $activePage === "/nous-rencontrer/"
        ? "0 0 0 240px"
        : "0 180px 0 60px"};
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
  const { activeHomeSection, setActiveHomeSection } = useContext(Context);

  const { originalPath, navigate } = useI18next();

  const [activePage, setActivePage] = useState(originalPath);
  const [incomingPage, setIncomingPage] = useState(originalPath);
  const [transitionIsActive, setTransitionIsActive] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("left");

  function handlePageChange(page) {
    if (activeHomeSection === "red" || activeHomeSection === "green") {
      setActiveHomeSection("white");
    }
    setIncomingPage(page);
    setTransitionIsActive(true);
    if (originalPath === "/") {
      setTransitionDirection("left");
    }
    if (
      (originalPath === "/nos-pratiques/" && page === "/la-degustation/") ||
      page === "/nous-rencontrer/"
    ) {
      setTransitionDirection("left");
    }
    if (originalPath === "/nos-pratiques/" && page === "/") {
      setTransitionDirection("right");
    }
    if (
      (originalPath === "/la-degustation/" && page === "/nos-pratiques/") ||
      page === "/"
    ) {
      setTransitionDirection("right");
    }
    if (originalPath === "/la-degustation/" && page === "/nous-rencontrer/") {
      setTransitionDirection("left");
    }
    if (originalPath === "/nous-rencontrer/") {
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
        <Footer handlePageChange={handlePageChange} />
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
            <Link to={originalPath} language={"en"} activeClassName="active">
              EN
            </Link>
            <Link to={originalPath} language={"fr"} activeClassName="active">
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
