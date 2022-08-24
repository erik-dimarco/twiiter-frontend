import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

interface IAuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContextType>({
  token: null,
  setToken: (token) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const signOut = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
