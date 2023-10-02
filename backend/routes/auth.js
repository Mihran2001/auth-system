const express = require('express');
const passport = require('passport');
const router = express.Router();

// Registration route
router.get('/register', (req, res) => {
  res.render('register'); // Create a registration form view
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    res.render('register', { error: 'Registration failed. Please try again.' });
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login'); // Create a login form view
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
