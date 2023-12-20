import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import winesData from "data/winesData";
import { Link } from "gatsby-plugin-react-i18next";
import ArrowBtn from "components/global/ArrowBtn";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { Seo } from "components/global/Seo";
import NosVinsSection from "components/global/NosVinsSection";

const StyledContainer = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 2 / 4;
    }
  }
  .intro-2 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5 / 8;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
      margin: 30px 0 0;
    }
  }

  .largeText {
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
      .line-break::before {
        content: " ";
        display: block;
      }
    }
    @media ${({ theme }) => theme.minWidth.lg} {
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
          className="hero-image hero-img"
          src="../assets/imgs/pratiques/nosPratiquesHeroImage.jpg"
          alt="nosPratiquesHeroImage"
          layout="fullWidth"
          loading="eager"
        />
        <h1 className="title">
          <Trans>Une</Trans>
          <br />
          <Trans>viticulture</Trans>
          <br />
          <Trans>biodynamique</Trans>
        </h1>
        <p className="hero-text">
          <Trans>
            Cette approche, basée sur l’observation, nous rapproche encore plus
            de nos vignes.
          </Trans>
          <br />
          <Trans>
            Nous nous formons chaque année et employons ces préparations dans la
            conduite de la vigne afin d’intensifier la vie du sol, de la plante
            et de leurs échanges.
          </Trans>
        </p>
      </section>
      <section className="intro">
        <p className="largeText">
          <Trans>
            Depuis nos essais sur une parcelle en 2012, c’est maintenant
          </Trans>{" "}
          <span className="line-break">
            <Trans>tout le vignoble que nous conduisons en biodynamie.</Trans>
          </span>
        </p>
        <StaticImage
          className="intro-image-1"
          src="../assets/imgs/pratiques/nosPratiquesIntroImage1.jpg"
          alt="nosPratiquesIntroImage1"
          layout="fullWidth"
        />
        <p className="intro-1">
          <Trans>
            Attachés au maintien de la biodiversité, nous plantons des haies
            multi-essences en bordure de parcelles et sur les berges du ruisseau
            qui serpente le domaine. Nous avons également fait un essai dans une
            parcelle, tout les 8 rangs de vignes une rangée de plantes
            aromatiques.
          </Trans>
        </p>
        <StaticImage
          className="intro-image-2"
          src="../assets/imgs/pratiques/nosPratiquesIntroImage2.jpg"
          alt="nosPratiquesIntroImage2"
          layout="fullWidth"
        />
        <p className="intro-2">
          <Trans>
            Après les vendanges, aux premières pluies nous enherbons une partie
            du vignoble pour maintenir l’activité dans le sol.
          </Trans>
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
          <Trans>Thomas, la vigne n'a pas de secret pour lui.</Trans>
        </p>
      </section>
      <section className="nos-cepages">
        <h2 className="sectionTitle nos-cepages">
          <Trans>Nos</Trans>
          <br />
          <Trans>cépages</Trans>
        </h2>
        <StaticImage
          className="cepages-image-1"
          src="../assets/imgs/pratiques/cepagesImage1.jpg"
          alt="cepagesImage1"
          layout="fullWidth"
        />
        <p className="cepages-1">
          <Trans>
            Piquepoul Blanc, Roussanne, Bourboulenc, Viognier, Sauvignon et
            Muscat petits grains composent notre encépagement blanc. Pour le
            rouge, nous cultivons de la Syrah, du Grenache Noir, du Mourvèdre,
            Piquepoul Noir, Niellucio et Pinot Noir.
          </Trans>
        </p>
        <StaticImage
          className="cepages-image-2"
          src="../assets/imgs/pratiques/cepagesImage2.jpg"
          alt="cepagesImage2"
          layout="fullWidth"
        />
        <p className="cepages-2">
          <Trans>
            Depuis plusieurs années, nous surgreffons certaines parcelles avec
            nos propres sélections de bois.
          </Trans>
        </p>
      </section>
      <section className="la-vinification">
        <h2 className="sectionTitle la-vinification">
          <Trans>La</Trans>
          <br />
          <Trans>vinification</Trans>
        </h2>
        <StaticImage
          className="vinification-image-1"
          src="../assets/imgs/pratiques/VinificationImage1.jpg"
          alt="VinificationImage1"
          layout="fullWidth"
        />
        <p className="vinification-1">
          <Trans>
            La majorité des vendanges est mécanique de nuit, pour certaines
            cuvées elle sont manuelles. Chaque millésime est tellement
            différent, il faut savoir observer, goûter, décider de la bonne date
            de récolte et se faire discret pour accompagner les fermentations
            des raisins et laisser le terroir s’exprimer.
          </Trans>
        </p>
        <StaticImage
          className="vinification-image-2"
          src="../assets/imgs/pratiques/VinificationImage2.jpg"
          alt="VinificationImage2"
          layout="fullWidth"
        />
        <p className="vinification-2">
          <Trans>
            Les vendanges sont une période super excitante, une année de travail
            à la vigne pour obtenir des raisins, qui rentrent enfin à l'abri
            pour se transformer en vin. Les odeurs de fruits se propagent
            partout.
          </Trans>
        </p>
      </section>
      <section className="team">
        <StaticImage
          className="team-image-2"
          src="../assets/imgs/pratiques/TeamImage2.jpg"
          alt="TeamImage2"
          layout="fullWidth"
        />
        <p className="team-description second">
          <Trans>
            À la vigne, à la cave ou à la livraison, Lenaïc associe polyvalence
            et bonne humeur ! Karim aime le travail bien fait, toujours souriant
            !
          </Trans>
        </p>
      </section>
      <section className="elevage">
        <h2 className="sectionTitle elevage">
          <Trans>L'élevage</Trans>
        </h2>
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
          <Trans>
            Chaque année, de nouveaux contenants sont achetés pour permettre une
            rotation mais aussi pour réaliser des expérimentations. Depuis 2012,
            nous réalisons des élevages en dolia de terre cuite, céramique et
            grès. Nous nous sommes équipés de cuves béton et de demi-muids.
            L’élevage est un sacré terrain de jeux.
          </Trans>
        </p>
      </section>
      <NosVinsSection />
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

export const Head = () => <Seo pageTitle="Nos Pratiques" />;
