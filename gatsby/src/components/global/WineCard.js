import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import { Link } from "gatsby-plugin-react-i18next";

const StyledContainer = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 30px;
  align-items: center;
  text-align: center;
  margin-top: 60px;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: span 2;
    text-align: left;
    align-items: start;
    margin-top: 0;
  }
  &:hover {
    .product-image {
      opacity: 0;
    }
    .portrait-image {
      opacity: 1;
    }
  }

  .product-image,
  .portrait-image {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    align-self: end;
    justify-self: center;
    opacity: 1;
    transition: opacity 0.5s ease;
    aspect-ratio: 0.8;
  }
  .product-image {
    max-height: 480px;
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
    @media ${({ theme }) => theme.minWidth.lg} {
      font-size: 24px;
      grid-column: 1 / 2;
    }
  }
  .bio-logos {
    display: flex;
    align-items: center;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.minWidth.lg} {
      width: 60px;
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
    @media ${({ theme }) => theme.minWidth.lg} {
      font-size: 16px;
    }
  }
`;

const WineCard = ({ wine }) => {
  const productImage = getImage(wine.productImage.asset.gatsbyImageData);
  const portraitImage = getImage(wine.portraitImage.asset.gatsbyImageData);
  return (
    <StyledContainer
      to={`/la-degustation/${wine.slug.current}`}
      className="wine-card"
    >
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
      />
      <div className="wine-title">{wine.title}</div>
      {wine.certification && (
        <div className="bio-logos">
          <img src={EUBioLogo} alt="Certification Bio EU" />
          <img src={FRBioLogo} alt="Certification Bio FR" />
        </div>
      )}
      <div className="wine-cepages">{wine.cepages}</div>
    </StyledContainer>
  );
};

export default WineCard;
