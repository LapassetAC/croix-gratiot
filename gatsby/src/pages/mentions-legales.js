import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Seo } from "components/global/Seo";
import { Trans } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.div`
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
    @media ${({ theme }) => theme.minWidth.lg} {
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
          <Trans>Mentions</Trans> <br />
          <Trans>légales</Trans>
        </h1>
        <h2>
          <Trans>Éditeur du site</Trans>
        </h2>
        <p>
          <Trans>
            Croix Gratiot, exploitation agricole à responsabilité limitée
          </Trans>
          <br />
          <Trans>Capital social</Trans> : 563 310,00 €<br />
          <Trans>Siège social</Trans> : Domaine de Sainte Croix, 34530 Montagnac
          <br />
          RCS Béziers : 440 264 158
          <br />
          <Trans>Représentant légal</Trans>: Mme Anaïs Ricôme, Gérante
          <br />
        </p>
        <h2>
          <Trans>Contact</Trans>
        </h2>
        <p>
          <Trans>Téléphone</Trans> : 04 67 25 27 88
          <br />
          Email : contact@croix-gratiot.com
          <br />
        </p>
        <h2>
          <Trans>Hébergement</Trans>
        </h2>
        <p>
          Netlify, Inc.
          <br />
          512 2nd Street, Suite 200, San Francisco, CA 94107, USA
          <br />
          Email : team@netlify.com
          <br />
          <Trans>Téléphone</Trans> : (415) 691-1573
          <br />
        </p>
        <h2>
          <Trans>Propriété intellectuelle</Trans>
        </h2>
        <p>
          <Trans>
            Tous les contenus présents sur ce site, y compris les images, sont
            la propriété de Croix Gratiot et sont protégés par les lois sur la
            propriété intellectuelle.
          </Trans>
        </p>
        <h2>
          <Trans>Conditions d'utilisation</Trans>
        </h2>
        <p>
          <Trans>
            Toute utilisation du site à des fins illégales ou non autorisées est
            interdite.
          </Trans>
        </p>
      </section>
    </StyledContainer>
  );
};

export default MentionsLegales;

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

export const Head = () => <Seo pageTitle="Mentions Légales" />;
