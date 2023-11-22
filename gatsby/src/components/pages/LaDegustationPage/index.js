import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
`;

const LaDegustation = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <h1>La Degustation</h1>
    </StyledContainer>
  );
};

export default LaDegustation;
