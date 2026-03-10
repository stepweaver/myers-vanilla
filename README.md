# Lambda Orthodontics Website - Demo

A modern, responsive demo website for Lambda Orthodontics built with vanilla JavaScript and Express.js.

## Features

- 📱 Responsive design with modern UI/UX
- 📝 Non-functional demo forms (contact, referral, schedule, job applications, patient portal, newsletter)
- 🎨 Clean, professional design matching the orthodontic practice brand
- ⚡ Fast loading with vanilla JavaScript (no heavy frameworks)
- 📝 Form validation and user feedback
- 🚀 Demo functionality - forms log submissions and show success messages

## Demo Forms

The website includes six non-functional demo forms for UI/UX demonstration:

1. **Contact Form** - General inquiries (Contact page)
2. **Referral Form** - Professional patient referrals (Referrals page)
3. **Schedule Consultation Form** - Appointment requests (Schedule page)
4. **Job Application Form** - Per-position applications (Careers job detail pages)
5. **Patient Portal Forms** - Login, forgot password, and create account (Patient Portal page)
6. **Newsletter Form** - Email subscription (Homepage footer)

Each form validates input, shows loading states, displays success messages, and logs submissions to the console. No data is sent or stored.

## Site Structure

- **Home** (`/`)
- **About** (`/about`)
- **Treatments** (`/treatments`), with dynamic detail pages (`/treatments/:slug`)
- **Process** (`/process`)
- **Schedule** (`/schedule`)
- **Reviews** (`/reviews`)
- **Team** (`/team`)
- **Careers** (`/careers`), with dynamic job detail pages (`/careers/:slug`)
- **Contact** (`/contact`)
- **Patient Portal** (`/patient-portal`)
- **Referrals** (`/referrals`)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd myers-vanilla
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Visit the website**
   ```
   http://localhost:3000
   ```

## Deployment

### Railway (Recommended)

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Select your repository**
6. **Railway will auto-detect it's a Node.js app**
7. **Deploy!**

### Alternative Platforms

- **Render**: [render.com](https://render.com)
- **Heroku**: [heroku.com](https://heroku.com)
- **DigitalOcean App Platform**: [digitalocean.com](https://digitalocean.com)

## Project Structure

```
myers-vanilla/
├── app.js                    # Express server
├── package.json              # Dependencies and scripts
├── public/
│   ├── index.html            # Main HTML file
│   ├── main.js               # App entry, mounts Layout + Router
│   ├── Router.js             # Client-side SPA router
│   ├── siteData.js           # Content data
│   ├── styles.css            # Global styles
│   ├── components/           # Modular page/section components
│   │   ├── Layout.js
│   │   ├── Navbar.js, Footer.js
│   │   ├── ContactForm.js, ReferralForm.js
│   │   ├── *Page.js
│   │   └── *.css
│   └── images/               # Image assets
└── .gitignore
```

## Demo Site Notice

This is a **demo website** created to showcase web development skills. All forms—including contact, schedule, referral, job applications, patient portal login, and newsletter—are demo-only: no submissions are sent, stored, or processed. Forms are for UI/UX demonstration only. A demo notice is displayed in the footer.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 with custom properties
- **Icons**: Lucide Icons
- **Deployment**: Railway

### Architecture

- **Client-side router**: SPA-style routing via `Router.js` with `pushState` and `popstate` (hash-free)
- **Modular components**: Each page/section is a component with `create*` and `init*` functions
- **Component structure**: Layout, navbar, footer, and page-specific components in `public/components/`
- **Centralised data**: `siteData.js` holds contact details, treatment descriptions, process steps, job listings, and other content; components import what they need, so content updates do not require changes to component logic

## Development

- **Start development server**: `npm run dev`
- **Start production server**: `npm start`
- **Port**: 3000 (configurable via PORT environment variable)

## License

This is a demo project created for portfolio purposes. It illustrates front-end skills and could serve as a foundation for a fully functional web application.
