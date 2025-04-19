const express = require("express");
const {getAllRooms,getSingleRoomById,deleteRoom} = require('../controllers/routes-controller');

const router = express.Router();

router.get("/get", getAllRooms);

router.get("/get/:id", getSingleRoomById);

router.delete("/delete/:id", deleteRoom);


module.exports = router;