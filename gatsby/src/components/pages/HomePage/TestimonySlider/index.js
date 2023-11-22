import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  arrows: false,
};

const TestimonySlider = () => {
  return (
    <Slider {...sliderSettings}>
      <div>
        “La Croix Gratiot est un domaine familial qui a su tirer le meilleur
        parti de son terroir unique.”
      </div>
      <div>
        “La Croix Gratiot est un domaine familial qui a su tirer le meilleur
        parti de son terroir unique.”
      </div>
    </Slider>
  );
};

export default TestimonySlider;
