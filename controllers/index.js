const router = require('express').Router();

const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
