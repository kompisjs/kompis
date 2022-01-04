import React from 'react';

import kompisConfig from '../config.kompis';
import Kompis from '../package';

const HomePage = () => {
  return (
    <Kompis {...kompisConfig} />
  )
}

export default HomePage;