import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { graphql } from "gatsby";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";
import AnchorNavBar from "components/pages/LaDegustation/AnchorNav";
import { Element } from "react-scroll";
import theme from "styles/theme";
import WineCard from "components/global/WineCard";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
  .hero-section {
    grid-template-rows: 1fr auto;
    margin-bottom: 90px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 110px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      margin-bottom: 180px;
    }
    .degustationHeroImage {
      aspect-ratio: 1;
      @media ${({ theme }) => theme.minWidth.sm} {
        aspect-ratio: 0.68;
        grid-column: 1 / 4;
        grid-row: 1 / 3;
      }
    }
    .hero-title {
      grid-column: 1 / span 7;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 8;
        grid-row: 1 / 2;
        align-self: end;
        margin-bottom: 30px;
      }
    }
    .hero-text {
      grid-column: 1 / span 7;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 8;
        grid-row: 2 / 3;
      }
    }
  }
  .wine-section {
    padding-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      padding-bottom: 210px;
      grid-template-rows: auto 1fr;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      padding-bottom: 240px;
    }
  }
  .category-title {
    grid-column: 3 / 8;
    white-space: pre-line;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 52px;
      line-height: 40px;
      grid-column: 2 / 4;
      grid-row: 1 / 2;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      font-size: 80px;
      line-height: 55px;
    }
  }
  .category-quote {
    grid-column: 1 / 8;
    font-family: "Moderat Bold Italic";
    text-align: center;
    white-space: pre-line;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
      align-self: center;
    }
    p {
      margin: 5px 0 15px;
      font-size: 12px;
      line-height: 150%;
      @media ${({ theme }) => theme.minWidth.sm} {
        font-size: 14px;
      }
      @media ${({ theme }) => theme.minWidth.lg} {
        font-size: 16px;
      }
    }
    .lines.top {
      translate: 25px;
    }
    .lines.bottom {
      transform: rotate(180deg);
      translate: -25px;
    }
  }
  .wineCardsContainer {
    grid-column: 2 / 7;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1 / 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 15px;
      row-gap: 90px;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      column-gap: 30px;
      row-gap: 120px;
    }
  }
`;

const StyledColorSquare = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  padding-top: 100%;
  background-color: ${(props) => props.color};
  margin: auto 0;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const LaDegustation = ({ data }) => {
  const wines = data.allSanityWine.nodes;
  const categories = Array.from(new Set(wines.map((wine) => wine.category)));

  return (
    <StyledContainer>
      <section className="hero-section grid">
        <StaticImage
          className="degustationHeroImage"
          src="../assets/imgs/degustation/degustationHeroImage.png"
          alt="degustationHeroImage"
          layout="fullWidth"
        />
        <h1 className="sectionTitle hero-title">
          La
          <br /> dégustation
        </h1>
        <p className="hero-text">
          Explorez notre palette de vins où chaque cuvée compose sa propre
          musique.
        </p>
      </section>
      <AnchorNavBar data={categories} />
      {categories.map((category) => (
        <Element name={category} key={category} id={category}>
          <div className={`${category} wine-section grid`}>
            <StyledColorSquare
              color={
                category === "blanc"
                  ? theme.colors.yellow
                  : category === "rose"
                  ? theme.colors.pink
                  : category === "rouge"
                  ? theme.colors.red
                  : category === "autre"
                  ? theme.colors.orange
                  : null
              }
            />
            <h2 className="sectionTitle category-title">
              {category === "blanc" && "Le\nParadis\nBlanc"}
              {category === "rose" && "La Vie\nen\nRose"}
              {category === "rouge" && "Rue\nRouge"}
              {category === "autre" && "J'ai\nFantaisie"}
            </h2>
            <div className="category-quote">
              <img
                className="top lines"
                src={categoryQuoteLines}
                alt="Quote lines"
              />
              <p>
                {category === "blanc" &&
                  "« Je m'en irai dormir dans le paradis blanc\nOù les nuits sont si longues\nqu'on en oublie le temps\nTout seul avec le vent\nComme dans mes rêves d'enfant »"}
                {category === "rose" &&
                  "« Quand il me prend dans ses bras\nQu'il me parle tout bas\nJe vois la vie en rose »"}
                {category === "rouge" &&
                  "« L'amour est une chose étrange. Il peut vous faire faire des choses que vous n'auriez jamais cru possibles. »"}
                {category === "autre" &&
                  "« J'ai fantaisie de mettre dans notre vie\nUn p'tit grain de fantaisie, youpi, youpi »"}
              </p>
              <img
                className="bottom lines"
                src={categoryQuoteLines}
                alt="Quote lines"
              />
            </div>
            <div className="wineCardsContainer">
              {wines
                .filter((wine) => wine.category === category)
                .map((wine) => (
                  <WineCard wine={wine} key={wine.title} />
                ))}
            </div>
          </div>
        </Element>
      ))}
    </StyledContainer>
  );
};

export default LaDegustation;

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
    allSanityWine {
      nodes {
        title
        slug {
          current
        }
        category
        certification
        cepages
        productImage {
          asset {
            url
            gatsbyImageData
          }
        }
        portraitImage {
          asset {
            url
            gatsbyImageData
          }
        }
      }
    }
  }
`;
