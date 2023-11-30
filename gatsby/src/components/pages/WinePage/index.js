import * as React from "react";

const WinePage = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityWine {
          nodes {
            title
            category
            certification
            cepages
            productImage {
              asset {
                url
                gatsbyImageData
              }
            }
            portraitImage {
              asset {
                url
                gatsbyImageData(aspectRatio: 0.74)
              }
            }
          }
        }
      }
    `
  );

  const wines = data.allSanityWine.nodes;

  return (
    <StyledContainer className={className}>
      Wine Page
      <Footer />
    </StyledContainer>
  );
};

export default WinePage;
