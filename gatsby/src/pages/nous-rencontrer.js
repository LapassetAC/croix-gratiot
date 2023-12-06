import * as React from "react";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "assets/icons/Arrow";
import { graphql } from "gatsby";

const StyledContainer = styled.div`
  .main-section {
    row-gap: 45px;
    margin-bottom: 90px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-template-rows: 1fr auto auto auto auto;
    }
    @media ${({ theme }) => theme.minWidth.sm} {
      row-gap: 60px;
    }
  }
  .nousRencontrerImage {
    grid-column: 1 / 8;
    margin-bottom: -30px;
    aspect-ratio: 1;
    max-height: calc(100vh - 30px);
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
      margin-bottom: 0;
      aspect-ratio: 0.68;
    }
  }
  h1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1 / 2;
      align-self: end;
    }
  }
  h2 {
    font-family: "Moderat Mono";
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 20px;
    }
  }
  .btn {
    font-size: 12px;
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 14px;
    }
  }
  .address {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 6;
      grid-row: 2 / 3;
    }
  }
  .contact {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 6 / 8;
      grid-row: 2 / 3;
    }
    a {
      margin-bottom: 10px;
    }
  }
  .route {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
    a {
      margin-top: 15px;
    }
  }
  .visits {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
    .bold {
      font-family: "Moderat Bold";
    }
  }
  .nousRencontrerBottomImage {
    grid-column: 1 / 8;
    margin-bottom: 90px;
  }
`;

const NousRencontrer = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="main-section grid">
        <StaticImage
          className="nousRencontrerImage"
          src="../assets/imgs/nousRencontrer/nousRencontrerImage.jpg"
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
        <div className="route">
          <h2>Venir</h2>
          <p>
            À la sortie de Montagnac, prendre la direction de Mèze. À la fin de
            la deux fois deux voies, tournez à droite. Une fois la
            départementale quittée suivre les panneaux jusqu’au domaine.
          </p>
          <a
            href="https://www.google.fr/maps/dir//La+Croix+Gratiot,+Sainte+Croix,+Montagnac,+34530+Montagnac/@43.4487056,3.5270444,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12ab86d1065040af:0xc820a3578a1dc20e!2m2!1d3.529626!2d43.448699?entry=ttu"
            className="btn"
          >
            <Arrow />
            Itinéraire
          </a>
        </div>
        <div className="visits">
          <h2>Visites et dégustations</h2>
          <p>
            <span className="bold">
              Du lundi au vendredi de 10h00 à 12h30 et de 14h00 à 17h30.
            </span>
            <br />
            <span className="bold">Samedi</span> : sur rendez-vous (n’hésitez
            pas à nous appeler pour prendre rendez-vous).
            <br />
            <span className="bold">Dimanche</span> : fermé.
            <br />
            Langues parlées au caveau : français et anglais.
            <br />
            Possibilité d’accueillir des groupes, sur réservation.
            <br />
            Visites et dégustations gratuites.
            <br />
            Cartes de crédit acceptées.
            <br />
            Caveau accessible pour les personnes à mobilité réduite.
            <br />
          </p>
        </div>
      </section>
      <StaticImage
        className="nousRencontrerBottomImage"
        src="../assets/imgs/nousRencontrer/nousRencontrerBottomImage.jpg"
        alt="nousRencontrerBottomImage"
        layout="fullWidth"
      />
    </StyledContainer>
  );
};

export default NousRencontrer;

export const query = graphql`
  query ($language: String!) {
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
