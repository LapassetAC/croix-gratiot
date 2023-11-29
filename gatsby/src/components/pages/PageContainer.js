import React, { useEffect, useRef, useState } from "react";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustation";
import NousRencontrerPage from "components/pages/NousRencontrer";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";
import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "DataContext";
import { Router, Link, useLocation } from "@reach/router";

const StyledContainer = styled.div`
  transition: left 1s;
  position: absolute;
  width: 100%;
  display: flex;
  height: ${({ currentPageHeight }) => currentPageHeight}px;
  overflow: hidden;
  &:nth-child(1) {
    position: relative;
  }
  &:nth-child(2) {
    left: ${({ isActive }) => (isActive ? "60px" : "calc(100vw - 180px)")};
    z-index: 1;
  }
  &:nth-child(3) {
    left: ${({ isActive }) => (isActive ? "120px" : "calc(100vw - 120px)")};
    z-index: 2;
  }
  &:nth-child(4) {
    left: ${({ isActive }) => (isActive ? "180px" : "calc(100vw - 60px)")};
    z-index: 3;
  }
  .pageContent {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    @media ${({ theme }) => theme.minWidth.xl} {
      width: calc(100% - 270px);
    }
    &:not(.home) {
      @media ${({ theme }) => theme.minWidth.xl} {
        width: calc(100% - 270px);
        padding: 0 180px 0 60px;
      }
    }
  }
`;
const StyledLinkContainer = styled.div`
  flex: 0 0 60px;
  border-left: 2px solid
    ${({ theme, activeSection }) =>
      activeSection === "orange"
        ? theme.colors.black
        : activeSection === "red" || activeSection === "green"
        ? theme.colors.backgroundLight
        : theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
  background-color: ${({ theme, activeSection }) =>
    activeSection === "orange"
      ? theme.colors.orange
      : activeSection === "green"
      ? theme.colors.green
      : activeSection === "red"
      ? theme.colors.red
      : activeSection === "white"
      ? theme.colors.backgroundLight
      : theme.colors.backgroundLight};
  a,
  button {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    writing-mode: sideways-lr;
    text-orientation: upright;
    text-align: end;
    transition: color 1s;
    color: ${({ theme, activeSection }) =>
      activeSection === "orange"
        ? theme.colors.black
        : activeSection === "red" || activeSection === "green"
        ? theme.colors.backgroundLight
        : theme.colors.black};
  }
  &:not(.homeNav) {
    position: fixed;
    min-height: 100vh;
    width: 60px;
    top: 0;
    padding-top: 30px;
  }
  &.homeNav {
    border: none;
    z-index: 1;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: calc(100vh - 100px);
      position: fixed;
      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
          margin-top: 15px;
        }
      }
    }
    svg {
      path {
        transition: fill 1s;
        fill: ${({ theme, activeSection }) =>
          activeSection === "orange"
            ? theme.colors.black
            : activeSection === "red" || activeSection === "green"
            ? theme.colors.backgroundLight
            : theme.colors.black};
      }
    }
  }
`;

const PageContainer = ({
  page,
  isActive,
  fromPageContainerActiveSection,
  activeSection,
}) => {
  const fromPageActiveSection = (section) => {
    fromPageContainerActiveSection(section);
  };

  const [pageHeight, setPageHeight] = useState(null);

  const { currentPageHeight } = useContext(DataContext);

  const { pathname } = useLocation();

  useEffect(() => {
    setPageHeight(currentPageHeight);
    console.log(currentPageHeight);
  }, [pathname]);

  if (page === "home") {
    return (
      <StyledContainer currentPageHeight={pageHeight}>
        <StyledLinkContainer className="homeNav" activeSection={activeSection}>
          <div>
            <Link to="/">
              <LogoLGCDesktop />
            </Link>
            <div>
              <button>EN</button>
              <button>FR</button>
            </div>
          </div>
        </StyledLinkContainer>
        <HomePage
          className="pageContent home"
          fromPageActiveSection={fromPageActiveSection}
        />
      </StyledContainer>
    );
  }
  if (page === "nosPratiques") {
    return (
      <StyledContainer isActive={isActive} currentPageHeight={pageHeight}>
        <StyledLinkContainer activeSection={activeSection}>
          <Link to="/nos-pratiques/">Nos Pratiques</Link>
        </StyledLinkContainer>
        <NosPratiquesPage className="pageContent" />
      </StyledContainer>
    );
  }
  if (page === "laDegustation") {
    return (
      <StyledContainer isActive={isActive} currentPageHeight={pageHeight}>
        <StyledLinkContainer activeSection={activeSection}>
          <Link to="/la-degustation/">La Dégustation</Link>
        </StyledLinkContainer>
        <LaDegustationPage className="pageContent" />
      </StyledContainer>
    );
  }
  if (page === "nousRencontrer") {
    return (
      <StyledContainer isActive={isActive} currentPageHeight={pageHeight}>
        <StyledLinkContainer activeSection={activeSection}>
          <Link to="/nous-rencontrer/">Nous rencontrer</Link>
        </StyledLinkContainer>
        <NousRencontrerPage className="pageContent" />
      </StyledContainer>
    );
  }
};

export default PageContainer;
