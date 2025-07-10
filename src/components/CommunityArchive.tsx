import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Filter, Eye, Download, Calendar, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ArchiveItem {
  id: string;
  title: string;
  type: 'photo' | 'demo' | 'flyer' | 'recording';
  contributor: string;
  date: string;
  description: string;
  verified: boolean;
  downloadUrl?: string;
}

// Mock data for demonstration
const mockArchiveItems: ArchiveItem[] = [
  {
    id: '1',
    title: 'Lenax Live at The Basement - 2024',
    type: 'photo',
    contributor: 'VoidWalker',
    date: '2024-03-15',
    description: 'Epic shot of Venomous during the "Leeches" breakdown',
    verified: true,
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Early Demo - "Whispers in the Dark"',
    type: 'demo',
    contributor: 'CosmicHorror666',
    date: '2023-08-20',
    description: 'Rare early recording before "Purity" EP',
    verified: false,
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'Underground Show Flyer - Nashville',
    type: 'flyer',
    contributor: 'MetalArchivist',
    date: '2024-01-10',
    description: 'Original flyer from secret Nashville underground show',
    verified: true,
    downloadUrl: '#'
  },
];

export const CommunityArchive: React.FC = () => {
  const { colors } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>(mockArchiveItems);

  const filters = [
    { id: 'all', label: 'ALL ARTIFACTS', icon: Eye },
    { id: 'photo', label: 'PHOTOS', icon: Eye },
    { id: 'demo', label: 'DEMOS', icon: Download },
    { id: 'flyer', label: 'FLYERS', icon: Eye },
    { id: 'recording', label: 'RECORDINGS', icon: Download },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.type === selectedFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'photo': return colors.accent;
      case 'demo': return '#ff6b35';
      case 'flyer': return '#4caf50';
      case 'recording': return '#9c27b0';
      default: return colors.accent;
    }
  };

  const UploadModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: colors.background + 'e0' }}
        onClick={() => setShowUploadModal(false)}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div 
          className="cosmic-card p-8 rounded-lg border"
          style={{ 
            backgroundColor: colors.background,
            borderColor: colors.border,
          }}
        >
          <h3 
            className="font-cosmic-header text-2xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            CONTRIBUTE TO THE VOID
          </h3>
          
          <div className="space-y-6">
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.text }}
              >
                Title
              </label>
              <input
                type="text"
                className="cosmic-input w-full p-3 rounded-md border bg-transparent"
                style={{ 
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholder="Name your artifact..."
              />
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.text }}
              >
                Type
              </label>
              <select 
                className="cosmic-input w-full p-3 rounded-md border bg-transparent"
                style={{ 
                  borderColor: colors.border,
                  color: colors.text,
                  backgroundColor: colors.secondary + '20',
                }}
              >
                <option value="photo">Photo</option>
                <option value="demo">Demo Recording</option>
                <option value="flyer">Concert Flyer</option>
                <option value="recording">Live Recording</option>
              </select>
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.text }}
              >
                Description
              </label>
              <textarea
                rows={4}
                className="cosmic-input w-full p-3 rounded-md border bg-transparent resize-none"
                style={{ 
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholder="Describe your contribution to the void..."
              />
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.text }}
              >
                File Upload
              </label>
              <div 
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-opacity-10 hover:bg-white transition-colors"
                style={{ borderColor: colors.border }}
              >
                <Upload 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{ color: colors.accent }}
                />
                <p 
                  className="text-sm"
                  style={{ color: colors.text }}
                >
                  Click to upload or drag & drop your artifact
                </p>
                <p 
                  className="text-xs opacity-60 mt-2"
                  style={{ color: colors.text }}
                >
                  Images, audio files, PDFs accepted (Max 10MB)
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300"
                style={{
                  backgroundColor: colors.secondary + '50',
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                Cancel
              </button>
              <button
                className="flex-1 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text,
                }}
              >
                Submit to Void
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="void" className="py-20 px-4">
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
            THE VOID
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.accent }}
          />
          <p 
            className="font-atmospheric text-lg opacity-80 max-w-2xl mx-auto mb-8"
            style={{ color: colors.text }}
          >
            A community-driven archive of rare artifacts, lost recordings, and dimensional memories. 
            Contribute your treasures from the underground.
          </p>
          
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
            }}
          >
            <Upload size={18} />
            <span>Contribute Artifact</span>
          </button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-md font-cosmic-header text-sm font-medium 
                  transition-all duration-300 hover:scale-105
                  ${selectedFilter === filter.id ? 'scale-105' : ''}
                `}
                style={{
                  backgroundColor: selectedFilter === filter.id 
                    ? colors.accent 
                    : colors.secondary + '30',
                  color: colors.text,
                  border: `1px solid ${selectedFilter === filter.id ? colors.accent : colors.border}`,
                }}
              >
                <Icon size={16} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Archive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="cosmic-card p-6 rounded-lg border hover:scale-105 transition-transform duration-300"
                style={{ 
                  backgroundColor: colors.secondary + '20',
                  borderColor: colors.border,
                }}
              >
                {/* Item Preview */}
                <div 
                  className="aspect-video rounded-lg border mb-4 flex items-center justify-center"
                  style={{ 
                    borderColor: colors.border,
                    backgroundColor: colors.secondary + '40',
                  }}
                >
                  <div className="text-center p-4">
                    <div 
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: getTypeColor(item.type) + '30' }}
                    >
                      <Eye 
                        size={24} 
                        style={{ color: getTypeColor(item.type) }}
                      />
                    </div>
                    <span 
                      className="text-xs font-cosmic-header uppercase"
                      style={{ color: getTypeColor(item.type) }}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Item Details */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 
                      className="font-cosmic-header text-lg font-bold flex-1"
                      style={{ color: colors.text }}
                    >
                      {item.title}
                    </h4>
                    {item.verified && (
                      <CheckCircle 
                        size={16} 
                        className="ml-2 mt-1"
                        style={{ color: '#4caf50' }}
                      />
                    )}
                    {!item.verified && (
                      <AlertCircle 
                        size={16} 
                        className="ml-2 mt-1"
                        style={{ color: '#ff9800' }}
                      />
                    )}
                  </div>

                  <p 
                    className="text-sm leading-relaxed opacity-80"
                    style={{ color: colors.text }}
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <User size={12} style={{ color: colors.accent }} />
                      <span style={{ color: colors.text }}>{item.contributor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} style={{ color: colors.accent }} />
                      <span style={{ color: colors.text }}>
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {item.downloadUrl && (
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 rounded-md text-sm font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: colors.accent + '20',
                        color: colors.accent,
                        border: `1px solid ${colors.accent}`,
                      }}
                    >
                      <Download size={14} />
                      <span>Access Artifact</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div 
              className="cosmic-card p-8 rounded-lg border max-w-2xl mx-auto"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <Eye 
                size={48} 
                className="mx-auto mb-4 opacity-50"
                style={{ color: colors.accent }}
              />
              <p 
                className="font-atmospheric text-lg opacity-70"
                style={{ color: colors.text }}
              >
                The void echoes emptily... No artifacts of this type have been discovered yet.
              </p>
              <p 
                className="text-sm opacity-50 mt-2"
                style={{ color: colors.text }}
              >
                Be the first to contribute to the cosmic archive.
              </p>
            </div>
          </motion.div>
        )}

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div 
            className="cosmic-card p-6 rounded-lg border"
            style={{ 
              backgroundColor: colors.secondary + '20',
              borderColor: colors.border,
            }}
          >
            <h4 
              className="font-cosmic-header text-lg font-bold mb-4"
              style={{ color: colors.text }}
            >
              VOID CONTRIBUTION GUIDELINES
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p 
                  className="mb-2 opacity-80"
                  style={{ color: colors.text }}
                >
                  • Respect copyright and ownership rights
                </p>
                <p 
                  className="mb-2 opacity-80"
                  style={{ color: colors.text }}
                >
                  • High-quality files preferred
                </p>
                <p 
                  className="opacity-80"
                  style={{ color: colors.text }}
                >
                  • Include context and provenance when possible
                </p>
              </div>
              <div>
                <p 
                  className="mb-2 opacity-80"
                  style={{ color: colors.text }}
                >
                  • Band reserves right to verify authenticity
                </p>
                <p 
                  className="mb-2 opacity-80"
                  style={{ color: colors.text }}
                >
                  • Credit will be given to contributors
                </p>
                <p 
                  className="opacity-80"
                  style={{ color: colors.text }}
                >
                  • Underground ethos must be maintained
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <UploadModal />}
    </section>
  );
}; 