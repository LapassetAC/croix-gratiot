import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
`;

const HomePage = () => {
  return (
    <StyledContainer>
      <h1>HomePage</h1>
      <StaticImage src="../../../assets/imgs/homeHeroImage.jpg" alt="" />
      <PostsSection />
    </StyledContainer>
  );
};

export default HomePage;
