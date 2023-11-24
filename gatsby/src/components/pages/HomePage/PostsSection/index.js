import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import arrowBtn from "assets/icons/arrowBtn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledContainer = styled.section`
  h2 {
    grid-column: 2/8;
    margin-bottom: 15px;
  }
`;
const StyledDesktop = styled.div`
  display: none;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: 1/8;
    display: grid;
  }
`;

const sliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "45px",
      },
    },
  ],
};

const StyledMobile = styled(Slider)`
  grid-column: 1/8;
  margin: 0 -15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    display: none;
  }
  .slick-slide {
    & > div {
      padding: 0 7.5px;
    }
  }
`;

const StyledNew = styled.div`
  &:nth-child(1) {
    grid-column: 2/4;
  }
  &:nth-child(2) {
    grid-column: 4/6;
  }
  &:nth-child(3) {
    grid-column: 6/8;
  }
  p {
    margin: 15px 0 30px;
  }
  a {
    color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    margin-left: 30px;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1;
  }
`;

const PostsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityNews(limit: 3) {
          nodes {
            text
            newsUrl
            thumbImg {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );

  let news = data.allSanityNews.nodes;

  const newsRender = news.map(({ text, thumbImg, newsUrl }) => {
    const getGatsbyImage = getImage(thumbImg.asset);
    return (
      <StyledNew key={text}>
        <GatsbyImage image={getGatsbyImage} alt={text} />
        <p>{text}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn">
          <img src={arrowBtn} alt="" />
          Voir plus
        </a>
      </StyledNew>
    );
  });

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        Les
        <br /> actualités
      </h2>
      <StyledDesktop className="grid">{newsRender}</StyledDesktop>
      <StyledMobile {...sliderSettings}>{newsRender}</StyledMobile>
    </StyledContainer>
  );
};

export default PostsSection;
