import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media ${(props) => props.theme.minWidth.sm} {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 15px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: 30px;
  }
`;

const Grid = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Grid;
