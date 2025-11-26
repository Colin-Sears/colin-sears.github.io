"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BootContextType = {
  bootActive: boolean;
  setBootActive: (active: boolean) => void;
};

const BootContext = createContext<BootContextType | undefined>(undefined);

export function BootProvider({ children }: { children: ReactNode }) {
  const [bootActive, setBootActive] = useState(false);
  return (
    <BootContext.Provider value={{ bootActive, setBootActive }}>
      {children}
    </BootContext.Provider>
  );
}

export function useBoot() {
  const ctx = useContext(BootContext);
  if (!ctx) throw new Error("useBoot must be used within a BootProvider");
  return ctx;
}
