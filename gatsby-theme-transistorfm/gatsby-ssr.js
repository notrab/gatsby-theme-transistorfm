import React from 'react';

import { PlayerProvider } from './src/context/player';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element, ...props }) => (
  <PlayerProvider>
    <Layout {...props}>{element}</Layout>
  </PlayerProvider>
);
