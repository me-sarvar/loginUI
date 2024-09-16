const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the 'views' directory for EJS files
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Sign Up page route
app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

// Sign In page route
app.get('/signin', (req, res) => {
  res.render('signin', { title: 'Sign In' });
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
