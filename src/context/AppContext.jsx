import { useState } from "react";
import { AppContext } from "./MyContext";

export default function AppProvider({ children }) {
  const [appName, setAppName] = useState("Anbu");
  const [company, setCompany] = useState("CyberDude");

  return (
    <AppContext.Provider value={{ appName, setAppName, company, setCompany }}>
      {children}
    </AppContext.Provider>
  );
}
