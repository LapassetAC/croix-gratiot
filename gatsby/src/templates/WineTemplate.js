import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: String!, $language: String!) {
    sanityWine(slug: { current: { eq: $slug } }) {
      category
      cepages
      certification
      title
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default function WineTemplate({ data }) {
  const { category, cepages, certification, title } = data.sanityWine;
  return (
    <>
      {title}
      {category}
      {cepages}
      {certification}
    </>
  );
}
