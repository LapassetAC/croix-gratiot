import React, { useState, useEffect } from "react";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustation";
import NousRencontrerPage from "../pages/NousRencontrer";
import MentionsLegalesPage from "components/pages/MentionsLegales";
import LCGlogoMobile from "assets/logos/logo-lcg-mobile.svg";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import ToggleBtn from "components/Layout/ToggleBtn";

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
  transition: all ${(props) => props.theme.transitionTime}s;
  visibility: ${(props) => (props.$isNavOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isNavOpen ? "1" : "0")};
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

export default function MobileLayout() {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
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
        <Link to="/">
          <img src={LCGlogoMobile} alt="" />
        </Link>
        <ToggleBtn onClick={toggleNav} $isNavOpen={isNavOpen} />
      </header>
      <StyledMobileLinksContainer $isNavOpen={isNavOpen}>
        <Link onClick={toggleNav} to="/nos-pratiques/">
          Nos Pratiques
        </Link>
        <Link onClick={toggleNav} to="/la-degustation/">
          La Dégustation
        </Link>
        <Link onClick={toggleNav} to="/nous-rencontrer/">
          Nous rencontrer
        </Link>
        <div>
          <button>EN</button>
          <button>FR</button>
        </div>
      </StyledMobileLinksContainer>
      <Router>
        <HomePage className="mobilePage" path="/" />
        <NosPratiquesPage path="/nos-pratiques/" />
        <LaDegustationPage path="/la-degustation/" />
        <NousRencontrerPage path="/nous-rencontrer/" />
        <MentionsLegalesPage path="/mentions-legales/" />
      </Router>
    </StyledContainer>
  );
}
