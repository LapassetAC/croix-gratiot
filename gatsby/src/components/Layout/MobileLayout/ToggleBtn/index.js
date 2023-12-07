import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: auto;
  display: flex;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.xl} {
    display: none;
  }
  div {
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all ${(props) => props.theme.transitionTime}s
      ${(props) => props.theme.cubicBezier.base};
    transform: translateY(${({ $isNavOpen }) => $isNavOpen && -2}px);
    ${(props) =>
      props.$isNavOpen ? "width: 20px; height: 20px;" : "width: 20px;"};
    cursor: pointer;
    span {
      background: ${(props) => props.theme.colors.black};
      height: 1.5px;
      transition: ${(props) => props.theme.transitionTime}s;
      width: 100%;
      ${(props) => props.theme.cubicBezier.base};
      &:nth-of-type(1) {
        ${(props) =>
          props.$isNavOpen &&
          "transform: rotateZ(45deg) translate(3.5px,3.5px)"};
      }
      &:nth-of-type(2) {
        margin-top: 4px;
        width: 100%;
        ${(props) => props.$isNavOpen && "transform:rotatez(-45deg)"};
      }
    }
  }
`;

const ToggleBtn = ({ onClick, $isNavOpen }) => {
  return (
    <StyledContainer onClick={() => onClick()} $isNavOpen={$isNavOpen}>
      <div>
        <span></span>
        <span></span>
      </div>
      Menu
    </StyledContainer>
  );
};

export default ToggleBtn;
