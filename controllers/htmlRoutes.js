const router = require("express").Router();
const { Image, User, UserGallery } = require("../models");
const withAuth = require("../utils/auth");

//GET request for homepage.
router.get("/", (req, res) => {
  res.render("homepage", {
    ...User,
    logged_in:req.session.logged_in
  });
});

//GET request for Feed
router.get("/gallery", async (req, res) => {
    const imageData = await Image.findAll(
      {
        attributes: {exclude: ['isPrivate']},
        order: [[ 'date_created', 'DESC']],
      }
    ).catch((err) => {
        res.json(err);
    });
    const images = imageData.map((images) => images.get({ plain: true }));
  res.render("gallery", { 
        images,
        logged_in: req.session.logged_in
  });
  
  console.log(images);
});

//GET request for login -----------------------------------------------------------------------------
router.get("/login", (req, res) => {
  //If user is logged in, user will be redirected homepage page.
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
//--------------------------------------------------------------------------------------------------- 

//GET request for registry --------------------------------------------------------------------------
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("register");
  console.log(req.session);
});
//--------------------------------------------------------------------------------------------------- 

//GET request for user gallery
router.get("/usergallery", withAuth, async (req, res) => {
  try {
    const userGalleryData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Image }],
      
    });
    const userGallery = userGalleryData.get({ plain: true });

    res.render("userGallery", {
      ...userGallery,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});


module.exports = router;
