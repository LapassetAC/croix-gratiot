import * as React from "react";
import Layout from "components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <>
      <Layout>
        <h1>Nos Pratiques</h1>
        <StaticImage
          src="../assets/imgs/homeHeroImage.jpg"
          alt="TLMR - L’excellence accessible"
        />
      </Layout>
    </>
  );
};

export default HomePage;
