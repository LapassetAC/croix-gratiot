import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";
import LogoLCGHero from "assets/logos/logo-lcg-hero.svg";
// import Grid from "components/global/Grid";

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
      left: 0;
      width: 100%;
    }
  }
`;

const HomePage = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="grid">
        <StaticImage
          src="../../../assets/imgs/homeHeroImage.jpg"
          alt=""
          layout="fullWidth"
          quality="90"
        />
        <div className="heroContent grid">
          <h1>Domaine</h1>
          <img src={LogoLCGHero} alt="" />
          <h1>La Croix Gratiot</h1>
        </div>
      </section>
      <div className="grid">
        <section className="intro">
          Entre bassin de Thau et collines de pins découvrez des vins bio issu
          d’un travail en famille, de père en fille, dans le respect de la
          nature.
        </section>
      </div>
      <section className="orange grid">
        <section className="leDomaine">
          <h2 className="sectionTitle">Le domaine </h2>
          <StaticImage
            src="../../../assets/imgs/home/le-domaine.jpg"
            alt=""
            layout="fullWidth"
            quality="90"
          />
          Au cœur des appellations Languedoc et Picpoul de Pinet, le domaine La
          Croix Gratiot est ancré dans un terroir riche en couleurs. Situé sur
          les collines argilo-calcaires et bercé par les alizés marins chargés
          des senteurs de garrigue, notre vignoble s’étend sur 35 hectares.
        </section>
      </section>
      <PostsSection />
    </StyledContainer>
  );
};

export default HomePage;
