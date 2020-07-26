const { config, uploader } = require("cloudinary").v2

let localConfig = {
    api_key : process.env.apiKey,
    cloud_name : process.env.cloudName,
    api_secret : process.env.apiSecret
};
console.log(localConfig);

const cloudinaryConfig = (req,res,next) =>{
    config(localConfig);
    next();
};

module.exports = {cloudinaryConfig, uploader};