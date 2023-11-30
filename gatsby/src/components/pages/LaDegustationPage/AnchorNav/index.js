import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledContainer = styled.section`
  display: none;
  @media ${(props) => props.theme.minWidth.sm} {
    position: sticky;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    top: 45px;
    padding: 15px 0;
    margin-bottom: 75px;
    background-color: ${(props) => props.theme.colors.backgroundLight};
  }
`;

const StyledNavLink = styled(Link)`
  font-family: "Moderat Mono Light";
  font-size: 10px;
  line-height: 150%;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: 15px;
  }
  &:nth-child(1) {
    grid-column-start: 2;
  }
  &.active,
  &:hover {
    span {
      display: inline-block;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 15px);
        height: calc(100% + 15px);
        border-radius: 50%;
        border: 1px solid currentColor;
        z-index: -1;
      }
    }
  }
`;

const AnchorNavBar = ({ data }) => {
  return (
    <StyledContainer>
      {data.map(({ title }, index) => (
        <StyledNavLink
          key={index}
          to={title}
          activeClass="active"
          offset={-150}
          smooth
          spy
        >
          <span>{title}</span>
        </StyledNavLink>
      ))}
    </StyledContainer>
  );
};

export default AnchorNavBar;
