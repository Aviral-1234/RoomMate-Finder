const room = require('../models/lsit-room');

const getAllRooms = async(req,res) => {
    try {
        const allRooms = await room.find({});
        if(allRooms) {
            res.status(200).json({
                success : true,
                message : 'List of rooms fetched successfully',
                data : allRooms
            });
        }
        else {
            res.status(404).json({
                success : false,
                message : 'Room not found'
            })
        }
        
    }catch(error) {
        console.log("Error : ", error);
        res.status(500).json({
            success : false,
            message : 'Something went wrong'
        });
    }
}

const getSingleRoomById = async(req, res) => {
    try {
        const getcurrentRoomId = req.params.id;
        const roomDetailsById = await room.findById(getcurrentRoomId);
        if(!roomDetailsById) {
            return res.json({
                success : false,
                message : 'Room with the current ID is not found' 
            });
        }
        else {
            res.status(200).json({
                success : true,
                data : roomDetailsById
            });
        }

    }catch(error) {
        console.log("Error : ", error);
        res.status(500).json({
            success : false,
            message : 'Something went wrong'
        });
    }
}

const deleteRoom = async(req, res) => {
    try {
        const getCurrentRoomId = req.params.id;
        const deletedRoom = await book.findByIdAndDelete(getCurrentRoomId);

        if(!deletedRoom) {
            res.status(404).json({
                success : false,
                message : "Room is not found with this Id"
            });
        }
        else {
            res.status(200).json({
                success : true,
                message : deletedRoom
            });
        }
    } catch(error) {
        console.log("Error : ", error);
        res.status(500).json({
            success : false,
            message : "Something went wrong"
        });
    }
};


module.exports = {
    getAllRooms,
    getSingleRoomById,
    deleteRoom
}