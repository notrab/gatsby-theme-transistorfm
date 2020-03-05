exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query allEpisodesQuery {
      episodes: allTransistorEpisode {
        nodes {
          id
        }
      }
    }
  `);

  if (errors) return console.error('oops', errors);

  data.episodes.nodes.forEach(({ id }) => {
    createPage({
      path: `/episode/${id}`,
      component: require.resolve('./src/templates/EpisodePageTemplate.js'),
      context: {
        id,
      },
    });
  });

  createPage({
    path: '/',
    component: require.resolve('./src/templates/ShowPageTemplate.js'),
  });
};
