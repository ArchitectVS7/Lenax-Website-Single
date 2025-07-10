import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Disc } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { EditableText } from './EditableText';

export const Music: React.FC = () => {
  const { colors } = useTheme();
  const { content, updateContent } = useContent();

  const featuredAlbum = content.albums.find(album => album.featured);
  const otherAlbums = content.albums.filter(album => !album.featured);

  return (
    <section id="incantations" className="py-20 px-4">
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
            INCANTATIONS
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.accent }}
          />
          <p 
            className="font-atmospheric text-lg opacity-80 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Dimensional portals opened through sonic rituals and cosmic horror soundscapes
          </p>
        </motion.div>

        {/* Featured Album */}
        {featuredAlbum && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div 
              className="cosmic-card rounded-lg border overflow-hidden"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Album Art Placeholder */}
                <div className="space-y-6">
                  <div 
                    className="aspect-square rounded-lg border-2 flex items-center justify-center bg-gradient-to-br from-transparent to-black"
                    style={{ 
                      borderColor: colors.accent,
                      backgroundColor: colors.secondary + '50',
                    }}
                  >
                    <div className="text-center p-8">
                      <Disc 
                        size={80} 
                        className="mx-auto mb-4 animate-spin"
                        style={{ color: colors.accent, animationDuration: '3s' }}
                      />
                      <div 
                        className="font-cosmic-header text-2xl font-bold"
                        style={{ color: colors.text }}
                      >
                        {featuredAlbum.title}
                      </div>
                      <div 
                        className="text-sm opacity-60"
                        style={{ color: colors.text }}
                      >
                        {featuredAlbum.year}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={content.primaryPlatformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: colors.accent,
                        color: colors.text,
                      }}
                    >
                      <Play size={18} />
                      <span>Listen on {content.primaryPlatform}</span>
                    </a>
                  </div>
                </div>

                {/* Album Details */}
                <div className="space-y-6">
                  <div>
                    <EditableText
                      value={featuredAlbum.title}
                      onChange={(value) => {
                        const updatedAlbums = content.albums.map(album =>
                          album.featured ? { ...album, title: value } : album
                        );
                        updateContent('albums', updatedAlbums);
                      }}
                      component="h3"
                      className="font-cosmic-header text-3xl font-bold mb-2"
                      style={{ color: colors.text }}
                    />
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} style={{ color: colors.accent }} />
                        <EditableText
                          value={featuredAlbum.year.toString()}
                          onChange={(value) => {
                            const updatedAlbums = content.albums.map(album =>
                              album.featured ? { ...album, year: parseInt(value) || featuredAlbum.year } : album
                            );
                            updateContent('albums', updatedAlbums);
                          }}
                          className="text-sm"
                          style={{ color: colors.text }}
                        />
                      </div>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: colors.accent + '20',
                          color: colors.accent,
                        }}
                      >
                        LATEST RELEASE
                      </span>
                    </div>

                    <EditableText
                      value={featuredAlbum.description}
                      onChange={(value) => {
                        const updatedAlbums = content.albums.map(album =>
                          album.featured ? { ...album, description: value } : album
                        );
                        updateContent('albums', updatedAlbums);
                      }}
                      multiline
                      className="text-sm leading-relaxed opacity-80 mb-6"
                      style={{ color: colors.text }}
                    />
                  </div>

                  {/* Track Listing */}
                  <div>
                    <h4 
                      className="font-cosmic-header text-lg font-semibold mb-4"
                      style={{ color: colors.text }}
                    >
                      DIMENSIONAL PASSAGES
                    </h4>
                    <div className="space-y-2">
                      {featuredAlbum.tracks.map((track, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-2 rounded hover:bg-opacity-20 hover:bg-white transition-colors"
                        >
                          <span 
                            className="text-xs font-mono w-6"
                            style={{ color: colors.accent }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <EditableText
                            value={track}
                            onChange={(value) => {
                              const updatedTracks = [...featuredAlbum.tracks];
                              updatedTracks[index] = value;
                              const updatedAlbums = content.albums.map(album =>
                                album.featured ? { ...album, tracks: updatedTracks } : album
                              );
                              updateContent('albums', updatedAlbums);
                            }}
                            className="text-sm flex-1"
                            style={{ color: colors.text }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Previous Releases */}
        {otherAlbums.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 
              className="font-cosmic-header text-2xl font-bold mb-8 text-center"
              style={{ color: colors.text }}
            >
              ARCHIVED INCANTATIONS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAlbums.map((album, index) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div 
                    className="cosmic-card p-6 rounded-lg border hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundColor: colors.secondary + '30',
                      borderColor: colors.border,
                    }}
                  >
                    {/* Album Art Placeholder */}
                    <div 
                      className="aspect-square rounded-lg border mb-4 flex items-center justify-center"
                      style={{ 
                        borderColor: colors.border,
                        backgroundColor: colors.secondary + '40',
                      }}
                    >
                      <Disc 
                        size={40} 
                        className="group-hover:animate-spin transition-all duration-300"
                        style={{ color: colors.accent }}
                      />
                    </div>

                    <EditableText
                      value={album.title}
                      onChange={(value) => {
                        const updatedAlbums = content.albums.map(a =>
                          a.title === album.title ? { ...a, title: value } : a
                        );
                        updateContent('albums', updatedAlbums);
                      }}
                      component="h4"
                      className="font-cosmic-header text-lg font-bold mb-2"
                      style={{ color: colors.text }}
                    />

                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar size={14} style={{ color: colors.accent }} />
                      <EditableText
                        value={album.year.toString()}
                        onChange={(value) => {
                          const updatedAlbums = content.albums.map(a =>
                            a.title === album.title ? { ...a, year: parseInt(value) || album.year } : a
                          );
                          updateContent('albums', updatedAlbums);
                        }}
                        className="text-xs"
                        style={{ color: colors.text }}
                      />
                    </div>

                    <EditableText
                      value={album.description}
                      onChange={(value) => {
                        const updatedAlbums = content.albums.map(a =>
                          a.title === album.title ? { ...a, description: value } : a
                        );
                        updateContent('albums', updatedAlbums);
                      }}
                      multiline
                      className="text-xs leading-relaxed opacity-80"
                      style={{ color: colors.text }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Primary Platform Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="cosmic-card p-6 rounded-lg border inline-block"
            style={{ 
              backgroundColor: colors.secondary + '20',
              borderColor: colors.border,
            }}
          >
            <p 
              className="font-atmospheric text-lg mb-4"
              style={{ color: colors.text }}
            >
              Experience the full cosmic horror catalogue
            </p>
            <a
              href={content.primaryPlatformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.accent,
                color: colors.text,
              }}
            >
              <span>Visit {content.primaryPlatform}</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 