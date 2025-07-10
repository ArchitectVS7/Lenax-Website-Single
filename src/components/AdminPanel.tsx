import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, LogIn, LogOut, Edit, Palette, Eye, EyeOff, X } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { useTheme, ThemeVariant } from '../contexts/ThemeContext';

export const AdminPanel: React.FC = () => {
  const { isAuthenticated, isEditMode, login, logout, toggleEditMode, defaultPassword } = useAdmin();
  const { theme, setTheme, colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setPassword('');
      setLoginError('');
      setShowLogin(false);
    } else {
      setLoginError('Invalid password');
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const handleThemeChange = (newTheme: ThemeVariant) => {
    setTheme(newTheme);
  };

  const themeOptions = [
    { id: 'atmospheric' as ThemeVariant, label: 'Atmospheric', color: '#4a148c' },
    { id: 'raw' as ThemeVariant, label: 'Raw', color: '#1b5e20' },
    { id: 'modern' as ThemeVariant, label: 'Modern', color: '#311b92' },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        style={{
          backgroundColor: colors.accent,
          color: colors.text,
        }}
      >
        <Settings size={20} className="mx-auto" />
      </motion.button>

      {/* Admin Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: colors.background + '80' }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 z-50 overflow-y-auto"
              style={{
                backgroundColor: colors.background,
                borderLeft: `1px solid ${colors.border}`,
              }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    className="font-cosmic-header text-xl font-bold"
                    style={{ color: colors.text }}
                  >
                    ADMIN VOID
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white transition-colors"
                    style={{ color: colors.text }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {!isAuthenticated ? (
                  /* Login Section */
                  <div className="space-y-6">
                    <div 
                      className="p-4 rounded-lg border text-center"
                      style={{ 
                        backgroundColor: colors.secondary + '20',
                        borderColor: colors.border,
                      }}
                    >
                      <LogIn 
                        size={32} 
                        className="mx-auto mb-3"
                        style={{ color: colors.accent }}
                      />
                      <p 
                        className="text-sm opacity-80 mb-4"
                        style={{ color: colors.text }}
                      >
                        Enter the void to access admin controls
                      </p>
                      <button
                        onClick={() => setShowLogin(!showLogin)}
                        className="px-4 py-2 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: colors.accent,
                          color: colors.text,
                        }}
                      >
                        {showLogin ? 'Cancel' : 'Enter Admin'}
                      </button>
                    </div>

                    {showLogin && (
                      <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={handleLogin}
                        className="space-y-4"
                      >
                        <div>
                          <label 
                            className="block text-sm font-medium mb-2"
                            style={{ color: colors.text }}
                          >
                            Admin Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={`Hint: ${defaultPassword}`}
                            className="w-full p-3 rounded-md border bg-transparent text-sm"
                            style={{ 
                              borderColor: colors.border,
                              color: colors.text,
                            }}
                          />
                          {loginError && (
                            <p 
                              className="text-xs mt-2"
                              style={{ color: '#ff5252' }}
                            >
                              {loginError}
                            </p>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: colors.accent,
                            color: colors.text,
                          }}
                        >
                          Access Void
                        </button>
                      </motion.form>
                    )}

                    {/* Theme Switcher (Always Available) */}
                    <div>
                      <h4 
                        className="font-cosmic-header font-semibold mb-4"
                        style={{ color: colors.text }}
                      >
                        COSMIC THEME
                      </h4>
                      <div className="space-y-2">
                        {themeOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleThemeChange(option.id)}
                            className={`
                              w-full flex items-center space-x-3 p-3 rounded-md border transition-all duration-300
                              ${theme === option.id ? 'scale-105' : 'hover:scale-105'}
                            `}
                            style={{
                              backgroundColor: theme === option.id 
                                ? colors.accent + '20'
                                : colors.secondary + '20',
                              borderColor: theme === option.id 
                                ? colors.accent 
                                : colors.border,
                              color: colors.text,
                            }}
                          >
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: option.color }}
                            />
                            <span className="font-medium">{option.label}</span>
                            {theme === option.id && (
                              <div className="ml-auto">
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: colors.accent }}
                                />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Admin Controls */
                  <div className="space-y-6">
                    {/* Status */}
                    <div 
                      className="p-4 rounded-lg border"
                      style={{ 
                        backgroundColor: colors.accent + '20',
                        borderColor: colors.accent,
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: '#4caf50' }}
                        />
                        <span 
                          className="font-cosmic-header font-medium"
                          style={{ color: colors.text }}
                        >
                          ADMIN ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Edit Mode Toggle */}
                    <div>
                      <h4 
                        className="font-cosmic-header font-semibold mb-4"
                        style={{ color: colors.text }}
                      >
                        EDIT MODE
                      </h4>
                      <button
                        onClick={toggleEditMode}
                        className={`
                          w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-300
                          ${isEditMode ? 'scale-105' : 'hover:scale-105'}
                        `}
                        style={{
                          backgroundColor: isEditMode 
                            ? colors.accent + '20'
                            : colors.secondary + '20',
                          borderColor: isEditMode 
                            ? colors.accent 
                            : colors.border,
                          color: colors.text,
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          {isEditMode ? <Eye size={20} /> : <EyeOff size={20} />}
                          <span className="font-medium">
                            {isEditMode ? 'Editing Enabled' : 'View Mode'}
                          </span>
                        </div>
                        <Edit size={16} />
                      </button>
                      <p 
                        className="text-xs mt-2 opacity-70"
                        style={{ color: colors.text }}
                      >
                        {isEditMode 
                          ? 'Click any text to edit inline'
                          : 'Enable to edit content throughout the site'
                        }
                      </p>
                    </div>

                    {/* Theme Switcher */}
                    <div>
                      <h4 
                        className="font-cosmic-header font-semibold mb-4"
                        style={{ color: colors.text }}
                      >
                        COSMIC THEME
                      </h4>
                      <div className="space-y-2">
                        {themeOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleThemeChange(option.id)}
                            className={`
                              w-full flex items-center space-x-3 p-3 rounded-md border transition-all duration-300
                              ${theme === option.id ? 'scale-105' : 'hover:scale-105'}
                            `}
                            style={{
                              backgroundColor: theme === option.id 
                                ? colors.accent + '20'
                                : colors.secondary + '20',
                              borderColor: theme === option.id 
                                ? colors.accent 
                                : colors.border,
                              color: colors.text,
                            }}
                          >
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: option.color }}
                            />
                            <span className="font-medium">{option.label}</span>
                            {theme === option.id && (
                              <div className="ml-auto">
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: colors.accent }}
                                />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Content Management Info */}
                    <div 
                      className="p-4 rounded-lg border"
                      style={{ 
                        backgroundColor: colors.secondary + '20',
                        borderColor: colors.border,
                      }}
                    >
                      <h5 
                        className="font-cosmic-header font-medium mb-3"
                        style={{ color: colors.text }}
                      >
                        CONTENT MANAGEMENT
                      </h5>
                      <div className="space-y-2 text-xs">
                        <p 
                          className="opacity-80"
                          style={{ color: colors.text }}
                        >
                          • All content changes save automatically
                        </p>
                        <p 
                          className="opacity-80"
                          style={{ color: colors.text }}
                        >
                          • Data persists in browser localStorage
                        </p>
                        <p 
                          className="opacity-80"
                          style={{ color: colors.text }}
                        >
                          • Press Enter to save, Escape to cancel
                        </p>
                        <p 
                          className="opacity-80"
                          style={{ color: colors.text }}
                        >
                          • Ctrl+Enter for multiline text
                        </p>
                      </div>
                    </div>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 p-3 rounded-md border font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: colors.secondary + '50',
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                    >
                      <LogOut size={16} />
                      <span>Exit Admin</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}; 