import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LePoint from "assets/logos/lePoint.svg";
import lExpress from "assets/logos/lExpress.svg";
import revueVinFrance from "assets/logos/revueVinFrance.svg";
import lesEchos from "assets/logos/lesEchos.svg";
import Arrow from "assets/icons/Arrow";
import { Trans } from "gatsby-plugin-react-i18next";

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
  .slick-track {
    display: flex;
    align-items: baseline;
    .slick-slide {
      & > div {
        padding: 0 7.5px;
        .slide-container {
          display: flex;
          flex-direction: column;
          img {
            max-width: 165px;
            max-height: 55px;
            margin-bottom: 30px;
            align-self: flex-start;
          }
          p {
            font-family: "Moderat Italic";
          }
          .source {
            font-family: "Moderat";
            display: block;
          }
        }
        @media ${({ theme }) => theme.minWidth.sm} {
          padding: 0 15px;
        }
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
        centerMode: true,
        centerPadding: "45px",
      },
    },
  ],
};

const IlsParlentDeNousSlider = () => {
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
          <div className="slide-container">
            <img src={lesEchos} alt="Logo Les Echos" />
            <p>
              <Trans>
                « Anaïs Ricôme, l'iconoclaste de Picpoul de Pinet. »
                <br />« Elle fait ses classes en Nouvelle-Zélande et ne cesse
                d'expérimenter à la vigne comme à la cave. »
              </Trans>
              <span className="source">
                Trois figures inspirantes au salon Millésime Bio, janvier 2023
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <img src={lExpress} alt="Logo L'Express" />
            <p>
              <Trans>
                « Neuf jeunes femmes qui dirigent avec brio, innovent et font
                bouger les lignes. »
                <br />« L'élevage en jarre tend et allonge les vins, c'est
                magique ! »
              </Trans>
              <span className="source">La vigne au féminin, novembre 2023</span>
            </p>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <img src={revueVinFrance} alt="Logo Revue du Vin de France" />
            <p>
              <Trans>
                « La Croix Gratiot est un domaine emblématique de l'AOP Picpoul
                de Pinet, sa plus belle expression est la cuvée Bréchallune, à
                ce prix-là il faut remplir son coffre ! »
              </Trans>
              <span className="source">
                Languedoc : le temps des grands vins, avril 2023
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <img src={LePoint} alt="Logo Le Point" />
            <p>
              <Trans>
                « La Croix Gratiot est un domaine familial qui a su tirer le
                meilleur parti de son terroir unique. »
              </Trans>
              <span className="source">
                La revanche des vins blancs, mars 2023
              </span>
            </p>
          </div>
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

export default IlsParlentDeNousSlider;
