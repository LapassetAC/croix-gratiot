import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: auto;
  display: flex;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.lg} {
    display: none;
  }
  div {
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ${(props) => props.theme.cubicBezier.base};
    transform: translateY(${({ $isNavOpen }) => $isNavOpen && -2}px);
    ${(props) =>
      props.$isNavOpen ? "width: 20px; height: 20px;" : "width: 20px;"};
    cursor: pointer;
    span {
      background: ${({ $activeHomeSection, theme, $isNavOpen }) =>
        !$isNavOpen &&
        ($activeHomeSection === "red" || $activeHomeSection === "green")
          ? theme.colors.backgroundLight
          : theme.colors.brandBrown};
      height: 1.5px;
      transition: 0.4s;
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

const ToggleBtn = ({ onClick, $isNavOpen, activeHomeSection }) => {
  return (
    <StyledContainer
      $activeHomeSection={activeHomeSection}
      onClick={() => onClick()}
      $isNavOpen={$isNavOpen}
    >
      <div>
        <span></span>
        <span></span>
      </div>
      Menu
    </StyledContainer>
  );
};

export default ToggleBtn;
