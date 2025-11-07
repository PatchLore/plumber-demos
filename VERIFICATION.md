# Vercel Deployment Verification

## Repository Structure
```
plumber-demos/
├── sites/
│   ├── pd-heating/
│   │   ├── package.json ✅ (contains "next": "15.5.4")
│   │   ├── next.config.ts ✅
│   │   └── src/
│   └── ontime-cms/
│       ├── package.json ✅ (contains "next": "15.5.4")
│       ├── next.config.ts ✅
│       └── src/
└── .gitignore ✅
```

## Vercel Configuration

### Project 1: PD Heating & Plumbing
- **Root Directory**: `sites/pd-heating` (CRITICAL - must include "sites/")
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Framework Preset**: Next.js

### Project 2: OnTime CMS
- **Root Directory**: `sites/ontime-cms` (CRITICAL - must include "sites/")
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Framework Preset**: Next.js

## Verification Steps

1. ✅ Both package.json files exist in their respective directories
2. ✅ Both have "next": "15.5.4" in dependencies
3. ✅ Both have next.config.ts files
4. ✅ Build scripts don't use --turbopack
5. ❌ **ROOT DIRECTORY MUST BE SET CORRECTLY IN VERCEL**

## Common Issues

### Issue: "No Next.js version detected"
**Solution**: 
- Check that Root Directory is exactly `sites/pd-heating` (NOT just `pd-heating`)
- The Root Directory should point to the folder containing package.json

### Issue: "Warning: Failed to fetch one or more git submodules"
**Solution**: This is a warning, not an error. It can be ignored if you're not using submodules.

## Latest Commits
- 2a4ad91: Add missing next.config.ts for ontime-cms
- 2f46c72: Fix Vercel deployment issues
- 9255b30: Remove PostHog dependency and fix build errors

