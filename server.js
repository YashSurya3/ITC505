const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();
const port = 8080;

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files from 'public' folder
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Root route for '/'
server.get('/', (req, res) => {
  res.sendFile(path.join(publicServedFilesPath, 'index.html'));
});

// Random number route
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// POST route for Mad Lib form
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { noun, verb, adjective, adverb, place } = req.body;

  if (!noun || !verb || !adjective || !adverb || !place) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }

  const madLib = `
    Once upon a time in ${place}, there was a ${adjective} ${noun}.<br>
    It loved to ${verb} ${adverb} every single day.<br>
    Everyone in ${place} admired this quirky creature.<br>
  `;

  res.send(`
    <h1>Your Mad Lib</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Create Another</a>
  `);
});

// Start server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
