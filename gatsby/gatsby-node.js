const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const WineTemplate = path.resolve("./src/templates/WineTemplate.js");

  const winesQuery = await graphql(`
    query {
      allSanityWine {
        nodes {
          title
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
      console.log("winte.title =>", wine.title);

      const path = `la-degustation/${wine.title}`;
      createPage({
        path,
        component: WineTemplate,
        context: {
          title: wine.title,
        },
      });
    });
  }
};
