import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ArrowBtn from "components/global/ArrowBtn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledContainer = styled.section`
  h2 {
    grid-column: 2/8;
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
  /* margin: 0 -15px; */
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
const StyledEvent = styled.div`
  grid-column: 1/8;
  /* margin-bottom: 60px; */
  row-gap: 0;
  align-items: start;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1/5;
      grid-row: 1/6;
    }
  }
  h3 {
    font-family: Moderat Bold;
    grid-column: 1/8;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 100%;
    margin-bottom: 5px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
  aside {
    grid-column: 1/8;
    font-family: Moderat Mono Light;
    line-height: 150%;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
  p {
    grid-column: 1/8;
    margin: 15px 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      margin: 15px 0 60px;
    }
  }
  a {
    grid-column: 2/8;
    color: ${({ theme }) => theme.colors.backgroundLight};
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      margin-left: 30px;
    }
  }
`;

const PostsSection = ({ news, event }) => {
  const getEventImg = getImage(event.thumbImg.asset);

  const newsRender = news.map(({ text, thumbImg, newsUrl }) => {
    const getGatsbyImage = getImage(thumbImg.asset);
    return (
      <StyledNew key={text}>
        <GatsbyImage image={getGatsbyImage} alt={text} />
        <p>{text}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn">
          <ArrowBtn />
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
      <StyledEvent className="grid">
        <GatsbyImage image={getEventImg} alt={event.title} />
        <h3>{event.title}</h3>
        <aside>{event.date}</aside>
        <p>{event.description}</p>
        <a
          href={event.eventUrl}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <ArrowBtn />
          Voir plus
        </a>
      </StyledEvent>
      <StyledDesktop className="grid">{newsRender}</StyledDesktop>
      <StyledMobile {...sliderSettings}>{newsRender}</StyledMobile>
    </StyledContainer>
  );
};

export default PostsSection;
