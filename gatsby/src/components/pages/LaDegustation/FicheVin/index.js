import * as React from "react";
import { styled } from "styled-components";
import Footer from "components/global/Footer";
import { GatsbyImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  height: 100%;
  z-index: 2;
`;

const FicheVin = ({
  slug,
  title,
  category,
  cepages,
  certification,
  productImage,
  isActive,
}) => {
  return (
    <StyledContainer>
      <h1>{title}</h1>
      {category}
      {cepages}
      {certification}
      <GatsbyImage image={productImage} alt={title} objectFit="contain" />
      <Footer />
    </StyledContainer>
  );
};

export default FicheVin;
