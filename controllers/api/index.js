const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userGalleryRoutes = require('./userGalleryRoutes');

router.use('/users', userRoutes);
router.use('/gallery', userGalleryRoutes);

module.exports = router; 