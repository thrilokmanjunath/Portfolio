#!/bin/bash

# ============================================================================
# THRILLOK M PORTFOLIO — QUICK START GUIDE
# ============================================================================

echo "📋 THRILOK M Portfolio — Setup & Deployment Guide"
echo "=================================================="
echo ""

# ============================================================================
# LOCAL DEVELOPMENT
# ============================================================================

echo "🚀 LOCAL DEVELOPMENT"
echo "-------------------"
echo ""
echo "1. Navigate to project:"
echo "   cd AI-Portfolio"
echo ""
echo "2. Install dependencies (first time only):"
echo "   npm install"
echo ""
echo "3. Start development server:"
echo "   npm run dev"
echo ""
echo "   Access at: http://localhost:3000"
echo "   Auto-reload enabled for all changes"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo ""
echo "5. Run production build locally:"
echo "   npm start"
echo ""

# ============================================================================
# VERCEL DEPLOYMENT (RECOMMENDED)
# ============================================================================

echo ""
echo "🌐 DEPLOY TO VERCEL (Recommended)"
echo "-----------------------------------"
echo ""
echo "Option A: GitHub Integration (Easiest)"
echo "1. Push code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Initial portfolio setup'"
echo "   git push origin main"
echo ""
echo "2. Go to https://vercel.com/new"
echo "3. Import your GitHub repository"
echo "4. Vercel auto-detects Next.js (no config needed)"
echo "5. Click Deploy — done! 🎉"
echo ""
echo "   Environment Variables:"
echo "   NEXT_PUBLIC_SITE_URL = https://your-domain.com"
echo ""
echo "6. Configure custom domain in Vercel dashboard"
echo ""

echo "Option B: Vercel CLI"
echo "1. Install Vercel CLI:"
echo "   npm install -g vercel"
echo ""
echo "2. Deploy:"
echo "   vercel"
echo ""
echo "3. Follow prompts to connect GitHub and deploy"
echo ""

# ============================================================================
# GITHUB PAGES DEPLOYMENT (STATIC)
# ============================================================================

echo ""
echo "📄 DEPLOY TO GITHUB PAGES (Static)"
echo "-----------------------------------"
echo ""
echo "1. Create static export:"
echo "   npm run export"
echo ""
echo "2. Push to gh-pages branch:"
echo "   git checkout -b gh-pages"
echo "   git add out/."
echo "   git commit -m 'Deploy static site'"
echo "   git push origin gh-pages"
echo ""
echo "3. In GitHub Settings > Pages:"
echo "   - Source: Deploy from branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo "   - Save"
echo ""
echo "4. Site available at: https://username.github.io/AI-Portfolio"
echo ""

# ============================================================================
# DOCKER DEPLOYMENT
# ============================================================================

echo ""
echo "🐳 DOCKER DEPLOYMENT"
echo "--------------------"
echo ""
echo "1. Build Docker image:"
echo "   docker build -t thrilok-portfolio:latest ."
echo ""
echo "2. Run container locally:"
echo "   docker run -p 3000:3000 thrilok-portfolio:latest"
echo ""
echo "3. Push to Docker Hub:"
echo "   docker tag thrilok-portfolio:latest username/thrilok-portfolio:latest"
echo "   docker push username/thrilok-portfolio:latest"
echo ""
echo "4. Deploy to your server/cloud provider"
echo ""

# ============================================================================
# CUSTOMIZATION
# ============================================================================

echo ""
echo "🎨 CUSTOMIZATION CHECKLIST"
echo "--------------------------"
echo ""
echo "Update these files with your information:"
echo ""
echo "1. components/Hero.tsx"
echo "   - Name: THRILOK M → YOUR NAME"
echo "   - Title: AI Engineer → YOUR TITLE"
echo "   - Links: GitHub, LinkedIn URLs"
echo ""
echo "2. components/About.tsx"
echo "   - Update bio and expertise description"
echo ""
echo "3. components/Projects.tsx"
echo "   - Add your featured projects"
echo "   - Update titles, descriptions, tech stacks"
echo ""
echo "4. components/SkillsMatrix.tsx"
echo "   - Update skills by category"
echo ""
echo "5. components/Experience.tsx"
echo "   - Add your work experience"
echo ""
echo "6. app/layout.tsx"
echo "   - Update metadataBase URL to your domain"
echo "   - Update OpenGraph images if needed"
echo ""
echo "7. app/sitemap.ts"
echo "   - Update base URL to your domain"
echo ""
echo "8. .env.local"
echo "   - Set NEXT_PUBLIC_SITE_URL for local dev"
echo ""
echo "9. public/resume.pdf"
echo "   - Replace with your actual resume"
echo ""
echo "10. public/favicon.svg"
echo "    - Replace with your custom favicon"
echo ""

# ============================================================================
# ENVIRONMENT SETUP
# ============================================================================

echo ""
echo "🔧 ENVIRONMENT SETUP"
echo "--------------------"
echo ""
echo "Local Development (.env.local):"
echo "  NEXT_PUBLIC_SITE_URL=http://localhost:3000"
echo ""
echo "Production (Vercel Dashboard):"
echo "  NEXT_PUBLIC_SITE_URL=https://your-domain.com"
echo ""

# ============================================================================
# COMMON COMMANDS
# ============================================================================

echo ""
echo "⚡ COMMON COMMANDS"
echo "------------------"
echo ""
echo "npm run dev          → Start dev server (localhost:3000)"
echo "npm run build        → Build for production"
echo "npm start            → Run production build"
echo "npm run export       → Generate static export"
echo "npm run lint         → Run linter"
echo ""

# ============================================================================
# DEPLOYMENT VERIFICATION
# ============================================================================

echo ""
echo "✅ POST-DEPLOYMENT CHECKLIST"
echo "----------------------------"
echo ""
echo "□ Site loads at your domain"
echo "□ All sections render correctly"
echo "□ Links work (projects, GitHub, LinkedIn)"
echo "□ Mobile responsive design verified"
echo "□ SEO tags visible (meta, OG, Twitter)"
echo "□ Google Search Console connected"
echo "□ Analytics configured"
echo "□ Custom domain configured"
echo ""

echo "=================================================="
echo "🎉 Setup complete! Happy deploying!"
echo "=================================================="
