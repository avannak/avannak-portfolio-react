import { createContext, Dispatch, SetStateAction } from "react";

export type MyContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalType: string | null;
  setModalType: Dispatch<SetStateAction<string>>;
  scrollPosition: number;
  setScrollPosition: Dispatch<SetStateAction<number>>;
  storedScrollPos: number;
  setStoredScrollPos: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  navBarIsOn: boolean;
  setNavBarIsOn: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<MyContextType>({
  showModal: false,
  setShowModal: () => {},
  modalType: null,
  setModalType: () => {},
  scrollPosition: 0,
  setScrollPosition: () => {},
  storedScrollPos: 0,
  setStoredScrollPos: () => {},
  height: 0,
  setHeight: () => {},
  navBarIsOn: false,
  setNavBarIsOn: () => {},
  isDarkMode: true,
  setIsDarkMode: () => {},
});
