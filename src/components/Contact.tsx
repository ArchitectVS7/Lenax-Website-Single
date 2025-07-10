import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ExternalLink, MessageSquare, Music, Briefcase, Package } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';

export const Contact: React.FC = () => {
  const { colors } = useTheme();
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare },
    { id: 'booking', label: 'Booking/Shows', icon: Music },
    { id: 'press', label: 'Press/Media', icon: Briefcase },
    { id: 'merch', label: 'Merchandise', icon: Package },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        inquiryType: 'general',
        message: '',
      });
    }, 3000);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'bandcamp':
        return '🎵';
      case 'facebook':
        return '📘';
      case 'instagram':
        return '📷';
      case 'spotify':
        return '🎧';
      default:
        return '🔗';
    }
  };

  return (
    <section id="summon" className="py-20 px-4">
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
            SUMMON
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.accent }}
          />
          <p 
            className="font-atmospheric text-lg opacity-80 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Reach across the dimensional barriers. Your message will find us in the void.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="cosmic-card p-8 rounded-lg border"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <h3 
                className="font-cosmic-header text-2xl font-bold mb-6"
                style={{ color: colors.text }}
              >
                SEND TRANSMISSION
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.accent + '20' }}
                  >
                    <Send 
                      size={32} 
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <h4 
                    className="font-cosmic-header text-xl font-bold mb-2"
                    style={{ color: colors.text }}
                  >
                    TRANSMISSION SENT
                  </h4>
                  <p 
                    className="text-sm opacity-80"
                    style={{ color: colors.text }}
                  >
                    Your message has been cast into the void. We will respond from beyond the veil.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ color: colors.text }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="cosmic-input w-full p-3 rounded-md border bg-transparent"
                        style={{ 
                          borderColor: colors.border,
                          color: colors.text,
                        }}
                        placeholder="Your name..."
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ color: colors.text }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cosmic-input w-full p-3 rounded-md border bg-transparent"
                        style={{ 
                          borderColor: colors.border,
                          color: colors.text,
                        }}
                        placeholder="your.email@void.com"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label 
                      className="block text-sm font-medium mb-4"
                      style={{ color: colors.text }}
                    >
                      Type of Inquiry
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.id }))}
                            className={`
                              flex items-center space-x-2 p-3 rounded-md border transition-all duration-300
                              ${formData.inquiryType === type.id ? 'scale-105' : 'hover:scale-105'}
                            `}
                            style={{
                              backgroundColor: formData.inquiryType === type.id 
                                ? colors.accent + '20'
                                : colors.secondary + '20',
                              borderColor: formData.inquiryType === type.id 
                                ? colors.accent 
                                : colors.border,
                              color: colors.text,
                            }}
                          >
                            <Icon size={16} />
                            <span className="text-sm font-medium">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.text }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cosmic-input w-full p-3 rounded-md border bg-transparent"
                      style={{ 
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                      placeholder="Brief subject of your message..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.text }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="cosmic-input w-full p-3 rounded-md border bg-transparent resize-none"
                      style={{ 
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                      placeholder="Your message from the void..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-md 
                      font-cosmic-header font-medium transition-all duration-300
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}
                    `}
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.text,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send to the Void</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Email */}
            <div 
              className="cosmic-card p-6 rounded-lg border"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent + '20' }}
                >
                  <Mail 
                    size={24} 
                    style={{ color: colors.accent }}
                  />
                </div>
                <div>
                  <h4 
                    className="font-cosmic-header text-lg font-bold"
                    style={{ color: colors.text }}
                  >
                    DIRECT CONTACT
                  </h4>
                  <p 
                    className="text-sm opacity-70"
                    style={{ color: colors.text }}
                  >
                    For immediate dimensional contact
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${content.email}`}
                className="font-mono text-sm hover:underline transition-colors"
                style={{ color: colors.accent }}
              >
                {content.email}
              </a>
            </div>

            {/* Social Links */}
            <div 
              className="cosmic-card p-6 rounded-lg border"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <h4 
                className="font-cosmic-header text-lg font-bold mb-6"
                style={{ color: colors.text }}
              >
                FOLLOW THE CULT
              </h4>
              <div className="space-y-4">
                {content.socialLinks.map((link, index) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-md border hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.secondary + '10',
                      borderColor: colors.border,
                    }}
                  >
                    <span className="text-2xl">{getSocialIcon(link.platform)}</span>
                    <div className="flex-1">
                      <div 
                        className="font-cosmic-header font-medium"
                        style={{ color: colors.text }}
                      >
                        {link.platform}
                      </div>
                      <div 
                        className="text-sm opacity-70"
                        style={{ color: colors.text }}
                      >
                        {link.handle}
                      </div>
                    </div>
                    <ExternalLink 
                      size={16} 
                      style={{ color: colors.accent }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Booking Info */}
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
                SUMMONING DETAILS
              </h4>
              <div className="space-y-3 text-sm">
                <p 
                  className="opacity-80 leading-relaxed"
                  style={{ color: colors.text }}
                >
                  <strong>Booking:</strong> Available for underground venues, festivals, and interdimensional convergences
                </p>
                <p 
                  className="opacity-80 leading-relaxed"
                  style={{ color: colors.text }}
                >
                  <strong>Press:</strong> High-res photos, press kit, and interview requests
                </p>
                <p 
                  className="opacity-80 leading-relaxed"
                  style={{ color: colors.text }}
                >
                  <strong>Merchandise:</strong> Limited cosmic horror apparel and artifacts
                </p>
                <p 
                  className="opacity-80 leading-relaxed"
                  style={{ color: colors.text }}
                >
                  <strong>Response Time:</strong> 24-48 hours from the void
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 