const path = require('path');
const router = require('express').Router();
//GET request for homepage.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//GET request for gallery
router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/gallery.html'));
});
//GET request for login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});
//GET request for registry
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});
//GET request for user gallery
router.get('/usergallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/userGallery.html'));
});
module.exports = router
