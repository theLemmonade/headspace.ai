const router = require('express').Router();
const userRoutes = require('./userRoutes');
const openaiRoutes = require('./openaiRoutes')
const userGalleryRoutes = require('./userGalleryRoutes');
const imageRoutes = require('./imageRoute')

router.use('/users', userRoutes);
router.use('/generateimage', openaiRoutes);
router.use('/usergallery', userGalleryRoutes);
router.use('/image', imageRoutes);

module.exports = router; 