import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import PageContainer from "components/pages/PageContainer";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustationPage";
import LCGlogoMobile from "assets/logos/logo-lcg-mobile.svg";
import styled from "styled-components";
import { Router, Link, useLocation } from "@reach/router";
import ToggleBtn from "components/Layout/ToggleBtn";

const StyledMobileNav = styled.div`
  justify-content: space-between;
  align-items: center;
  header {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    z-index: 2;
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
const StyledMobileLinksContainer = styled.section`
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

const Index = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [activeSection, setActiveSection] = useState("white");

  const isNosPratiquesActive =
    pathname === "/nos-pratiques/" ||
    pathname === "/la-degustation/" ||
    pathname === "/nous-rencontrer/";
  const isLadegustationActive =
    pathname === "/la-degustation/" || pathname === "/nous-rencontrer/";
  const isNousRencontrerActive = pathname === "/nous-rencontrer/";

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const fromPageContainerActiveSection = (section) => {
    setActiveSection(section);
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

  useEffect(() => {
    const handleIsHeaderVisible = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = 74;
    };
    window.addEventListener("scroll", handleIsHeaderVisible);
    return () => {
      window.removeEventListener("scroll", handleIsHeaderVisible);
    };
  }, []);

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
          <StyledMobileLinksContainer isNavOpen={isNavOpen}>
            <Link to="/nos-pratiques/">Nos Pratiques</Link>
            <Link to="/la-degustation/">La Dégustation</Link>
            <Link to="/nous-rencontrer/">Nous rencontrer</Link>
            <div>
              <button>EN</button>
              <button>FR</button>
            </div>
          </StyledMobileLinksContainer>
          <Router>
            <HomePage className="mobilePage" path="/" />
            <NosPratiquesPage path="/nos-pratiques/" />
            <LaDegustationPage path="/la-degustation/" />
          </Router>
        </StyledMobileNav>
      ) : (
        <StyledDesktopNav>
          <PageContainer
            page="home"
            fromPageContainerActiveSection={fromPageContainerActiveSection}
          />
          <PageContainer
            page="nosPratiques"
            isActive={isNosPratiquesActive}
            activeSection={activeSection}
          />
          <PageContainer
            page="laDegustation"
            isActive={isLadegustationActive}
            activeSection={activeSection}
          />
          <PageContainer
            page="nousRencontrer"
            isActive={isNousRencontrerActive}
            activeSection={activeSection}
          />
        </StyledDesktopNav>
      )}
    </Layout>
  );
};

export default Index;
