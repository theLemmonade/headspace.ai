const router = require('express').Router();
const userRoutes = require('./userRoutes');
const galleryRoutes = require('./galleryRoutes');

router.use('/users', userRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router; 