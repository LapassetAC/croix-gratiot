import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PostsSection from "./PostsSection";

const HomePage = () => {
  return (
    <div className="pageAnimation">
      <h1>HomePage</h1>
      <StaticImage
        src="../../../assets/imgs/homeHeroImage.jpg"
        alt="TLMR - L’excellence accessible"
      />
      <PostsSection />
    </div>
  );
};

export default HomePage;
