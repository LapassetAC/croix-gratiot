import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WineCard from "components/global/WineCard";
import Arrow from "assets/icons/Arrow";

const StyledContainer = styled.section`
  grid-column: 1/8;
  h2 {
    grid-column: 3/8;
  }
  button {
    display: none;
    justify-self: start;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: block;
    }
    &:first-of-type {
      grid-column: 1/2;
      justify-self: end;
      transform: rotate(180deg);
    }
  }
`;

const StyledSlider = styled(Slider)`
  grid-column: 1/8;
  margin: 0 -15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: 2/6;
  }
  .slick-slide {
    & > div {
      padding: 0 7.5px;
      @media ${({ theme }) => theme.minWidth.sm} {
        padding: 0 15px;
      }
    }
    img {
      margin-bottom: 30px;
    }
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

export default function VoirAussiSection({ wines }) {
  const sliderRef = useRef();

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        Voir
        <br />
        aussi
      </h2>
      {wines.length > 2 && (
        <button
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Précédent"
        >
          <Arrow />
        </button>
      )}
      <StyledSlider {...sliderSettings} ref={sliderRef}>
        {wines.map((wine) => (
          <WineCard wine={wine} key={wine.title} />
        ))}
      </StyledSlider>
      {wines.length > 2 && (
        <button
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Suivant"
        >
          <Arrow />
        </button>
      )}
    </StyledContainer>
  );
}
