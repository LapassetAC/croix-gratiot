import * as React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div``;

const NousRencontrer = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="main-section"></section>
      <h1 className="sectionTitle">
        Nous <br />
        rencontrer
      </h1>
    </StyledContainer>
  );
};

export default NousRencontrer;
