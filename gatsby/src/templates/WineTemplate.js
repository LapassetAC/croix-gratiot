import React from "react";
import { graphql } from "gatsby";
import { styled } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";
import theme from "styles/theme";
import Arrow from "assets/icons/Arrow";
import ArrowBtn from "components/global/ArrowBtn";
import VoirAussi from "./VoirAussiSection";

const StyledContainer = styled.div`
  padding: 60px 15px 120px;
  .hero-section {
    row-gap: 30px;
    .product-image {
      grid-column: 1 / 8;
      height: 260px;
    }
    h1 {
      grid-column: 1 / 8;
      text-align: center;
    }
    .cepages {
      grid-column: 1 / 8;
      text-align: center;
      font-family: "Moderat Mono Light";
      font-size: 18px;
      line-height: 150%;
    }
    .bio-logos {
      grid-column: 1 / 8;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 15px;
      & > :nth-child(1) {
        height: 29px;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: 34px;
        }
        @media ${({ theme }) => theme.minWidth.xl} {
          height: 51px;
        }
      }
      & > :nth-child(2) {
        height: 38px;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: 45px;
        }
        @media ${({ theme }) => theme.minWidth.xl} {
          height: 66px;
        }
      }
    }
    .quote {
      grid-column: 1 / 8;
      text-align: center;
      font-family: "Moderat Bold Italic";
      white-space: pre-line;
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
    .intro-paragraph {
      grid-column: 1 / 8;
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
    }
    h2 {
      font-family: "Moderat Mono";
      font-size: 16px;
      line-height: 150%;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    iframe {
      grid-column: 1 / 8;
      width: 100%;
      height: auto;
    }
    .wine-info {
      grid-column: 1 / 8;
      display: grid;
      gap: 30px;
      .category {
        display: flex;
        align-items: center;
        column-gap: 15px;
      }
    }
  }
`;

const StyledColorSquare = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
`;

const StyledArrowBtn = styled(ArrowBtn)`
  color: ${(props) => props.theme.colors.brandBrown};
`;

export default function WineTemplate({ data }) {
  const {
    category,
    title,
    productImage,
    cepages,
    certification,
    quote,
    adjectif,
    intro,
    description,
    videoUrl,
    vinification,
    degustation,
    landscapeImage,
    alcool,
    millesime,
    formats,
  } = data.sanityWine;
  const imageProduct = getImage(productImage.asset.gatsbyImageData);
  const imageLandscape = getImage(landscapeImage.asset.gatsbyImageData);
  return (
    <StyledContainer>
      <section className="hero-section grid">
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
        <div className="quote">
          <img
            className="top lines"
            src={categoryQuoteLines}
            alt="Quote lines"
          />
          <p>« {quote} »</p>
          <img
            className="bottom lines"
            src={categoryQuoteLines}
            alt="Quote lines"
          />
        </div>
      </section>
      <section className="main-section grid">
        <p className="intro-paragraph">
          <span className="title">{title},</span>
          <span className="adjectif"> {adjectif} : </span>
          <span className="intro">{intro}</span>
        </p>
        <div className="description">
          <h2>Le mot des vignerons</h2>
          <p>{description}</p>
        </div>
        {videoUrl && <iframe src={videoUrl} title="Vidéo du vin"></iframe>}
        {vinification && (
          <div className="vinification">
            <h2>Vinification</h2>
            <p>{vinification}</p>
          </div>
        )}
        {degustation && (
          <div className="degustation">
            <h2>Dégustation</h2>
            <p>{degustation}</p>
          </div>
        )}
        <div className="wine-info">
          <div>
            <h2>Catégorie</h2>
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
            <h2>Cépage(s)</h2>
            <p>{cepages}</p>
          </div>
          <div className="alcool">
            <h2>Teneur en alcool</h2>
            <p>{alcool}% vol.</p>
          </div>
          <div className="millesime">
            <h2>Millésime</h2>
            <p>{millesime}</p>
          </div>
          <div className="formats">
            <h2>Disponible en</h2>
            <ul>
              {formats.map((format, i) => (
                <li key={i}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="buttons">
            <a href="/" className="btn">
              <Arrow />
              Fiche technique
            </a>
            <StyledArrowBtn className="button" to="/nous-rencontrer/">
              Trouver ce vin
            </StyledArrowBtn>
          </div>
        </div>
      </section>
      <GatsbyImage
        className="landscape-image"
        image={imageLandscape}
        alt={title}
        objectFit="fullWidth"
      />
      <VoirAussi wines={data.allSanityWine.nodes} />
    </StyledContainer>
  );
}

export const query = graphql`
  query ($category: String!, $slug: String!, $language: String!) {
    sanityWine(slug: { current: { eq: $slug } }) {
      category
      cepages
      certification
      title
      quote
      adjectif
      intro
      description
      videoUrl
      vinification
      degustation
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
    allSanityWine(filter: { category: { eq: $category } }) {
      nodes {
        title
        certification
        cepages
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
