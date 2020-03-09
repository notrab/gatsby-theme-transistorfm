import React, { useEffect, useRef } from 'react';
import { useMediaControls } from 'react-browser-hooks';

import { usePlayerState } from '../context/player';

const Player = () => {
  const player = useRef();
  const { episode } = usePlayerState();
  const { play, pause, paused } = useMediaControls(player);

  useEffect(() => {
    episode && play();
  }, [episode]);

  return (
    <div>
      <audio ref={player} src={episode?.enclosure?.url}></audio>
      {episode && (
        <button onClick={paused ? play : pause}>
          {paused ? 'Play' : 'Pause'}
        </button>
      )}
    </div>
  );
};

export default Player;
