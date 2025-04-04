const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    propertyAddress: { 
        type: String, 
        required: true 
    },
    monthlyRent: {
        type: Number, 
        required: true 
    },
    securityDeposit: { 
        type: Number, 
        required: true 
    },
    availableFrom: { 
        type: String, 
        required: true 
    },
    landmark: { 
        type: String 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    preferredGender: { 
        type: String, 
        enum: ["Male", "Female"], 
        required: true 
    },
    amenities: [{ type: String }], // array
    images: [ // Taking object array
        {
            url: { type: String, required: true },
            publicId: { type: String, required: true }
        }
    ], 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Room", RoomSchema);