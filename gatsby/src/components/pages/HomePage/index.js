import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";
import LogoLCGHero from "assets/logos/logo-lcg-hero.svg";

const StyledContainer = styled.div`
  .heroImg {
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
      /* font-size: 58px; */
      font-size: 4vw;
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
  section:not(.heroSection) {
    padding: 135px 0;
    &.intro {
      font-family: Moderat Bold;
      font-size: 22px;
      text-align: center;
      grid-column: 2 / 7;
      line-height: 160%;
    }
    &.orange {
      margin: 0 -180px 0 -60px;
      padding: 0 180px 0 60px;
      background-color: ${({ theme }) => theme.colors.orange};
      .leDomaine {
        h2 {
          grid-column: 3 / 8;
          z-index: 1;
        }
        .gatsby-image-wrapper {
          grid-column: 2 / 7;
          margin: -30px 0 30px;
        }
        p {
          grid-column: 4 / 8;
        }
      }
      .anaisYves {
        h2 {
          grid-column: 6 / 8;
          z-index: 1;
          grid-row: 1 / 2;
        }
        .gatsby-image-wrapper {
          grid-column: 4 / 7;
          margin-top: -120px;
          grid-row: 2 / 2;
        }
        p {
          grid-column: 1 / 4;
          grid-row: 2 / 2;
          align-self: flex-end;
        }
      }
    }
  }
`;

const HomePage = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="heroSection grid">
        <StaticImage
          className="heroImg"
          src="../../../assets/imgs/home/heroImage.jpg"
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
      <section className="orange">
        <section className="leDomaine grid">
          <h2 className="sectionTitle">
            Le
            <br />
            domaine
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/leDomaine.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <p>
            Au cœur des appellations Languedoc et Picpoul de Pinet, le domaine
            La Croix Gratiot est ancré dans un terroir riche en couleurs. Situé
            sur les collines argilo-calcaires et bercé par les alizés marins
            chargés des senteurs de garrigue, notre vignoble s’étend sur 35
            hectares.
          </p>
        </section>
        <section className="anaisYves grid">
          <h2 className="sectionTitle">
            Anaïs
            <br />
            et
            <br />
            Yves
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/anaisYves.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <p>
            Ici, la passion du vin se transmet de père en fille. Yves, avec son
            frère Hugues, a cultivé les vignes sur les terres familiales avant
            de fonder la cave en 2004. Sa fille, Anaïs, après avoir parcouru le
            monde et enrichi son savoir-faire, est revenue aux racines
            familiales, déterminée à perpétuer et à renouveler l'art vinicole.
          </p>
        </section>
      </section>
      <PostsSection />
    </StyledContainer>
  );
};

export default HomePage;
