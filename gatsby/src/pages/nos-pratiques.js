import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";

const StyledContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;
`;

const HeroImage = styled.div`
  grid-column: 1 / 8;
`;

const StyledTitle = styled.h1`
  font-family: "Democratica", sans-serif;
  font-size: 45px;
  line-height: 40px;
  margin-top: 15px;
  grid-column: 1 / 8;
`;

const BaseText = styled.p`
  font-family: "Moderat", sans-serif;
  font-size: 14px;
  line-height: 21px;
  grid-column: 1 / 8;
  margin-top: 15px;
`;

const LargeText = styled.p`
  font-family: "Moderat", sans-serif;
  font-size: 16px;
  line-height: 150%;
  grid-column: 1 / 8;
  margin: 120px 0;
  text-align: center;
`;

const IntroImage1 = styled.div`
  grid-column: 1 / 8;
`;

const IntroImage2 = styled.div`
  grid-column: 1 / 5;
  margin-top: 45px;
`;

const TeamImage1 = styled.div`
  grid-column: 1 / 8;
  margin-top: 120px;
`;

const TeamDescription = styled.p`
  font-family: "Moderat Mono", sans-serif;
  font-size: 10px;
  line-height: 15px;
  grid-column: 1 / 8;
  margin-top: 15px;
`;

const SectionTitle = styled.h2`
  font-family: "Democratica", sans-serif;
  font-size: 45px;
  line-height: 40px;
  margin: 120px 0 45px;
  &.nos-cepages {
    grid-column: 3 / 8;
  }
  &.la-vinification {
    grid-column: 1 / 8;
  }
  &.elevage {
    grid-column: 1 / 8;
  }
`;

const CepagesImage1 = styled.div`
  grid-column: 1 / 8;
`;

const CepagesImage2 = styled.div`
  grid-column: 3 / 8;
  margin-top: 45px;
`;

const VinificationImage1 = styled.div`
  grid-column: 1 / 5;
`;

const VinificationImage2 = styled.div`
  grid-column: 1 / 8;
  margin-top: 45px;
`;

const TeamImage2 = styled.div`
  grid-column: 1 / 8;
  margin-top: 120px;
`;

const ElevageImage1 = styled.div`
  grid-column: 1 / 8;
`;

const ElevageImage2 = styled.div`
  grid-column: 1 / 5;
  margin-top: 15px;
`;

const NosPratiques = () => {
  return (
    <Layout>
      <StyledContainer>
        <HeroImage>
          <StaticImage
            src="../assets/imgs/nosPratiquesHeroImage.jpg"
            alt="nosPratiquesHeroImage"
            aspectRatio={1}
            layout="fullWidth"
          />
        </HeroImage>
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
        <IntroImage1>
          <StaticImage
            src="../assets/imgs/nosPratiquesIntroImage1.jpg"
            alt="nosPratiquesIntroImage1"
            aspectRatio={290 / 195}
            layout="fullWidth"
          />
        </IntroImage1>
        <BaseText>
          Attaché au maintien de la biodiversité, nous plantons des haies multi
          essences en bordure de parcelles et sur les berges du ruisseau qui
          serpente le domaine. Nous avons également fait un essai dans une
          parcelle, tout les 8 rangs de vignes une rangée de plantes
          aromatiques.
        </BaseText>
        <IntroImage2>
          <StaticImage
            src="../assets/imgs/nosPratiquesIntroImage2.jpg"
            alt="nosPratiquesIntroImage2"
            layout="fullWidth"
          />
        </IntroImage2>
        <BaseText>
          Après les vendanges, aux premières pluies nous enherbons une partie du
          vignoble pour maintenir l’activité dans le sol.
        </BaseText>
        <TeamImage1>
          <StaticImage
            src="../assets/imgs/TeamImage1.jpg"
            alt="TeamImage1"
            layout="fullWidth"
          />
        </TeamImage1>
        <TeamDescription>
          <ul>
            <li>Lénaïc & Karim,</li>
            <li>l’équipe viticole</li>
          </ul>
        </TeamDescription>
        <SectionTitle className="nos-cepages">
          <ul>
            <li>Nos</li>
            <li>cépages</li>
          </ul>
        </SectionTitle>
        <CepagesImage1>
          <StaticImage
            src="../assets/imgs/cepagesImage1.jpg"
            alt="cepagesImage1"
            layout="fullWidth"
          />
        </CepagesImage1>
        <BaseText>
          Piquepoul Blanc, Roussanne, Bourboulenc, Viognier, Sauvignon et Muscat
          petits grains composent notre encépagement blanc. Pour le rouge, nous
          cultivons de la Syrah, du Grenache Noir, du Mourvèdre, Piquepoul Noir,
          Niellucio et Pinot Noir.
        </BaseText>
        <CepagesImage2>
          <StaticImage
            src="../assets/imgs/cepagesImage2.jpg"
            alt="cepagesImage2"
            layout="fullWidth"
            aspectRatio={200 / 167}
          />
        </CepagesImage2>
        <BaseText>
          De retour de Nouvelle Zélande, Anaïs plante du Pinot Noir malgré un
          avis général défavorable, concernant son adaptation à notre terroir…
          La dégustation plutôt amusante nous incite à continuer. Depuis
          plusieurs années, nous surgreffons certaines parcelles avec nos
          propres sélections de bois.
        </BaseText>
        <SectionTitle className="la-vinification">
          <ul>
            <li>La</li>
            <li>vinification</li>
          </ul>
        </SectionTitle>
        <VinificationImage1>
          <StaticImage
            src="../assets/imgs/VinificationImage1.jpg"
            alt="VinificationImage1"
            layout="fullWidth"
          />
        </VinificationImage1>
        <BaseText>
          Les vendanges sont une période super excitante, une année de travail à
          la vigne pour obtenir des raisins, qui rentrent enfin à l’abris pour
          se transformer en vin. Les odeurs de fruits se propagent partout.
        </BaseText>
        <VinificationImage2>
          <StaticImage
            src="../assets/imgs/VinificationImage2.jpg"
            alt="VinificationImage2"
            layout="fullWidth"
          />
        </VinificationImage2>
        <BaseText>
          La majorité des vendanges est mécanique de nuit, pour certaines cuvées
          elle est manuelle. Chaque millésime est tellement différent, il faut
          savoir observer, goûter, décider de la bonne date de récolte et se
          faire discret pour accompagner les fermentations des raisins et
          laisser le terroir s’exprimer.
        </BaseText>
        <TeamImage2>
          <StaticImage
            src="../assets/imgs/TeamImage2.jpg"
            alt="TeamImage2"
            layout="fullWidth"
          />
        </TeamImage2>
        <TeamDescription>Thomas, poste</TeamDescription>
        <SectionTitle className="elevage">L'élevage</SectionTitle>
        <ElevageImage1>
          <StaticImage
            src="../assets/imgs/ElevageImage1.jpg"
            alt="ElevageImage1"
            layout="fullWidth"
          />
        </ElevageImage1>
        <ElevageImage2>
          <StaticImage
            src="../assets/imgs/ElevageImage2.jpg"
            alt="ElevageImage2"
            layout="fullWidth"
          />
        </ElevageImage2>
        <BaseText>
          Chaque année de nouveaux contenants sont achetés pour permettre une
          rotation mais aussi pour réaliser des expérimentations. Depuis 2012,
          nous réalisons des élevages en dolia de terre cuite, céramique et
          grès. Nous nous sommes équipés de cuves béton et de demi-muids.
          L’élevage est un sacré terrain de jeux.
        </BaseText>
      </StyledContainer>
    </Layout>
  );
};

export default NosPratiques;
