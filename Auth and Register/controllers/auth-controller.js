// using npm "bcryptjs" to stored password in encrypted formate
const user = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('../config/cloudinary');


// register controller
const  registerUser = async(req, res) => {
    try {
        // jo user enter karega wo data fetch karna hai sabse pehele
        // extract user information from our request body
        const { fullName, userName, email, phoneNumber, dob, gender, bio, city, state, pincode, password } = req.body;

        // check if user is already exist in our database
        // if this username or email already exists
        const checkExistingUser = await user.findOne({$or : [{userName}, {email}]});
        if(checkExistingUser) {
            //400 -> bad request from client side
            return res.status(400).json({
                success : false,
                message : 'User is already exists, try with different username or email.'
            });
        }
        else {
            // hash user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);

              // Upload image to Cloudinary
            let profileImage = "";
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                profileImage = result.secure_url;
            }

            // create a new user and save in your database
            const newlyCreatedUser = new user({
                fullName,
                userName,
                email,
                phoneNumber,
                dob,
                profileImage,
                gender,
                bio,
                city,
                state,
                pincode,
                password: hashedPassword,
                role : role || 'user'
            });

            // can also use create method , in which no need to save 
            await newlyCreatedUser.save();

            if(newlyCreatedUser) {
                res.status(201).json({
                    success : true,
                    message : 'User registered successfully'
                });
            }
            else {
                res.status(400).json({
                    success : false,
                    message : 'Unable to register user'
                });
            }
        }

    }catch(error) {
        console.log("Error : ", error);

        // 500 -> internal server error
        res.status(500).json({
            success : false,
            message : 'Some error ocuured , try again'
        });
    }
};



// login controller
const loginUser = async(req, res) => {
    try {
        const{userName, password} = req.body;

        // find if the current user is exists in database or not
        const existingUser = await user.findOne({userName});

        if(!existingUser) {
            return res.status(400).json({
                success : false,
                message : 'User does not exists'
            });
        }
        // if the password is correct or not
        const isPasswordMatch = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordMatch) {
            return res.status(400).json({
                success : false,
                message : 'Invalid username or password'
            });
        }

        const secretKey="your-secret-key";
        
        // create user token
        // the token will expire in 15 min
        const accessToken = jwt.sign({
            user_id : existingUser._id,
            userName : existingUser.userName,
            email : existingUser.email,
            role : existingUser.role
        }, secretKey,{
        });

        res.status(200).json({
            success : true,
            message : 'Logged in successful',
            accessToken 
        });


    }catch(error) {
        console.log("Error : ", error);
        res.status(500).json({
            success : false,
            message : 'Some error ocuured , try again'
        });
    }
};

module.exports = {
    loginUser,
    registerUser
};