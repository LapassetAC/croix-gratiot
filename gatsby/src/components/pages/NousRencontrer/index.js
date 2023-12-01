import * as React from "react";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  padding: 0 15px;
  .nousRencontrerImage {
    grid-column: 1 / 8;
    aspect-ratio: 1;
  }
  .sectionTitle {
    grid-column: 1 / 8;
  }
  .address {
    grid-column: 1 / 8;
  }
  h2 {
    font-family: "Moderat Mono";
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
  }
`;

const NousRencontrer = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="main-section grid">
        <StaticImage
          className="nousRencontrerImage"
          src="../../../assets/imgs/nousRencontrer/nousRencontrerImage.png"
          alt="nousRencontrerImage"
          layout="fullWidth"
        />
        <h1 className="sectionTitle">
          Nous <br />
          rencontrer
        </h1>
        <div className="address">
          <h2>Adresse</h2>
          <p>
            La Croix Gratiot, <br />
            Anaïs & Yves Ricôme <br />
            Sainte Croix, <br />
            34530, <br />
            Montagnac
          </p>
        </div>
      </section>
    </StyledContainer>
  );
};

export default NousRencontrer;
