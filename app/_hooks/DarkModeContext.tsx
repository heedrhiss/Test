"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { DarkModeProviderProps } from "../_types/typeScripts";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showModal: boolean;
  openModal: () => void;
  handleClose: () => void;
}
const DarkModeContext = createContext({} as DarkModeContextType)

function DarkModeProvider({children}:DarkModeProviderProps){
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showModal, setShowModal] = useState(false)
    function handleClose(){
      setShowModal(false)
    }
    function openModal(){
      setShowModal(true)
      console.log(showModal)
    }
    const toggleDarkMode = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    };
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      }
    }, []);
    useEffect(function(){
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode])
  return (
  <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode, showModal, openModal, handleClose}}>
    {children}
  </DarkModeContext.Provider>
)}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}

export {DarkModeProvider, useDarkMode}
