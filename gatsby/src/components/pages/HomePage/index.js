import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  transition: flex 1s;
  flex: 0 0 ${({ isActive }) => (isActive ? 90 : 10)}vw;
`;
const StyledNavigation = styled.div`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  display: block;
  padding: 15px;
`;
const StyledPageContent = styled.div``;

const HomePage = ({ currentPath }) => {
  const isActive = currentPath === "/";

  return (
    <StyledContainer isActive={isActive}>
      <StyledNavigation>
        <Link to="/">La Croix Gratiot</Link>
      </StyledNavigation>
      <StyledPageContent>
        <h1>HomePage</h1>
        <StaticImage
          src="../../../assets/imgs/homeHeroImage.jpg"
          alt="TLMR - L’excellence accessible"
        />
        <PostsSection />
      </StyledPageContent>
    </StyledContainer>
  );
};

export default HomePage;
