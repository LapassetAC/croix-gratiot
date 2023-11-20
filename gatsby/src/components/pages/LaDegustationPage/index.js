import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
`;

const HomePage = () => {
  return (
    <StyledContainer>
      <h1>La Degustation</h1>
      <StaticImage src="../../../assets/imgs/homeHeroImage.jpg" alt="" />
    </StyledContainer>
  );
};

export default HomePage;
