import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Succesfully!");
    } catch (error) {
        console.log("Error connecting to the database", error);
        process.exit(1) // exit with failure
    }
}