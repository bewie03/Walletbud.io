const express = require('express');
const cors = require('cors');
const statsRoutes = require('./routes/stats');

const app = express();

// Enable CORS for your Vercel frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-vercel-domain.vercel.app',
  methods: ['GET'],
  credentials: true
}));

// Routes
app.use('/api', statsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
