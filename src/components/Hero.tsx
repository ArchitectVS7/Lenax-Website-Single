import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { EditableText } from './EditableText';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { colors } = useTheme();
  const { content, updateContent } = useContent();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Cosmic Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <EditableText
            value={content.heroTitle}
            onChange={(value) => updateContent('heroTitle', value)}
            component="h1"
            className="font-cosmic-header text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-wider"
            style={{ 
              color: colors.text,
              textShadow: `0 0 20px ${colors.accent}40`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <EditableText
            value={content.heroTagline}
            onChange={(value) => updateContent('heroTagline', value)}
            component="p"
            className="font-atmospheric text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 tracking-wide"
            style={{ color: colors.text }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => onNavigate('incantations')}
            className="cosmic-btn-primary px-8 py-4 rounded-md font-cosmic-header font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
              border: `2px solid ${colors.accent}`,
              boxShadow: `0 0 20px ${colors.accent}30`,
            }}
          >
            <EditableText
              value={content.heroCtaPrimary}
              onChange={(value) => updateContent('heroCtaPrimary', value)}
              component="span"
            />
          </button>

          <button
            onClick={() => onNavigate('coven')}
            className="cosmic-btn-secondary px-8 py-4 rounded-md font-cosmic-header font-medium text-lg transition-all duration-300 hover:scale-105 transform"
            style={{
              backgroundColor: 'transparent',
              color: colors.text,
              border: `2px solid ${colors.text}`,
            }}
          >
            <EditableText
              value={content.heroCtaSecondary}
              onChange={(value) => updateContent('heroCtaSecondary', value)}
              component="span"
            />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => onNavigate('coven')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <span 
            className="font-body text-sm uppercase tracking-wider opacity-70"
            style={{ color: colors.text }}
          >
            Descend
          </span>
          <ChevronDown 
            size={24} 
            style={{ color: colors.accent }}
          />
        </motion.div>
      </motion.div>

      {/* Atmospheric Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, ${colors.accent}10 70%, ${colors.background} 100%)`
        }}
      />
    </section>
  );
}; 