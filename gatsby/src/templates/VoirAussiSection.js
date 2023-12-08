import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledContainer = styled.section``;

const StyledSlider = styled(Slider)``;

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
    <StyledContainer>
      <StyledSlider {...sliderSettings} ref={sliderRef}>
        {/* {wines.map(({ title, cepages, certification }) => title)} */}
      </StyledSlider>
    </StyledContainer>
  );
}
