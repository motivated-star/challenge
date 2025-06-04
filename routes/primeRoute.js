const express = require('express');
const router = express.Router();
const primeController = require('../controllers/primeController');

// Route to check if a number is prime
router.get('/check_prime', primeController.checkPrime);

module.exports = router;
