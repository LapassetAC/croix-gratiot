import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

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
    .base-text.hero {
      grid-column: 1 / span 7;
    }
  }
`;

const LaDegustation = ({ className }) => {
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
        <p className="base-text hero">
          Explorez notre palette de vins où chaque cuvée compose sa propre
          musique.
        </p>
      </section>
    </StyledContainer>
  );
};

export default LaDegustation;
