import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function ShowPageTemplate({
  data: {
    show,
    episodes: { nodes: episodes },
  },
}) {
  return (
    <React.Fragment>
      <h1>{show.title}</h1>
      <p>{show.description}</p>

      <Img
        fluid={show.image.childImageSharp.fluid}
        style={{ width: '260px' }}
      />

      <hr />

      {episodes.map(episode => (
        <article key={episode.id}>
          <h2>
            <Link to={`/episode/${episode.id}`}>{episode.title} &rarr;</Link>
          </h2>
          <p>{episode.content}</p>
        </article>
      ))}
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ShowPageQuery {
    show: transistorShow {
      id
      title
      description
      image {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    episodes: allTransistorEpisode(sort: { fields: isoDate, order: DESC }) {
      nodes {
        id
        title
        content
      }
    }
  }
`;
