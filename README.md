# Plumber Demo Websites

This repository contains multiple demo websites for plumbing businesses, all based on the EcoFlame codebase. Each demo is a fully independent Next.js 15 application that can be deployed separately on Vercel.

## 📁 Repository Structure

```
/sites/
  ├── pd-heating/          # PD Heating & Plumbing demo
  └── ontime-cms/          # OnTime CMS Plumbing & Heating demo
```

## 🌿 Git Branches

Each demo site has its own branch:

- **`demo-pd-heating`** → Contains `/sites/pd-heating`
- **`demo-ontime-cms`** → Contains `/sites/ontime-cms`

## 🚀 Quick Start

### Preview a Demo Locally

1. **Checkout the branch:**
   ```bash
   git checkout demo-pd-heating
   # or
   git checkout demo-ontime-cms
   ```

2. **Navigate to the site folder:**
   ```bash
   cd sites/pd-heating
   # or
   cd sites/ontime-cms
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cp env-template.txt .env.local
   # Edit .env.local with your Supabase credentials
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📦 Building for Production

Each site can be built independently:

```bash
cd sites/pd-heating
npm run build
npm start
```

## ☁️ Deploying to Vercel

Each demo site is configured for **Vercel deployment using Root Directory**.

### Step 1: Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Select the repository

### Step 2: Configure Project Settings

For **PD Heating & Plumbing**:
- **Project Name:** `pd-heating-plumbing-demo` (or your preferred name)
- **Framework Preset:** Next.js
- **Root Directory:** `sites/pd-heating`
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

For **OnTime CMS**:
- **Project Name:** `ontime-cms-plumbing-demo` (or your preferred name)
- **Framework Preset:** Next.js
- **Root Directory:** `sites/ontime-cms`
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Step 3: Add Environment Variables

Add these environment variables in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TRADESMAN_EMAIL=where-to-send-leads@yourdomain.com
```

### Step 4: Deploy

1. Select the appropriate branch (`demo-pd-heating` or `demo-ontime-cms`)
2. Click "Deploy"
3. Wait for the build to complete

### Step 5: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## ➕ Adding a New Plumber Demo Site

### Step 1: Create a New Branch

```bash
git checkout -b demo-[business-name]
```

### Step 2: Copy EcoFlame Structure

```bash
# From the repo root
cp -r ecoflame sites/[business-name]
cd sites/[business-name]
```

### Step 3: Update Branding

1. **Update `package.json`:**
   ```json
   {
     "name": "[business-name]"
   }
   ```

2. **Create placeholder logo:**
   - Create `/public/logo.svg` with your business branding
   - Or use a PNG: `/public/logo.png`

3. **Update layout component:**
   - Rename `src/components/EcoFlameLayout.tsx` to `src/components/[BusinessName]Layout.tsx`
   - Update all imports and component names
   - Update colors, text, and branding

4. **Update homepage:**
   - Edit `src/app/page.tsx`
   - Update hero text, service descriptions, and CTAs
   - Update colors to match brand

5. **Update meta tags:**
   - Edit `src/app/layout.tsx`
   - Update title, description, OpenGraph tags
   - Update `metadataBase` URL

6. **Update all page components:**
   - Replace `EcoFlameLayout` imports with your new layout
   - Update business name throughout
   - Update contact details and links

### Step 4: Test Build

```bash
npm install
npm run build
```

### Step 5: Commit and Push

```bash
git add sites/[business-name]
git commit -m "Add [Business Name] demo site"
git push -u origin demo-[business-name]
```

### Step 6: Deploy to Vercel

Follow the deployment instructions above, using:
- **Branch:** `demo-[business-name]`
- **Root Directory:** `sites/[business-name]`

## 🔧 Technical Details

### Project Structure

Each demo site includes:

```
sites/[business-name]/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/              # Utilities and helpers
├── public/               # Static assets (logos, images)
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── env-template.txt      # Environment variables template
```

### Key Features

- **QuoteFlow Integration:** Instant quote calculator built-in
- **Admin Dashboard:** Lead management and tracking
- **WhatsApp Integration:** Direct messaging support
- **Contact Forms:** Lead capture and notification
- **SEO Optimized:** Meta tags, OpenGraph, structured data
- **Mobile Responsive:** Works on all devices
- **Fast Performance:** Optimized Next.js build

### Dependencies

- **Next.js 15.5.4** - React framework
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Supabase** - Database and authentication
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📝 Git Workflow

### Committing Changes

**For PD Heating & Plumbing:**
```bash
git checkout demo-pd-heating
git add sites/pd-heating
git commit -m "Update PD Heating branding"
git push
```

**For OnTime CMS:**
```bash
git checkout demo-ontime-cms
git add sites/ontime-cms
git commit -m "Update OnTime CMS content"
git push
```

### Creating a New Demo

```bash
# Create and checkout new branch
git checkout -b demo-new-business

# Make your changes
# ... edit files in sites/new-business ...

# Commit and push
git add sites/new-business
git commit -m "Add New Business demo site"
git push -u origin demo-new-business
```

## 🎨 Customization Guide

### Colors

Update colors in:
- `src/components/[Business]Layout.tsx` - Navigation and footer
- `src/app/page.tsx` - Hero sections, buttons, CTAs
- `src/app/globals.css` - Global styles (if needed)

### Content

Update text content in:
- `src/app/page.tsx` - Homepage hero and services
- `src/app/layout.tsx` - Meta tags and SEO
- `src/app/contact/page.tsx` - Contact information
- `src/app/reviews/page.tsx` - Reviews section

### Logo

Replace `/public/logo.svg` with your business logo:
- SVG format recommended for scalability
- Optimal size: 200x50px or similar aspect ratio
- Should work on both light and dark backgrounds

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check for missing imports:**
   ```bash
   npm run build
   ```
   Look for "Module not found" errors and update imports.

2. **Verify environment variables:**
   Ensure `.env.local` is properly configured.

3. **Clear cache:**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

### Vercel Deployment Issues

1. **Check Root Directory:** Ensure it's set to `sites/[business-name]`
2. **Verify Build Command:** Should be `npm run build`
3. **Check Environment Variables:** All required variables must be set
4. **Review Build Logs:** Check Vercel dashboard for detailed error messages

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This codebase is for demo purposes. Each business should customize it for their specific needs.

---

**Need Help?** Check the deployment checklist in each site's folder or review the Vercel deployment logs.

