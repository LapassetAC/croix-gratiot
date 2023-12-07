import React, { useState, useEffect } from "react";
import LCGlogoMobile from "assets/logos/logo-lcg-mobile.svg";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import Footer from "../Footer";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next, Link } from "gatsby-plugin-react-i18next";

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
  main {
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
    border-top: 1.5px solid ${({ theme }) => theme.colors.black};
    letter-spacing: 0.9px;
    text-transform: uppercase;

    &.language {
      display: flex;
      a {
        margin-right: 15px;
        &.active {
          text-decoration-line: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
        }
      }
    }
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
  const { originalPath } = useI18next();
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
          <div className="menuItem language">
            <Link to={originalPath} language={"fr"} activeClassName="active">
              FR
            </Link>
            <Link to={originalPath} language={"en"} activeClassName="active">
              EN
            </Link>
          </div>
        </div>
        <StaticImage
          className="navigationImage"
          src="../../../assets/imgs/nav/navigationImage.jpg"
          alt="navigationImage"
          layout="fullWidth"
        />
        <Footer />
      </StyledMobileLinksContainer>
      <main>{children}</main>
    </StyledContainer>
  );
}
