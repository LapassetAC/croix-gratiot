import React from "react";
import { graphql } from "gatsby";
import { styled } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import categoryQuoteLines from "assets/icons/categoryQuoteLines.svg";

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
    .intro {
    }
  }
`;

export default function WineTemplate({ data }) {
  const {
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
      <section className="main-section">
        <p className="intro">
          <span className="title">{title},</span>
          <span className="adjectif">{adjectif}</span>
          <span className="intro"></span>
        </p>
      </section>
    </StyledContainer>
  );
}

export const query = graphql`
  query ($slug: String!, $language: String!) {
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
