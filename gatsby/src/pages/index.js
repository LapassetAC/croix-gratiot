import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LesActualitesSection from "components/pages/HomePage/LesActualitesSection";
import styled from "styled-components";
import LCGlogoHero from "assets/logos/LogoLCGHero";
import ArrowBtn from "components/global/ArrowBtn";
import { Seo } from "components/global/Seo";
import NosVinsSection from "components/global/NosVinsSection";
import IlsParlentDeNousSlider from "components/pages/HomePage/IlsParlentDeNousSlider";
import { useContext } from "react";
import { Context } from "data/Context";
import { graphql } from "gatsby";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.div`
  transition: background-color 0.4s, color 0.4s;
  background-color: ${({ theme, $activeHomeSection }) =>
    $activeHomeSection === "orange"
      ? theme.colors.orange
      : $activeHomeSection === "green"
      ? theme.colors.green
      : $activeHomeSection === "red"
      ? theme.colors.red
      : theme.colors.backgroundLight};
  color: ${({ theme, $activeHomeSection }) =>
    $activeHomeSection === "orange"
      ? theme.colors.black
      : $activeHomeSection === "green"
      ? theme.colors.backgroundLight
      : $activeHomeSection === "red"
      ? theme.colors.backgroundLight
      : theme.colors.black};
  margin: 0 -15px 0 -15px;
  padding: 0 15px 0 15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin: 0 -195px 0 -60px;
    padding: 0 195px 0 60px;
  }
  .heroSection {
    @media ${({ theme }) => theme.minWidth.sm} {
      height: calc(100vh - 30px);
    }
    .heroImg {
      grid-column: 1/8;
      grid-row: 1/1;
      aspect-ratio: 1;
      @media ${({ theme }) => theme.minWidth.sm} {
        aspect-ratio: unset;
      }
    }
    .heroContent {
      grid-template-rows: auto 60px auto;
      align-items: center;
      grid-column: 1/8;
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
          grid-row: 0/3;
          grid-column: 2/8;
        }
        &:last-child {
          grid-row: 3/3;
          grid-column: 3/8;
          text-align: right;
          margin-right: 15px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            text-align: left;
            margin-right: 0;
          }
        }
      }
      svg {
        height: 70px;
        grid-row: 2/3;
        grid-column: 1/8;
        margin: auto;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: auto;
        }
      }
    }
  }
  section:not(.heroSection) {
    padding: 60px 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      padding: 150px 0;
    }
    &.largeText {
      padding: 60px 0;
      @media ${({ theme }) => theme.minWidth.sm} {
        padding: 180px 0 60px;
      }
    }
    &.orange,
    &.green,
    &.red {
      padding: 0;
    }

    &.orange {
      .leDomaine {
        h2 {
          z-index: 1;
          grid-column: 2/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            z-index: 1;
          }
        }
        .leDomaineImg {
          grid-column: 1/8;
          margin-top: -30px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 2/7;
            margin-top: -60px;
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
          margin-top: -90px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 4/7;
            margin-top: -150px;
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
            margin-top: -30px;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 2/6;
              margin-top: -75px;
              grid-row: 2/2;
            }
          }
          &.two {
            grid-row: 3/3;
            grid-column: 4/8;
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
        button {
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
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            margin-bottom: 60px;
          }
        }
      }
    }
    &.red {
      color: ${({ theme }) => theme.colors.backgroundLight};
      .unArt {
        @media ${({ theme }) => theme.minWidth.sm} {
          grid-template-rows: 1fr;
        }
        h2 {
          grid-column: 3/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            grid-row: 1/1;
            align-self: flex-end;
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
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 3/7;
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
  .nosVinsSection {
    transition: fill 0.4s, color 0.4s;
    a,
    button {
      color: ${({ theme, $activeHomeSection }) =>
        $activeHomeSection === "red"
          ? theme.colors.backgroundLight
          : theme.colors.black};
    }
    svg {
      fill: ${({ theme, $activeHomeSection }) =>
        $activeHomeSection === "red"
          ? theme.colors.backgroundLight
          : theme.colors.black};
    }
  }
`;

const HomePage = ({ data }) => {
  const { originalPath } = useI18next();

  const news = data.allSanityNews.nodes;
  const event = data.allSanityEvents.nodes[0];

  const orangeSectionRef = useRef();
  const greenSectionRef = useRef();
  const redSectionRef = useRef();
  const { setActiveHomeSection, activeHomeSection } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const treshold = 200;
      const orangeSectionTop =
        orangeSectionRef.current.getBoundingClientRect().top;
      const greenSectionTop =
        greenSectionRef.current.getBoundingClientRect().top;
      const redSectionTop = redSectionRef.current.getBoundingClientRect().top;
      const redSectionBottom =
        redSectionRef.current.getBoundingClientRect().bottom;
      if (orangeSectionTop < treshold && greenSectionTop > treshold) {
        setActiveHomeSection("orange");
      }
      if (greenSectionTop < treshold && redSectionTop > treshold) {
        setActiveHomeSection("green");
      }
      if (redSectionTop < treshold && redSectionBottom > treshold) {
        setActiveHomeSection("red");
      }
      if (orangeSectionTop > treshold || redSectionBottom < treshold) {
        setActiveHomeSection("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setActiveHomeSection("white");
    };
  }, [originalPath, setActiveHomeSection]);

  return (
    <StyledContainer $activeHomeSection={activeHomeSection}>
      <section className="heroSection grid">
        <StaticImage
          className="heroImg"
          src="../assets/imgs/home/heroImage.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
          quality={90}
        />
        <div className="heroContent grid">
          <h1>
            <Trans>Domaine</Trans>
          </h1>
          <LCGlogoHero />
          <h1>La Croix Gratiot</h1>
        </div>
      </section>
      <div className="grid">
        <section className="largeText">
          <Trans>
            Entre le bassin de Thau et les collines de pins, découvrez des vins
            bio issus d’un travail en famille, de père en fille, dans le respect
            de la nature.
          </Trans>
        </section>
      </div>
      <section className="orange" ref={orangeSectionRef}>
        <section className="leDomaine grid">
          <h2 className="sectionTitle">
            <Trans>Le</Trans>
            <br />
            <Trans>domaine</Trans>
          </h2>
          <StaticImage
            className="leDomaineImg"
            src="../assets/imgs/home/leDomaine.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Au cœur des appellations Languedoc et Picpoul de Pinet, le domaine
              La Croix Gratiot est ancré dans un terroir riche en couleurs.
              Situé sur les collines argilo-calcaires et bercé par les alizés
              marins chargés de senteurs de garrigue, notre vignoble s’étend sur
              35 hectares.
            </Trans>
          </p>
        </section>
        <section className="anaisYves grid">
          <h2 className="sectionTitle">
            Anaïs
            <br />
            <Trans>et</Trans>
            <br />
            Yves
          </h2>
          <StaticImage
            src="../assets/imgs/home/anaisYves.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Ici, la passion du vin se transmet de père en fille. Yves, avec
              son frère Hugues, a cultivé les vignes sur les terres familiales
              avant de fonder la cave en 2004. Sa fille, Anaïs, après avoir
              parcouru le monde et enrichi son savoir-faire, est revenue aux
              racines familiales, déterminée à perpétuer et à renouveler l'art
              vinicole.
            </Trans>
          </p>
        </section>
      </section>
      <section className="green" ref={greenSectionRef}>
        <section className="notrePhilo grid">
          <h2 className="sectionTitle">
            <Trans>Notre</Trans>
            <br />
            <Trans>Philosophie</Trans>
          </h2>
          <StaticImage
            src="../assets/imgs/home/notrePhilo1.jpg"
            alt=""
            layout="fullWidth"
            className="one"
          />
          <p>
            <Trans>
              Notre philosophie se fonde sur un profond respect pour la nature,
              le terroir et l’humain. Guidés par l’approche biodynamique, nous
              aspirons à une viticulture qui vit en harmonie avec son
              écosystème, valorisant la biodiversité et l'équilibre
              environnemental.
            </Trans>
          </p>
          <ArrowBtn to="/nos-pratiques/">
            <Trans>Nos pratiques</Trans>
          </ArrowBtn>
          <StaticImage
            src="../assets/imgs/home/notrePhilo2.jpg"
            alt=""
            layout="fullWidth"
            className="two"
          />
        </section>
        <section className="ilsParlent grid">
          <h2 className="sectionTitle">
            <Trans>Ils parlent</Trans>
            <br />
            <Trans>de nous</Trans>
          </h2>
          <IlsParlentDeNousSlider />
        </section>
      </section>
      <section className="red" ref={redSectionRef}>
        <section className="unArt grid">
          <h2 className="sectionTitle">
            <Trans>Un art</Trans>
            <br />
            <Trans>de vivre</Trans>
          </h2>
          <StaticImage
            src="../assets/imgs/home/unArtdeVivre1.jpg"
            alt=""
            layout="fullWidth"
          />
          <StaticImage
            src="../assets/imgs/home/unArtdeVivre2.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Sensible à l’art et à la musique, La Croix Gratiot prend plaisir à
              éveiller les sens vers des émotions gustatives ou artistiques.
              Notre domaine est un carrefour où s'assemblent convivialité et
              créativité à travers des événements festifs et des collaborations
              artistiques.
            </Trans>
          </p>
        </section>
        <LesActualitesSection news={news} event={event} />
      </section>
      <NosVinsSection />
    </StyledContainer>
  );
};

export default HomePage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allSanityNews(limit: 3) {
      nodes {
        text
        newsUrl
        thumbImg {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityEvents(limit: 1, sort: { date: DESC }) {
      nodes {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
        description
        eventUrl
        thumbImg {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo />;
