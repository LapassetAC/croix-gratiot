import winesData from "data/winesData";
import React, { useState } from "react";
import styled from "styled-components";
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import ArrowBtn from "components/global/ArrowBtn";
import { useContext } from "react";
import { Context } from "data/Context";
import { useI18next } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.section`
  text-align: center;
  h2 {
    grid-column: 1/8;
    br {
      display: none;
    }
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      br {
        display: block;
      }
    }
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    aspect-ratio: 0.9;
    transition: opacity 0.2s;
    opacity: ${({ $isTransition }) => ($isTransition ? 0 : 1)};
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/5;
      grid-row: 1/4;
      aspect-ratio: 0.7;
    }
  }
  ul {
    margin-top: 15px;
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-top: 0;
      grid-column: 5/8;
    }
    li button {
      font-family: Moderat Mono Bold;
      margin-bottom: 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin-bottom: 45px;
        font-size: 18px;
      }
    }
  }
  .voirTousBtn {
    grid-column: 1/8;
    margin: 15px auto 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
`;

export default function NosVinsSection() {
  const [activeCategory, setActiveCategory] = useState("blanc");
  const [isTransition, setIsTransition] = useState(false);
  const { setPageChange, isMobile } = useContext(Context);
  const { navigate } = useI18next();

  function handleActiveCategory(category) {
    setIsTransition(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransition(false);
    }, 200);
  }

  function handlePageChange(to) {
    isMobile ? navigate(to) : setPageChange(to);
  }

  return (
    <StyledContainer
      className="nosVinsSection grid"
      $isTransition={isTransition}
    >
      <h2 className="sectionTitle">
        <Trans>Nos</Trans>
        <br /> <Trans>Vins</Trans>
      </h2>
      {activeCategory === "blanc" ? (
        <StaticImage
          src="../../assets/imgs/nosVins/blanc.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
        />
      ) : activeCategory === "rose" ? (
        <StaticImage
          src="../../assets/imgs/nosVins/rose.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
        />
      ) : activeCategory === "rouge" ? (
        <StaticImage
          src="../../assets/imgs/nosVins/rouge.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
        />
      ) : activeCategory === "autre" ? (
        <StaticImage
          src="../../assets/imgs/nosVins/autre.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
        />
      ) : null}
      <ul>
        {winesData.map(({ category, title }) => (
          <li key={category}>
            <button
              onMouseEnter={() => handleActiveCategory(category)}
              onClick={() => handlePageChange("/la-degustation/#" + category)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <ArrowBtn to="/la-degustation/" black className="voirTousBtn">
        <Trans>Voir tous nos vins</Trans>
      </ArrowBtn>
    </StyledContainer>
  );
}
