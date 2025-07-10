import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for different content sections
interface BandMember {
  name: string;
  role: string;
  bio: string;
}

interface Album {
  title: string;
  year: number;
  tracks: string[];
  description: string;
  featured: boolean;
}

interface TourDate {
  date: string;
  venue: string;
  city: string;
  ticketLink?: string;
  soldOut?: boolean;
}

interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

interface ContentData {
  // Hero Section
  heroTitle: string;
  heroTagline: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  // About Section
  bandBio: string;
  bandMembers: BandMember[];
  location: string;
  formed: string;
  genre: string;

  // Music Section
  albums: Album[];
  primaryPlatform: string;
  primaryPlatformUrl: string;

  // Tour Section
  tourDates: TourDate[];

  // Contact Section
  email: string;
  socialLinks: SocialLink[];

  // Reviews/Quotes
  reviews: string[];
}

interface ContentContextType {
  content: ContentData;
  updateContent: (key: keyof ContentData, value: any) => void;
  resetContent: () => void;
}

const defaultContent: ContentData = {
  // Hero Section
  heroTitle: 'LENAX',
  heroTagline: 'Cosmic Horror Fueled Nightmares',
  heroCtaPrimary: 'Enter the Void',
  heroCtaSecondary: 'Join the Coven',

  // About Section
  bandBio: `Originally conceived as a solo project by Venomous to satisfy a longing need to create music, Lenax quickly evolved from a one-off endeavor into a full band driven by an infectious love for live performance. About 18 months after their first show and following two EPs, the band released their full-length debut "Infection."

Lenax's music conveys a drive towards individuality and free will, using occult and cosmic horror themes to explore deeper philosophical concepts beyond simple religious rebellion. Their sound pays homage to influences like Immortal, Enslaved, Watain, and Dark Funeral while establishing something entirely new in the realm of melodic black metal.`,
  
  bandMembers: [
    {
      name: 'Venomous',
      role: 'Vocals/Guitar',
      bio: 'Main songwriter and creative director, driving the cosmic horror vision of Lenax through otherworldly compositions and eldritch vocals.'
    },
    {
      name: 'Mordred', 
      role: 'Guitar',
      bio: 'Collaborates on songwriting, weaving intricate melodic passages that bridge the void between aggression and atmosphere.'
    },
    {
      name: 'Bones',
      role: 'Drums',
      bio: 'The rhythmic foundation that anchors Lenax\'s cosmic chaos, delivering thunderous beats from the depths of space and time.'
    }
  ],
  
  location: 'Nashville, Tennessee',
  formed: '2022',
  genre: 'Melodic Black Metal with Cosmic Horror Themes',

  // Music Section
  albums: [
    {
      title: 'Infection',
      year: 2025,
      tracks: [
        'Worship Hymn',
        'Leeches', 
        'Chains',
        'Crossroad Black',
        'Hive Mind Apocalypse',
        'We Are Legion',
        'Plague Bringer',
        'Overdrive',
        'Throne of the Forsaken'
      ],
      description: 'The full-length debut featuring cosmic portal artwork and nine tracks of dimensional horror.',
      featured: true
    },
    {
      title: 'Purity',
      year: 2023,
      tracks: [],
      description: 'EP release showcasing the band\'s early exploration into cosmic horror themes.',
      featured: false
    },
    {
      title: 'Hellscape Vol I (The Voices)',
      year: 2022,
      tracks: [],
      description: 'Early release capturing raw underground energy.',
      featured: false
    }
  ],
  
  primaryPlatform: 'Bandcamp',
  primaryPlatformUrl: 'https://lenaxmetal.bandcamp.com',

  // Tour Section
  tourDates: [
    {
      date: '2025-03-15',
      venue: 'The Basement East',
      city: 'Nashville, TN',
      ticketLink: 'https://example.com/tickets',
      soldOut: false
    },
    {
      date: '2025-04-02',
      venue: 'Underground Arts',
      city: 'Philadelphia, PA',
      ticketLink: 'https://example.com/tickets',
      soldOut: false
    }
  ],

  // Contact Section
  email: 'LenaxMetal@gmail.com',
  socialLinks: [
    { platform: 'Bandcamp', url: 'https://lenaxmetal.bandcamp.com', handle: 'lenaxmetal' },
    { platform: 'Facebook', url: 'https://facebook.com/LenaxMetal', handle: 'LenaxMetal' },
    { platform: 'Instagram', url: 'https://instagram.com/LenaxMetal', handle: '@LenaxMetal' },
    { platform: 'Spotify', url: 'https://open.spotify.com/artist/lenax', handle: 'Lenax' }
  ],

  // Reviews/Quotes
  reviews: [
    '"A must-listen for fans of Watain, Immortal, and Enslaved" - The Headbanging Moose',
    '"Raw yet melodic and surprisingly catchy" - Metal Crypt',
    '"Lenax definitely has the chops to do some great things" - Dead Rhetoric'
  ]
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(defaultContent);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('lenax-content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsedContent });
      } catch (error) {
        console.error('Failed to parse saved content:', error);
      }
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lenax-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (key: keyof ContentData, value: any) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('lenax-content');
  };

  const value: ContentContextType = {
    content,
    updateContent,
    resetContent,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}; 