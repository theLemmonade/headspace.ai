
const router = require('express').Router();
//GET request for homepage.
router.get('/', (req, res) => {
    res.render('homepage')});
//GET request for gallery
router.get('/gallery', (req, res) => {
    res.render('gallery')});
//GET request for login
router.get('/login', (req, res) => {
    res.render('login')});
//GET request for registry
router.get('/register', (req, res) => {
    res.render('register')});
//GET request for user gallery
router.get('/usergallery', (req, res) => {
    res.render('user-gallery')});
module.exports = router
