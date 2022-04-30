import React from "react";
import { AuthProvider } from "./AuthContext";

export const AppProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}