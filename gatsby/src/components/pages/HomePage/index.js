import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";
import styled from "styled-components";
import LogoLCGHero from "assets/logos/logo-lcg-hero.svg";
import arrowBtn from "assets/icons/arrowBtn.svg";
import { Link } from "gatsby";
import TestimonySlider from "./TestimonySlider";
import NosVinsSection from "./NosVinsSection";

const StyledContainer = styled.div`
  .heroSection {
    .heroImg {
      grid-column: 1 / 8;
      grid-row: 1/1;
    }
    .heroContent {
      align-items: center;
      grid-column: 1 / 8;
      grid-row: 1/1;
      position: relative;
      h1 {
        font-family: democratica;
        color: ${({ theme }) => theme.colors.backgroundLight};
        font-size: 26px;
        @media ${({ theme }) => theme.minWidth.sm} {
          font-size: 4vw;
        }
        &:first-child {
          grid-row: 0 / 3;
          grid-column: 2 / 8;
        }
        &:last-child {
          grid-column: 5 / 8;
          grid-row: 3/3;
        }
      }
      img {
        grid-row: 2/3;
        grid-column: 4 / 5;
        width: 100%;
      }
    }
  }
  section:not(.heroSection) {
    padding: 60px 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      padding: 135px 0;
    }
    &.orange,
    &.green,
    &.red {
      margin: 0 -15px 0 -15px;
      padding: 0 15px 0 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin: 0 -180px 0 -60px;
        padding: 0 180px 0 60px;
      }
    }

    &.orange {
      background-color: ${({ theme }) => theme.colors.orange};
      .leDomaine {
        h2 {
          z-index: 1;
          grid-column: 2/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            z-index: 1;
          }
        }
        .gatsby-image-wrapper {
          grid-column: 1/8;
          margin: -15px 0 15px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 2/7;
            margin: -30px 0 30px;
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 4/8;
          }
        }
      }
      .anaisYves {
        h2 {
          grid-column: 7/8;
          z-index: 1;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 6/8;
            z-index: 1;
            grid-row: 1/2;
          }
        }
        .gatsby-image-wrapper {
          grid-column: 1/8;
          margin: -75px 0 15px;

          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 4/7;
            margin-top: -120px;
            grid-row: 2/2;
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 1 / 4;
            grid-row: 2 / 2;
            align-self: end;
          }
        }
      }
    }

    &.green {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.backgroundLight};
      .notrePhilo {
        h2 {
          grid-column: 1/8;
          z-index: 2;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 1/8;
            z-index: 1;
            grid-row: 1/1;
          }
        }
        .gatsby-image-wrapper {
          &.one {
            grid-column: 1/8;
            margin: -15px 0 15px;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 2/6;
              margin: -45px 0 30px;
              grid-row: 2/2;
            }
          }
          &.two {
            grid-row: 3/3;
            grid-column: 4/8;
            margin-bottom: 15px;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 5/7;
              grid-row: 3/5;
            }
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 2 / 5;
            grid-row: 3/3;
          }
        }
        .btn {
          grid-column: 2/8;
          margin-top: 30px;
          color: ${({ theme }) => theme.colors.backgroundLight};
          @media ${({ theme }) => theme.minWidth.sm} {
            margin-top: 0;
            grid-row: 4/4;
            grid-column: 3/5;
          }
        }
      }
      .ilsParlent {
        h2 {
          grid-column: 1/8;
          margin-bottom: 30px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            margin-bottom: 90px;
          }
        }
      }
    }
    &.red {
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.backgroundLight};
      .unArt {
        @media ${({ theme }) => theme.minWidth.sm} {
          grid-template-rows: 1fr;
        }
        h2 {
          grid-column: 3/8;
          margin-bottom: 15px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            grid-row: 1/1;
            align-self: flex-end;
          }
          @media ${({ theme }) => theme.minWidth.xl} {
            margin-bottom: 30px;
          }
        }
        .gatsby-image-wrapper {
          &:first-of-type {
            grid-column: 1/8;
            aspect-ratio: 1;
            @media ${({ theme }) => theme.minWidth.sm} {
              aspect-ratio: auto;
              grid-column: 2/5;
              grid-row: 1/3;
              align-self: flex-end;
              flex-grow: 1;
            }
          }
          &:last-of-type {
            grid-column: 1/6;
            margin: 15px 0;
            @media ${({ theme }) => theme.minWidth.sm} {
              margin: 15px 0 0;
              grid-column: 3/7;
            }
            @media ${({ theme }) => theme.minWidth.xl} {
              margin: 30px 0 0;
            }
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            grid-row: 2/2;
            align-self: end;
          }
        }
      }
    }
  }
`;

const HomePage = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <section className="heroSection grid">
        <StaticImage
          className="heroImg"
          src="../../../assets/imgs/home/heroImage.jpg"
          alt=""
          layout="fullWidth"
          quality="90"
        />
        <div className="heroContent grid">
          <h1>Domaine</h1>
          <img src={LogoLCGHero} alt="" />
          <h1>La Croix Gratiot</h1>
        </div>
      </section>
      <div className="grid">
        <section className="largeText">
          Entre bassin de Thau et collines de pins découvrez des vins bio issu
          d’un travail en famille, de père en fille, dans le respect de la
          nature.
        </section>
      </div>
      <section className="orange">
        <section className="leDomaine grid">
          <h2 className="sectionTitle">
            Le
            <br />
            domaine
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/leDomaine.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <p>
            Au cœur des appellations Languedoc et Picpoul de Pinet, le domaine
            La Croix Gratiot est ancré dans un terroir riche en couleurs. Situé
            sur les collines argilo-calcaires et bercé par les alizés marins
            chargés des senteurs de garrigue, notre vignoble s’étend sur 35
            hectares.
          </p>
        </section>
        <section className="anaisYves grid">
          <h2 className="sectionTitle">
            Anaïs
            <br />
            et
            <br />
            Yves
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/anaisYves.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <p>
            Ici, la passion du vin se transmet de père en fille. Yves, avec son
            frère Hugues, a cultivé les vignes sur les terres familiales avant
            de fonder la cave en 2004. Sa fille, Anaïs, après avoir parcouru le
            monde et enrichi son savoir-faire, est revenue aux racines
            familiales, déterminée à perpétuer et à renouveler l'art vinicole.
          </p>
        </section>
      </section>
      <section className="green">
        <section className="notrePhilo grid">
          <h2 className="sectionTitle">
            Notre <br />
            Philosophie
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/notrePhilo1.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
            className="one"
          />
          <p>
            Notre philosophie se fonde sur un profond respect pour la nature, le
            terroir, et l’humain. Guidés par l’approche biodynamique, nous
            aspirons à une viticulture qui vit en harmonie avec son écosystème,
            valorisant la biodiversité et l'équilibre environnemental.
          </p>
          <Link className="btn" to="/nos-pratiques/">
            <img src={arrowBtn} alt="" />
            Nos pratiques
          </Link>
          <StaticImage
            src="../../../assets/imgs/home/notrePhilo2.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
            className="two"
          />
        </section>
        <section className="ilsParlent grid">
          <h2 className="sectionTitle">
            Ils parlent <br />
            de nous
          </h2>
          <TestimonySlider />
        </section>
      </section>
      <section className="red">
        <section className="unArt grid">
          <h2 className="sectionTitle">
            Un art <br />
            de vivre
          </h2>
          <StaticImage
            src="../../../assets/imgs/home/unArtdeVivre1.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <StaticImage
            src="../../../assets/imgs/home/unArtdeVivre2.jpg"
            alt=""
            quality="90"
            layout="fullWidth"
          />
          <p>
            Sensible à l’art et à la musique, La Croix Gratiot prend plaisir à
            éveiller les sens vers des émotions gustatives ou artistiques. Notre
            domaine est un carrefour où s'assemblent convivialité et créativité
            à travers des événements festifs et des collaborations artistiques.
          </p>
        </section>
        <PostsSection />
      </section>
      <NosVinsSection />
    </StyledContainer>
  );
};

export default HomePage;
