import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navigationItems = [
  { id: 'coven', label: 'COVEN', description: 'About the Band' },
  { id: 'incantations', label: 'INCANTATIONS', description: 'Our Music' },
  { id: 'rituals', label: 'RITUALS', description: 'Live Shows' },
  { id: 'void', label: 'THE VOID', description: 'Community Archive' },
  { id: 'summon', label: 'SUMMON', description: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-opacity-95 backdrop-blur-md' : 'bg-opacity-0'}
        `}
        style={{ 
          backgroundColor: isScrolled ? colors.background : 'transparent',
          borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none'
        }}
      >
        <nav className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="font-cosmic-header text-2xl font-bold cursor-pointer transition-colors hover:opacity-80"
              style={{ color: colors.text }}
              onClick={() => handleNavClick('hero')}
            >
              LENAX
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    font-cosmic-header text-sm font-medium transition-all duration-200
                    hover:scale-105 relative group
                    ${activeSection === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
                  `}
                  style={{ 
                    color: activeSection === item.id ? colors.accent : colors.text 
                  }}
                >
                  {item.label}
                  <span 
                    className={`
                      absolute -bottom-1 left-0 h-0.5 transition-all duration-200
                      ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                    style={{ backgroundColor: colors.accent }}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: colors.text }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: `${colors.background}f0` }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  font-cosmic-header text-xl font-medium transition-all duration-200
                  hover:scale-110 text-center
                  ${activeSection === item.id ? 'opacity-100' : 'opacity-70'}
                `}
                style={{ 
                  color: activeSection === item.id ? colors.accent : colors.text 
                }}
              >
                <div>{item.label}</div>
                <div 
                  className="text-xs font-body opacity-60 mt-1"
                  style={{ color: colors.text }}
                >
                  {item.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}; 