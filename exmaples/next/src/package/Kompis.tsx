import React from 'react';

import { KompisProps } from './types';
import ThemeProvider from './providers/ThemeProvider';
import App from './components/App';
import NavProvider from './providers/NavProvider';

const Kompis: React.FC<KompisProps> = (props) => {
  const { defaultTheme = 'light' } = props;

  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <NavProvider>
        <App {...props} />
      </NavProvider>
    </ThemeProvider>
  );
};

export default Kompis;