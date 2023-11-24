import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import EUBioLogo from "assets/logos/EUBioLogo.svg";
import FRBioLogo from "assets/logos/FRBioLogo.svg";
import winesData from "data/winesData";

const StyledContainer = styled.div`
  padding: 15px;

  .grid {
    gap: 15px;
    @media ${(props) => props.theme.minWidth.xl} {
      grid-column-gap: 30px;
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
          <h2 className="sectionTitle">{title}</h2>
          <ul>
            {wines
              .filter((wine) => wine.category === category)
              .map((wine, i) => {
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
      ))}
    </StyledContainer>
  );
};

export default LaDegustation;
