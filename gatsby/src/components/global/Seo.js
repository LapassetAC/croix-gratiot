import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { useI18next } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";

export const Seo = ({ pageTitle, pageDescription, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteImage
          siteUrl
          author
          lang
        }
      }
    }
  `);

  const { siteTitle, siteDescription, siteUrl, author, lang, siteImage } =
    data.site.siteMetadata;

  // const { path } = useI18next();
  const { pathname } = useLocation();

  const seo = {
    title: pageTitle ? siteTitle + " - " + pageTitle : siteTitle,
    description: siteDescription || pageDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${siteImage}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      {/* Base */}
      <meta name="description" content={seo.description} />
      <meta name="lang" content={lang} />
      <meta name="author" content={author} />
      <meta name="description" content={seo.description} />
      {/* Socials */}
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {children}
    </>
  );
};
