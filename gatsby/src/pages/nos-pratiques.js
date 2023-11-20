import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";

const StyledContainer = styled.div`
  padding: 15px;
`;

const StyledTitle = styled.h1`
  font-family: "Democratica", sans-serif;
  font-size: 45px;
  line-height: 40px;
  margin: 15px 0;
`;

const BaseText = styled.p`
  font-family: "Moderat", sans-serif;
  font-size: 14px;
  line-height: 21px;
`;

const LargeText = styled.p`
  font-family: "Moderat", sans-serif;
  font-size: 16px;
  line-height: 150%;
`;

const NosPratiques = () => {
  return (
    <Layout>
      <StyledContainer>
        <StaticImage
          src="../assets/imgs/nosPratiquesHeroImage.jpg"
          alt="nosPratiquesHeroImage"
          aspectRatio={1}
          layout="fullWidth"
        />
        <StyledTitle>
          <ul>
            <li>Une</li>
            <li>viticulture</li>
            <li>biodynamique</li>
          </ul>
        </StyledTitle>
        <BaseText>
          <ul>
            <li>
              Cette approche, basée sur de l’observation, nous rapproche encore
              plus de nos vignes.
            </li>
            <li>
              Nous nous formons chaque année et employons ses préparations dans
              la conduite de la vigne afin d’intensifier la vie du sol, de la
              plante et de leurs échanges.
            </li>
          </ul>
        </BaseText>
        <LargeText>
          Depuis nos essais sur une parcelle en 2012, c’est maintenant tout le
          vignoble que nous conduisons en biodynamie.
        </LargeText>
      </StyledContainer>
    </Layout>
  );
};

export default NosPratiques;
