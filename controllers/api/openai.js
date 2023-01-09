const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const generateImage = async (req, res) => {
    // deconstruct img
    const { prompt } = req.body
    
    try {
        const response = await openai.createImage({
            // text for generated img
            prompt,
            // number of images generated
            n: 1,
            // size of image created
            size: '1024x1024'
        });

        const imageURL = response.data.data[0].url

        res.status(200).json({
            success: true,
            data: imageURL
        })

        // res.render("image", { data: imageURL });

    } catch (error) {
        if(error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        }

        res.status(400).json({
            success: false,
            error: 'The image could not be generated. Please make sure you did not use any profanity or graphic content.'
        });
    }
}

module.exports = { generateImage };