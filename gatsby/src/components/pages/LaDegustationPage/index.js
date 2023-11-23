import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";

const StyledContainer = styled.div`
  padding: 15px;

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

  let wines = data.allSanityWine.nodes;

  return (
    <StyledContainer className={className}>
      <section className="hero-section">
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
      <section className="blanc">
        <ul>
          {wines.map((wine, i) => {
            const productImage = getImage(
              wine.productImage.asset.gatsbyImageData
            );
            return (
              <li key={i}>
                <GatsbyImage
                  image={productImage}
                  alt={wine.title}
                  layout="fullWidth"
                />
                <div>{wine.title}</div>
                {wine.certification && (
                  <div className="bio-logos">
                    <img src={EUBioLogo} alt="Certification" />
                    <img src={FRBioLogo} alt="Certification" />
                  </div>
                )}
                <div>{wine.cepages}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </StyledContainer>
  );
};

export default LaDegustation;
