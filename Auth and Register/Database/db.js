const mongoose = require("mongoose");

const connectToDB = async()=> {
    try {
        await mongoose.connect(
            'mongodb+srv://Aditya:Aditya-db@cluster0.zskly.mongodb.net/'
        );
        console.log("MongoDb connection is successfull");
    }catch(error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }
};

module.exports = connectToDB;