import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import winesData from "data/winesData";
import { Link } from "gatsby";
import ArrowBtn from "components/global/ArrowBtn";
const StyledContainer = styled.section`
  text-align: center;
  h2 {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    aspect-ratio: 0.9;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/5;
      grid-row: 1/4;
      aspect-ratio: 0.7;
    }
  }
  ul {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
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
  a {
    grid-column: 1/8;
    margin: 15px auto 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
`;

const NosVinsSection = () => {
  const [activeCategory, setActiveCategory] = useState("blanc");

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        Nos <br />
        Vins
      </h2>
      {activeCategory === "blanc" ? (
        <StaticImage
          src="../../../assets/imgs/nosVins/blanc.jpg"
          alt=""
          layout="fullWidth"
        />
      ) : activeCategory === "rose" ? (
        <StaticImage
          src="../../../assets/imgs/nosVins/rose.jpg"
          alt=""
          layout="fullWidth"
        />
      ) : activeCategory === "rouge" ? (
        <StaticImage
          src="../../../assets/imgs/nosVins/rouge.jpg"
          alt=""
          layout="fullWidth"
        />
      ) : activeCategory === "autre" ? (
        <StaticImage
          src="../../../assets/imgs/nosVins/autre.jpg"
          alt=""
          layout="fullWidth"
        />
      ) : null}
      <ul>
        {winesData.map(({ category, title }) => (
          <li key={category} onMouseEnter={() => setActiveCategory(category)}>
            <Link to={"/la-degustation/#" + category}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/la-degustation/">
        <ArrowBtn black>Voir tous nos vins</ArrowBtn>
      </Link>
    </StyledContainer>
  );
};

export default NosVinsSection;
