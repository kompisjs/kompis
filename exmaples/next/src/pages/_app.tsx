import '../globals.css';
import React from 'react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className='bg-red-800'>
      <div>
        <h1>Some content that should not be visible</h1>
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
