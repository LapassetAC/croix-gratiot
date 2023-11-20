import React, { useState, useEffect, Suspense } from "react";
import Layout from "components/Layout";
import HomePage from "components/pages/HomePage";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import PageTransition from "gatsby-plugin-page-transitions";
import { gsap } from "gsap";
import { useHistory, useLocation } from "@reach/router";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const StyledLink = styled(Link)`
  writing-mode: sideways-lr;
  text-orientation: upright;
  text-align: end;
  display: block;
  padding: 15px;

  &.homePage {
    transition: all 1s;
    transform: translateX(
      ${({ isNosPratiques }) => (isNosPratiques ? -1000 : 0)}px
    );
  }
  &.nosPratiques {
    transition: all 1s;
    transform: translateX(
      ${({ isNosPratiques }) => (isNosPratiques ? -1000 : 0)}px
    );
  }
`;

const NosPratiques = React.lazy(() =>
  import("../components/pages/NosPratiques")
);

const LazyComponent = ({ Component, ...props }) => (
  <Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </Suspense>
);

const Index = () => {
  const [isNosPratiques, setIsNosPratiques] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/nos-pratiques/") {
      setIsNosPratiques(true);
    } else {
      setIsNosPratiques(false);
    }
  }, [pathname]);

  return (
    <Layout>
      <StyledContainer>
        <StyledLink to="/">La Croix Gratiot</StyledLink>
        <Router>
          <HomePage path="/" className="homePage" />
          {/* <LazyComponent Component={NosPratiques} path="nos-pratiques" /> */}
        </Router>
        <StyledLink
          isNosPratiques={isNosPratiques}
          className="nosPratiques"
          to="/nos-pratiques/"
          // onClick={handleClick("/nos-pratiques/")}
        >
          Nos Pratiques
        </StyledLink>
      </StyledContainer>
    </Layout>
  );
};

export default Index;
