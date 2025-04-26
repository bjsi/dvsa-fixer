import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isPhoneVerified: boolean;
  setPhoneVerified: (verified: boolean) => void;
  resetVerification: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const setPhoneVerified = (verified: boolean) => {
    setIsPhoneVerified(verified);
  };

  const resetVerification = () => {
    setIsPhoneVerified(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isPhoneVerified,
        setPhoneVerified,
        resetVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 