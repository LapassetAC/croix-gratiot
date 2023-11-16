import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
`;

const NosPratiques = () => {
  return (
    <StyledContainer className="pageAnimation">
      <h1>Nos Pratiques</h1>
      <StaticImage
        src="../../../assets/imgs/nosPratiquesHeroImage.jpg"
        alt=""
      />
    </StyledContainer>
  );
};

export default NosPratiques;
