import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ArrowIcon from "assets/icons/Arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from "gatsby-plugin-react-i18next";
import { useContext, useEffect, useState } from "react";
import { Context } from "data/Context";

const StyledContainer = styled.section`
  h2 {
    grid-column: 2/8;
  }
`;
const StyledDesktop = styled.div`
  grid-column: 1/8;
  display: grid;
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

const StyledMobile = styled(Slider)`
  grid-column: 1/8;
  margin: 75px -15px 0;
  .slick-slide {
    & > div {
      padding: 0 7.5px;
    }
  }
`;

const StyledNew = styled.div`
  &:nth-child(1) {
    grid-column: 2/4;
  }
  &:nth-child(2) {
    grid-column: 4/6;
  }
  &:nth-child(3) {
    grid-column: 6/8;
  }
  p {
    margin: 15px 0 30px;
  }
  a {
    color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    margin-left: 30px;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1;
  }
`;
const StyledEvent = styled.div`
  grid-column: 1/8;
  row-gap: 0;
  align-items: start;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1/5;
      grid-row: 1/6;
    }
  }
  h3 {
    font-family: Moderat Bold;
    grid-column: 1/8;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 100%;
    margin: 15px 0 5px;

    @media ${({ theme }) => theme.minWidth.sm} {
      margin: 0 0 5px;
      grid-column: 5/8;
    }
  }
  aside {
    grid-column: 1/8;
    font-family: Moderat Mono Light;
    line-height: 150%;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
    }
  }
  p {
    grid-column: 1/8;
    margin: 15px 0 30px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      margin: 15px 0 60px;
    }
  }
  a {
    grid-column: 2/8;
    color: ${({ theme }) => theme.colors.backgroundLight};
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5/8;
      margin-left: 30px;
    }
  }
`;

const LesActualitesSection = ({ news, event }) => {
  const { isMobile } = useContext(Context);
  const getEventImg = getImage(event.thumbImg.asset);
  const [instagramPosts, setInstagramPosts] = useState([]);

  useEffect(() => {
    const fetchFacebookMedia = async () => {
      try {
        const baseUrl = "https://graph.facebook.com/v22.0";
        const instagramAccountId = "17841403141990885";
        const fields = "caption,media_url,permalink";
        const limit = 3;
        const accessToken = process.env.GATSBY_FACEBOOK_ACCESS_TOKEN;

        if (!accessToken) {
          console.error("Facebook access token is not configured");
          return;
        }

        const url = new URL(`${baseUrl}/${instagramAccountId}/media`);
        url.searchParams.append("fields", fields);
        url.searchParams.append("limit", limit);
        url.searchParams.append("access_token", accessToken);

        const response = await fetch(url.toString());
        const data = await response.json();
        console.log("Facebook Media Data:", data);
        setInstagramPosts(data.data || []);
      } catch (error) {
        console.error("Error fetching Facebook media:", error);
      }
    };

    fetchFacebookMedia();
  }, []);

  const newsRender =
    instagramPosts.length > 0
      ? instagramPosts.map(({ caption, media_url, permalink, id }) => {
          return (
            <StyledNew key={id}>
              <img
                src={media_url}
                alt={caption}
                style={{
                  aspectRatio: 1,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <p>{caption}</p>
              <a
                href={permalink}
                target="_blank"
                rel="noreferrer"
                className="btn white"
              >
                <ArrowIcon />
                <Trans>Voir le post</Trans>
              </a>
            </StyledNew>
          );
        })
      : news.map(({ text, thumbImg, newsUrl }) => {
          const getGatsbyImage = getImage(thumbImg.asset);
          return (
            <StyledNew key={text}>
              <GatsbyImage image={getGatsbyImage} alt={text} />
              <p>{text}</p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn white"
              >
                <ArrowIcon />
                <Trans>Voir le post</Trans>
              </a>
            </StyledNew>
          );
        });

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">
        <Trans>Les</Trans>
        <br />
        <Trans>actualités</Trans>
      </h2>
      <StyledEvent className="grid">
        <GatsbyImage image={getEventImg} alt={event.title} />
        <h3>{event.title}</h3>
        <aside>{event.date}</aside>
        <p>{event.description}</p>
        <a
          href={event.eventUrl}
          target="_blank"
          rel="noreferrer"
          className="btn white"
        >
          <ArrowIcon />
          <Trans>Voir l'évènement</Trans>
        </a>
      </StyledEvent>
      {isMobile ? (
        <StyledMobile {...sliderSettings}>{newsRender}</StyledMobile>
      ) : (
        <StyledDesktop className="grid">{newsRender}</StyledDesktop>
      )}
    </StyledContainer>
  );
};

export default LesActualitesSection;
