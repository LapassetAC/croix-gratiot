import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "components/Pages/HomePage/PostsSection";
import styled from "styled-components";
import LCGlogoHero from "assets/logos/LogoLCGHero";
import ArrowBtn from "components/global/ArrowBtn";
import TestimonySlider from "components/Pages/HomePage/TestimonySlider";
import Footer from "components/global/Footer";
import { useLocation } from "@reach/router";
import { useContext } from "react";
import { Context } from "data/Context";
import { graphql, useStaticQuery } from "gatsby";
import winesData from "data/winesData";
import { Link } from "gatsby";

const StyledContainer = styled.div`
  .heroSection {
    height: calc(100vh - 60px);
    .heroImg {
      grid-column: 1/8;
      grid-row: 1/1;
    }
    .heroContent {
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
          grid-row: 0 / 3;
          grid-column: 2 / 8;
        }
        &:last-child {
          grid-column: 5 / 8;
          grid-row: 3/3;
        }
      }
      svg {
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
        a {
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
`;

const StyledNosVinsContainer = styled.section`
  text-align: center;
  h2 {
    grid-column: 1/8;
    br {
      display: none;
    }
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      br {
        display: block;
      }
    }
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    aspect-ratio: 0.9;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/5;
      grid-row: 1/4;
      aspect-ratio: 0.7;
    }
  }
  ul {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
    li {
      font-family: Moderat Mono Bold;
      margin-bottom: 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin-bottom: 30px;
      }
    }
  }
  a {
    grid-column: 1/8;
    margin: 15px auto 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
`;

const HomePage = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
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
    `
  );

  const news = data.allSanityNews.nodes;
  const event = data.allSanityEvents.nodes[0];

  const orangeSectionRef = useRef();
  const greenSectionRef = useRef();
  const redSectionRef = useRef();
  const { pathname } = useLocation();
  const { setActiveHomeSection } = useContext(Context);
  const [activeCategory, setActiveCategory] = useState("blanc");

  useEffect(() => {
    const handleScroll = () => {
      const orangeSectionTop =
        orangeSectionRef.current.getBoundingClientRect().top;
      const greenSectionTop =
        greenSectionRef.current.getBoundingClientRect().top;
      const redSectionTop = redSectionRef.current.getBoundingClientRect().top;
      const redSectionBottom =
        redSectionRef.current.getBoundingClientRect().bottom;
      if (pathname === "/") {
        if (orangeSectionTop < 0 && greenSectionTop > 0) {
          setActiveHomeSection("orange");
        }
        if (greenSectionTop < 0 && redSectionTop > 0) {
          setActiveHomeSection("green");
        }
        if (redSectionTop < 0 && redSectionBottom > 0) {
          setActiveHomeSection("red");
        }
        if (orangeSectionTop > 0 || redSectionBottom < 0) {
          setActiveHomeSection("white");
        }
      } else {
        setActiveHomeSection("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, setActiveHomeSection]);

  return (
    <StyledContainer className={className}>
      <section className="heroSection grid">
        <StaticImage
          className="heroImg"
          src="../assets/imgs/home/heroImage.jpg"
          alt=""
          layout="fullWidth"
        />
        <div className="heroContent grid">
          <h1>Domaine</h1>
          <LCGlogoHero />
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
      <section className="orange" ref={orangeSectionRef}>
        <section className="leDomaine grid">
          <h2 className="sectionTitle">
            Le
            <br />
            domaine
          </h2>
          <StaticImage
            src="../assets/imgs/home/leDomaine.jpg"
            alt=""
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
            src="../assets/imgs/home/anaisYves.jpg"
            alt=""
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
      <section className="green" ref={greenSectionRef}>
        <section className="notrePhilo grid">
          <h2 className="sectionTitle">
            Notre <br />
            Philosophie
          </h2>
          <StaticImage
            src="../assets/imgs/home/notrePhilo1.jpg"
            alt=""
            layout="fullWidth"
            className="one"
          />
          <p>
            Notre philosophie se fonde sur un profond respect pour la nature, le
            terroir, et l’humain. Guidés par l’approche biodynamique, nous
            aspirons à une viticulture qui vit en harmonie avec son écosystème,
            valorisant la biodiversité et l'équilibre environnemental.
          </p>
          <ArrowBtn to="/nos-pratiques/">Nos pratiques</ArrowBtn>
          <StaticImage
            src="../assets/imgs/home/notrePhilo2.jpg"
            alt=""
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
      <section className="red" ref={redSectionRef}>
        <section className="unArt grid">
          <h2 className="sectionTitle">
            Un art <br />
            de vivre
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
            Sensible à l’art et à la musique, La Croix Gratiot prend plaisir à
            éveiller les sens vers des émotions gustatives ou artistiques. Notre
            domaine est un carrefour où s'assemblent convivialité et créativité
            à travers des événements festifs et des collaborations artistiques.
          </p>
        </section>
        <PostsSection news={news} event={event} />
      </section>
      <StyledNosVinsContainer className="grid">
        <h2 className="sectionTitle">
          Nos <br />
          Vins
        </h2>
        {activeCategory === "blanc" ? (
          <StaticImage
            src="../assets/imgs/nosVins/blanc.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "rose" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rose.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "rouge" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rouge.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : activeCategory === "autre" ? (
          <StaticImage
            src="../assets/imgs/nosVins/autre.jpg"
            alt=""
            layout="fullWidth"
          />
        ) : null}
        <ul>
          {winesData.map(({ category, title }) => (
            <li key={category}>
              <Link
                onMouseEnter={() => setActiveCategory(category)}
                to={"/la-degustation/#" + category}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/la-degustation/">
          <ArrowBtn black>Voir tous nos vins</ArrowBtn>
        </Link>
      </StyledNosVinsContainer>
      <Footer />
    </StyledContainer>
  );
};

export default HomePage;
