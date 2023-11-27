"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextProps = {
  theme: Theme;
  handleSwitchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme") as Theme | null;

    if (theme) {
      setTheme(theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleSwitchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

// useContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("ThemeContext must be used inside a ThemeContextProvider");
  }

  return context;
};
