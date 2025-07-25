# Lambda Orthodontics Website - Demo

A modern, responsive demo website for Lambda Orthodontics built with vanilla JavaScript and Express.js.

## Features

- 📱 Responsive design with modern UI/UX
- 📝 Demo contact, referral, and appointment scheduling forms
- 🎨 Clean, professional design matching the orthodontic practice brand
- ⚡ Fast loading with vanilla JavaScript (no heavy frameworks)
- 📝 Form validation and user feedback
- 🚀 Demo functionality - forms log submissions and show success messages

## Demo Forms

The website includes three fully functional demo forms:

1. **Contact Form** - General inquiries with demo success messages
2. **Referral Form** - Professional referral submissions for dentists
3. **Schedule Consultation Form** - Appointment requests with demo success messages

Each form:

- ✅ Validates user input
- ✅ Shows loading states
- ✅ Displays success messages
- ✅ Logs submissions to console
- ✅ Resets after successful submission

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
├── app.js                 # Express server entry point
├── package.json           # Dependencies and scripts
├── public/               # Static files
│   ├── index.html        # Main HTML file
│   ├── main.js           # JavaScript entry point
│   ├── siteData.js       # Site content data
│   ├── styles.css        # Global styles
│   ├── components/       # React-like components
│   └── images/           # Image assets
└── .gitignore           # Git ignore rules
```

## Demo Site Notice

This is a **demo website** created to showcase web development skills. The forms are for demonstration purposes only and will not send actual emails. A demo notice is displayed in the footer.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 with custom properties
- **Icons**: Lucide Icons
- **Deployment**: Railway

## Development

- **Start development server**: `npm run dev`
- **Start production server**: `npm start`
- **Port**: 3000 (configurable via PORT environment variable)

## License

This is a demo project created for portfolio purposes.
