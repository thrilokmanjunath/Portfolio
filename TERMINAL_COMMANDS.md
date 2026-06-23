# THRILOK M PORTFOLIO — TERMINAL COMMANDS REFERENCE

## 🚀 LOCAL DEVELOPMENT

### Start Development Server
```bash
cd /Users/thrilokm/AI-Portfolio
npm install
npm run dev
```
**Access**: http://localhost:3000

### Build Production Bundle
```bash
npm run build
npm start
```

### Export Static Site (GitHub Pages)
```bash
npm run export
# Output in `out/` directory
```

---

## 🌐 VERCEL DEPLOYMENT

### Option 1: Automatic (GitHub Integration)
1. Push to GitHub
2. Visit https://vercel.com/new
3. Import repository
4. Vercel auto-deploys on every push

```bash
git add .
git commit -m 'Portfolio setup'
git push origin main
```

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts
```

### View Deployment Status
```bash
vercel --prod
```

### Add Environment Variables (Vercel Dashboard)
```
NEXT_PUBLIC_SITE_URL = https://your-domain.com
```

---

## 📄 GITHUB PAGES DEPLOYMENT

### Deploy Static Export
```bash
cd /Users/thrilokm/AI-Portfolio

# Build static site
npm run export

# Create deployment
git checkout -b gh-pages
git add out/.
git commit -m 'Deploy to GitHub Pages'
git push origin gh-pages --force
```

### Automate with Script
```bash
bash scripts/deploy-gh-pages.sh
```

---

## 🐳 DOCKER DEPLOYMENT

### Build Image
```bash
cd /Users/thrilokm/AI-Portfolio
docker build -t thrilok-portfolio:latest .
```

### Run Locally
```bash
docker run -p 3000:3000 thrilok-portfolio:latest
```

### Push to Docker Hub
```bash
docker tag thrilok-portfolio:latest YOUR_USERNAME/thrilok-portfolio
docker push YOUR_USERNAME/thrilok-portfolio
```

---

## ✏️ CUSTOMIZATION

### Update Your Information
```bash
# Edit these files with your details:
nano components/Hero.tsx              # Name, title, links
nano components/About.tsx             # Bio
nano components/Projects.tsx          # Projects
nano components/SkillsMatrix.tsx      # Skills
nano components/Experience.tsx        # Work experience
nano app/layout.tsx                   # Domain URLs
```

### Update Resume
```bash
# Replace with your resume PDF
cp ~/path-to-your-resume.pdf public/resume.pdf
```

### Update Favicon
```bash
# Replace with your custom favicon
cp ~/path-to-favicon.svg public/favicon.svg
```

### Environment Configuration
```bash
# Local development
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# Production (set in Vercel dashboard)
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📊 LIGHTHOUSE & SEO

### Run Local Audit
```bash
npm run build
npm start
# Use Chrome DevTools > Lighthouse tab
```

### Check SEO Tags
```bash
curl -s http://localhost:3000 | grep -E '<title>|<meta name="description"'
```

### Verify Sitemap
```bash
curl http://localhost:3000/sitemap.xml
```

### Check Robots.txt
```bash
curl http://localhost:3000/robots.txt
```

---

## 🔍 SEARCH ENGINE INDEXING

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property with your domain
3. Submit sitemap: https://your-domain.com/sitemap.xml

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap

---

## 📱 TESTING

### Responsive Design
```bash
# Chrome DevTools: Toggle Device Toolbar (Ctrl+Shift+M)
# Test on: Mobile, Tablet, Desktop
```

### Performance Testing
```bash
# Run production build
npm run build
npm start

# Test at: https://pagespeed.web.dev
# Enter: http://localhost:3000
```

### Accessibility Testing
```bash
# Use Chrome DevTools > Lighthouse > Accessibility tab
# Run audit and fix issues
```

---

## 🚀 PRODUCTION CHECKLIST

### Before Going Live
- [ ] All personal info updated
- [ ] Projects section populated
- [ ] Skills and experience added
- [ ] Custom domain configured
- [ ] Resume PDF added
- [ ] Favicon customized
- [ ] SEO metadata verified
- [ ] Lighthouse score 90+
- [ ] Mobile responsive tested
- [ ] Links tested (GitHub, LinkedIn, Email)
- [ ] Analytics configured

### After Deployment
```bash
# Verify site is live
curl -I https://your-domain.com

# Check indexing
curl https://your-domain.com/sitemap.xml
curl https://your-domain.com/robots.txt

# Monitor performance
# Visit Vercel Dashboard or Lighthouse periodically
```

---

## 🆘 TROUBLESHOOTING

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use
```bash
# Kill process on 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Regenerate types
npm run build
```

### Slow Build
```bash
# Check node version
node --version
# Update if needed
nvm install 18
nvm use 18
```

---

## 📧 CONTACT & SUPPORT

Update email in `components/Contact.tsx`:
```tsx
<a href="mailto:your-email@example.com">
```

---

## 📚 RESOURCES

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Last Updated**: 2026-06-15  
**Version**: 1.0.0  
**Status**: Production Ready ✅
