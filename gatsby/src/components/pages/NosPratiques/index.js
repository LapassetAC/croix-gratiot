import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;
  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
  .hero-image {
    grid-column: 1 / span 7;
  }
  .intro-image-1 {
    grid-column: 1 / 8;
  }
  .intro-image-2 {
    grid-column: 1 / 5;
    margin-top: 45px;
  }
  .team-image-1 {
    grid-column: 1 / 8;
    margin-top: 120px;
  }
  .cepages-image-1 {
    grid-column: 1 / 8;
  }
  .cepages-image-2 {
    grid-column: 3 / 8;
    margin-top: 45px;
  }
  .vinification-image-1 {
    grid-column: 1 / 5;
  }
  .vinification-image-2 {
    grid-column: 1 / 8;
    margin-top: 45px;
  }
  .team-image-2 {
    grid-column: 1 / 8;
    margin-top: 120px;
  }
  .elevage-image-1 {
    grid-column: 1 / 8;
  }
  .elevage-image-2 {
    grid-column: 1 / 5;
    margin-top: 15px;
  }

  .title,
  .base-text,
  .large-text,
  .team-description,
  .section-title {
    grid-column: 1 / 8;
  }

  .title {
    font-family: "Democratica", sans-serif;
    font-size: 45px;
    line-height: 40px;
    margin-top: 15px;
  }

  .base-text {
    font-family: "Moderat", sans-serif;
    font-size: 14px;
    line-height: 21px;
    margin-top: 15px;
  }

  .large-text {
    font-family: "Moderat", sans-serif;
    font-size: 16px;
    line-height: 150%;
    margin: 120px 0;
    text-align: center;
  }

  .team-description {
    font-family: "Moderat Mono", sans-serif;
    font-size: 10px;
    line-height: 15px;
    margin-top: 15px;
  }

  .sectionTitle {
    font-size: 45px;
    line-height: 40px;
    margin: 120px 0 45px;
  }

  .sectionTitle.nos-cepages {
    grid-column: 3 / 8;
  }

  .sectionTitle.la-vinification,
  .sectionTitle.elevage {
    grid-column: 1 / 8;
  }
`;

const NosPratiques = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StaticImage
        className="hero-image"
        src="../../../assets/imgs/pratiques/nosPratiquesHeroImage.jpg"
        alt="nosPratiquesHeroImage"
        aspectRatio={1}
        layout="fullWidth"
      />
      <h1 className="title">
        <ul>
          <li>Une</li>
          <li>viticulture</li>
          <li>biodynamique</li>
        </ul>
      </h1>
      <p className="base-text">
        <ul>
          <li>
            Cette approche, basée sur de l’observation, nous rapproche encore
            plus de nos vignes.
          </li>
          <li>
            Nous nous formons chaque année et employons ses préparations dans la
            conduite de la vigne afin d’intensifier la vie du sol, de la plante
            et de leurs échanges.
          </li>
        </ul>
      </p>
      <p className="large-text">
        Depuis nos essais sur une parcelle en 2012, c’est maintenant tout le
        vignoble que nous conduisons en biodynamie.
      </p>
      <StaticImage
        className="intro-image-1"
        src="../../../assets/imgs/pratiques/nosPratiquesIntroImage1.jpg"
        alt="nosPratiquesIntroImage1"
        aspectRatio={290 / 195}
        layout="fullWidth"
      />
      <p className="base-text">
        Attaché au maintien de la biodiversité, nous plantons des haies multi
        essences en bordure de parcelles et sur les berges du ruisseau qui
        serpente le domaine. Nous avons également fait un essai dans une
        parcelle, tout les 8 rangs de vignes une rangée de plantes aromatiques.
      </p>
      <StaticImage
        className="intro-image-2"
        src="../../../assets/imgs/pratiques/nosPratiquesIntroImage2.jpg"
        alt="nosPratiquesIntroImage2"
        layout="fullWidth"
      />
      <p className="base-text">
        Après les vendanges, aux premières pluies nous enherbons une partie du
        vignoble pour maintenir l’activité dans le sol.
      </p>
      <StaticImage
        className="team-image-1"
        src="../../../assets/imgs/pratiques/TeamImage1.jpg"
        alt="TeamImage1"
        layout="fullWidth"
      />
      <p className="team-description">
        <ul>
          <li>Lénaïc & Karim,</li>
          <li>l’équipe viticole</li>
        </ul>
      </p>
      <h2 className="sectionTitle nos-cepages">
        <ul>
          <li>Nos</li>
          <li>cépages</li>
        </ul>
      </h2>
      <StaticImage
        className="cepages-image-1"
        src="../../../assets/imgs/pratiques/cepagesImage1.jpg"
        alt="cepagesImage1"
        layout="fullWidth"
      />
      <p className="base-text">
        Piquepoul Blanc, Roussanne, Bourboulenc, Viognier, Sauvignon et Muscat
        petits grains composent notre encépagement blanc. Pour le rouge, nous
        cultivons de la Syrah, du Grenache Noir, du Mourvèdre, Piquepoul Noir,
        Niellucio et Pinot Noir.
      </p>
      <StaticImage
        className="cepages-image-2"
        src="../../../assets/imgs/pratiques/cepagesImage2.jpg"
        alt="cepagesImage2"
        layout="fullWidth"
        aspectRatio={200 / 167}
      />
      <p className="base-text">
        De retour de Nouvelle Zélande, Anaïs plante du Pinot Noir malgré un avis
        général défavorable, concernant son adaptation à notre terroir… La
        dégustation plutôt amusante nous incite à continuer. Depuis plusieurs
        années, nous surgreffons certaines parcelles avec nos propres sélections
        de bois.
      </p>
      <h2 className="sectionTitle la-vinification">
        <ul>
          <li>La</li>
          <li>vinification</li>
        </ul>
      </h2>
      <StaticImage
        className="vinification-image-1"
        src="../../../assets/imgs/pratiques/VinificationImage1.jpg"
        alt="VinificationImage1"
        layout="fullWidth"
      />
      <p className="base-text">
        Les vendanges sont une période super excitante, une année de travail à
        la vigne pour obtenir des raisins, qui rentrent enfin à l’abris pour se
        transformer en vin. Les odeurs de fruits se propagent partout.
      </p>
      <StaticImage
        className="vinification-image-2"
        src="../../../assets/imgs/pratiques/VinificationImage2.jpg"
        alt="VinificationImage2"
        layout="fullWidth"
      />
      <p className="base-text">
        La majorité des vendanges est mécanique de nuit, pour certaines cuvées
        elle est manuelle. Chaque millésime est tellement différent, il faut
        savoir observer, goûter, décider de la bonne date de récolte et se faire
        discret pour accompagner les fermentations des raisins et laisser le
        terroir s’exprimer.
      </p>
      <StaticImage
        className="team-image-2"
        src="../../../assets/imgs/pratiques/TeamImage2.jpg"
        alt="TeamImage2"
        layout="fullWidth"
      />
      <p className="team-description">Thomas</p>
      <h2 className="sectionTitle elevage">L'élevage</h2>
      <StaticImage
        className="elevage-image-1"
        src="../../../assets/imgs/pratiques/ElevageImage1.jpg"
        alt="ElevageImage1"
        layout="fullWidth"
      />
      <StaticImage
        className="elevage-image-2"
        src="../../../assets/imgs/pratiques/ElevageImage2.jpg"
        alt="ElevageImage2"
        layout="fullWidth"
      />
      <p className="base-text">
        Chaque année de nouveaux contenants sont achetés pour permettre une
        rotation mais aussi pour réaliser des expérimentations. Depuis 2012,
        nous réalisons des élevages en dolia de terre cuite, céramique et grès.
        Nous nous sommes équipés de cuves béton et de demi-muids. L’élevage est
        un sacré terrain de jeux.
      </p>
    </StyledContainer>
  );
};

export default NosPratiques;
