"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type MyContextType = {
  parallaxIsOn: boolean;
  setParallaxIsOn: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<MyContextType>({
  parallaxIsOn: false,
  setParallaxIsOn: () => {},
  isMobile: false,
  setIsMobile: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [parallaxIsOn, setParallaxIsOn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ parallaxIsOn, setParallaxIsOn, isMobile, setIsMobile }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
