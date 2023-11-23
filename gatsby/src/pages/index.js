import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustationPage";
import LCGlogoDektop from "assets/logos/logo-lcg-desktop.svg";
import LCGlogoMobile from "assets/logos/logo-lcg-mobile.svg";
import styled from "styled-components";
import { Router, Link, useLocation } from "@reach/router";
import ToggleBtn from "components/Layout/ToggleBtn";

const StyledMobileNav = styled.div`
  justify-content: space-between;
  align-items: center;
  header {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 15px;
  }
  .mobilePage {
    padding: 0 15px;
  }
`;
const LinksContainer = styled.section`
  transition: all ${(props) => props.theme.transitionTime}s;
  visibility: ${(props) => (props.isNavOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
  position: fixed;
  bottom: 0;
  top: 45px;
  width: 100%;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  z-index: 2;
  a,
  div {
    padding: 15px 0;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    border-top: 1.5px solid ${({ theme }) => theme.colors.black};
    line-height: normal;
  }
  button {
    text-transform: uppercase;
    margin-right: 15px;
    letter-spacing: 0.9px;
    font-size: 14px;
  }
`;
const StyledDesktopNav = styled.div`
  position: absolute;
  display: flex;
  overflow-x: hidden;
  width: 100vw;
  margin-top: 30px;
`;
const StyledPage = styled.div`
  transition: left 1s;
  position: absolute;
  width: 100%;
  display: flex;
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
    @media ${({ theme }) => theme.minWidth.md} {
      width: calc(100% - 270px);
    }
  }
`;
const StyledLinkContainer = styled.div`
  flex: 0 0 60px;
  border-left: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  a,
  button {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    writing-mode: sideways-lr;
    text-orientation: upright;
    text-align: end;
  }
  &:not(.homeNav) a {
    position: fixed;
  }
  &.homeNav {
    border: none;
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
  }
`;

const Index = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  const isNosPratiquesActive =
    pathname === "/nos-pratiques/" || pathname === "/la-degustation/";
  const isLadegustationActive = pathname === "/la-degustation/";

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      screenWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  return (
    <Layout>
      {isMobile ? (
        <StyledMobileNav>
          <header>
            <Link to="/">
              <img src={LCGlogoMobile} alt="" />
            </Link>
            <ToggleBtn onClick={toggleNav} isNavOpen={isNavOpen} />
          </header>
          <LinksContainer isNavOpen={isNavOpen}>
            <Link to="/nos-pratiques/">Nos Pratiques</Link>
            <Link to="/la-degustation/">La Dégustation</Link>
            <Link to="/nous-rencontrer/">Nous rencontrer</Link>
            <div>
              <button>EN</button>
              <button>FR</button>
            </div>
          </LinksContainer>
          <Router>
            <HomePage className="mobilePage" path="/" />
            <NosPratiquesPage path="/nos-pratiques/" />
            <LaDegustationPage path="/la-degustation/" />
          </Router>
        </StyledMobileNav>
      ) : (
        <StyledDesktopNav>
          <StyledPage>
            <StyledLinkContainer className="homeNav">
              <div>
                <Link to="/">
                  <img src={LCGlogoDektop} alt="" />
                </Link>
                <div>
                  <button>EN</button>
                  <button>FR</button>
                </div>
              </div>
            </StyledLinkContainer>
            <HomePage className="pageContent" />
          </StyledPage>
          <StyledPage isActive={isNosPratiquesActive}>
            <StyledLinkContainer>
              <Link to="/nos-pratiques/">Nos Pratiques</Link>
            </StyledLinkContainer>
            <NosPratiquesPage className="pageContent" />
          </StyledPage>
          <StyledPage isActive={isLadegustationActive}>
            <StyledLinkContainer>
              <Link to="/la-degustation/">La Dégustation</Link>
            </StyledLinkContainer>
            <LaDegustationPage className="pageContent" />
          </StyledPage>
          <StyledPage>
            <StyledLinkContainer>
              <Link to="/nous-rencontrer/">Nous rencontrer</Link>
            </StyledLinkContainer>
            <LaDegustationPage className="pageContent" />
          </StyledPage>
        </StyledDesktopNav>
      )}
    </Layout>
  );
};

export default Index;
