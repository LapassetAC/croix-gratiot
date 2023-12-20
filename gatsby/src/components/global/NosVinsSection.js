import winesData from "data/winesData";
import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import ArrowBtn from "components/global/ArrowBtn";

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
    animation: nosVins 3s forwards;
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
    li {
      font-family: Moderat Mono Bold;
      margin-bottom: 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin-bottom: 30px;
      }
    }
  }
  button {
    grid-column: 1/8;
    margin: 15px auto 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
`;

export default function NosVinsSection({}) {
  const [activeCategory, setActiveCategory] = useState("blanc");

  return (
    <StyledContainer className="nosVinsSection grid">
      <h2 className="sectionTitle">
        <Trans>Nos</Trans>
        <br />
        <Trans>Vins</Trans>
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
            <Link
              onMouseEnter={() => setActiveCategory(category)}
              to={"/la-degustation/#" + category}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ArrowBtn to="/la-degustation/" black>
        <Trans>Voir tous nos vins</Trans>
      </ArrowBtn>
    </StyledContainer>
  );
}
