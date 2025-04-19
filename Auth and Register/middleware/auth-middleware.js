// Fix for the authMiddleware
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        console.log(authHeader);
        
        const token = authHeader && authHeader.split(" ")[1];
        if(!token) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided. Please login to continue'
            });
        }
        
        console.log('auth middleware is called');
        const secretKey = "your-secret-key";
        const decodedTokenInfo = jwt.verify(token, secretKey);
        
        // Need to await the database query
        const user = await User.findById(decodedTokenInfo.user_id).select("-password");
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        
        req.user = user;
        req.userInfo = decodedTokenInfo;
        next();
    } catch(error) {
        console.log("Auth error:", error);
        return res.status(401).json({
            success: false,
            message: 'Invalid token. Please login to continue'
        });
    }
};

module.exports = authMiddleware;