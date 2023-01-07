const router = require("express").Router();
const { Image } = require("../../models/Image");

router.get('/', (req, res) => {
    
})
// router.get('/', async (req,res) => {
//     const imageData = await Image.findAll({
       
//         order: [[ 'date_created', 'ASC']],
//     }).catch((err) => {
//         res.json(err);
//     });
//     const images =imageData.map((images) => images.get({ plain: true }));

//     res.render('usergallery', )
// })
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newImage = await Image.create({
//             ...req.body,
//             user_id: req.session.user_id
//         });

//         res.status(200).json(newImage);
//     } catch (err) { 
        
//     }

        
//     }
// )
module.exports = router;