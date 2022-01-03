import React, { useContext } from 'react';

import { KompisProps } from '../types';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';

const Kompis: React.FC<KompisProps> = ({
  components
}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white dark:bg-ink-darkest text-black dark:text-white'>
      <div className='flex h-screen'>
        <div className='flex-none w-44 bg-sky-lightest dark:bg-black border-r-2 border-sky-light dark:border-ink-base'>
          <Aside components={components} />
        </div>
        <div className='flex-1'>
          <div className='flex-col h-full'>
            <div className='flex-none h-12 bg-sky-lightest dark:bg-black border-b-2 border-sky-light dark:border-ink-base'>
              <Header components={components} />
            </div>
            <Main components={components} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Kompis;