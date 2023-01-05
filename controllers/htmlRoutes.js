const router = require("express").Router();
const { Image, User, UserGallery } = require("../models");
const withAuth = require("../utils/auth");

//GET request for homepage.
router.get("/", (req, res) => {
  res.render("homepage");
});

//GET request for gallery
router.get("/gallery", async (req, res) => {
    const imageData = await Image.findAll({
      // include: [{

      //   attributes: ['user_name', 'prompt', 'imageURL', 'date_created']
      // }],
        attributes: {exclude: ['isPrivate']},
        order: [[ 'date_created', 'ASC']],
    }).catch((err) => {
        res.json(err);
    });
    const images = imageData.map((images) => images.get({ plain: true }));
  res.render("gallery", { images });
  console.log(images);
});

//GET request for login
router.get("/login", (req, res) => {
  //If user is logged in, user will be redirected usergallery page.
  if (req.session.logged_in) {
    res.redirect("/usergallery");
    return;
  }
  res.render("login");
});
//GET request for registry
router.get("/register", (req, res) => {
  res.render("register");
});
//GET request for user gallery
router.get("/usergallery", withAuth, async (req, res) => {
  try {
    const userGalleryData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: UserGallery }],
    });
    const userGallery = userGalleryData.get({ plain: true });

    res.render("userGallery", {
      ...userGallery,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
