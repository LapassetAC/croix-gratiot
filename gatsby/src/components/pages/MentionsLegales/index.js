import * as React from "react";
import styled from "styled-components";
import Footer from "components/global/Footer";

const StyledContainer = styled.div`
  padding: 0 15px;
  section {
    padding: 90px 0;
  }
  h1 {
    margin-bottom: 30px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 30px;
    }
  }
  h2 {
    font-family: "Moderat Mono";
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 20px;
      margin-bottom: -15px;
    }
  }
  p {
    margin-bottom: 30px;
  }
  h1,
  h2,
  p {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 7;
    }
  }
`;

const MentionsLegales = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="grid">
        <h1 className="sectionTitle">
          Mentions <br />
          légales
        </h1>
        <h2>Éditeur du site</h2>
        <p>
          Croix Gratiot, exploitation agricole à responsabilité limitée
          <br />
          Capital social : 563 310,00 €<br />
          Siège social : Domaine de Sainte Croix, 34530 Montagnac
          <br />
          RCS Béziers : 440 264 158
          <br />
          Représentant légal : Mme Anaïs Ricôme, Gérante
          <br />
        </p>
        <h2>Contact</h2>
        <p>
          Téléphone : 04 67 25 27 88
          <br />
          Email : contact@croix-gratiot.com
          <br />
        </p>
        <h2>Hébergement</h2>
        <p>
          Netlify, Inc.
          <br />
          512 2nd Street, Suite 200, San Francisco, CA 94107, USA
          <br />
          Email : team@netlify.com
          <br />
          Téléphone : (415) 691-1573
          <br />
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site, y compris les images, sont la
          propriété de Croix Gratiot et sont protégés par les lois sur la
          propriété intellectuelle.
        </p>
        <h2>Conditions d'utilisation</h2>
        <p>
          Toute utilisation du site à des fins illégales ou non autorisées est
          interdite.
        </p>
      </section>
      <Footer />
    </StyledContainer>
  );
};

export default MentionsLegales;
