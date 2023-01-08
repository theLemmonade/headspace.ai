const router = require('express').Router();
const { User, Image } = require('../../models/');
const withAuth = require('../../utils/auth');
const { generateImage } = require('./openai')


router.get("/", withAuth, async (req, res) => {
    const imageData = await Image.findAll({
        attributes: { 
        exclude: ["isPrivate"]},
        order: [['date_created', 'DESC']],
    }).catch((err) => {
        res.json(err);
    });
    const images = imageData.map((images) => images.get({ plain: true }));

    res.render("userGallery", {
        ...req.body,
        user_id: req.session.user_id,
    });
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newImage = await Image.create({
        ...req.body,
        user_id: req.session.user_id,
    });
        res.status(200).json(newImage);
    } catch (err) {
        res.status(400).json(err);
    }
});


// router.get('/userGallery', (req, res) => {
//         User.findAll({
//             attributes: {exclude: ['password']},
//             where: {
//                 id: req.params.id
//             },
//             include: [{
//                 model: User,
//                 // Include image from User.js
//                 attributes: ['id', 'user_name']
//             },
//             {
//                 model: Image,
//                 attributes: ['prompt', 'imageURL', 'user_id']
//             }    
//         ]
//         })
//             .then(dbUserData => {
//                 if(!dbUserData) {
//                     res.status(404).json({message: 'No user found with this id!'});
//                     return;
//                 }
//                 res.json(dbUserData);
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json(err);
//             });
//     });

module.exports = router; 