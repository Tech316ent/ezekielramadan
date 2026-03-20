# ⚡ Quick Reference Card

## Essential Information at a Glance

---

## 🔗 Important Links

| Service | URL |
|---------|-----|
| **Live Website** | `https://[your-site-name].netlify.app` |
| **GitHub Repository** | https://github.com/Tech316ent/ezekielramadan-website |
| **Netlify Dashboard** | https://app.netlify.com/ |
| **Supabase Dashboard** | https://supabase.com/dashboard/project/mbdqzjcshlxfvdjwifaj |
| **Admin Login** | `https://[your-site-name].netlify.app/admin/login` |

---

## 🔐 Admin Credentials

```
Email: diarygold@yahoo.com
Password: [Your admin password]
```

**Admin Access Points:**
- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/blog` - Blog posts manager
- `/admin/content` - Content blocks editor
- `/admin/menus` - Navigation menu manager
- `/admin/pages` - Pages editor
- `/admin/settings` - Site settings

---

## 🌍 Environment Variables

**For Netlify (Required):**
```
NEXT_PUBLIC_SUPABASE_URL=https://mbdqzjcshlxfvdjwifaj.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZHF6amNzaGx4ZnZkandpZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTYzOTgsImV4cCI6MjA4MTk3MjM5OH0.SORgWG3SbUzpPWUkt18CLJQRzBpGJvtbuH13oy8rpF8
```

---

## 🚀 Deploy to Netlify (Step-by-Step)

### Method: GitHub Integration (Easiest)

1. **Go to Netlify**: https://app.netlify.com/
2. **Click**: "Add new site" → "Import an existing project"
3. **Select**: GitHub → `Tech316ent/ezekielramadan-website`
4. **Configure**:
   - Build command: `bun run build`
   - Publish directory: `.next`
5. **Add Environment Variables** (see above)
6. **Click**: "Deploy"
7. **Wait**: 2-3 minutes
8. **Done**: Site live at `https://[site-name].netlify.app`

---

## 💻 Common Commands

### Local Development
```bash
cd ezekielramadan
bun install           # Install dependencies
bun run dev          # Start dev server (http://localhost:3000)
bun run build        # Build for production
bun run lint         # Check for errors
```

### Git Commands
```bash
git status                              # Check changes
git add .                               # Stage all changes
git commit -m "Your message here"       # Commit changes
git push origin main                    # Push to GitHub (triggers deploy)
git pull origin main                    # Pull latest changes
git log --oneline -10                   # View recent commits
```

### Netlify CLI (Optional)
```bash
bunx netlify login                      # Login to Netlify
bunx netlify deploy --prod              # Deploy to production
bunx netlify open                       # Open dashboard
bunx netlify logs                       # View logs
```

---

## 📁 Project Structure

```
ezekielramadan/
├── src/
│   ├── app/                   # Next.js pages
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── framework/        # Framework pages
│   │   └── admin/            # Admin dashboard
│   ├── components/           # React components
│   └── lib/                  # Utilities
├── public/                   # Static files (images, etc.)
├── .same/                    # Documentation
├── .env.local               # Environment variables (local only)
├── netlify.toml             # Netlify config
└── package.json             # Dependencies
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI components |
| **Supabase** | Backend & database |
| **Netlify** | Hosting |
| **Bun** | Package manager |

---

## 📝 Content Management

### Update Website Content

1. **Login**: Visit `https://[your-site].netlify.app/admin/login`
2. **Navigate**: Choose what to edit (Blog, Pages, Settings)
3. **Edit**: Make your changes
4. **Save**: Changes apply immediately

### Update Code

1. **Edit**: Make changes to code files
2. **Test**: Run `bun run dev` locally
3. **Commit**: `git add . && git commit -m "Description"`
4. **Deploy**: `git push origin main`
5. **Wait**: Netlify auto-deploys in 2-3 minutes

---

## 🆘 Emergency Contacts & Support

### Website Issues
- Check Netlify dashboard for deploy logs
- View build errors in Netlify
- Test locally with `bun run dev`

### Database Issues
- Check Supabase dashboard: https://supabase.com/dashboard
- Verify environment variables in Netlify
- Check RLS policies in Supabase

### Get Help
- **Netlify Support**: https://answers.netlify.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs

---

## ✅ Pre-Launch Checklist

Before making site public:

- [ ] Deployed to Netlify successfully
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (https)
- [ ] Admin login working
- [ ] All pages loading correctly
- [ ] Forms functional (newsletter)
- [ ] Images loading
- [ ] Mobile responsive
- [ ] SEO meta tags verified
- [ ] Google Analytics added (optional)
- [ ] Social media links working

---

## 🔄 Update Workflow

### Regular Updates
```
1. Make changes → 2. Test locally → 3. Commit → 4. Push → 5. Auto-deploy
```

### Rollback if Needed
1. Go to Netlify dashboard
2. Click "Deploys" tab
3. Find previous working deploy
4. Click "..." → "Publish deploy"

---

## 📊 Monitoring

### Check Site Health
- Netlify Analytics (enable in dashboard)
- Google Search Console
- Uptime monitoring (UptimeRobot, Pingdom)

### View Logs
- Netlify: Site → Deploys → [Latest] → Deploy log
- Supabase: Dashboard → Logs
- Browser: Developer Console (F12)

---

**Last Updated**: December 2024
**Version**: 13
**Status**: ✅ Production Ready

For detailed information, see `DEPLOYMENT_GUIDE.md`
