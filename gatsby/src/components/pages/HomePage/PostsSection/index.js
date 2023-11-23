import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import arrowBtn from "assets/icons/arrowBtn.svg";

const PostsSection = () => {
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
      }
    `
  );

  let news = data.allSanityNews.nodes;

  const StyledContainer = styled.section`
    h2 {
      grid-column: 2/8;
    }
    ul {
      grid-column: 1/8;
      li {
        &:nth-child(1) {
          grid-column: 2/4;
        }
        &:nth-child(2) {
          grid-column: 4/6;
        }
        &:nth-child(3) {
          grid-column: 6/8;
        }
        a {
          color: ${({ theme }) => theme.colors.backgroundLight};
        }
        .gatsby-image-wrapper {
          aspect-ratio: 1;
        }
      }
    }
  `;

  return (
    <StyledContainer className="grid">
      <h2 className="sectionTitle">Les actualités</h2>
      <ul className="grid">
        {news.map(({ text, thumbImg, newsUrl }) => {
          const getGatsbyImage = getImage(thumbImg.asset);
          return (
            <li key={text}>
              <GatsbyImage image={getGatsbyImage} alt={text} />
              <p>{text}</p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <img src={arrowBtn} alt="" />
                Voir plus
              </a>
            </li>
          );
        })}
      </ul>
    </StyledContainer>
  );
};

export default PostsSection;
