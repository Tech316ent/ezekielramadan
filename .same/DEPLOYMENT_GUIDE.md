# 🚀 Deployment Guide - Ezekiel Ramadan Website

## Complete Guide for Deploying & Managing Your Website

---

## 📋 Table of Contents

1. [Quick Start - Netlify Deployment](#quick-start-netlify-deployment)
2. [Environment Variables](#environment-variables)
3. [GitHub Integration](#github-integration)
4. [Domain Setup](#domain-setup)
5. [Ongoing Maintenance](#ongoing-maintenance)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Quick Start - Netlify Deployment

### Method 1: Deploy via GitHub (Recommended)

This is the easiest and most reliable method with automatic continuous deployment.

#### Step 1: Access Netlify
- Go to https://app.netlify.com/
- Log in with your account

#### Step 2: Import from GitHub
1. Click **"Add new site"** → **"Import an existing project"**
2. Select **GitHub** as the provider
3. Authorize Netlify to access your GitHub account (if first time)
4. Search for and select: **`Tech316ent/ezekielramadan-website`**

#### Step 3: Configure Build Settings
```
Build command: bun run build
Publish directory: .next
```

**Site Name Suggestions:**
- `ezekielramadan`
- `ezekiel-ramadan-leadership`
- `first-principles-leadership`

#### Step 4: Add Environment Variables
Click **"Add environment variables"** and add these two variables:

**Variable 1:**
```
Key: NEXT_PUBLIC_SUPABASE_URL
Value: https://mbdqzjcshlxfvdjwifaj.supabase.co
```

**Variable 2:**
```
Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZHF6amNzaGx4ZnZkandpZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTYzOTgsImV4cCI6MjA4MTk3MjM5OH0.SORgWG3SbUzpPWUkt18CLJQRzBpGJvtbuH13oy8rpF8
```

#### Step 5: Deploy
1. Click **"Deploy ezekielramadan-website"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://[site-name].netlify.app`

---

### Method 2: Deploy via Netlify CLI

If you prefer command-line deployment:

#### Prerequisites
```bash
# Install Netlify CLI globally
npm install -g netlify-cli
# OR use with bunx (no install needed)
bunx netlify
```

#### Deployment Steps
```bash
# Navigate to project directory
cd ezekielramadan

# Login to Netlify (opens browser)
netlify login

# Initialize site (first time only)
netlify init

# Set environment variables
netlify env:set NEXT_PUBLIC_SUPABASE_URL "https://mbdqzjcshlxfvdjwifaj.supabase.co"
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZHF6amNzaGx4ZnZkandpZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTYzOTgsImV4cCI6MjA4MTk3MjM5OH0.SORgWG3SbUzpPWUkt18CLJQRzBpGJvtbuH13oy8rpF8"

# Deploy to production
netlify deploy --prod
```

---

## 🔐 Environment Variables

### Required Variables

Your website requires these environment variables to function properly:

| Variable | Purpose | Value |
|----------|---------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://mbdqzjcshlxfvdjwifaj.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | See above |

### Where to Add Environment Variables

#### Netlify Dashboard
1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add both variables from the table above

#### Local Development
Environment variables are stored in `.env.local` (already configured):
```env
NEXT_PUBLIC_SUPABASE_URL=https://mbdqzjcshlxfvdjwifaj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZHF6amNzaGx4ZnZkandpZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTYzOTgsImV4cCI6MjA4MTk3MjM5OH0.SORgWG3SbUzpPWUkt18CLJQRzBpGJvtbuH13oy8rpF8
```

**⚠️ Security Note:** Never commit `.env.local` to GitHub. It's already in `.gitignore`.

---

## 🔄 GitHub Integration

### Repository Details
- **URL**: https://github.com/Tech316ent/ezekielramadan-website
- **Visibility**: Private
- **Branch**: main

### Automatic Deployments

When you deploy via Netlify's GitHub integration, every push to the `main` branch automatically triggers a new deployment.

#### Workflow:
```
1. Make changes to code
2. Commit changes: git commit -m "Update message"
3. Push to GitHub: git push origin main
4. Netlify automatically builds and deploys
5. Live site updates in 2-3 minutes
```

### Manual Git Commands

#### Update Website Content
```bash
cd ezekielramadan

# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Updated homepage content"

# Push to GitHub (triggers deployment)
git push origin main
```

#### View Commit History
```bash
git log --oneline -10
```

#### Check Remote URL
```bash
git remote -v
```

---

## 🌐 Domain Setup

### Custom Domain Configuration

#### Step 1: Access Domain Settings
1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**

#### Step 2: Add Your Domain
- Enter your domain (e.g., `ezekielramadan.com`)
- Click **"Verify"**

#### Step 3: Configure DNS
Netlify will provide DNS records. Add these to your domain registrar:

**Option A: Netlify DNS (Recommended)**
- Point your nameservers to Netlify's DNS servers
- Automatic SSL certificate
- Easy subdomain management

**Option B: External DNS**
Add these records:
```
A Record:
Name: @
Value: 75.2.60.5

CNAME Record (www):
Name: www
Value: [your-site-name].netlify.app
```

#### Step 4: Enable HTTPS
- Netlify automatically provisions SSL certificate
- Usually takes 30-60 minutes
- Force HTTPS redirect is enabled by default

---

## 🔧 Ongoing Maintenance

### Regular Updates

#### Update Content via CMS
1. Visit `/admin/login` on your live site
2. Login with admin credentials:
   - Email: `diarygold@yahoo.com`
   - Password: [Your admin password]
3. Update blog posts, settings, pages as needed

#### Update Code
```bash
# Pull latest changes (if working on multiple machines)
git pull origin main

# Make your changes
# ... edit files ...

# Test locally
bun run dev

# Build and test production
bun run build

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main
```

### Monitoring Deployments

#### Netlify Dashboard
- **Deploys** tab shows all deployment history
- Click any deploy to see build logs
- Rollback to previous deploy if needed

#### Build Status Badge
Add to README.md:
```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

### Performance Monitoring

#### Built-in Analytics
1. In Netlify dashboard, enable **Analytics**
2. View traffic, performance, and user behavior

#### Recommended Tools
- **Google Analytics**: Add tracking ID in CMS settings
- **Google Search Console**: Monitor SEO performance
- **Uptime Robot**: Monitor site availability

---

## 🆘 Troubleshooting

### Common Issues & Solutions

#### Build Failed
**Problem**: Deployment fails during build

**Solutions**:
1. Check build logs in Netlify dashboard
2. Verify environment variables are set correctly
3. Ensure `package.json` dependencies are correct
4. Run `bun run build` locally to test

#### Environment Variables Not Working
**Problem**: Supabase connection fails

**Solutions**:
1. Verify variables are named exactly:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Check for extra spaces in values
3. Redeploy site after adding variables

#### Admin Login Not Working
**Problem**: Can't access `/admin/login`

**Solutions**:
1. Clear browser cache and cookies
2. Check Supabase is active and accessible
3. Verify admin user exists in Supabase Auth
4. Check browser console for errors

#### Images Not Loading
**Problem**: Images return 404

**Solutions**:
1. Verify images are in `public/` directory
2. Check image paths (should start with `/`)
3. Ensure images are committed to GitHub
4. Rebuild and redeploy

#### Slow Build Times
**Problem**: Deploys take too long

**Solutions**:
1. Check build logs for bottlenecks
2. Consider using Netlify's build cache
3. Optimize dependencies in `package.json`

### Getting Help

#### Check Logs
```bash
# Netlify CLI
netlify logs

# View in Dashboard
Site → Deploys → [Latest Deploy] → Deploy log
```

#### Support Resources
- **Netlify Support**: https://answers.netlify.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs

---

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] Build successful locally (`bun run build`)
- [ ] All tests pass (`bun run lint`)
- [ ] Environment variables documented
- [ ] `.gitignore` excludes sensitive files
- [ ] README.md updated

### During Deployment
- [ ] Site name chosen
- [ ] Environment variables added
- [ ] Build settings configured
- [ ] GitHub integration enabled
- [ ] Deploy triggered

### Post-Deployment
- [ ] Site loads successfully
- [ ] Admin login works
- [ ] Supabase connection verified
- [ ] All pages accessible
- [ ] Forms functional
- [ ] Images loading
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

---

## 🎯 Next Steps After Deployment

1. **Test All Features**
   - Navigate through all pages
   - Test newsletter signup
   - Verify admin CMS functionality
   - Check mobile responsiveness

2. **Set Up Monitoring**
   - Enable Netlify Analytics
   - Add Google Analytics
   - Configure uptime monitoring

3. **SEO Configuration**
   - Submit sitemap to Google Search Console
   - Verify meta tags and descriptions
   - Test social media sharing

4. **Performance Optimization**
   - Run Lighthouse audit
   - Optimize images if needed
   - Enable caching headers

5. **Backup Strategy**
   - Regular GitHub commits
   - Export Supabase database periodically
   - Document any custom configurations

---

## 📝 Quick Reference

### Important URLs
- **GitHub Repo**: https://github.com/Tech316ent/ezekielramadan-website
- **Netlify Dashboard**: https://app.netlify.com/
- **Supabase Dashboard**: https://supabase.com/dashboard/project/mbdqzjcshlxfvdjwifaj
- **Live Site**: `https://[your-site-name].netlify.app`

### Admin Access
- **Login URL**: `https://[your-site-name].netlify.app/admin/login`
- **Email**: `diarygold@yahoo.com`
- **Password**: [Your admin password]

### Build Commands
```bash
# Development
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Run linter
bun run lint
```

---

**Version**: 13
**Last Updated**: December 2024
**Status**: Production Ready ✅

For questions or support, refer to the documentation in `.same/` directory.
