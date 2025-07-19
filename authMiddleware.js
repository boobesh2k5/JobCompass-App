// authMiddleware.js
module.exports = function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized: Please login with GitHub' });
};
