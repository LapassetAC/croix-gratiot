import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WineCard from "components/global/WineCard";
import Arrow from "assets/icons/Arrow";
import { Context } from "data/Context";
import { useContext } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.section`
  grid-column: 1/8;
  margin: 120px 0;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin: 180px 0;
  }
  h2 {
    grid-column: 3/8;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      margin-bottom: 45px;
    }
  }
  .sliderBtn {
    justify-self: start;
    &:first-of-type {
      grid-column: 1/2;
      justify-self: end;
      transform: rotate(180deg);
    }
  }
  .soloWine {
    grid-column: 2/7;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3/5;
    }
  }
  .wine-card {
    margin-top: 0;
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
  const isSliderBtn = (isMobile && wines.length > 1) || wines.length > 2;
  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        <Trans>Voir</Trans>
        <br />
        <Trans>aussi</Trans>
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
      {wines.length > 1 ? (
        <StyledSlider {...sliderSettings} ref={sliderRef}>
          {wines.map((wine) => (
            <WineCard wine={wine} key={wine.title} />
          ))}
        </StyledSlider>
      ) : (
        <div className="soloWine">
          <WineCard wine={wines[0]} />
        </div>
      )}
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
