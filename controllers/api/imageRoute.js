const router = require("express").Router();
const { Image } = require("../../models");
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newImage = await Image.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newImage);
    } catch (err) { 
        
    }

        
    }
})
module.exports = router;