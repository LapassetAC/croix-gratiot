import React, { useState, useEffect, useRef } from "react";
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
  //text-align: center;
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: 15px;
  }
  &:nth-child(1) {
    grid-column-start: 2;
  }
  &.active,
  &:hover {
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
`;

const AnchorNavBar = ({ data }) => {
  const [isScrollToAnchorNav, setIsScrollToAnchorNav] = useState(false);
  const anchorNavRef = useRef(null);

  useEffect(() => {
    const handleIsScrollToAnchorNav = () => {
      const anchorNavPosFromTop =
        anchorNavRef.current.getBoundingClientRect().top;
      anchorNavPosFromTop <= 0
        ? setIsScrollToAnchorNav(true)
        : setIsScrollToAnchorNav(false);
    };
    window.addEventListener("scroll", handleIsScrollToAnchorNav);
    return () => {
      window.removeEventListener("scroll", handleIsScrollToAnchorNav);
    };
  });
  return (
    <StyledContainer
      isScrollToAnchorNav={isScrollToAnchorNav}
      ref={anchorNavRef}
    >
      {data.map(({ title }, index) => (
        <StyledNavLink
          key={index}
          to={title}
          activeClass="active"
          offset={-150}
          smooth
          spy
        >
          {title}
        </StyledNavLink>
      ))}
    </StyledContainer>
  );
};

export default AnchorNavBar;
