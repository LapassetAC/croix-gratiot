import * as React from "react";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "assets/icons/Arrow";
import Footer from "components/global/Footer";

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
  .contact {
    grid-column: 1 / 8;
    a {
      margin-bottom: 10px;
    }
  }
  h2 {
    font-family: "Moderat Mono";
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 10px;
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
        <div className="contact">
          <h2>Contact</h2>
          <a href="tel:+33467252788" className="btn">
            <Arrow />
            04 67 25 27 88
          </a>
          <a href="mailto:contact@croix-gratiot.com" className="btn">
            <Arrow />
            contact@croix-gratiot.com
          </a>
        </div>
      </section>
      <Footer />
    </StyledContainer>
  );
};

export default NousRencontrer;
