import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    margin-right: 15px;
    grid-column: 1 / span 7;
  }
  section {
    font-family: Moderat Bold;
    text-align: center;
    margin: 135px 0;
    grid-column: 2 / 7;
  }
`;

const HomePage = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StaticImage src="../../../assets/imgs/homeHeroImage.jpg" alt="" />
      <section>
        Entre bassin de Thau et collines de pins découvrez des vins bio issu
        d’un travail en famille, de père en fille, dans le respect de la nature.
      </section>
      <PostsSection />
    </StyledContainer>
  );
};

export default HomePage;
