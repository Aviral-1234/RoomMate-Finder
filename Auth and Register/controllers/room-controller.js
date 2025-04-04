const Room = require('../models/lsit-room');
const cloudinary = require('../config/cloudinary');
const User = require('../models/user');

const createRoom = async(req, res) => {
    try {

        console.log("✅ User ID:", req.user.id);

        if(!req.user) {
            return res.status(401).json({
                success : false,
                message : "Uanthorized. Please log in"
            });
        }

        const{propertyAddress, monthlyRent, securityDeposit, availableFrom, landmark, title, description, preferredGender, amenities} = req.body;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "At least one image is required" });
        }

        let imageArray = [];
        for(let file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            imageArray.push({
                url : result.secure_url,
                publicId : result.public_id 
            });
        }
        const newRoom = new Room({
            propertyAddress,
            monthlyRent,
            securityDeposit,
            availableFrom,
            landmark,
            title,
            description,
            preferredGender,
            amenities: amenities ? amenities.split(",") : [],
            images : imageArray,
            owner : req.user.id
        });

        await newRoom.save();
        res.status(201).json({
            success : true,
            message : "Room listing created successfully",
            room : newRoom
        });

    }catch(error) {
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Error creating room"
        });
    }
};

module.exports = createRoom;