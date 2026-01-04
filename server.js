const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/ecommerce', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ecommerce.html'));
});

app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available test pages:');
  console.log(`  - http://localhost:${PORT}/ (Home)`);
  console.log(`  - http://localhost:${PORT}/blog`);
  console.log(`  - http://localhost:${PORT}/ecommerce`);
  console.log(`  - http://localhost:${PORT}/landing`);
  console.log(`  - http://localhost:${PORT}/dashboard`);
});
