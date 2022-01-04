import React, { useState, createContext } from 'react';

type NavData = {
  index: number,
  setIndex: (value: number) => void;
};

export const NavContext = createContext<NavData>({} as NavData);

const NavProvider: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <NavContext.Provider value={{ index, setIndex }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;