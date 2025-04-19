const express = require('express');
const {registerUser,loginUser, getProfile} = require('../controllers/auth-controller')
const upload = require('../middleware/upload');
const authMiddleware = require('../middleware/auth-middleware')


const router = express.Router();


// all routes are related to authentication and authorization
router.post('/register', upload.single('profileImage') ,registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware ,getProfile);



module.exports = router;