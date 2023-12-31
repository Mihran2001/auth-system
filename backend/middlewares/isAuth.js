// isAuth.js
function isAuthenticated(app) {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
}

module.exports = isAuthenticated;
