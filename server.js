const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { checkPlagiarism } = require('./utils/checkPlagiarism');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Plagiarism check route
app.post('/check', async (req, res) => {
  const { text } = req.body;
  const datasetPath = path.join(__dirname, 'dataset');

  try {
    const files = fs.readdirSync(datasetPath);
    const docs = files.map(file =>
      fs.readFileSync(path.join(datasetPath, file), 'utf-8')
    );

    const result = checkPlagiarism(text, docs);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: 'Dataset loading failed.' });
  }
});

// Static page routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Dynamic student pages
app.get('/student/:page', (req, res) => {
  const file = req.params.page;
  const filePath = path.join(__dirname, `public/student/${file}.html`);
  res.sendFile(filePath);
});

// Dynamic faculty pages
app.get('/faculty/:page', (req, res) => {
  const file = req.params.page;
  const filePath = path.join(__dirname, `public/faculty/${file}.html`);
  res.sendFile(filePath);
});

// Dynamic admin pages
app.get('/admin/:page', (req, res) => {
  const file = req.params.page;
  const filePath = path.join(__dirname, `public/admin/${file}.html`);
  res.sendFile(filePath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

