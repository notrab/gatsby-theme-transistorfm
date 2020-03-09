import React, { createContext, useReducer, useContext } from 'react';

const PlayerStateContext = createContext();
const PlayerDispatchContext = createContext();

const SET_EPISODE = 'SET_EPISODE';

const initialState = { episode: null };

const reducer = (state, action) => {
  switch (action.type) {
    case SET_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };

    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
};

const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayerStateContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerStateContext.Provider>
  );
};

const usePlayerState = () => {
  const context = useContext(PlayerStateContext);

  if (!context)
    throw new Error('usePlayerState must be used within a PlayerProvider');

  return context;
};

const usePlayerDispatch = () => {
  const context = useContext(PlayerDispatchContext);

  if (!context)
    throw new Error('usePlayerDispatch must be used within a PlayerProvider');

  return context;
};

export { PlayerProvider, usePlayerState, usePlayerDispatch, SET_EPISODE };
