import React from "react";
import styled from "styled-components";
import LogoLCGFooter from "assets/logos/LogoLCGFooter";
import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import Arrow from "assets/icons/Arrow";
import { Trans, Link } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.footer`
  padding: 30px 0;
  row-gap: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.brandBrown};
  @media ${({ theme }) => theme.minWidth.sm} {
    row-gap: 15px;
  }
  @media ${({ theme }) => theme.minWidth.lg} {
    row-gap: 30px;
  }
  .LCGLogo {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1/2;
      grid-row: 1/3;
    }
  }
  h2 {
    font-size: 16px;
    font-family: Moderat Mono Bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 15px;
    white-space: nowrap;
  }
  .adresse {
    grid-column: 1/5;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/4;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 3/5;
    }
  }
  .nousSuivre {
    grid-column: 5/8;
    justify-self: end;
    text-align: right;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4/8;
      grid-row: 1/1;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 5/8;
    }
    & > div {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
      a {
        margin-left: 15px;
      }
    }
  }
  .contact {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4/7;
      grid-row: 1/1;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 5/7;
    }
  }
  .mentions {
    grid-column: 1/8;
    text-decoration: underline;
    text-align: left;
    display: none;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: block;
      grid-column: 6/8;
      grid-row: 2/2;
      justify-self: end;
    }
  }
  .mentions-mobile {
    grid-column: 1/8;
    text-decoration: underline;
    text-align: left;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: none;
    }
  }
  .credits {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/6;
      grid-row: 2/2;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      grid-column: 3/7;
    }
  }
  .mentions,
  .mentions-mobile,
  .credits {
    font-family: Moderat Mono;
    font-size: 10px;
    line-height: 160%;
    @media ${({ theme }) => theme.minWidth.sm} {
      align-self: end;
    }
    @media ${({ theme }) => theme.minWidth.lg} {
      font-size: 12px;
    }
    a {
      text-decoration: underline;
      display: inline;
    }
  }
`;

const Footer = ({ handlePageChange }) => {
  return (
    <StyledContainer className="grid">
      <LogoLCGFooter className="LCGLogo" />
      <div className="adresse">
        <h2>
          <Trans>Adresse</Trans>
        </h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.fr/maps/dir//La+Croix+Gratiot,+Sainte+Croix,+Montagnac,+34530+Montagnac/@43.4487056,3.5270444,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12ab86d1065040af:0xc820a3578a1dc20e!2m2!1d3.529626!2d43.448699?entry=ttu"
        >
          La Croix Gratiot,
          <br />
          Anaïs & Yves Ricome,
          <br />
          Sainte Croix,
          <br />
          34530, Montagnac
        </a>
      </div>
      <div className="nousSuivre">
        <h2>
          <Trans>Nous Suivre</Trans>
        </h2>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/lacroixgratiot/"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/laxgratiot/?hl=fr"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="tel:+33467252788"
          className="btn"
        >
          <Arrow />
          +33(0)4 67 25 27 88
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:aude@croix-gratiot.com"
          className="btn"
        >
          <Arrow />
          aude@croix-gratiot.com
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:anais@croix-gratiot.com"
          className="btn"
        >
          <Arrow />
          anais@croix-gratiot.com
        </a>
      </div>
      <button
        onClick={() => handlePageChange("/mentions-legales/")}
        className="mentions"
      >
        <Trans>Mentions légales</Trans>
      </button>
      <Link className="mentions-mobile" to="/mentions-legales/">
        <Trans>Mentions légales</Trans>
      </Link>
      <p className="credits">
        <Trans>Site réalisé par </Trans>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.cascadestudio.fr/"
        >
          Studio Cascade
        </a>
        , <Trans>photos par </Trans>
        <a target="_blank" rel="noreferrer" href="http://www.aureliablanc.com/">
          Aurélia Blanc
        </a>
      </p>
    </StyledContainer>
  );
};

export default Footer;
