import React from 'react';
import { graphql } from 'gatsby';

import {
  usePlayerState,
  usePlayerDispatch,
  SET_EPISODE,
} from '../context/player';

export default function IndexPageTemplate({ data: { episode } }) {
  const { episode: playingEpisode } = usePlayerState();
  const dispatch = usePlayerDispatch();
  const isPlaying = playingEpisode && playingEpisode.id === episode.id;

  const play = () => dispatch({ type: SET_EPISODE, payload: episode });

  return (
    <React.Fragment>
      <h1>{episode.title}</h1>
      <p>{episode.content}</p>

      {isPlaying ? 'Playing' : <button onClick={play}>Play</button>}
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
