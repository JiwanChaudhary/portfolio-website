"use client";

import React, { createContext, useContext, useState } from "react";
import type { SectionProps } from "@/lib/types";

type ActiveSectionConextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionConextProps = {
  activeSection: SectionProps;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionProps>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionConext =
  createContext<ActiveSectionConextProps | null>(null);

const ActiveSectionConextProvider = ({
  children,
}: ActiveSectionConextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionProps>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionConext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionConext.Provider>
  );
};

export default ActiveSectionConextProvider;

// useContext
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionConext);

  if (context === null) {
    throw new Error(
      "ActiveSectionContext must be used inside an ActiveSectionConextProvider"
    );
  }

  return context;
}
