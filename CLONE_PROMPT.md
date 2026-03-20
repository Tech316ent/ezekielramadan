# Comprehensive Prompt: Kingdom Governance Philosophy Website

Use this prompt to recreate the Ezekiel Ramadan Kingdom Governance Philosophy website on any AI app builder.

---

## MASTER PROMPT

Create a professional, dark-themed philosophy and leadership website for **Ezekiel Ramadan** called **"Kingdom Governance Philosophy"** - a platform articulating governance principles through first principles for founders, leaders, and institutional stewards.

---

## 1. DESIGN SYSTEM & AESTHETICS

### Color Palette (CRITICAL - use exact values):
- **Background**: Deep navy blue `hsl(220, 40%, 12%)` / `#151c2c`
- **Card Background**: Slightly lighter navy `hsl(220, 35%, 16%)` / `#1e2738`
- **Primary/Accent**: Gold/Amber `#EDB62C` (exact brand color)
- **Text**: White/off-white `hsl(0, 0%, 98%)`
- **Muted Text**: `hsl(220, 10%, 65%)` - grayish blue
- **Borders**: `hsl(220, 30%, 25%)` - subtle blue-tinted borders

### Typography:
- Clean, professional sans-serif fonts (Inter, system fonts)
- Headings: Bold, tight tracking
- Body: Regular weight, relaxed line-height for readability
- No emojis anywhere on the site

### Visual Style:
- Minimal, structural, architectural feel
- Subtle borders and cards with rounded corners (0.25rem radius)
- Gold accent color for CTAs, links, numbered badges
- Subtle hover effects with primary color highlights
- Professional, academic tone - NOT motivational/flashy
- Dark mode only (no light mode toggle needed)

---

## 2. SITE STRUCTURE & PAGES

### Header (Fixed, blur backdrop):
- Logo: "ER" monogram in gold-bordered square + "Ezekiel Ramadan" / "First Principles Leadership"
- Navigation: The Philosophy | The Seven Laws | Essays | Teaching | About
- Right side: Login link + Subscribe button (gold background)
- Mobile: Hamburger menu

### Footer:
- Three columns: The Seven Laws (all 7 links) | Platform | About
- Social icons: LinkedIn, Twitter/X, YouTube
- Copyright + Privacy/Terms links

### Pages to Create:

**1. Homepage (`/`)**
- Hero: Badge pill with dot saying "Kingdom Governance Philosophy" (gold color #EDB62C)
- Main heading: "Leadership Rebuilt from First Principles"
- Subheading: "A philosophy of Kingdom governance articulated through first principles for founders, leaders, and institutional stewards."
- Two CTAs: "Explore the Seven Laws" (gold) + "Read the Manifesto" (outline)
- Section: "The Crisis of Modern Leadership" - 4 cards showing modern failures:
  - Charisma Replacing Structure
  - Emotion Replacing Law
  - Expansion Without Order
  - Influence Without Accountability
- Section: "The Seven Laws of Kingdom Governance" - Grid of 7 law cards + "Explore All Laws" card
- Section: Core thesis quote block
- Section: Three entry point cards (Philosophy, Essays, Teaching)
- Section: Newsletter subscription CTA

**2. Philosophy Page (`/philosophy`)**
- Long-form manifesto content
- Sections: The Central Proposition, Governance as Structural Order, Law as Objective Reality, Delegated Authority, Stewardship as Responsibility, Institutions as Order-Bearing Structures, Why Kingdom?, Practical Implications
- Quote blocks with left gold border
- CTA to Seven Laws

**3. Seven Laws Page (`/laws`)**
- Overview of all seven laws with expandable detail cards
- Each law shows: Number badge, Name, Principle, Description, Governance Implication
- Section showing how laws integrate with each other
- CTA to Philosophy

**4. Individual Law Pages (`/laws/identity`, `/laws/authority`, etc.)**
Create individual pages for each of the Seven Laws:
1. **Identity**: "Who you are determines what you can govern."
2. **Authority**: "Legitimate power flows from proper position."
3. **Stewardship**: "You manage what you do not own."
4. **Alignment**: "Order requires harmony between levels."
5. **Vision**: "Direction precedes construction."
6. **Incentives**: "Behavior follows reward structures."
7. **Accountability**: "Authority without consequence corrupts."

**5. About Page (`/about`)**
- Profile photo (circular, gold border)
- Bio for Ezekiel Ramadan as "Governance Philosopher"
- Sections: Why Governance Matters, Why Kingdom, Intellectual Evolution, What This Platform Exists to Build
- Social links: LinkedIn, Twitter/X, YouTube

**6. Essays Page (`/essays`)**
- Blog/article listing page
- Filter/search capability
- Article cards with title, excerpt, date

**7. Teaching Page (`/teaching`)**
- Courses and educational offerings
- Coming soon placeholder or actual course listings

**8. Subscribe Page (`/subscribe`)**
- Email newsletter signup form
- Value proposition for subscribing

**9. Contact Page (`/contact`)**
- Contact form (Name, Email, Subject, Message)
- Professional inquiry information

**10. Additional Pages:**
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/framework` - Leadership Framework overview
- `/blog` - Blog section

---

## 3. ADMIN DASHBOARD (Optional but recommended)

Create a protected admin section at `/admin`:
- Login page with email/password authentication
- Dashboard overview
- Blog post management (CRUD)
- Newsletter subscriber management
- Contact form submissions
- Content management for pages
- Analytics overview

---

## 4. KEY CONTENT & COPY

### Core Philosophy (Use throughout):
- "Leadership is governance. Governance operates by law. The Kingdom of God reveals the structure of enduring order."
- "All sustainable authority operates according to fixed laws. These laws are not invented by leaders but discovered within the structure of reality itself."
- "Governance is not management. Management concerns itself with efficiency. Governance addresses the architecture of authority itself."

### The Seven Laws Content:

**Law 1 - Identity:**
- Principle: "Who you are determines what you can govern."
- Core idea: Identity precedes authority. Positional clarity, not self-expression.

**Law 2 - Authority:**
- Principle: "Legitimate power flows from proper position."
- Core idea: Authority is not self-granted but derives from recognized position.

**Law 3 - Stewardship:**
- Principle: "You manage what you do not own."
- Core idea: All authority is delegated. Leaders steward, not own.

**Law 4 - Alignment:**
- Principle: "Order requires harmony between levels."
- Core idea: Strategy, operations, and execution must align.

**Law 5 - Vision:**
- Principle: "Direction precedes construction."
- Core idea: Vision is architectural specification, not motivation.

**Law 6 - Incentives:**
- Principle: "Behavior follows reward structures."
- Core idea: People do what they're rewarded for. Incentives trump values statements.

**Law 7 - Accountability:**
- Principle: "Authority without consequence corrupts."
- Core idea: Authority and responsibility must be calibrated together.

---

## 5. TECHNICAL REQUIREMENTS

### Tech Stack:
- Framework: Next.js 15+ with App Router (or React/Vite alternative)
- Styling: Tailwind CSS
- UI Components: shadcn/ui (customized to match dark theme)
- Icons: Lucide React
- Database: Supabase (for auth, subscribers, contact forms)
- Deployment: Netlify or Vercel

### Features:
- Fully responsive (mobile-first)
- SEO optimized with meta tags, Open Graph, sitemap.xml, robots.txt
- Google Analytics integration (tag: G-X6VE47PZ5M)
- Newsletter subscription (email capture)
- Contact form with validation
- Fast page loads, optimized images
- Accessible (WCAG compliant)

### API Routes:
- `/api/newsletter` - Handle newsletter subscriptions
- `/api/contact` - Handle contact form submissions

---

## 6. SOCIAL LINKS

- LinkedIn: https://www.linkedin.com/in/eramadan/
- Twitter/X: https://x.com/ezekielramadan
- YouTube: https://youtube.com/@EzekielRamadan

---

## 7. IMPORTANT DESIGN NOTES

1. **NO emojis** anywhere on the site
2. **Dark theme only** - deep navy background
3. **Gold accent (#EDB62C)** for all primary actions, badges, and highlights
4. **Professional, philosophical tone** - not motivational or flashy
5. **Structural, architectural aesthetic** - clean borders, cards, systematic layout
6. **Typography**: Readable, clean, professional
7. **Spacing**: Generous padding, clear visual hierarchy
8. **Cards**: Subtle borders, slight background variation, hover states

---

## 8. HOMEPAGE BADGE (Exact Implementation)

The hero badge should be a pill-shaped element:
```
- Rounded full pill shape
- Gold dot indicator (small circle) on the left
- Text: "Kingdom Governance Philosophy"
- Gold text color: #EDB62C
- Subtle gold border (30% opacity)
- Slight gold background tint (5% opacity)
```

---

## 9. SAMPLE META DESCRIPTIONS

**Homepage:**
"Kingdom Governance Philosophy - Leadership rebuilt from first principles. A philosophy of governance for founders, leaders, and institutional stewards. Explore the Seven Laws."

**Philosophy Page:**
"Governance as structural order. Law as objective reality. Delegated authority and stewardship as responsibility. A philosophical framework for institutional leadership."

**Seven Laws Page:**
"Seven governing principles for institutional leadership: Identity, Authority, Stewardship, Alignment, Vision, Incentives, and Accountability. Structural law for enduring governance."

---

## 10. QUICK START CHECKLIST

- [ ] Set up Next.js project with Tailwind CSS
- [ ] Configure dark theme with exact color values
- [ ] Install shadcn/ui and customize components
- [ ] Create Header and Footer components
- [ ] Build Homepage with all sections
- [ ] Create Philosophy page with manifesto content
- [ ] Build Seven Laws overview and individual pages
- [ ] Create About page with profile section
- [ ] Add Essays, Teaching, Subscribe pages
- [ ] Implement contact form
- [ ] Set up newsletter subscription
- [ ] Add SEO meta tags to all pages
- [ ] Configure sitemap and robots.txt
- [ ] Add Google Analytics
- [ ] Test responsive design
- [ ] Deploy to Netlify/Vercel

---

**END OF PROMPT**

Copy everything above this line to recreate the Kingdom Governance Philosophy website.
