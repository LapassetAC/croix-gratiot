import React, { useState, useEffect } from "react";
// import HomePage from "components/pages/HomePage";
// import NosPratiquesPage from "components/pages/NosPratiques";
// import LaDegustationPage from "components/pages/LaDegustation";
// import NousRencontrerPage from "../pages/NousRencontrer";
// import MentionsLegalesPage from "components/pages/MentionsLegales";
import LCGlogoMobile from "assets/logos/logo-lcg-mobile.svg";
import styled from "styled-components";
// import { Router, Link } from "@reach/router";
import { Link } from "gatsby";
import ToggleBtn from "./ToggleBtn";

const StyledContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all ${(props) => props.theme.transitionTime}s;
  visibility: ${(props) => (props.$isNavOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isNavOpen ? "1" : "0")};
  position: fixed;
  bottom: 0;
  top: 45px;
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  z-index: 2;
  .menuItemsWrapper {
    flex-grow: 1;
  }
  .menuItem {
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
  .navigationImage {
    margin-bottom: 30px;
  }
  footer {
    display: none;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: grid;
    }
  }
`;

export default function MobileLayout({ children }) {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isNavOpen]);

  return (
    <StyledContainer>
      <header>
        <Link onClick={closeNav} to="/">
          <img src={LCGlogoMobile} alt="" />
        </Link>
        <ToggleBtn onClick={toggleNav} $isNavOpen={isNavOpen} />
      </header>
      <StyledMobileLinksContainer $isNavOpen={isNavOpen}>
        <div className="menuItemsWrapper">
          <Link className="menuItem" onClick={closeNav} to="/nos-pratiques/">
            Nos Pratiques
          </Link>
          <Link className="menuItem" onClick={closeNav} to="/la-degustation/">
            La Dégustation
          </Link>
          <Link className="menuItem" onClick={closeNav} to="/nous-rencontrer/">
            Nous rencontrer
          </Link>
          <div className="menuItem">
            <button>EN</button>
            <button>FR</button>
          </div>
        </div>
        <StaticImage
          className="navigationImage"
          src="../../assets/imgs/nav/navigationImage.jpg"
          alt="navigationImage"
          layout="fullWidth"
        />
        <Footer />
      </StyledMobileLinksContainer>
      {children}
      {/* <Router>
        <HomePage className="mobilePage" path="/" />
        <NosPratiquesPage path="/nos-pratiques/" />
        <LaDegustationPage path="/la-degustation/" />
        <NousRencontrerPage path="/nous-rencontrer/" />
        <MentionsLegalesPage path="/mentions-legales/" />
      </Router> */}
    </StyledContainer>
  );
}
