import mongoose from "mongoose";

const ConnectToDb = async () => {
    try {
        await mongoose.connect();

    } catch(e){
        console.error("Mongodb connection failed", error);
        process.exit(1)
    }
};