import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.section`
  .gatsby-image-wrapper {
    grid-column: 2/5;
  }
`;

const NosVinsSection = () => {
  return (
    <StyledContainer className="grid">
      <StaticImage
        src="../../../assets/imgs/home/notrePhilo1.jpg"
        alt=""
        quality="90"
        layout="fullWidth"
      />
      <h2 className="sectionTitle">
        Nos <br />
        Vins
      </h2>
    </StyledContainer>
  );
};

export default NosVinsSection;
