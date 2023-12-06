import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import winesData from "data/winesData";
import { Link } from "gatsby";
import ArrowBtn from "components/global/ArrowBtn";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const StyledNosVinsContainer = styled.section`
  text-align: center;
  h2 {
    grid-column: 1/8;
    br {
      display: none;
    }
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      br {
        display: block;
      }
    }
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    aspect-ratio: 0.9;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/5;
      grid-row: 1/4;
      aspect-ratio: 0.7;
    }
  }
  ul {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
    li {
      font-family: Moderat Mono Bold;
      margin-bottom: 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin-bottom: 30px;
      }
    }
  }
  a {
    grid-column: 1/8;
    margin: 15px auto 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
`;

const StyledContainer = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      gap: 30px;
      margin-bottom: 240px;
    }
  }
  .hero-section {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-template-rows: 1fr auto;
    }
  }
  .la-vinification {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-template-rows: repeat(5, auto);
    }
  }
  .elevage {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-template-rows: repeat(4, auto);
    }
  }
  .hero-image {
    grid-column: 1 / span 7;
    aspect-ratio: 1;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 1 / span 2;
      aspect-ratio: auto;
    }
  }
  .intro-image-1 {
    grid-column: 1 / 8;
    aspect-ratio: 290 / 195;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
  }
  .intro-image-2 {
    grid-column: 1 / 5;
    margin-top: 45px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 5;
      margin-top: 0;
    }
  }
  .team-image-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 8;
    }
  }
  .cepages-image-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 5;
    }
  }
  .cepages-image-2 {
    grid-column: 3 / 8;
    aspect-ratio: 200 / 167;
    margin-top: 30px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 7;
      margin-top: 0;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 3 / 6;
    }
  }
  .vinification-image-1 {
    grid-column: 1 / 5;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 4;
      grid-row: 4 / 6;
    }
  }
  .vinification-image-2 {
    grid-column: 1 / 8;
    margin-top: 45px;
    aspect-ratio: 630 / 430;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 3 / 5;
      margin-top: 0;
    }
  }
  .team-image-2 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 7;
    }
  }
  .elevage-image-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 6;
      grid-row: 2 / 4;
    }
  }
  .elevage-image-2 {
    grid-column: 1 / 5;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 6 / 8;
      grid-row: 3 / 5;
      margin-top: 0;
    }
  }

  .title {
    grid-column: 1 / 8;
    font-family: "Democratica", sans-serif;
    font-size: 45px;
    line-height: 40px;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1;
      align-self: end;
      grid-row: 1;
      font-size: 65px;
      line-height: 55px;
      margin-top: 0;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 90px;
      line-height: 70px;
    }
  }

  .hero-text {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      align-self: end;
    }
  }
  .intro-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 2;
      align-self: end;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 2 / 4;
    }
  }
  .intro-2 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5 / 8;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 5 / 7;
    }
  }
  .cepages-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5 / 8;
      grid-row: 2;
      margin-top: 0;
    }
  }
  .cepages-2 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 3;
    }
  }
  .vinification-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 7;
      grid-row: 2;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 3 / 6;
    }
  }
  .vinification-2 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 7;
      grid-row: 5 / 6;
      margin: 15px 0 0;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 4 / 6;
    }
  }
  .elevage-text {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 6;
      grid-row: 4 / 5;
      margin: 15px 0 0;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      margin: 30px 0 0;
    }
  }

  .large-text {
    grid-column: 1 / 8;
    font-family: "Moderat", sans-serif;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 210px;
      .line-break::before {
        content: " ";
        display: block;
      }
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 22px;
      line-height: 35px;
      margin-bottom: 240px;
    }
  }

  .team-description {
    grid-column: 1 / 8;
    font-family: "Moderat Mono", sans-serif;
    font-size: 10px;
    line-height: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 14px;
      line-height: 21px;
    }
  }
  .team-description.first {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 8;
      grid-row: 1;
      margin-top: 0;
    }
  }
  .team-description.second {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 8;
    }
  }

  .sectionTitle {
    font-size: 45px;
    line-height: 40px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 65px;
      line-height: 55px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 90px;
      line-height: 70px;
    }
  }
  .sectionTitle.nos-cepages {
    grid-column: 3 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
  }
  .sectionTitle.la-vinification {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 8;
    }
  }
  .sectionTitle.elevage {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1 / 1;
    }
  }
`;

const NosPratiques = () => {
  const [activeCategory, setActiveCategory] = useState("blanc");

  return (
    <StyledContainer>
      <section className="hero-section">
        <StaticImage
          className="hero-image"
          src="../assets/imgs/pratiques/nosPratiquesHeroImage.jpg"
          alt="nosPratiquesHeroImage"
          layout="fullWidth"
        />
        <h1 className="title">
          Une <br />
          viticulture <br />
          biodynamique
        </h1>
        <p className="hero-text">
          Cette approche, basée sur de l’observation, nous rapproche encore plus
          de nos vignes. <br />
          Nous nous formons chaque année et employons ses préparations dans la
          conduite de la vigne afin d’intensifier la vie du sol, de la plante et
          de leurs échanges.
        </p>
      </section>
      <section className="intro">
        <p className="large-text">
          <Trans>
            Depuis nos essais sur une parcelle en 2012, c’est maintenant
          </Trans>
          <span className="line-break">
            {" "}
            tout le vignoble que nous conduisons en biodynamie.
          </span>
        </p>
        <StaticImage
          className="intro-image-1"
          src="../assets/imgs/pratiques/nosPratiquesIntroImage1.jpg"
          alt="nosPratiquesIntroImage1"
          layout="fullWidth"
        />
        <p className="intro-1">
          Attaché au maintien de la biodiversité, nous plantons des haies multi
          essences en bordure de parcelles et sur les berges du ruisseau qui
          serpente le domaine. Nous avons également fait un essai dans une
          parcelle, tout les 8 rangs de vignes une rangée de plantes
          aromatiques.
        </p>
        <StaticImage
          className="intro-image-2"
          src="../assets/imgs/pratiques/nosPratiquesIntroImage2.jpg"
          alt="nosPratiquesIntroImage2"
          layout="fullWidth"
        />
        <p className="intro-2">
          Après les vendanges, aux premières pluies nous enherbons une partie du
          vignoble pour maintenir l’activité dans le sol.
        </p>
      </section>
      <section className="team">
        <StaticImage
          className="team-image-1"
          src="../assets/imgs/pratiques/TeamImage1.jpg"
          alt="TeamImage1"
          layout="fullWidth"
        />
        <p className="team-description first">
          Lénaïc & Karim,
          <br />
          l’équipe viticole
        </p>
      </section>
      <section className="nos-cepages">
        <h2 className="sectionTitle nos-cepages">
          Nos
          <br />
          cépages
        </h2>
        <StaticImage
          className="cepages-image-1"
          src="../assets/imgs/pratiques/cepagesImage1.jpg"
          alt="cepagesImage1"
          layout="fullWidth"
        />
        <p className="cepages-1">
          Piquepoul Blanc, Roussanne, Bourboulenc, Viognier, Sauvignon et Muscat
          petits grains composent notre encépagement blanc. Pour le rouge, nous
          cultivons de la Syrah, du Grenache Noir, du Mourvèdre, Piquepoul Noir,
          Niellucio et Pinot Noir.
        </p>
        <StaticImage
          className="cepages-image-2"
          src="../assets/imgs/pratiques/cepagesImage2.jpg"
          alt="cepagesImage2"
          layout="fullWidth"
        />
        <p className="cepages-2">
          Depuis plusieurs années, nous surgreffons certaines parcelles avec nos
          propres sélections de bois.
        </p>
      </section>
      <section className="la-vinification">
        <h2 className="sectionTitle la-vinification">
          La <br />
          vinification
        </h2>
        <StaticImage
          className="vinification-image-1"
          src="../assets/imgs/pratiques/VinificationImage1.jpg"
          alt="VinificationImage1"
          layout="fullWidth"
        />
        <p className="vinification-1">
          La majorité des vendanges est mécanique de nuit, pour certaines cuvées
          elle est manuelle. Chaque millésime est tellement différent, il faut
          savoir observer, goûter, décider de la bonne date de récolte et se
          faire discret pour accompagner les fermentations des raisins et
          laisser le terroir s’exprimer.
        </p>
        <StaticImage
          className="vinification-image-2"
          src="../assets/imgs/pratiques/VinificationImage2.jpg"
          alt="VinificationImage2"
          layout="fullWidth"
        />
        <p className="vinification-2">
          Les vendanges sont une période super excitante, une année de travail à
          la vigne pour obtenir des raisins, qui rentrent enfin à l’abris pour
          se transformer en vin. Les odeurs de fruits se propagent partout.
        </p>
      </section>
      <section className="team">
        <StaticImage
          className="team-image-2"
          src="../assets/imgs/pratiques/TeamImage2.jpg"
          alt="TeamImage2"
          layout="fullWidth"
        />
        <p className="team-description second">Thomas</p>
      </section>
      <section className="elevage">
        <h2 className="sectionTitle elevage">L'élevage</h2>
        <StaticImage
          className="elevage-image-1"
          src="../assets/imgs/pratiques/ElevageImage1.jpg"
          alt="ElevageImage1"
          layout="fullWidth"
        />
        <StaticImage
          className="elevage-image-2"
          src="../assets/imgs/pratiques/ElevageImage2.jpg"
          alt="ElevageImage2"
          layout="fullWidth"
        />
        <p className="elevage-text">
          Chaque année de nouveaux contenants sont achetés pour permettre une
          rotation mais aussi pour réaliser des expérimentations. Depuis 2012,
          nous réalisons des élevages en dolia de terre cuite, céramique et
          grès. Nous nous sommes équipés de cuves béton et de demi-muids.
          L’élevage est un sacré terrain de jeux.
        </p>
      </section>
      <StyledNosVinsContainer className="grid">
        <h2 className="sectionTitle">
          Nos <br />
          Vins
        </h2>
        {activeCategory === "blanc" ? (
          <StaticImage
            src="../assets/imgs/nosVins/blanc.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "rose" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rose.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "rouge" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rouge.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "autre" ? (
          <StaticImage
            src="../assets/imgs/nosVins/autre.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : null}
        <ul>
          {winesData.map(({ category, title }) => (
            <li key={category}>
              <Link
                onMouseEnter={() => setActiveCategory(category)}
                to={"/la-degustation/#" + category}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/la-degustation/">
          <ArrowBtn black>Voir tous nos vins</ArrowBtn>
        </Link>
      </StyledNosVinsContainer>
    </StyledContainer>
  );
};

export default NosPratiques;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
