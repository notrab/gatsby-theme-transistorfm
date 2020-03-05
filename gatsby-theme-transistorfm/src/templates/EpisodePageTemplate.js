import React from 'react';
import { graphql } from 'gatsby';
import ReactAudioPlayer from 'react-audio-player';

export default function IndexPageTemplate({ data: { episode } }) {
  return (
    <React.Fragment>
      <h1>{episode.title}</h1>
      <p>{episode.content}</p>

      <ReactAudioPlayer src={episode.enclosure.url} controls preload="none" />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query EpisodePageQuery($id: String!) {
    episode: transistorEpisode(id: { eq: $id }) {
      id
      title
      content
      enclosure {
        url
      }
    }
  }
`;
