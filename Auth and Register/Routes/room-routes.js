const express = require('express');
const createRoom = require('../controllers/room-controller');
const upload = require('../middleware/upload');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.post("/add-room", authMiddleware ,upload.array("images", 5), createRoom);

module.exports = router;