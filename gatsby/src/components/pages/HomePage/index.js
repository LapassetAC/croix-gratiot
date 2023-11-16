import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <div className="pageAnimation">
      <h1>HomePage</h1>
      <StaticImage
        src="../../../assets/imgs/homeHeroImage.jpg"
        alt="TLMR - L’excellence accessible"
      />
    </div>
  );
};

export default HomePage;
