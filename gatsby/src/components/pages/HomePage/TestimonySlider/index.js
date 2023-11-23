import React, { useState, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LePoint from "assets/logos/lePoint.svg";
import arrowBtn from "assets/icons/arrowBtn.svg";

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
  }
`;
const StyledSlider = styled(Slider)`
  @media ${({ theme }) => theme.minWidth.md} {
    grid-column: 3/7;
    margin: 0 -15px;
  }
  .slick-slide {
    & > div {
      padding: 0 15px;
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
};

const TestimonySlider = () => {
  const sliderRef = useRef();

  return (
    <StyledContainer className="grid">
      <button onClick={() => sliderRef.current.slickPrev()}>
        <img src={arrowBtn} alt="" />
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
      <button onClick={() => sliderRef.current.slickNext()}>
        <img src={arrowBtn} alt="" />
      </button>
    </StyledContainer>
  );
};

export default TestimonySlider;
