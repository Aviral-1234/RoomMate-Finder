// protect unautherized users to access the content of website
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            success : false,
            message : 'Access denied. No token provided.Please login to continue'
        });
    }
    console.log('auth middleware is called');

    try {
        const secretKey = "your-secret-key";
        const decodedTokenInfo = jwt.verify(token, secretKey);
        req.user =  User.findById(decodedTokenInfo).select("-password");
        console.log(decodedTokenInfo);
        req.userInfo = decodedTokenInfo;
        next();

    }catch(error) {
        return res.status(500).json({
            success : false,
            message : 'Access denied. No token provided.Please login to continue'
        });
    }
}

module.exports = authMiddleware;