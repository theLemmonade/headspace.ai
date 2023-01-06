const router = require('express').Router();
const { Image } = require('../../models/Image');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
        const userImages = await { Image }.findAll({where: {user_name: req.body.user_name}}).catch((err) => {
            res.json(err);
        });
        const users = userImages.map((image) => image.get({ plain: true}));
        res.render('userGallery', { users });
    
});

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newImage = await UserGallery.create({
//             ...req.body,
//             user_id: req.session.user_id,

//         });
//         res.status(200).json(newImage);
//     }catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const userGalleryData = await UserGallery.destroy({
//             where: { 
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if(!userGalleryData) {
//             res.status(404).json({ message: 'No gallery found with this id'});
//         }
//     res.status(404).json(userGalleryData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router; 