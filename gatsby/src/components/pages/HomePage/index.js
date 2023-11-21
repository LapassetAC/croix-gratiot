import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";
import LogoLCGHero from "assets/logos/logo-lcg-hero.svg";
import Grid from "components/global/Grid";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
    grid-row: 1/1;
    max-height: 90vh;
  }
  .heroContent {
    align-items: center;
    grid-column: 1 / 8;
    grid-row: 1/1;
    position: relative;
    h1 {
      font-family: democratica;
      color: ${({ theme }) => theme.colors.backgroundLight};
      font-size: 58px;
      &:first-child {
        grid-row: 0 / 3;
        grid-column: 2 / 8;
      }
      &:last-child {
        grid-column: 5 / 8;
        grid-row: 3/3;
      }
    }
    img {
      grid-row: 2/3;
      grid-column: 4 / 5;
      width: 100%;
    }
  }
  section {
    &.intro {
      font-family: Moderat Bold;
      font-size: 22px;
      text-align: center;
      margin: 135px 0;
      grid-column: 2 / 7;
      line-height: 160%;
    }
    &.orange {
      background-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const HomePage = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StaticImage
        src="../../../assets/imgs/homeHeroImage.jpg"
        alt=""
        layout="fullWidth"
      />
      <Grid className="heroContent">
        <h1>Domaine</h1>
        <img src={LogoLCGHero} alt="" />
        <h1>La Croix Gratiot</h1>
      </Grid>
      <section className="intro">
        Entre bassin de Thau et collines de pins découvrez des vins bio issu
        d’un travail en famille, de père en fille, dans le respect de la nature.
      </section>
      <section className="orange">
        <section className="leDomaine">
          Entre bassin de Thau et collines de pins découvrez des vins bio issu
          d’un travail en famille, de père en fille, dans le respect de la
          nature.
        </section>
      </section>
      <PostsSection />
    </StyledContainer>
  );
};

export default HomePage;
