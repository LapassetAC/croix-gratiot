import React from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustationPage";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";

const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  position: fixed;
`;
const StyledPage = styled.div`
  display: flex;
  transition: left 1s;
  position: absolute;
  background-color: white;
  width: 100%;
  overflow: hidden;
  &:nth-child(1) {
    position: relative;
  }
  &:nth-child(2) {
    left: ${({ isActive }) => (isActive ? "50px" : "calc(100vw - 100px)")};
    z-index: 1;
  }
  &:nth-child(3) {
    left: ${({ isActive }) => (isActive ? "100px" : "calc(100vw - 50px)")};
    z-index: 2;
  }
`;
const StyledLink = styled(Link)`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  padding: 15px;
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
          <StyledLink to="/">Home</StyledLink>
          <HomePage />
        </StyledPage>
        <StyledPage isActive={isNosPratiquesActive}>
          <StyledLink to="/nos-pratiques/">Nos Pratiques</StyledLink>
          <NosPratiquesPage />
        </StyledPage>
        <StyledPage isActive={isLadegustationActive}>
          <StyledLink to="/la-degustation/">La Dégusatation</StyledLink>
          <LaDegustationPage />
        </StyledPage>
      </StyledContainer>
    </Layout>
  );
};

export default Index;
