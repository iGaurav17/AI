// routes/login.js
const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).send('Invalid credentials');
  }
  // Send user details
  const { firstName, lastName, email, phoneNumber } = user;
  res.json({
    message: 'Login successful',
    user: {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
    }
  });
});

module.exports = router;
