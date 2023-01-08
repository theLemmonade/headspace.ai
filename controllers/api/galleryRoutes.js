const router = require('express').Router();
const { Image } = require('../../models');


router.get('/', async (req,res) => {
    const imageData = await Image.findAll({
        attributes: {exclude: ['isPrivate']},
        order: [[ 'date_created', 'DESC']],
    }).catch((err) => {
        res.json(err);
    });
    const images =imageData.map((images) => images.get({ plain: true }));

    res.render("gallery", {
        ...req.body,
        user_id: req.session.user_id,
    });
});

module.exports = router; 