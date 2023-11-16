import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledLinksContainer = styled.div`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  a {
    display: block;
    padding: 15px;
  }
`;
const StyledPageContent = styled.div`
  width: 100%;
`;

const Navigation = ({ children }) => {
  return (
    <StyledContainer>
      <StyledLinksContainer>
        <Link to="/">Home</Link>
      </StyledLinksContainer>
      <StyledPageContent>{children}</StyledPageContent>
      <StyledLinksContainer>
        <Link to="/nos-pratiques">Nos Pratiques</Link>
        <Link to="/la-degustation">La dégustation</Link>
        <Link to="/nous-rencontrer">Nous rencontrer</Link>
      </StyledLinksContainer>
    </StyledContainer>
  );
};

export default Navigation;
