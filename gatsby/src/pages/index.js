import React, { useState, useEffect, Suspense } from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import styled from "styled-components";
import { navigate } from "@reach/router";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const StyledLink = styled.div`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  padding: 15px;
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
  }

  &.homePage {
    transition: all 1s;
    transform: translateX(
      ${({ isNosPratiques }) => (isNosPratiques ? -1000 : 0)}px
    );
  }
  &.nosPratiques {
    transition: all 1s;
    transform: translateX(
      ${({ isNosPratiques }) => (isNosPratiques ? -1000 : 0)}px
    );
  }
`;

const Index = () => {
  const [isNosPratiques, setIsNosPratiques] = useState(false);

  const handleClick = () => {
    setIsNosPratiques(!isNosPratiques);
    navigate("/nos-pratiques/");
  };

  return (
    <Layout>
      <StyledContainer>
        <StyledLink onClick={handleClick}>La Croix Gratiot</StyledLink>
        <HomePage className="homePage" />
        <NosPratiquesPage className="nosPratiques" />
        <StyledLink isNosPratiques={isNosPratiques} onClick={handleClick}>
          Nos Pratiques
        </StyledLink>
      </StyledContainer>
    </Layout>
  );
};

export default Index;
