const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userGalleryRoutes = require('./userGalleryRoutes');

router.use('/users', userRoutes);
router.use('/usergallery', userGalleryRoutes);

module.exports = router; 