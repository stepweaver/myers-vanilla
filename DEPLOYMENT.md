# Deployment Guide - Spark Orthodontics Website

## Prerequisites

1. **Node.js** (v16 or higher)
2. **Vercel CLI** installed globally: `npm install -g vercel`
3. **Git** repository with your code

## Environment Variables Setup

This is a demo site with no email functionality. No environment variables are required for deployment.

For local development, you can optionally create a `.env` file:

```bash
# Server Configuration (optional)
PORT=3000
```

## Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Access the site:** http://localhost:3000

## Vercel Deployment

### Option 1: Using Vercel CLI (Recommended)

1. **Login to Vercel:**

   ```bash
   vercel login
   ```

2. **Deploy from project directory:**

   ```bash
   vercel
   ```

3. **Follow the prompts:**

   - Link to existing project or create new one
   - Confirm deployment settings
   - Vercel will automatically detect Node.js configuration

4. **No environment variables needed:**

   - This is a demo site with no email functionality
   - Forms will log submissions to console and return demo messages

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. **Push code to GitHub/GitLab/Bitbucket**
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your repository**
5. **No environment variables needed for demo**
6. **Deploy**

## Project Structure

```
myers-vanilla/
├── app.js                 # Express server entry point
├── package.json           # Dependencies and scripts
├── vercel.json           # Vercel deployment configuration
├── public/               # Static files
│   ├── index.html        # Main HTML file
│   ├── main.js           # JavaScript entry point
│   ├── siteData.js       # Site content data
│   ├── styles.css        # Global styles
│   ├── components/       # React-like components
│   └── images/           # Image assets
└── env.example           # Environment variables template
```

## Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Client-side Routing** - Single Page Application
- ✅ **Contact Forms** - Demo functionality (logs to console)
- ✅ **Static File Serving** - CSS, JS, images
- ✅ **API Endpoints** - Contact, referral, scheduling
- ✅ **SEO Optimized** - Meta tags and descriptions

## Troubleshooting

### Common Issues

1. **Forms not working:**

   - Check browser console for form submission logs
   - Verify API endpoints are responding
   - Forms are demo-only and won't send actual emails

2. **JavaScript modules not loading:**

   - Check browser console for MIME type errors
   - Verify all .js files are being served correctly

3. **Styling issues:**
   - Check if CSS files are loading
   - Verify file paths in HTML

### Support

For deployment issues, check:

- Vercel deployment logs in dashboard
- Browser developer console
- Network tab for failed requests
