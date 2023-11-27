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
    grid-template-rows: 1fr auto;
    .degustationHeroImage {
      aspect-ratio: 1;
      @media ${({ theme }) => theme.minWidth.sm} {
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
  section {
    margin-bottom: 75px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      margin-bottom: 240px;
    }
  }
  .category-title {
    grid-column: 3 / 8;
    white-space: pre-line;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 52px;
      line-height: 40px;
      grid-column: 2 / 4;
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
      align-self: center;
    }
    p {
      margin: 5px 0 15px;
      font-size: 12px;
      line-height: 18px;
      @media ${({ theme }) => theme.minWidth.sm} {
        font-size: 14px;
        line-height: 21px;
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
  .wine-cards {
    grid-column: 2 / 7;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column: 4 / 8;
    }
    .wine-card {
      text-align: center;
      margin-top: 45px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: span 2;
      }
      .product-image {
        width: 20vw;
        @media ${({ theme }) => theme.minWidth.sm} {
          width: 14vw;
        }
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
  }
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
                gatsbyImageData(
                  aspectRatio: 0.274
                  layout: CONSTRAINED
                  fit: CLIP
                )
              }
            }
            portraitImage {
              asset {
                url
                gatsbyImageData(
                  aspectRatio: 0.274
                  layout: CONSTRAINED
                  fit: CLIP
                )
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
        <h1 className="sectionTitle hero-title">La dégustation</h1>
        <p className="hero-text">
          Explorez notre palette de vins où chaque cuvée compose sa propre
          musique.
        </p>
      </section>
      {winesData.map(({ category, title, quote, color }, i) => (
        <section key={category} className={`${category} grid`}>
          <StyledColorSquare color={color} />
          <h2 className="sectionTitle category-title">{title}</h2>

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
          <div className="wine-cards">
            {wines
              .filter((wine) => wine.category === category)
              .map((wine, i) => {
                const productImage = getImage(
                  wine.productImage.asset.gatsbyImageData
                );
                const portraitImage = getImage(
                  wine.portraitImage.asset.gatsbyImageData
                );
                return (
                  <div className="wine-card" key={i}>
                    <GatsbyImage
                      className="product-image"
                      image={productImage}
                      alt={wine.title}
                    />{" "}
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
          </div>
        </section>
      ))}
    </StyledContainer>
  );
};

export default LaDegustation;
