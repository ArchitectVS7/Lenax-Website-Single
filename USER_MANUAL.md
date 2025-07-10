# LENAX WEBSITE - USER MANUAL

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Admin Access](#admin-access)
3. [Content Editing](#content-editing)
4. [Theme Management](#theme-management)
5. [Section-by-Section Guide](#section-by-section-guide)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)
8. [Recommended Next Steps](#recommended-next-steps)

---

## 🚀 Getting Started

### Accessing the Website
1. Open your web browser
2. Navigate to `http://localhost:3000` (development) or your deployed URL
3. The site will load with the default Atmospheric theme

### First-Time Setup
- The website comes pre-populated with Lenax band information
- All content is editable through the admin system
- No database setup required - uses browser localStorage

---

## 🔐 Admin Access

### Logging In
1. **Locate the Admin Button**: Look for the floating admin button (usually bottom-right corner)
2. **Click the Admin Button**: This opens the admin panel
3. **Enter Password**: Type `cosmicvoid666` (case-sensitive)
4. **Access Granted**: You'll see admin controls appear

### Admin Panel Features
- **Edit Mode Toggle**: Turn editing on/off
- **Theme Switcher**: Change between cosmic horror themes
- **Login Status**: Shows if you're logged in as admin

### Security Notes
- Password is stored in browser session only
- Logout automatically on page refresh
- No server-side authentication (development only)

---

## ✏️ Content Editing

### How Inline Editing Works
1. **Enable Edit Mode**: Login and toggle "Edit Mode" in admin panel
2. **Click to Edit**: Click on any text you want to change
3. **Edit Text**: Type your changes directly
4. **Save**: Press `Enter` to save changes
5. **Cancel**: Press `Escape` to cancel without saving

### What Can Be Edited
- **All Text Content**: Headings, paragraphs, buttons, labels
- **Band Information**: Bio, member names, formation details
- **Album Information**: Titles, track listings, descriptions
- **Tour Dates**: Venues, dates, ticket links
- **Social Media**: Links and contact information
- **Meta Content**: SEO titles, descriptions

### Editing Tips
- Changes are saved instantly to localStorage
- Changes persist between sessions
- Click outside the text field to finish editing
- Use Shift+Enter for line breaks in multi-line text

---

## 🎨 Theme Management

### Available Themes

#### 1. Atmospheric Theme
- **Background**: Deep cosmic black (#0a0a0f)
- **Accent**: Purple (#4a148c)
- **Mood**: Ethereal, spacey, atmospheric
- **Best For**: Ambient, atmospheric content

#### 2. Raw Theme
- **Background**: True black (#0f0f0f)
- **Accent**: Forest green (#1b5e20)
- **Mood**: Underground, raw, aggressive
- **Best For**: Heavy, brutal content

#### 3. Modern Theme
- **Background**: Dark gray (#151515)
- **Accent**: Indigo (#311b92)
- **Mood**: Contemporary, sleek, professional
- **Best For**: Modern metal, professional presentation

### Switching Themes
1. **Access Admin Panel**: Login as admin
2. **Find Theme Selector**: Look for theme dropdown/buttons
3. **Select Theme**: Click on desired theme
4. **Automatic Application**: Theme applies immediately
5. **Persistence**: Choice is saved and remembered

### Custom Theme Colors
To add custom themes, edit `src/contexts/ThemeContext.tsx`:
```typescript
const themes = {
  // Add your custom theme
  custom: {
    background: '#your-bg-color',
    accent: '#your-accent-color',
    // ... other colors
  }
}
```

---

## 📖 Section-by-Section Guide

### 🏠 Hero Section
**Location**: Top of the page
**Content**: Main title, tagline, call-to-action buttons

**Editable Elements**:
- Main title (LENAX)
- Tagline/subtitle
- Primary CTA button text
- Secondary CTA button text

**Tips**:
- Keep title short and impactful
- Tagline should capture band essence
- CTA buttons should encourage action

### 🔮 COVEN (About Section)
**Location**: First main section
**Content**: Band biography, member information, reviews

**Editable Elements**:
- Band biography text
- Member names and roles
- Formation story
- Critical review quotes
- Review sources

**Tips**:
- Keep bio engaging and authentic
- Update member info as needed
- Add new reviews as received

### 🎵 INCANTATIONS (Music Section)
**Location**: Second main section
**Content**: Featured album, track listings, discography

**Editable Elements**:
- Featured album title
- Album description
- Track names and durations
- Album cover information
- Previous releases
- Bandcamp links

**Tips**:
- Update with latest releases
- Keep track listings accurate
- Update links when albums move platforms

### 🎪 RITUALS (Tour Section)
**Location**: Third main section
**Content**: Tour dates, venues, booking information

**Editable Elements**:
- Tour dates
- Venue names and locations
- Ticket links
- Booking contact information
- Tour status messages

**Tips**:
- Keep dates current
- Remove past shows regularly
- Update booking info as needed

### 🌌 THE VOID (Community Archive)
**Location**: Fourth main section
**Content**: Fan submissions, community content

**Features**:
- Fan art uploads
- Photo submissions
- Content filtering
- Verification system

**Management**:
- Review submitted content
- Approve/reject submissions
- Moderate community content

### 📞 SUMMON (Contact Section)
**Location**: Final section
**Content**: Contact form, social media links

**Editable Elements**:
- Contact form labels
- Social media links
- Email addresses
- Contact information

**Tips**:
- Keep contact info current
- Test form functionality
- Update social media links

---

## 🔧 Advanced Features

### Community Archive Management
1. **Viewing Submissions**: All fan uploads appear in THE VOID section
2. **Filtering Content**: Use filter buttons to sort submissions
3. **Moderation**: Mark content as verified/unverified
4. **Upload Interface**: Fans can submit photos, art, etc.

### Form Handling
- **Contact Form**: Collects inquiries with type selection
- **Data Storage**: Currently logs to console (development)
- **Validation**: Basic form validation included

### SEO Management
- **Meta Tags**: Edit in `public/index.html`
- **Structured Data**: Add for better search visibility
- **Page Titles**: Update for each section

### Performance Optimization
- **Image Optimization**: Compress images before upload
- **Caching**: Browser caching enabled
- **Lazy Loading**: Images load as needed

---

## 🔍 Troubleshooting

### Common Issues

#### Can't Login to Admin
- **Check Password**: Ensure `cosmicvoid666` is typed correctly
- **Clear Cache**: Clear browser cache and cookies
- **Try Incognito**: Use private browsing mode

#### Content Not Saving
- **Check Edit Mode**: Ensure edit mode is enabled
- **Browser Storage**: Check if localStorage is enabled
- **Console Errors**: Check browser developer tools

#### Theme Not Changing
- **Admin Access**: Ensure you're logged in as admin
- **Cache Issues**: Hard refresh the page (Ctrl+F5)
- **CSS Loading**: Check if stylesheets are loading

#### Site Not Loading
- **Development Server**: Ensure `npm start` is running
- **Port Conflicts**: Check if port 3000 is available
- **Dependencies**: Run `npm install` to install packages

### Getting Help
1. **Check Console**: Open browser developer tools
2. **Review Logs**: Look for error messages
3. **Test in Different Browser**: Try Chrome, Firefox, Safari
4. **Contact Developer**: If issues persist

---

## 🎯 Recommended Next Steps

### Immediate Improvements (Week 1)

#### 1. Content Updates
- [ ] Review and update all band information
- [ ] Add high-quality band photos
- [ ] Update tour dates with current shows
- [ ] Add latest album information
- [ ] Update social media links

#### 2. Visual Enhancements
- [ ] Add band logo to header
- [ ] Upload album artwork
- [ ] Add band photos to About section
- [ ] Optimize images for web
- [ ] Test all three themes

#### 3. Functionality Testing
- [ ] Test all forms
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check loading speeds
- [ ] Verify admin functionality

### Short-term Goals (Month 1)

#### 1. Production Deployment
- [ ] **Choose hosting platform**: Vercel, Netlify, or similar
- [ ] **Set up custom domain**: lenaxmetal.com
- [ ] **Configure SSL**: Enable HTTPS
- [ ] **Set up analytics**: Google Analytics
- [ ] **Add error tracking**: Sentry or similar

#### 2. Backend Integration
- [ ] **Database setup**: PostgreSQL or MongoDB
- [ ] **Authentication service**: Auth0 or Firebase
- [ ] **Content management**: Headless CMS
- [ ] **Email service**: SendGrid or Mailgun
- [ ] **Image hosting**: Cloudinary or AWS S3

#### 3. SEO Optimization
- [ ] **Meta tags**: Complete all pages
- [ ] **Structured data**: Add JSON-LD
- [ ] **Sitemap**: Generate XML sitemap
- [ ] **Google Search Console**: Submit site
- [ ] **Social media tags**: Open Graph, Twitter Cards

### Medium-term Goals (Months 2-3)

#### 1. Enhanced Features
- [ ] **Music player**: Integrate streaming
- [ ] **Merchandise store**: Add e-commerce
- [ ] **Newsletter signup**: Email marketing
- [ ] **Blog/news section**: Content updates
- [ ] **Fan club area**: Members-only content

#### 2. Performance Optimization
- [ ] **CDN setup**: CloudFlare or AWS
- [ ] **Image optimization**: WebP format
- [ ] **Caching strategy**: Redis or similar
- [ ] **Lazy loading**: Progressive loading
- [ ] **Bundle optimization**: Code splitting

#### 3. Marketing Integration
- [ ] **Social media feeds**: Live updates
- [ ] **Email automation**: Welcome series
- [ ] **Analytics tracking**: Conversion goals
- [ ] **A/B testing**: Optimize conversion
- [ ] **SEO monitoring**: Track rankings

### Long-term Vision (Months 4-6)

#### 1. Advanced Functionality
- [ ] **Mobile app**: React Native version
- [ ] **Live streaming**: Concert broadcasts
- [ ] **Virtual reality**: 360° concert experience
- [ ] **AI chatbot**: Fan interaction
- [ ] **Blockchain integration**: NFT merchandise

#### 2. Community Building
- [ ] **Fan forum**: Discussion boards
- [ ] **User profiles**: Fan accounts
- [ ] **Gamification**: Loyalty rewards
- [ ] **User-generated content**: Contests
- [ ] **Social features**: Fan connections

#### 3. Business Growth
- [ ] **Revenue streams**: Multiple income sources
- [ ] **Analytics dashboard**: Business insights
- [ ] **Customer relationship management**: CRM
- [ ] **Automated marketing**: Workflows
- [ ] **International expansion**: Multi-language

---

## 📊 Maintenance Schedule

### Daily Tasks
- [ ] Check for new fan submissions
- [ ] Monitor site performance
- [ ] Review analytics data
- [ ] Respond to contact form submissions

### Weekly Tasks
- [ ] Update tour dates
- [ ] Review and approve community content
- [ ] Check for broken links
- [ ] Backup content data
- [ ] Review security logs

### Monthly Tasks
- [ ] Update band information
- [ ] Review and update themes
- [ ] Performance optimization
- [ ] SEO audit
- [ ] Security updates

### Quarterly Tasks
- [ ] Major content updates
- [ ] Feature additions
- [ ] User experience review
- [ ] Competitive analysis
- [ ] Platform updates

---

## 🎸 Final Notes

This website represents the digital presence of Lenax in the underground metal scene. Keep the aesthetic authentic, the content fresh, and the user experience smooth. The cosmic horror theme should permeate every aspect while maintaining professionalism.

Remember: The underground metal community values authenticity above all else. Keep updates genuine, engage with fans meaningfully, and let the music speak for itself.

**Stay heavy, stay cosmic! 🤘**

---

*For technical support or questions about this manual, contact the development team.* 