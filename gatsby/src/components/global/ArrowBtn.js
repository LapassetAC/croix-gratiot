import React from "react";
import styled from "styled-components";

const StyledContainer = styled.button`
  font-family: "Moderat Mono", sans-serif;
  text-decoration-line: underline;
  font-size: 12px;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.minWidth.sm} {
    font-size: 14px;
  }
  img {
    margin-right: 15px;
  }
  svg {
    margin-right: 5px;
    fill: ${({ black }) => (black ? "#332728" : "#E9E3DA")};
  }
`;

const ArrowBtn = ({ children, black }) => {
  return (
    <StyledContainer black={black}>
      <svg
        width="31"
        height="9"
        viewBox="0 0 31 9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Arrow 1"
          d="M30.3536 4.83011C30.5488 4.63485 30.5488 4.31827 30.3536 4.12301L27.1716 0.941026C26.9763 0.745764 26.6597 0.745764 26.4645 0.941026C26.2692 1.13629 26.2692 1.45287 26.4645 1.64813L29.2929 4.47656L26.4645 7.30499C26.2692 7.50025 26.2692 7.81683 26.4645 8.01209C26.6597 8.20736 26.9763 8.20736 27.1716 8.01209L30.3536 4.83011ZM4.37114e-08 4.97656L30 4.97656L30 3.97656L-4.37114e-08 3.97656L4.37114e-08 4.97656Z"
        />
      </svg>
      {children}
    </StyledContainer>
  );
};

export default ArrowBtn;