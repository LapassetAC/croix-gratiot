import React from "react";
import { Link, graphql } from "gatsby";
import { styled } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";
import theme from "styles/theme";
import Arrow from "assets/icons/Arrow";
import VoirAussi from "./VoirAussiSection";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.div`
  padding: 60px 15px 0;
  .hero-section {
    row-gap: 30px;
    grid-template-rows: repeat(4, auto);
    .product-image {
      grid-column: 1 / 8;
      height: 260px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 2 / 3;
        grid-row: 1 / 5;
        height: 370px;
      }
      @media ${({ theme }) => theme.minWidth.lg} {
        height: 560px;
      }
    }
    h1 {
      grid-column: 1 / 8;
      text-align: center;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 7;
        grid-row: 1 / 2;
        align-self: end;
      }
    }
    .cepages {
      grid-column: 1 / 8;
      text-align: center;
      font-family: "Moderat Mono Light";
      font-size: 18px;
      line-height: 150%;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 7;
        grid-row: 2 / 3;
      }
      @media ${({ theme }) => theme.minWidth.lg} {
        margin-top: -15px;
      }
    }
    .bio-logos {
      grid-column: 1 / 8;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 7;
        grid-row: 3 / 4;
      }
      & > :nth-child(1) {
        height: 29px;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: 34px;
        }
        @media ${({ theme }) => theme.minWidth.lg} {
          height: 51px;
        }
      }
      & > :nth-child(2) {
        height: 38px;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: 45px;
        }
        @media ${({ theme }) => theme.minWidth.lg} {
          height: 66px;
        }
      }
    }
    .quote {
      grid-column: 1 / 8;
      text-align: center;
      font-family: "Moderat Bold Italic";
      white-space: pre-line;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 4 / 7;
        grid-row: 4 / 5;
      }
      p {
      }
      .lines.top {
        translate: 25px;
        margin: 15px 0 5px;
      }
      .lines.bottom {
        transform: rotate(180deg);
        translate: -25px;
        margin-top: 15px;
      }
    }
  }
  .main-section {
    margin: 120px 0;
    row-gap: 60px;
    @media ${({ theme }) => theme.minWidth.lg} {
      row-gap: 90px;
    }
    .intro-paragraph {
      grid-column: 1 / 8;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 3 / 8;
      }
      .title {
        font-family: "Moderat Bold";
      }
      .adjectif {
        font-family: "Moderat Italic";
        text-transform: lowercase;
      }
    }
    .description,
    .vinification,
    .degustation {
      grid-column: 1 / 8;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 3 / 8;
      }
    }
    h2 {
      font-family: "Moderat Mono";
      font-size: 16px;
      line-height: 150%;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    iframe {
      width: 100%;
      min-height: 210px;
      grid-column: 1 / 8;
      margin-top: -30px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 3 / 6;
        min-height: 240px;
      }
      @media ${({ theme }) => theme.minWidth.lg} {
        margin-top: -60px;
        min-height: 370px;
      }
    }
    .wine-info {
      grid-column: 1 / 8;
      display: grid;
      gap: 30px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: 1 / 3;
        grid-row: 1 / 4;
      }
      .category {
        display: flex;
        align-items: center;
        column-gap: 15px;
      }
      .buttons {
        display: grid;
        gap: 15px;
      }
    }
  }
  .landscape-image {
    grid-column: 1 / 8;
    margin-top: 45px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 7;
      margin-top: 60px;
    }
  }
`;

const StyledColorSquare = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
`;

export default function WineTemplate({ data }) {
  const voirAussiWines = data.allSanityWine.nodes;
  const {
    category,
    title,
    productImage,
    cepages,
    certification,
    videoUrl,
    landscapeImage,
    alcool,
    millesime,
    formats,
    quote,
    adjectif,
    intro,
    degustation,
    vinification,
  } = data.sanityWine;

  const imageProduct = getImage(productImage.asset.gatsbyImageData);
  const imageLandscape = landscapeImage
    ? getImage(landscapeImage.asset.gatsbyImageData)
    : null;

  const { language } = useI18next();
  const fallbackLanguage = "fr";
  const getValueForLanguage = (fieldArray, language) => {
    const fieldItem =
      fieldArray.find((item) => item._key === language) ||
      fieldArray.find((item) => item._key === fallbackLanguage);
    return fieldItem ? fieldItem.value : "";
  };

  return (
    <StyledContainer>
      <section id="print" className="hero-section grid">
        <GatsbyImage
          className="product-image"
          image={imageProduct}
          alt={title}
          objectFit="contain"
        />
        <h1 className="sectionTitle">{title}</h1>
        <p className="cepages">{cepages}</p>
        {certification && (
          <div className="bio-logos">
            <img src={EUBioLogo} alt="Certification Bio EU" />
            <img src={FRBioLogo} alt="Certification Bio FR" />
          </div>
        )}
        {quote.length > 0 && (
          <div className="quote">
            <img
              className="top lines"
              src={categoryQuoteLines}
              alt="Quote lines"
            />
            <p>
              {getValueForLanguage(
                data.sanityWine.quote,
                language,
                fallbackLanguage
              )}
            </p>
            <img
              className="bottom lines"
              src={categoryQuoteLines}
              alt="Quote lines"
            />
          </div>
        )}
      </section>
      <section id="print" className="main-section grid">
        <p className="intro-paragraph">
          <span className="title">{title}</span>
          {adjectif.length > 0 && (
            <span className="adjectif">
              ,{" "}
              {getValueForLanguage(
                data.sanityWine.adjectif,
                language,
                fallbackLanguage
              )}
              .{" "}
            </span>
          )}
          {intro.length > 0 && (
            <span className="intro">
              {getValueForLanguage(
                data.sanityWine.intro,
                language,
                fallbackLanguage
              )}
            </span>
          )}
        </p>
        <div className="description">
          <h2>
            <Trans>Le mot des vignerons</Trans>
          </h2>
          <p>
            {getValueForLanguage(
              data.sanityWine.description,
              language,
              fallbackLanguage
            )}
          </p>
        </div>
        {videoUrl && <iframe src={videoUrl} title="Vidéo du vin"></iframe>}
        {vinification.length > 0 && (
          <div className="vinification">
            <h2>Vinification</h2>
            <p>
              {getValueForLanguage(
                data.sanityWine.vinification,
                language,
                fallbackLanguage
              )}
            </p>
          </div>
        )}
        {degustation.length > 0 && (
          <div className="degustation">
            <h2>
              <Trans>Dégustation</Trans>
            </h2>
            <p>
              {getValueForLanguage(
                data.sanityWine.degustation,
                language,
                fallbackLanguage
              )}
            </p>
          </div>
        )}
        <div className="wine-info">
          <div>
            <h2>
              <Trans>Catégorie</Trans>
            </h2>
            <div className="category">
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
              <p>
                {category === "blanc" && "Le\nParadis\nBlanc"}
                {category === "rose" && "La Vie\nen\nRose"}
                {category === "rouge" && "Rue\nRouge"}
                {category === "autre" && "J'ai\nFantaisie"}
              </p>
            </div>
          </div>
          <div className="cepages">
            <h2>
              <Trans>Cépage(s)</Trans>
            </h2>
            <p>{cepages}</p>
          </div>
          {alcool !== undefined && alcool !== null && (
            <div className="alcool">
              <h2>
                <Trans>Teneur en alcool</Trans>
              </h2>
              <p>{alcool}% vol.</p>
            </div>
          )}
          {millesime && (
            <div className="millesime">
              <h2>
                <Trans>Millésime</Trans>
              </h2>
              <p>{millesime}</p>
            </div>
          )}
          {formats && formats.length > 0 && (
            <div className="formats">
              <h2>
                <Trans>Disponible en</Trans>
              </h2>
              <ul>
                {formats.map((format, i) => (
                  <li key={i}>{format}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="buttons" id="no-print">
            <button className="btn" onClick={() => window.print()}>
              <Arrow />
              <Trans>Imprimer la page</Trans>
            </button>
            <Link className="btn" to="/nous-rencontrer/">
              <Arrow />
              <Trans>Trouver ce vin</Trans>
            </Link>
          </div>
        </div>
        {imageLandscape && (
          <GatsbyImage
            className="landscape-image"
            image={imageLandscape}
            alt={title}
            objectFit="fullWidth"
          />
        )}
      </section>
      {voirAussiWines.length > 0 && <VoirAussi wines={voirAussiWines} />}
    </StyledContainer>
  );
}

export const query = graphql`
  query (
    $title: String!
    $voirAussiCategory: String!
    $slug: String!
    $language: String!
  ) {
    sanityWine(slug: { current: { eq: $slug } }) {
      category
      cepages
      certification
      title
      quote {
        value
        _key
      }
      adjectif {
        value
        _key
      }
      intro {
        value
        _key
      }
      description {
        value
        _key
      }
      videoUrl
      vinification {
        value
        _key
      }
      degustation {
        value
        _key
      }
      alcool
      millesime
      formats
      productImage {
        asset {
          url
          gatsbyImageData
        }
      }
      landscapeImage {
        asset {
          url
          gatsbyImageData
        }
      }
    }
    allSanityWine(
      filter: { category: { eq: $voirAussiCategory }, title: { ne: $title } }
    ) {
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
            gatsbyImageData(aspectRatio: 0.74)
          }
        }
      }
    }
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
