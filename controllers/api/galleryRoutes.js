const router = require('express').Router();
const { Image } = require('../../models/Image');

router.get('/', async (req,res) => {
    const imageData = await Image.findAll({
        attributes: {exclude: ['isPrivate']},
        order: [[ 'date_created', 'ASC']],
    }).catch((err) => {
        res.json(err);
    });
    const images =imageData.map((images) => images.get({ plain: true }));

    res.render('gallery', )
})

module.exports = router; 
