import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LePoint from "assets/logos/lePoint.svg";
import Arrow from "assets/icons/Arrow";

const StyledContainer = styled.div`
  grid-column: 1/8;
  button {
    display: none;
    @media ${({ theme }) => theme.minWidth.sm} {
      display: block;
    }
    &:first-child {
      grid-column: 1/3;
      justify-self: end;
      transform: rotate(180deg);
    }
    svg {
      fill: ${({ theme }) => theme.colors.backgroundLight};
    }
  }
`;
const StyledSlider = styled(Slider)`
  grid-column: 1/8;
  margin: 0 -15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: 3/7;
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

const TestimonySlider = () => {
  const sliderRef = useRef();

  return (
    <StyledContainer className="grid">
      <button
        onClick={() => sliderRef.current.slickPrev()}
        aria-label="Précédent"
      >
        <Arrow />
      </button>
      <StyledSlider {...sliderSettings} ref={sliderRef}>
        <div>
          <img src={LePoint} alt="" />
          <p>
            “La Croix Gratiot est un domaine familial qui a su tirer le meilleur
            parti de son terroir unique.”
          </p>
        </div>
        <div>
          <img src={LePoint} alt="" />
          <p>
            “La Croix Gratiot est un domaine familial qui a su tirer le meilleur
            parti de son terroir unique.”
          </p>
        </div>
        <div>
          <img src={LePoint} alt="" />
          <p>
            “La Croix Gratiot est un domaine familial qui a su tirer le meilleur
            parti de son terroir unique.”
          </p>
        </div>
      </StyledSlider>
      <button
        onClick={() => sliderRef.current.slickNext()}
        aria-label="Suivant"
      >
        <Arrow />
      </button>
    </StyledContainer>
  );
};

export default TestimonySlider;
