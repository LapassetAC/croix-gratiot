const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const WineTemplate = path.resolve("./src/templates/WineTemplate.js");

  const winesQuery = await graphql(`
    query {
      allSanityWine {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (winesQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading Sanity projects`,
      winesQuery.errors
    );
    return;
  }

  const wines = winesQuery.data.allSanityWine.nodes;

  if (wines.length > 0) {
    wines.forEach((wine) => {
      const path = `la-degustation/${wine.slug.current}`;
      createPage({
        path,
        component: WineTemplate,
        context: {
          slug: wine.slug.current,
        },
      });
    });
  }
};
