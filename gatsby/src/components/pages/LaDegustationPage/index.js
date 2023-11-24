import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";
import winesData from "data/winesData";

const StyledContainer = styled.div`
  padding: 15px;

  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
  .hero-section {
    .degustationHeroImage {
      aspect-ratio: 1;
    }
    h1 {
      font-family: "Democratica", sans-serif;
      font-size: 45px;
      line-height: 40px;
      grid-column: 1 / span 7;
    }
    .hero {
      grid-column: 1 / span 7;
    }
  }
  section {
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      margin-bottom: 240px;
    }
  }
  .sectionTitle {
    grid-column: 3 / 8;
    white-space: pre-line;
  }
  .category-quote {
    grid-column: 1 / 8;
    font-family: "Moderat Bold Italic";
    text-align: center;
    white-space: pre-line;
    margin-top: 15px;
    p {
      margin: 10px 0 15px;
    }
    .lines.top {
      translate: 25px;
    }
    .lines.bottom {
      transform: rotate(180deg);
      translate: -25px;
    }
  }
  .wine-card {
    grid-column: 2 / 7;
    text-align: center;
    margin-top: 45px;
    .product-image {
      width: 20vw;
    }
    .wine-title {
      font-family: "Moderat Bold";
      text-transform: uppercase;
      text-align: center;
      font-size: 18px;
      margin: 30px 0 5px;
    }
    .wine-cepages {
      font-family: "Moderat Mono Light";
      font-size: 12px;
      line-height: 150%;
      margin-top: 5px;
    }
  }
`;

const StyledColorSquare = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  padding-top: 100%;
  background-color: ${(props) => props.color};
  margin: auto 0;
`;

const LaDegustation = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityWine {
          nodes {
            title
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
    `
  );

  const wines = data.allSanityWine.nodes;

  return (
    <StyledContainer className={className}>
      <section className="hero-section grid">
        <StaticImage
          className="degustationHeroImage"
          src="../../../assets/imgs/degustation/degustationHeroImage.png"
          alt="degustationHeroImage"
          layout="fullWidth"
          quality="90"
        />
        <h1>La dégustation</h1>
        <p className="hero">
          Explorez notre palette de vins où chaque cuvée compose sa propre
          musique.
        </p>
      </section>
      {winesData.map(({ category, title, quote, color }, i) => (
        <section key={category} className={`${category} grid`}>
          <StyledColorSquare color={color} />
          <h2 className="sectionTitle">{title}</h2>

          <div className="category-quote">
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

          {wines
            .filter((wine) => wine.category === category)
            .map((wine, i) => {
              const productImage = getImage(
                wine.productImage.asset.gatsbyImageData
              );
              return (
                <div className="wine-card" key={i}>
                  <GatsbyImage
                    className="product-image"
                    image={productImage}
                    alt={wine.title}
                    layout="fullWidth"
                  />
                  <div className="wine-title">{wine.title}</div>
                  {wine.certification && (
                    <div className="bio-logos">
                      <img src={EUBioLogo} alt="Certification Bio EU" />
                      <img src={FRBioLogo} alt="Certification Bio FR" />
                    </div>
                  )}
                  <div className="wine-cepages">{wine.cepages}</div>
                </div>
              );
            })}
        </section>
      ))}
    </StyledContainer>
  );
};

export default LaDegustation;
