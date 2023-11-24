import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LePoint from "assets/logos/lePoint.svg";

const StyledSlider = styled(Slider)`
  grid-column: 1/8;
  margin: 0 -15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-column: 3/7;
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

const NewsSlider = () => {
  const sliderRef = useRef();

  return (
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
  );
};

export default NewsSlider;
