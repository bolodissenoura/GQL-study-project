import React from "react";
import { createContext } from "react";

interface AuthContentInterface {
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContentInterface);

export function AuthProvider({ children }: any) {
  const isAuthenticated = false;

  async function signIn(){
    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
