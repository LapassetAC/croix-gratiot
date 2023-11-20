import React from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustationPage";
import LCGlogo from "assets/logos/logo-lcg-desktop.svg";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";

const StyledContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100vw;
  position: absolute;
  margin-top: 30px;
`;
const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  transition: left 1s;
  position: absolute;
  width: 100%;
  & > * {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }
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
    z-index: 2;
  }
  .pageContent {
    width: calc(100% - 270px);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 30px;
  }
`;
const StyledLinkContainer = styled.div`
  flex: 0 0 60px;
  border-left: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  a,
  button {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    writing-mode: sideways-lr;
    text-orientation: upright;
    text-align: end;
  }
  &.homeNav {
    border: none;
    justify-content: space-between;
    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      button {
        margin-top: 15px;
      }
    }
  }
`;

const Index = () => {
  const { pathname } = useLocation();

  const isNosPratiquesActive =
    pathname === "/nos-pratiques/" || pathname === "/la-degustation/";
  const isLadegustationActive = pathname === "/la-degustation/";

  return (
    <Layout>
      <StyledContainer>
        <StyledPage>
          <StyledLinkContainer className="homeNav">
            <Link to="/">
              <img src={LCGlogo} alt="" />
            </Link>
            <div>
              <button>EN</button>
              <button>FR</button>
            </div>
          </StyledLinkContainer>
          <HomePage className="pageContent" />
        </StyledPage>
        <StyledPage isActive={isNosPratiquesActive}>
          <StyledLinkContainer>
            <Link to="/nos-pratiques/">Nos Pratiques</Link>
          </StyledLinkContainer>
          <NosPratiquesPage />
        </StyledPage>
        <StyledPage isActive={isLadegustationActive}>
          <StyledLinkContainer>
            <Link to="/la-degustation/">La Dégustation</Link>
          </StyledLinkContainer>
          <LaDegustationPage />
        </StyledPage>
        <StyledPage>
          <StyledLinkContainer>
            <Link to="/nous-rencontrer/">Nous rencontrer</Link>
          </StyledLinkContainer>
          <LaDegustationPage />
        </StyledPage>
      </StyledContainer>
    </Layout>
  );
};

export default Index;
