const multer = require('multer');
const path = require('path');


// set our multer storage
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null,"uploads/");

    },
    filename : function(req,file,cb) {
        // this create a unique file name
        // then this file upload in "uploads" folder
        cb(null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        )
    }
});

// file filter function
const checkFileFilter = (req,file,cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb(new Error('not an image. Please upload only images'));
    }    
}

// creating multer middleware
module.exports = multer({
    storage : storage,
    fileFilter : checkFileFilter,
    limits : {
        fileSize : 5*1024*1024  // 5MB file size limit
    }
});

