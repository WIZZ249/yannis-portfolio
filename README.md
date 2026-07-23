# Ahmed Sulieman — Professional Portfolio

A modern, animated portfolio website built with **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Showcasing cloud engineering expertise, full-stack development skills, and humanitarian technology projects.

## 🎨 Design Philosophy

**Modern Tech Minimalism** — A refined, professional aesthetic featuring:
- **Dark navy background** (#0a1428) with cyan (#00d9ff) and teal (#0ef5a8) accents
- **Smooth scroll-triggered animations** with staggered reveals
- **Glassmorphism cards** with subtle depth and hover effects
- **Strategic typography**: Syne (display) + DM Sans (body) + DM Mono (code)

## 🚀 Features

✅ **Hero Section** — Bold headline with gradient text, stats, and animated chevron  
✅ **About Section** — Professional bio with AWS and certification cards  
✅ **Skills Section** — 6 skill categories with color-coded tags  
✅ **Experience Section** — Timeline visualization of 3+ years of work  
✅ **Projects Section** — Featured AI project + 2 additional projects  
✅ **Debug Log** — Terminal-style troubleshooting showcase  
✅ **Contact Section** — Direct contact links + contact form  
✅ **Responsive Design** — Mobile-first, works on all devices  
✅ **Smooth Animations** — Framer Motion for fluid interactions  

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne, DM Sans, DM Mono (Google Fonts)
- **Build**: Vite + esbuild
- **Deployment**: GitHub Pages / Manus WebDev

## 📁 Project Structure

```
client/
  src/
    pages/
      Home.tsx          ← Main portfolio page with all sections
      NotFound.tsx      ← 404 page
    components/
      ui/               ← shadcn/ui components
    contexts/
      ThemeContext.tsx  ← Dark theme provider
    index.css           ← Global styles & color variables
    App.tsx             ← Router & layout
  public/
    index.html          ← HTML entry point with Google Fonts
```

## 🎯 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | #0a1428 | Primary background |
| Deep Blue | #0f1a2e | Card backgrounds |
| Cyan | #00d9ff | Primary accent, CTAs |
| Teal | #0ef5a8 | Secondary accent, badges |
| Orange | #ff6b35 | Tertiary accent |
| Light Gray | #e8f0fe | Primary text |
| Muted Gray | #6b8cad | Secondary text |

## ⚡ Animation Principles

- **Entrance**: 600ms scroll-triggered reveals with staggered timing
- **Hover**: 200–250ms transitions for smooth feedback
- **Stagger**: 80–100ms between sequential items
- **Easing**: Default Framer Motion easing (smooth ease-out)
- **Accessibility**: Respects `prefers-reduced-motion` preference

## 🚀 Getting Started

### Development

```bash
cd client
npm install
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
npm run preview
```

### Deploy

Push to GitHub and enable GitHub Pages on the `gh-pages` branch, or use Manus WebDev's built-in publishing.

## 📝 Content Sections

### Hero
- Name + tagline with gradient
- Professional summary
- 3 CTA buttons (View Projects, Get in Touch, GitHub)
- 4 key stats

### About
- Professional bio (3+ years experience)
- 5 certifications with icons and dates
- Education background

### Skills
- 6 skill categories with icons
- Color-coded tags (cyan, teal, orange)
- Hover lift effect

### Experience
- Timeline with 3 positions
- Company, role, period, location
- Bullet points for achievements

### Projects
- Featured project (DamageSense AI)
- 2 additional projects
- Tech stack tags
- GitHub links

### Debug Log
- Terminal-style component
- 6 troubleshooting entries
- Status indicators (FIXED, RESOLVED)

### Contact
- Direct contact links (Email, Phone, GitHub)
- Contact form
- Social links in footer

## 🎨 Customization

### Colors
Edit `/client/src/index.css` CSS variables:
```css
:root {
  --primary: #00d9ff;
  --accent: #0ef5a8;
  --background: #0a1428;
  --foreground: #e8f0fe;
  /* ... */
}
```

### Typography
Fonts are loaded from Google Fonts in `/client/index.html`:
- **Syne**: Display font (800 weight for impact)
- **DM Sans**: Body font (300–500 weights)
- **DM Mono**: Code/labels (400–500 weights)

### Animations
Adjust timing in `/client/src/pages/Home.tsx`:
```tsx
transition={{ duration: 0.6 }} // Increase for slower animations
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px – 1024px (2-column grids)
- **Desktop**: > 1024px (full layout)

## ♿ Accessibility

- High contrast ratios (WCAG AA+)
- Semantic HTML structure
- Focus rings always visible
- Keyboard navigation support
- Respects `prefers-reduced-motion`

## 📄 License

© 2026 Ahmed Sulieman. All rights reserved.

## 🔗 Links

- **GitHub**: https://github.com/WIZZ249
- **Email**: ahmednoooors@gmail.com
- **Phone**: +256 777 790289

---

Built with React, Tailwind CSS, and Framer Motion. Designed for impact. 🚀
