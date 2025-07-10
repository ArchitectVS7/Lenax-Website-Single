import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Clock, Ticket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { EditableText } from './EditableText';

export const Tour: React.FC = () => {
  const { colors } = useTheme();
  const { content, updateContent } = useContent();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      year: date.getFullYear(),
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase(),
    };
  };

  const addNewTourDate = () => {
    const newDate = {
      date: new Date().toISOString().split('T')[0],
      venue: 'New Venue',
      city: 'City, State',
      ticketLink: '',
      soldOut: false,
    };
    updateContent('tourDates', [...content.tourDates, newDate]);
  };

  const removeTourDate = (index: number) => {
    const updatedDates = content.tourDates.filter((_, i) => i !== index);
    updateContent('tourDates', updatedDates);
  };

  const updateTourDate = (index: number, field: string, value: any) => {
    const updatedDates = content.tourDates.map((date, i) =>
      i === index ? { ...date, [field]: value } : date
    );
    updateContent('tourDates', updatedDates);
  };

  return (
    <section id="rituals" className="py-20 px-4">
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
            RITUALS
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.accent }}
          />
          <p 
            className="font-atmospheric text-lg opacity-80 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Witness the cosmic horror unfold in live dimensional convergences
          </p>
        </motion.div>

        {/* Upcoming Shows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 
            className="font-cosmic-header text-2xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
          >
            UPCOMING CONVERGENCES
          </h3>

          {content.tourDates.length === 0 ? (
            <div 
              className="cosmic-card p-8 rounded-lg border text-center"
              style={{ 
                backgroundColor: colors.secondary + '20',
                borderColor: colors.border,
              }}
            >
              <Clock 
                size={48} 
                className="mx-auto mb-4 opacity-50"
                style={{ color: colors.accent }}
              />
              <p 
                className="font-atmospheric text-lg opacity-70"
                style={{ color: colors.text }}
              >
                No rituals scheduled in this dimension... yet.
              </p>
              <p 
                className="text-sm opacity-50 mt-2"
                style={{ color: colors.text }}
              >
                The void whispers of future convergences.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {content.tourDates.map((show, index) => {
                const dateInfo = formatDate(show.date);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div 
                      className="cosmic-card p-6 rounded-lg border hover:scale-[1.02] transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.secondary + '20',
                        borderColor: colors.border,
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Date */}
                        <div className="md:col-span-2 text-center">
                          <div 
                            className="inline-block p-4 rounded-lg border"
                            style={{ 
                              backgroundColor: colors.accent + '20',
                              borderColor: colors.accent,
                            }}
                          >
                            <div 
                              className="text-xs font-cosmic-header"
                              style={{ color: colors.accent }}
                            >
                              {dateInfo.month}
                            </div>
                            <div 
                              className="text-2xl font-bold"
                              style={{ color: colors.text }}
                            >
                              {dateInfo.day}
                            </div>
                            <div 
                              className="text-xs opacity-70"
                              style={{ color: colors.text }}
                            >
                              {dateInfo.year}
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="md:col-span-7 space-y-2">
                          <EditableText
                            value={show.venue}
                            onChange={(value) => updateTourDate(index, 'venue', value)}
                            component="h4"
                            className="font-cosmic-header text-xl font-bold"
                            style={{ color: colors.text }}
                          />
                          
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} style={{ color: colors.accent }} />
                            <EditableText
                              value={show.city}
                              onChange={(value) => updateTourDate(index, 'city', value)}
                              className="text-sm"
                              style={{ color: colors.text }}
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Calendar size={16} style={{ color: colors.accent }} />
                            <span 
                              className="text-sm"
                              style={{ color: colors.text }}
                            >
                              {dateInfo.dayOfWeek}
                            </span>
                          </div>
                        </div>

                        {/* Status & Actions */}
                        <div className="md:col-span-3 text-center space-y-3">
                          {show.soldOut ? (
                            <div 
                              className="px-4 py-2 rounded-md text-sm font-medium"
                              style={{ 
                                backgroundColor: colors.secondary,
                                color: colors.text,
                              }}
                            >
                              SOLD OUT
                            </div>
                          ) : (
                            <>
                              {show.ticketLink ? (
                                <a
                                  href={show.ticketLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
                                  style={{
                                    backgroundColor: colors.accent,
                                    color: colors.text,
                                  }}
                                >
                                  <Ticket size={16} />
                                  <span>TICKETS</span>
                                  <ExternalLink size={12} />
                                </a>
                              ) : (
                                <div 
                                  className="px-4 py-2 rounded-md text-sm font-medium opacity-60"
                                  style={{ 
                                    backgroundColor: colors.secondary + '50',
                                    color: colors.text,
                                  }}
                                >
                                  TBA
                                </div>
                              )}
                            </>
                          )}

                          <div className="flex space-x-2 justify-center">
                            <button
                              onClick={() => updateTourDate(index, 'soldOut', !show.soldOut)}
                              className="text-xs px-2 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
                              style={{ 
                                backgroundColor: colors.secondary,
                                color: colors.text,
                              }}
                            >
                              {show.soldOut ? 'Unsold' : 'Sold Out'}
                            </button>
                            <button
                              onClick={() => removeTourDate(index)}
                              className="text-xs px-2 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
                              style={{ 
                                backgroundColor: colors.secondary,
                                color: colors.text,
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Add New Show Button (Admin) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={addNewTourDate}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.secondary + '50',
              color: colors.text,
              border: `1px solid ${colors.border}`,
            }}
          >
            <Calendar size={18} />
            <span>Add New Ritual</span>
          </button>
        </motion.div>

        {/* Booking Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div 
            className="cosmic-card p-8 rounded-lg border max-w-2xl mx-auto"
            style={{ 
              backgroundColor: colors.secondary + '20',
              borderColor: colors.border,
            }}
          >
            <h4 
              className="font-cosmic-header text-xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              SUMMON US TO YOUR REALM
            </h4>
            <p 
              className="font-atmospheric mb-6 opacity-80"
              style={{ color: colors.text }}
            >
              Interested in hosting a cosmic horror convergence? 
              Contact us for booking inquiries and ritual preparations.
            </p>
            <a
              href={`mailto:${content.email}?subject=Booking Inquiry`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-md font-cosmic-header font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.accent,
                color: colors.text,
              }}
            >
              <span>Booking Inquiries</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 