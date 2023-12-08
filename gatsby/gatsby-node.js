const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const WineTemplate = path.resolve("./src/templates/WineTemplate.js");

  const winesQuery = await graphql(`
    query {
      allSanityWine {
        nodes {
          category
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
      const category = wine.category;
      const slug = wine.slug.current;
      const path = `la-degustation/${slug}`;
      createPage({
        path,
        component: WineTemplate,
        context: {
          category: category,
          slug: slug,
        },
      });
    });
  }
};
