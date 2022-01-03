import React, { useContext} from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeContext } from '../providers/ThemeProvider';


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className='text-black dark:text-white' type="button" onClick={(e) => {
      e.preventDefault();
      toggleTheme();
    }}>{theme === 'light' ? (
      <MoonIcon className='w-6 h-6' />
    ): (
      <SunIcon className='w-6 h-6' />
    )}</button>
  )
}

export default ThemeToggleButton;