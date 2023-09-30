import mongoose from "mongoose";

const connection = async () => {
    const MONGODB_URI = process.env.MONGODB_PASSWORD;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database Connect successfully");
    } catch (error) {
        console.log(error.message);
    }
}

export default connection;
