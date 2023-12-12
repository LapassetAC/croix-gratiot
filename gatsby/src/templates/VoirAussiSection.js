import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WineCard from "components/global/WineCard";
import Arrow from "assets/icons/Arrow";
import { Context } from "data/Context";
import { useContext } from "react";

const StyledContainer = styled.section`
  grid-column: 1/8;
  margin: 120px 0;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin: 180px 0;
  }
  h2 {
    grid-column: 3/8;
    margin-bottom: 30px;
  }
  .sliderBtn {
    justify-self: start;
    &:first-of-type {
      grid-column: 1/2;
      justify-self: end;
      transform: rotate(180deg);
    }
  }
`;

const StyledSlider = styled(Slider)`
  grid-column: 2/7;
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function VoirAussiSection({ wines }) {
  const { isMobile } = useContext(Context);
  const sliderRef = useRef();
  const isSliderBtn = isMobile || wines.length > 2;

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        Voir
        <br />
        aussi
      </h2>
      {isSliderBtn && (
        <button
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Précédent"
          className="sliderBtn"
        >
          <Arrow />
        </button>
      )}
      <StyledSlider {...sliderSettings} ref={sliderRef}>
        {wines.map((wine) => (
          <WineCard wine={wine} key={wine.title} />
        ))}
      </StyledSlider>
      {isSliderBtn && (
        <button
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Suivant"
          className="sliderBtn"
        >
          <Arrow />
        </button>
      )}
    </StyledContainer>
  );
}
