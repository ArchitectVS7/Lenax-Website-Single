import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  isEditMode: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  toggleEditMode: () => void;
  defaultPassword: string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  
  const defaultPassword = 'cosmicvoid666';

  const login = (password: string): boolean => {
    if (password === defaultPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    if (isAuthenticated) {
      setIsEditMode(!isEditMode);
    }
  };

  const value: AdminContextType = {
    isAuthenticated,
    isEditMode,
    login,
    logout,
    toggleEditMode,
    defaultPassword,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}; 