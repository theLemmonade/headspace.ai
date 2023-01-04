const router = require('express').Router();
const userRoutes = require('./userRoutes');
const openaiRoutes = require('./openaiRoutes')
const userGalleryRoutes = require('./userGalleryRoutes');
router.use('/users', userRoutes);
router.use('/generateimage', openaiRoutes);
router.use('/usergallery', userGalleryRoutes);
module.exports = router; 