# Lambda Orthodontics Website - Demo

A modern orthodontics practice demo built as a vanilla JavaScript single-page application with a lightweight Express server.

## Live Demo

- **URL**: [lambdaortho.vercel.app](https://lambdaortho.vercel.app)

## What This Project Is

Lambda Orthodontics is a front-end-heavy demo website designed to feel like a polished practice site without pretending to be a production healthcare platform.

It uses:

- a custom client-side router
- modular page and section components
- centralized content in `siteData.js`
- a thin Express server for static hosting and a few demo JSON endpoints

This repo is best understood as a frameworkless SPA architecture project, not a full patient platform.

## Features

- Responsive orthodontics website with multi-page SPA navigation
- Custom client-side routing with browser history support
- Dynamic treatment detail pages
- Dynamic careers detail pages
- Centralized content model in `siteData.js`
- API-backed demo forms for contact, referrals, and scheduling
- Client-simulated UI flows for job applications, newsletter signup, and patient portal interactions
- Clean, lightweight front end built without React or another UI framework

## Architecture

This project is a vanilla JavaScript SPA served by a lightweight Express backend.

### Backend

`app.js` is intentionally small. It:

- serves static assets from `public/`
- exposes a few demo JSON endpoints
- falls back to `index.html` for non-API routes so SPA deep links work on refresh

Available endpoints:

- `GET /api/sitedata`
- `POST /api/contact`
- `POST /api/referral`
- `POST /api/schedule`

These endpoints are demo-only. They return success responses without persistent storage.

### Frontend

The frontend is structured around a persistent layout shell plus route-level rendering:

- `public/main.js` boots the app
- `public/components/Layout.js` renders the persistent shell
- `public/Router.js` handles navigation, route matching, browser history, and scroll restoration
- `public/siteData.js` centralizes content used across the site

This keeps layout concerns, route logic, and page content separated instead of collapsing everything into one large script.

## Interactive Flows

Not every interaction in this project is implemented the same way. That distinction matters.

### API-backed demo flows

These submit JSON to Express demo endpoints:

1. **Contact Form** - General inquiries
2. **Referral Form** - Professional referrals
3. **Schedule Consultation Form** - Appointment requests

These flows are demo-only. They do not persist data.

### Client-simulated interactions

These are front-end demo interactions used to prototype UX patterns:

4. **Job Application Form** - Career detail pages
5. **Patient Portal UI** - Login, forgot password, create account
6. **Newsletter Form** - Homepage/footer subscription UI

These interactions are intentionally simulated and do not connect to a production backend.

## Site Structure

- **Home** (`/`)
- **About** (`/about`)
- **Treatments** (`/treatments`)
- **Treatment Detail** (`/treatments/:slug`)
- **Process** (`/process`)
- **Schedule** (`/schedule`)
- **Reviews** (`/reviews`)
- **Team** (`/team`)
- **Careers** (`/careers`)
- **Career Detail** (`/careers/:slug`)
- **Contact** (`/contact`)
- **Patient Portal** (`/patient-portal`)
- **Referrals** (`/referrals`)

## Project Structure

```text
myers-vanilla/
├── app.js                    # Express server
├── package.json             # Dependencies and scripts
├── public/
│   ├── index.html           # Main HTML entry
│   ├── main.js              # App bootstrap
│   ├── Router.js            # Client-side SPA router
│   ├── siteData.js          # Centralized content/data
│   ├── styles.css           # Global styles
│   ├── components/          # Page and section modules
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ContactForm.js
│   │   ├── ReferralForm.js
│   │   ├── *Page.js
│   │   └── *.css
│   └── images/              # Static image assets
└── .gitignore