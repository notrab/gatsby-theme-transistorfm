import React from 'react';
import { Link } from 'gatsby';

import Player from './Player';

const Layout = ({ children }) => (
  <React.Fragment>
    <Link to="/">Episodes</Link>
    <Player />
    {children}
  </React.Fragment>
);

export default Layout;
