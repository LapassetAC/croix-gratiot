import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query WineByTitle($title: String!) {
    sanityWine(title: { eq: $title }) {
      category
      cepages
      certification
      title
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
