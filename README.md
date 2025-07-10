# LENAX - Official Band Website

A single-page React application for Lenax, a Nashville-based melodic black metal band with cosmic horror themes. Built with React 18, TypeScript, and Tailwind CSS.

## 🎸 Features

- **Cosmic Horror Aesthetic**: Three distinct theme variants (Atmospheric, Raw, Modern)
- **Admin System**: Password-protected content management
- **Inline Editing**: Click-to-edit functionality throughout the site
- **Responsive Design**: Mobile-first approach with smooth animations
- **Community Archive**: Fan submission system with filtering
- **Content Management**: Persistent storage with localStorage
- **Navigation**: Smooth scrolling between sections with cosmic naming

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd Lenax-Website-Single

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`

### Admin Access
- **Password**: `cosmicvoid666`
- Click the floating admin button to access editing features

## 🎨 Theme Variants

1. **Atmospheric** - Deep purple cosmic theme (#4a148c)
2. **Raw** - Green underground metal theme (#1b5e20)  
3. **Modern** - Indigo contemporary theme (#311b92)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation with cosmic naming
│   ├── Hero.tsx         # Landing section with animations
│   ├── About.tsx        # Band information (COVEN)
│   ├── Music.tsx        # Discography (INCANTATIONS)
│   ├── Tour.tsx         # Live shows (RITUALS)
│   ├── CommunityArchive.tsx  # Fan content (THE VOID)
│   ├── Contact.tsx      # Contact form (SUMMON)
│   ├── AdminPanel.tsx   # Admin interface
│   └── EditableText.tsx # Inline editing component
├── contexts/            # React contexts
│   ├── ThemeContext.tsx # Theme management
│   ├── AdminContext.tsx # Admin state
│   └── ContentContext.tsx # Content management
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables
Currently using localStorage for persistence. For production, consider:
- Database integration
- Authentication service
- Image upload service
- Email service integration

### Customization
- Themes: Edit `src/contexts/ThemeContext.tsx`
- Content: Modify `src/contexts/ContentContext.tsx`
- Styling: Update `src/index.css` and `tailwind.config.js`

## 📚 Documentation

See `USER_MANUAL.md` for comprehensive editing instructions.

## 🤘 Band Information

- **Band**: Lenax
- **Genre**: Melodic Black Metal
- **Location**: Nashville, Tennessee
- **Formed**: 2022
- **Latest Album**: "Infection" (2025)

## 🎯 Next Steps

1. **Deployment**: Deploy to Vercel, Netlify, or similar
2. **Backend**: Add proper database and authentication
3. **CMS**: Integrate with headless CMS
4. **Analytics**: Add Google Analytics or similar
5. **SEO**: Enhance meta tags and structured data

## 📄 License

This project is proprietary software for Lenax band.

## 🔗 Links

- Email: LenaxMetal@gmail.com
- Bandcamp: [Band's Bandcamp]
- Social Media: Facebook, Instagram, Spotify

---

*Built with 🤘 for the underground metal scene* "# Lenax-Website-Single" 
