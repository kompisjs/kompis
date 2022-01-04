import React, { useContext } from 'react';
import ThemeToggleButton from './ThemeToggleButton'
import { ComponentConfig } from '../types';
import { NavContext } from '../providers/NavProvider';

type Props = {
  components: ComponentConfig[];
}

const Header: React.FC<Props> = ({ components }) => {
  const { index } = useContext(NavContext);

  const { title = 'Unknown component' } = components[index];

  return (
    <div className='flex h-12 justify-between items-center px-4'>
      <div>
        <h3 className='text-lg'>{title}</h3>
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </div>
  )
}

export default Header;