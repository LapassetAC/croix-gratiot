import React, { useState, useEffect, Suspense } from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
  .page {
  }
`;

const StyledPage = styled.div`
  display: flex;
  transition: left 1s;
  position: absolute;
  background-color: white;
  width: 100%;
  &:nth-child(2) {
    left: ${({ isActive }) => (isActive ? "50px" : "calc(100vw - 100px)")};
    z-index: 1;
  }
  &:nth-child(3) {
    left: ${({ isActive }) => (isActive ? "100px" : "calc(100vw - 50px)")};
    z-index: 2;
  }
  .pageContent {
    height: 100vh;
    transition: opacity 1s;
  }
`;

const StyledLink = styled(Link)`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  padding: 15px;
`;

const Page = ({ page }) => {
  const { pathname } = useLocation();

  const isNosPratiquesActive =
    pathname === "/nos-pratiques/" || pathname === "/la-degustation/";
  const isLadegustationActive = pathname === "/la-degustation/";

  if (page === "Home") {
    return (
      <StyledPage>
        <StyledLink to="/">Home</StyledLink>
        <div className="pageContent">
          <h1>Home</h1>
          <StaticImage
            src="../assets/imgs/homeHeroImage.jpg"
            alt="TLMR - L’excellence accessible"
          />
        </div>
      </StyledPage>
    );
  }
  if (page === "Nos Pratiques") {
    return (
      <StyledPage isActive={isNosPratiquesActive}>
        <StyledLink to="/nos-pratiques/">Nos Pratiques</StyledLink>
        <div className="pageContent">
          <h1>Nos Pratiques</h1>
          <StaticImage
            src="../assets/imgs/homeHeroImage.jpg"
            alt="TLMR - L’excellence accessible"
          />
        </div>
      </StyledPage>
    );
  }
  if (page === "La Dégustation") {
    return (
      <StyledPage isActive={isLadegustationActive}>
        <StyledLink to="/la-degustation/">La Dégusatation</StyledLink>
        <div className="pageContent">
          <h1>La Dégusatation</h1>
          <StaticImage
            src="../assets/imgs/homeHeroImage.jpg"
            alt="TLMR - L’excellence accessible"
          />
        </div>
      </StyledPage>
    );
  }
};

const Index = () => {
  return (
    <Layout>
      <StyledContainer>
        <Page page="Home" />
        <Page page="Nos Pratiques" />
        <Page page="La Dégustation" />
        {/* {pages.map(({ title, path }) => {
          const isActive = path === pathname;
          return (
            <StyledPage key={title} $isActive={isActive}>
              <StyledLink to={path}>{title}</StyledLink>
              <div className="pageContent">
                <h1>{title}</h1>
                <StaticImage
                  src="../assets/imgs/homeHeroImage.jpg"
                  alt="TLMR - L’excellence accessible"
                />
              </div>
            </StyledPage>
          );
        })} */}
      </StyledContainer>
    </Layout>
  );
};

export default Index;
