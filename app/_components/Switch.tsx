"use client"

import React, { use, useState } from 'react';
import { useDarkMode } from '../_hooks/DarkModeContext';

interface SwitchProps {
  children?: React.ReactNode; // optional, defaults to 'Provide children for label'
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  const handleToggle = (): void => {
    setIsChecked((prev) => !prev);
    toggleDarkMode();
  };
  return !!children ?  (
    <div className={`flex p-[12px] items-center justify-between w-full h-[45px] gap-5 border rounded-[12px] text-black focus:outline-bgc-accent`}>
      {children}
      <button
        className={`flex w-[38px] h-[26px] transition-all duration-500 ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'} p-[2px] rounded-full disabled:cursor-not-allowed`}
        onClick={handleToggle}
        disabled={disabled}
      >
        <span
          className={`w-[22px] h-[22px] rounded-full bg-white ${isDarkMode ? 'translate-x-3' : ''} transition-all duration-500`}
        ></span>
      </button>
    </div>
  ) : (
    <button
        className={`flex w-[38px] h-[26px] transition-all duration-500 ${isChecked ? 'bg-blue-500' : 'bg-gray-300'} p-[2px] rounded-full`}
        onClick={handleToggle}
      >
        <span
          className={`w-[22px] h-[22px] rounded-full bg-white ${
            isChecked ? 'translate-x-3' : ''
          } transition-all duration-500`}
        ></span>
      </button>
  )
};
