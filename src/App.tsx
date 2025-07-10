import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Tour } from './components/Tour';
import { CommunityArchive } from './components/CommunityArchive';
import { Contact } from './components/Contact';
import { AdminPanel } from './components/AdminPanel';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle navigation
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'coven', 'incantations', 'rituals', 'void', 'summon'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <section id="hero">
          <Hero onNavigate={handleNavigate} />
        </section>
        <motion.section
          id="coven"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>
        <motion.section
          id="incantations"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Music />
        </motion.section>
        <motion.section
          id="rituals"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tour />
        </motion.section>
        <motion.section
          id="void"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CommunityArchive />
        </motion.section>
        <motion.section
          id="summon"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </main>
      <AdminPanel />
    </div>
  );
}

export default App; 