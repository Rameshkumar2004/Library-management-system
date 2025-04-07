// Middleware/authMiddleware.js
const checkAuth = (req, res, next) => {
    // if (!req.headers['authorization']) {
    //   return res.status(403).send("Forbidden: No authorization header");
    // }
    next();
  };
  module.exports = checkAuth;
  