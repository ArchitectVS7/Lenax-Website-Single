import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Music } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { EditableText } from './EditableText';

export const About: React.FC = () => {
  const { colors } = useTheme();
  const { content, updateContent } = useContent();

  return (
    <section id="coven" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="font-cosmic-header text-4xl md:text-5xl font-bold mb-4 tracking-wider"
            style={{ color: colors.text }}
          >
            THE COVEN
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.accent }}
          />
        </motion.div>

        {/* Band Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div 
            className="cosmic-card p-6 rounded-lg border"
            style={{ 
              backgroundColor: colors.secondary + '40',
              borderColor: colors.border,
            }}
          >
            <MapPin 
              size={32} 
              className="mb-4"
              style={{ color: colors.accent }}
            />
            <h3 
              className="font-cosmic-header text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              Origin
            </h3>
            <EditableText
              value={content.location}
              onChange={(value) => updateContent('location', value)}
              className="text-sm opacity-80"
              style={{ color: colors.text }}
            />
          </div>

          <div 
            className="cosmic-card p-6 rounded-lg border"
            style={{ 
              backgroundColor: colors.secondary + '40',
              borderColor: colors.border,
            }}
          >
            <Calendar 
              size={32} 
              className="mb-4"
              style={{ color: colors.accent }}
            />
            <h3 
              className="font-cosmic-header text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              Formed
            </h3>
            <EditableText
              value={content.formed}
              onChange={(value) => updateContent('formed', value)}
              className="text-sm opacity-80"
              style={{ color: colors.text }}
            />
          </div>

          <div 
            className="cosmic-card p-6 rounded-lg border"
            style={{ 
              backgroundColor: colors.secondary + '40',
              borderColor: colors.border,
            }}
          >
            <Music 
              size={32} 
              className="mb-4"
              style={{ color: colors.accent }}
            />
            <h3 
              className="font-cosmic-header text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              Genre
            </h3>
            <EditableText
              value={content.genre}
              onChange={(value) => updateContent('genre', value)}
              className="text-sm opacity-80"
              style={{ color: colors.text }}
            />
          </div>
        </motion.div>

        {/* Band Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div 
            className="cosmic-card p-8 rounded-lg border"
            style={{ 
              backgroundColor: colors.secondary + '20',
              borderColor: colors.border,
            }}
          >
            <EditableText
              value={content.bandBio}
              onChange={(value) => updateContent('bandBio', value)}
              multiline
              className="font-body text-lg leading-relaxed"
              style={{ color: colors.text }}
            />
          </div>
        </motion.div>

        {/* Band Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 
            className="font-cosmic-header text-3xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
          >
            THE CONJURERS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.bandMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="cosmic-card p-6 rounded-lg border hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: colors.secondary + '30',
                    borderColor: colors.border,
                  }}
                >
                  {/* Member Avatar Placeholder */}
                  <div 
                    className="w-24 h-24 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                    style={{ 
                      borderColor: colors.accent,
                      backgroundColor: colors.secondary + '50',
                    }}
                  >
                    <span 
                      className="font-cosmic-header text-2xl font-bold"
                      style={{ color: colors.accent }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <EditableText
                    value={member.name}
                    onChange={(value) => {
                      const updatedMembers = content.bandMembers.map((m, i) =>
                        i === index ? { ...m, name: value } : m
                      );
                      updateContent('bandMembers', updatedMembers);
                    }}
                    component="h4"
                    className="font-cosmic-header text-xl font-bold mb-2"
                    style={{ color: colors.text }}
                  />

                  <EditableText
                    value={member.role}
                    onChange={(value) => {
                      const updatedMembers = content.bandMembers.map((m, i) =>
                        i === index ? { ...m, role: value } : m
                      );
                      updateContent('bandMembers', updatedMembers);
                    }}
                    className="text-sm font-medium mb-4 opacity-80"
                    style={{ color: colors.accent }}
                  />

                  <EditableText
                    value={member.bio}
                    onChange={(value) => {
                      const updatedMembers = content.bandMembers.map((m, i) =>
                        i === index ? { ...m, bio: value } : m
                      );
                      updateContent('bandMembers', updatedMembers);
                    }}
                    multiline
                    className="text-sm leading-relaxed opacity-90"
                    style={{ color: colors.text }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Critical Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 
            className="font-cosmic-header text-2xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
          >
            VOICES FROM THE VOID
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="cosmic-card p-6 rounded-lg border italic"
                  style={{ 
                    backgroundColor: colors.secondary + '20',
                    borderColor: colors.border,
                  }}
                >
                  <EditableText
                    value={review}
                    onChange={(value) => {
                      const updatedReviews = content.reviews.map((r, i) =>
                        i === index ? value : r
                      );
                      updateContent('reviews', updatedReviews);
                    }}
                    multiline
                    className="font-atmospheric text-sm leading-relaxed"
                    style={{ color: colors.text }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 