const express = require('express');
const {registerUser,loginUser} = require('../controllers/auth-controller')
const upload = require('../middleware/upload');


const router = express.Router();


// all routes are related to authentication and authorization
router.post('/register', upload.single('profileImage') ,registerUser);
router.post('/login', loginUser);



module.exports = router;