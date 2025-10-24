# Portfolio Customization Tutorial

## Overview
Your portfolio is built with React, TypeScript, and Tailwind CSS, featuring a modern Discord-like design with dark/light mode support and a PostgreSQL database.

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # All UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and constants
│   │   └── index.css       # Global styles and theme colors
├── server/                 # Backend Express.js API
├── shared/                 # Shared types and database schema
└── package.json           # Dependencies and scripts
```

## 1. Changing Personal Information

### Edit Developer Info
File: `client/src/lib/constants.ts`

```typescript
export const DEVELOPER_INFO = {
  name: "Your Name Here",           // Change to your name
  title: "Your Title Here",         // e.g., "Frontend Developer"
  tagline: "Your tagline here...",  // Main description
  story: "Your background story...", // About section text
  email: "your.email@example.com",  // Your email
  phone: "+1 (555) 123-4567",      // Your phone
  location: "Your City, State",     // Your location
};
```

### Update Social Links
```typescript
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your.email@example.com",
};
```

### Change Stats
```typescript
export const STATS = {
  projects: "50+",      // Number of projects
  experience: "6+",     // Years of experience
  clients: "25+",       // Number of clients
  technologies: "15+",  // Technologies you know
};
```

## 2. Customizing Colors and Theme

### Main Theme Colors
File: `client/src/index.css`

The color system uses CSS custom properties. Update these values:

```css
:root {
  /* Light mode colors */
  --primary: 262 100% 67%;     /* Main purple color (HSL format) */
  --accent: 142 76% 36%;       /* Green accent color */
  --background: 0 0% 100%;     /* White background */
  --foreground: 240 10% 3.9%;  /* Dark text */
}

.dark {
  /* Dark mode colors */
  --primary: 262 100% 67%;     /* Same purple for consistency */
  --accent: 142 76% 36%;       /* Same green accent */
  --background: 240 10% 3.9%;  /* Dark background */
  --foreground: 0 0% 98%;      /* Light text */
}
```

### Converting Colors to HSL Format
Use online tools or this formula:
- **Red (#FF0000)** = `0 100% 50%`
- **Blue (#0000FF)** = `240 100% 50%`
- **Purple (#8B5CF6)** = `262 100% 67%`

### Custom Color Examples
```css
/* For a blue theme */
--primary: 217 91% 60%;    /* Blue */
--accent: 38 92% 50%;      /* Orange accent */

/* For a green theme */
--primary: 142 76% 36%;    /* Green */
--accent: 262 100% 67%;    /* Purple accent */

/* For a red theme */
--primary: 0 84% 60%;      /* Red */
--accent: 217 91% 60%;     /* Blue accent */
```

## 3. Editing Content Sections

### Projects Section
File: `client/src/lib/constants.ts`

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Description of your project...",
    image: "https://your-image-url.com/image.jpg", // Use Unsplash or your own images
    category: "fullstack", // Options: "fullstack", "frontend", "mobile"
    technologies: ["React", "Node.js", "PostgreSQL"], // Your tech stack
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
  },
  // Add more projects...
];
```

### Skills Section
```typescript
export const SKILLS = {
  technical: [
    {
      name: "Frontend Development",
      level: 95,                    // Percentage (0-100)
      technologies: ["React", "Vue.js", "Angular", "TypeScript"],
    },
    // Add more skills...
  ],
  tools: {
    development: ["VS Code", "Git & GitHub", "Terminal", "Postman"],
    design: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    // Update with your tools...
  },
  certifications: [
    { name: "Your Certification", year: "2024" },
    // Add your certifications...
  ],
};
```

## 4. Styling Components

### Button Styles
Buttons use Tailwind classes. Common patterns:

```tsx
// Primary button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">

// Outline button  
<Button variant="outline" className="border-primary text-primary hover:bg-primary">

// With glow effect
<Button className="bg-primary neon-glow">
```

### Card Styles
```tsx
// Glass effect card
<Card className="glass-effect border-border hover:border-primary/30">

// Neon glow card
<Card className="bg-card neon-glow hover:shadow-xl">
```

### Text Styles
```tsx
// Gradient text
<h1 className="gradient-text">Your Text</h1>

// Bold headings
<h2 className="text-4xl font-black text-foreground">

// Muted text
<p className="text-muted-foreground">
```

## 5. Adding New Sections

### Create a New Component
File: `client/src/components/your-section.tsx`

```tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function YourSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="your-section" ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Your Section Title
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Your section description
          </p>
        </motion.div>
        
        {/* Your content here */}
      </div>
    </section>
  );
}
```

### Add to Portfolio Page
File: `client/src/pages/portfolio.tsx`

```tsx
import YourSection from "@/components/your-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <YourSection />  {/* Add your new section */}
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
```

### Update Navigation
File: `client/src/components/navigation.tsx`

Add to `navItems` array:
```tsx
const navItems = [
  { label: "About", id: "about" },
  { label: "Your Section", id: "your-section" },  // Add this
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];
```

## 6. Changing Images

### Hero/About Section Image
Replace the Unsplash URL in `client/src/components/about-section.tsx`:

```tsx
<img
  src="https://your-image-url.com/your-photo.jpg"  // Replace this
  alt="Your professional photo"
  className="rounded-2xl shadow-2xl w-full h-auto..."
/>
```

### Project Images
Update image URLs in the PROJECTS array in `client/src/lib/constants.ts`.

### Using Local Images
1. Create a `public/images` folder
2. Add your images there
3. Reference them like: `"/images/your-photo.jpg"`

## 7. Typography Changes

### Font Families
File: `client/src/index.css`

Current fonts:
```css
body {
  font-family: 'Inter', sans-serif;  /* Main font */
}
```

To change fonts:
1. Add new Google Fonts link to `client/index.html`
2. Update the CSS font-family

### Font Weights
```tsx
// Light text
<p className="font-light">

// Normal text  
<p className="font-normal">

// Medium text
<p className="font-medium">

// Semibold text
<p className="font-semibold">

// Bold text
<p className="font-bold">

// Extra bold text
<p className="font-black">
```

## 8. Animation Customization

### Changing Animation Delays
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}  // Change delay here
>
```

### Custom Animations
File: `client/src/index.css`

```css
@keyframes yourAnimation {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}

.your-animation {
  animation: yourAnimation 1s ease-out;
}
```

## 9. Database Schema Changes

If you need to modify the contact form or add new data:

### Update Schema
File: `shared/schema.ts`

```typescript
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),        // Add new field
  projectType: text("project_type"),
  budget: text("budget"),
  message: text("message").notNull(),
});
```

### Push Changes
Run in terminal:
```bash
npm run db:push
```

## 10. Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Push database changes
npm run db:push

# Install new dependencies
npm install package-name
```

## Common Customizations

### Change Default Theme
File: `client/src/App.tsx`
```tsx
<ThemeProvider defaultTheme="light">  // Change to "light" or keep "dark"
```

### Modify Glass Effect
File: `client/src/index.css`
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);  // Adjust transparency
  backdrop-filter: blur(20px);           // Adjust blur amount
  border: 1px solid rgba(139, 92, 246, 0.3);  // Adjust border color
}
```

### Custom Gradient
```css
.your-gradient {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

This tutorial covers the main customization options. Start with changing the personal information and colors, then gradually explore more advanced customizations as needed.