const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const galleryRoutes = require('./galleryRoutes');
const openaiRoutes = require('./openaiRoutes')

router.use('/users', userRoutes);
// router.use('/gallery', galleryRoutes);
router.use('/generateimage', openaiRoutes)

module.exports = router; 