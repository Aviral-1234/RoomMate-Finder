const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    userName: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase : true
    },
    phoneNumber: { 
        type: String, 
        required: true 
    },
    dob: { 
        type: String, 
        required: true 
    },
    profileImage: { 
        type: String 
    },
    gender: { 
        type: String, 
        required: true,
        enum : ['Male', 'Female'],
    },
    bio: { 
        type: String 
    },
    city: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    },
    pincode: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    },
    rooms: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Room" 
        }
    ]
     
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
