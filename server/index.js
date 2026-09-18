import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for demo messages
const contactMessages = [];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please fill in all required fields (name, email, message).' 
    });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'Portfolio Inquiry',
    message,
    receivedAt: new Date().toISOString()
  };

  contactMessages.push(newMessage);
  console.log(`[CONTACT FORM] Message received from ${name} (${email}):`, newMessage);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received successfully.'
  });
});

app.get('/api/messages', (req, res) => {
  res.json({ success: true, count: contactMessages.length, data: contactMessages });
});

// Serve static assets in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Portfolio API Service Running. Frontend build in progress.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running on port ${PORT}`);
});
