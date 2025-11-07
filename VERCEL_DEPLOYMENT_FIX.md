# Vercel Deployment Configuration Fix

## Issue
Vercel is building the wrong project. The error shows it's trying to build `ontime-cms` when deploying `pd-heating`.

## Root Cause
The Root Directory setting in Vercel is incorrect or not set properly.

## Solution

### For PD Heating & Plumbing Project:

1. **Go to Vercel Dashboard**
   - Navigate to your PD Heating project settings

2. **Settings → General**
   - Find "Root Directory" setting

3. **Set Root Directory to:**
   ```
   sites/pd-heating
   ```
   **NOT:** `.` (root)  
   **NOT:** `sites/ontime-cms`  
   **NOT:** `pd-heating` (without sites/)

4. **Verify Build Settings:**
   - **Framework:** Next.js
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

5. **Save and Redeploy**
   - Click "Save"
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger auto-deploy

### Verification

After setting the Root Directory correctly, Vercel should:
1. Change directory to `sites/pd-heating`
2. Run `npm install` (finds `sites/pd-heating/package.json`)
3. Detect Next.js from package.json
4. Run `npm run build`
5. Find `src/app/` directory
6. Build successfully

### Expected Build Log:
```
Detected Next.js version: 15.5.4
Running "npm run build"
> pd-heating-plumbing-demo@0.1.0 build
> next build
✓ Compiled successfully
```

### Current Error (Wrong Root Directory):
```
> ontime-cms@0.1.0 build  ← Wrong package name!
> next build
[Error: > Couldn't find any `pages` or `app` directory]
```

This error shows it's reading `ontime-cms/package.json` instead of `pd-heating/package.json`, which means Root Directory is set incorrectly.

## Quick Fix Checklist

- [ ] Root Directory = `sites/pd-heating`
- [ ] Build Command = `npm run build`
- [ ] Output Directory = `.next`
- [ ] Framework = Next.js
- [ ] Clear build cache
- [ ] Redeploy

