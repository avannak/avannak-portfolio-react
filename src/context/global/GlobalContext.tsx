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
};

export const GlobalContext = createContext<MyContextType>({
  parallaxIsOn: false,
  setParallaxIsOn: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [parallaxIsOn, setParallaxIsOn] = useState(false);

  return (
    <GlobalContext.Provider value={{ parallaxIsOn, setParallaxIsOn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
