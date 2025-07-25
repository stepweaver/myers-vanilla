import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { siteData } from './public/siteData.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set proper MIME types for JavaScript modules and prevent caching during development
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript');
      // Prevent aggressive caching of JS modules during development
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    if (path.endsWith('.css')) {
      // Prevent CSS caching during development
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// API route for site data
app.get('/api/sitedata', (req, res) => {
  res.json(siteData);
});

// Demo form routes (no email functionality)
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({
    success: true,
    message: 'Demo: Thank you for your message! This is a demo site - no email will be sent.'
  });
});

app.post('/api/referral', (req, res) => {
  console.log('Referral form submission:', req.body);
  res.json({
    success: true,
    message: 'Demo: Referral submitted successfully! This is a demo site - no email will be sent.'
  });
});

app.post('/api/schedule', (req, res) => {
  console.log('Schedule form submission:', req.body);
  res.json({
    success: true,
    message: 'Demo: Thank you for scheduling your appointment! This is a demo site - no email will be sent.'
  });
});

// Catch-all handler: send back index.html for any non-API routes
// This allows client-side routing to work
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});