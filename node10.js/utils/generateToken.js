// utils/generateToken.js
const jwt = require('jsonwebtoken');

module.exports = function generateToken(id) {
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};