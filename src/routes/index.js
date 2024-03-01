const express = require('express');
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');

const router = express.Router();

// Use userRoutes for /users endpoints
router.use('/api', userRoutes);
router.use('/api', petRoutes);

module.exports = router;
