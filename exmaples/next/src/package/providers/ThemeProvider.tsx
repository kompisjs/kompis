import React, { useEffect, useState, createContext } from 'react';
import { getInitialTheme } from '../utils/theme.utils';
import { Theme } from '../types';

type ThemeData = {
  theme: Theme,
  toggleTheme: () => void;
};

type Props = {
  initialTheme?: Theme;
} & React.HTMLAttributes<HTMLElement>;

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

const ThemeProvider: React.FC<Props> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme(initialTheme));

  const rawSetTheme = (rawTheme: Theme) => {
    const root = window?.document?.documentElement;
    const isDark = rawTheme === 'dark';

    root?.classList?.remove(isDark ? 'light' : 'dark');
    root?.classList?.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;