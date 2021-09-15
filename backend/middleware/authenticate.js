const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // get token from the header
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorozition denied' });
  }
  
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};