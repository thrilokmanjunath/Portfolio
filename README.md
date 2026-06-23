# THRILOK M — AI Research Engineer Portfolio

Premium personal branding portfolio showcasing AI research, machine learning expertise, and production systems.

**Live**: Update with your domain  
**Built with**: Next.js 16, TypeScript, TailwindCSS, Framer Motion

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone and navigate
cd AI-Portfolio

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

## 📦 Deployment

### **Vercel (Recommended)**

Vercel is the optimal platform for Next.js. One-click deployment:

1. Push code to GitHub
2. Connect repository at https://vercel.com
3. Vercel auto-detects Next.js, builds, and deploys
4. Add custom domain in Vercel dashboard

**Manual deploy**:
```bash
npm install -g vercel
vercel
```

### **GitHub Pages (Static Export)**

For static hosting on GitHub Pages:

```bash
# Build static export
npm run export

# Output in `out/` directory ready for GitHub Pages
```

Then push `out/` to `gh-pages` branch or configure Pages in repo settings.

### **Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with all sections
│   ├── globals.css        # Tailwind styles
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # SEO robots.txt
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── Hero.tsx           # Hero section (animated)
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Featured projects
│   ├── SkillsMatrix.tsx   # Skills grid
│   ├── Experience.tsx     # Work experience timeline
│   ├── Research.tsx       # Research interests
│   ├── Leadership.tsx     # Leadership roles
│   ├── Achievements.tsx   # Awards & achievements
│   ├── Blog.tsx           # Technical blog
│   ├── Contact.tsx        # Contact section
│   └── GithubPanel.tsx    # GitHub repos (live fetch)
├── public/
│   ├── favicon.svg        # Favicon
│   ├── robots.txt         # SEO robots
│   ├── sitemap.xml        # XML sitemap
│   └── resume.pdf         # Resume
├── utils/
│   └── seo.ts             # SEO utilities
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
├── next.config.js         # Next.js config
└── vercel.json            # Vercel deployment config
```

---

## 🎨 Customization

### Update Personal Info

Edit `components/Hero.tsx`:
```tsx
export default function Hero(){
  return (
    <h1>YOUR NAME</h1>
    <p>YOUR TITLE</p>
    // Update links...
  )
}
```

### Update Projects

Edit `components/Projects.tsx`:
```tsx
const featured = [
  { title: 'Project Name', desc: 'Description', tech: ['Tech1', 'Tech2'], repo: '#', demo: '#' },
  // Add more...
]
```

### Update Skills

Edit `components/SkillsMatrix.tsx`:
```tsx
const skills = [
  { category: 'Category', items: ['Skill1', 'Skill2'] },
]
```

### Update Domain

- `app/layout.tsx` — metadataBase URL
- `app/sitemap.ts` — sitemap base URL
- `app/robots.ts` — robots.txt sitemap URL
- `.env.local` — NEXT_PUBLIC_SITE_URL

---

## 🔍 SEO Features

✅ Metadata (title, description, keywords)  
✅ OpenGraph tags  
✅ Twitter Card support  
✅ Sitemap (auto-generated)  
✅ Robots.txt  
✅ JSON-LD structured data  
✅ PWA manifest  
✅ Canonical URLs  

---

## 📊 Performance Targets

- ⚡ Lighthouse Performance: **95+**
- ♿ Accessibility: **95+**
- 🛡️ Best Practices: **95+**
- 🔍 SEO: **100**

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / GitHub Pages / Docker

---

## 📝 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, update in Vercel dashboard.

---

## 🤝 Contributing

This is a personal portfolio. Modifications are welcome for your own use.

---

## 📄 License

MIT License. See [LICENSE](./LICENSE) for details.

---

**Made with ❤️ for AI research & production excellence.**
