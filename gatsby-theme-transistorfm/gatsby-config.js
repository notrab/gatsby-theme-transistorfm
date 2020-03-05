module.exports = themeOptions => {
  const { url } = themeOptions;

  return {
    plugins: [
      {
        resolve: 'gatsby-source-transistorfm',
        options: {
          url,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
    ],
  };
};
