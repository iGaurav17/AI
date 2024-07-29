const express = require('express');
const router = express.Router();
const users = require('../data/users'); // In-memory store or replace with database model

// Register new user
router.post('/', (req, res) => {
  const { username, password, email, firstName, lastName, phoneNumber } = req.body;

  // Check if user already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }

  // Add new user to the in-memory store
  users.push({ username, password, email, firstName, lastName, phoneNumber });

  // Send success response
  res.status(201).send('User registered successfully');
});

module.exports = router;
