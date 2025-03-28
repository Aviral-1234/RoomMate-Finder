const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

// need tp protect this route from access by unauthoried user
// we can achieve this using "middlewares" as handlers
router.get('/welcome', authMiddleware, (req, res) => {
    const { userName, user_id, role } = req.userInfo; 

    res.json({
        message: 'Welcome to the home page',
        user: {
            _id: user_id,
            username: userName,
            role
        }
    });
});
    
module.exports = router;