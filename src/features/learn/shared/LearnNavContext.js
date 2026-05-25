import React, { createContext, useContext } from "react";

const LearnNavContext = createContext({
  menuOpen: false,
  closeMenu: () => {},
});

export function LearnNavProvider({ menuOpen, closeMenu, children }) {
  return (
    <LearnNavContext.Provider value={{ menuOpen, closeMenu }}>
      {children}
    </LearnNavContext.Provider>
  );
}

export function useLearnNav() {
  return useContext(LearnNavContext);
}
