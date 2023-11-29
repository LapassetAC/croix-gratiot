import React, { useEffect, useRef } from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Element } from "react-scroll";

import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";
import winesData from "data/winesData";
import AnchorNavBar from "./AnchorNav";
import { useContext } from "react";
import { DataContext } from "DataContext";
import { Router, Link, useLocation } from "@reach/router";

const StyledContainer = styled.div`
  padding: 15px;

  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
  .hero-section {
    grid-template-rows: 1fr auto;
    margin-bottom: 90px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 110px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
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
    margin-bottom: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 210px;
      grid-template-rows: auto 1fr;
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
      grid-row: 1 / 2;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
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
      @media ${({ theme }) => theme.minWidth.xl} {
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
  .wine-cards {
    grid-column: 2 / 7;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1 / 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 15px;
      row-gap: 90px;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      column-gap: 30px;
      row-gap: 120px;
    }
    .wine-card {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 30px;
      grid-template-rows: repeat(3, auto) 1fr;
      align-items: center;
      text-align: center;
      margin-top: 60px;
      @media ${({ theme }) => theme.minWidth.sm} {
        grid-column: span 2;
        text-align: left;
        align-items: start;
        margin-top: 0;
        &:hover {
          .product-image {
            opacity: 0;
          }
          .portrait-image {
            opacity: 1;
          }
        }
      }

      .product-image,
      .portrait-image {
        grid-row: 1 / 2;
        grid-column: 1 / 3;
        align-self: center;
        height: 260px;
        opacity: 1;
        transition: opacity 0.5s ease;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: 365px;
        }
        @media ${({ theme }) => theme.minWidth.md} {
          height: 430px;
        }
      }
      .portrait-image {
        opacity: 0;
      }

      .wine-title {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        font-family: "Moderat Bold";
        text-transform: uppercase;
        font-size: 18px;
        margin: 30px 0 10px;
        @media ${({ theme }) => theme.minWidth.sm} {
          font-size: 22px;
        }
        @media ${({ theme }) => theme.minWidth.xl} {
          font-size: 24px;
          grid-column: 1 / 2;
        }
      }
      .bio-logos {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
        margin-bottom: 10px;
        @media ${({ theme }) => theme.minWidth.xl} {
          grid-row: 2 / 3;
          grid-column: 2 / 3;
          margin: 30px 0 10px;
        }
        & > :nth-child(1) {
          height: 19px;
          @media ${({ theme }) => theme.minWidth.sm} {
            height: 20px;
          }
        }
        & > :nth-child(2) {
          height: 21px;
          margin-left: 5px;
          @media ${({ theme }) => theme.minWidth.sm} {
            height: 25px;
          }
        }
      }
      .wine-cepages {
        grid-row: 4 / 5;
        grid-column: 1 / 3;
        font-family: "Moderat Mono Light";
        font-size: 12px;
        line-height: 150%;
        @media ${({ theme }) => theme.minWidth.sm} {
          font-size: 14px;
        }
        @media ${({ theme }) => theme.minWidth.xl} {
          font-size: 16px;
        }
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
    grid-row: 1 / 2;
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
      }
    `
  );

  const wines = data.allSanityWine.nodes;
  const pageRef = useRef();
  const { pathname } = useLocation();

  const { setCurrentPageHeight } = useContext(DataContext);

  useEffect(() => {
    const pageHeight = pageRef.current.clientHeight;
    pathname === "/la-degustation/" && setCurrentPageHeight(pageHeight);
  }, [pathname]);
  return (
    <StyledContainer className={className} ref={pageRef}>
      <section className="hero-section grid">
        <StaticImage
          className="degustationHeroImage"
          src="../../../assets/imgs/degustation/degustationHeroImage.png"
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
      <AnchorNavBar data={winesData} />
      {winesData.map(({ category, title, quote, color }, i) => (
        <Element
          name={title}
          key={category}
          className={`${category} wine-section grid`}
        >
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
                      objectFit="contain"
                    />
                    <GatsbyImage
                      className="portrait-image"
                      image={portraitImage}
                      alt={wine.title}
                      objectFit="contain"
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
          </div>
        </Element>
      ))}
    </StyledContainer>
  );
};

export default LaDegustation;
