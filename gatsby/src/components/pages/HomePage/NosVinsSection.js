import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import winesData from "data/winesData";
import { Link } from "gatsby";
import ArrowBtn from "components/global/ArrowBtn";
const StyledContainer = styled.section`
  text-align: center;
  h2 {
    grid-column: 1/8;
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/5;
    }
  }
  ul {
    grid-column: 1/8;
    li {
      font-family: Moderat Mono Bold;
      margin-bottom: 15px;
    }
  }
  a {
    grid-column: 1/8;
    margin: 15px auto 0;
  }
`;

const NosVinsSection = () => {
  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        Nos <br />
        Vins
      </h2>
      <StaticImage
        src="../../../assets/imgs/home/notrePhilo1.jpg"
        alt=""
        quality="90"
        layout="fullWidth"
      />
      <ul>
        {winesData.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
      <Link to="/la-degustation/">
        <ArrowBtn black>Voir tous nos vins</ArrowBtn>
      </Link>
    </StyledContainer>
  );
};

export default NosVinsSection;
