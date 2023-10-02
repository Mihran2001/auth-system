const express = require('express');
const passport = require('./config/passport-config'); // Import passport configuration module
const session = require('express-session');
const isAuthenticated = require('./middlewares/isAuth');
const authRoutes = require('./routes/auth');

const app = express();

app.get('/profile', isAuthenticated(app), (req, res) => {
  res.render('profile', { user: req.user });
});

// Configure the session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Add your other routes and middleware here
app.use('/auth', authRoutes);
app.use(isAuthenticated);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
