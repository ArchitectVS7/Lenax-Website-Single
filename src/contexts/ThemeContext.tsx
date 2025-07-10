import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeVariant = 'atmospheric' | 'raw' | 'modern';

interface ThemeColors {
  background: string;
  text: string;
  accent: string;
  secondary: string;
  border: string;
  hover: string;
}

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  colors: ThemeColors;
}

const themeConfig: Record<ThemeVariant, ThemeColors> = {
  atmospheric: {
    background: '#0a0a0f',
    text: '#f8f8ff',
    accent: '#4a148c',
    secondary: '#1a1a2e',
    border: '#212121',
    hover: '#311b92',
  },
  raw: {
    background: '#0f0f0f',
    text: '#e8e8e8',
    accent: '#1b5e20',
    secondary: '#2d2d2d',
    border: '#212121',
    hover: '#1b5e20',
  },
  modern: {
    background: '#151515',
    text: '#ffffff',
    accent: '#311b92',
    secondary: '#424242',
    border: '#212121',
    hover: '#4a148c',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeVariant>('atmospheric');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('lenax-theme') as ThemeVariant;
    if (savedTheme && themeConfig[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  // Apply CSS custom properties when theme changes
  useEffect(() => {
    const colors = themeConfig[theme];
    const root = document.documentElement;
    
    root.style.setProperty('--bg-primary', colors.background);
    root.style.setProperty('--text-primary', colors.text);
    root.style.setProperty('--accent-primary', colors.accent);
    root.style.setProperty('--accent-secondary', colors.secondary);
    root.style.setProperty('--border-color', colors.border);
    root.style.setProperty('--hover-color', colors.hover);
    
    // Update body background
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [theme]);

  const setTheme = (newTheme: ThemeVariant) => {
    setThemeState(newTheme);
    localStorage.setItem('lenax-theme', newTheme);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    colors: themeConfig[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 