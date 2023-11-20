import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledContainer = styled.div`
  width: 100%;
  grid-column: 1 / 4;
`;

const StyledImageContainer = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-family: "Democratica", sans-serif;
`;

const StyledNavigation = styled.div`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  display: block;
  padding: 15px;
`;
const StyledPageContent = styled.div``;

const NosPratiques = ({ currentPath }) => {
  const isActive = currentPath === "/nos-pratiques/";
  console.log(isActive);
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StaticImage
          src="../../../assets/imgs/nosPratiquesHeroImage.jpg"
          alt="nosPratiquesHeroImage"
          aspectRatio={1}
          layout="fullWidth"
        />
      </StyledImageContainer>
      <StyledTitle>
        <ul>
          <li>Une</li>
          <li>viticulture</li>
          <li>biodynamique</li>
        </ul>
      </StyledTitle>
    </StyledContainer>
  );
};

export default NosPratiques;
